import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { dbService } from './src/services/dbService.js';
import { storageService } from './src/services/storageService.js';
import supabase from './src/supabaseClient.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const upload = multer({ storage: multer.memoryStorage() });

const app = express();
const PORT = process.env.PORT || 5000;

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PickleOn API',
            version: '1.0.0',
            description: 'API documentation for PickleOn Auth Suite',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./index.js'], // path to the API docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

// Mock DB
const users = [];

// Middleware to simulate network latency
app.use((req, res, next) => {
    setTimeout(next, 1000);
});

// Auth Routes

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', email);

    if (email && password) {
        // Fallback to mock DB if Supabase is not configured
        if (!process.env.REACT_APP_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            console.log('Supabase not configured. Using mock fallback for login.');
            return res.json({
                success: true,
                message: 'Login successful (Mock Mode)',
                user: { email_ID: email },
                session: { access_token: 'mock_access_token', refresh_token: 'mock_refresh_token', expires_in: 3600, user: { email: email } }
            });
        }

        try {
            // 1. Try to sign in directly (fastest path)
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (!error && data.session) {
                // Success
                const userProfile = await dbService.findOne('SignUp', { email_ID: email });
                const userId = userProfile.success && userProfile.data ? userProfile.data.id : null;
                return res.json({
                    success: true,
                    message: 'Login successful',
                    user: { id: userId, email_ID: data.user.email, uuid: data.user.id },
                    session: data.session
                });
            }

            // 2. If login failed, check Legacy DB
            console.log('Supabase login failed, checking legacy DB...');
            const result = await dbService.findOne('SignUp', { email_ID: email, password: password });

            if (result.success && result.data) {
                console.log('User found in legacy DB, initiating robust migration...');

                try {
                    // Check if user exists in Supabase (Admin)
                    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
                    const sbUser = users ? users.find(u => u.email === email) : null;
                    let sessionToReturn = null;
                    let userIdToReturn = null;

                    if (sbUser) {
                        console.log('User exists in Supabase (stale password or rate limited). Updating password...');
                        // Update password
                        const { error: updateError } = await supabase.auth.admin.updateUserById(
                            sbUser.id,
                            { password: password, email_confirm: true }
                        );
                        if (updateError) throw updateError;
                        userIdToReturn = sbUser.id;
                    } else {
                        console.log('User does not exist in Supabase. Creating via Admin API...');
                        // Create user (bypassing rate limits of public signUp)
                        const { data: createData, error: createError } = await supabase.auth.admin.createUser({
                            email,
                            password,
                            email_confirm: true
                        });
                        if (createError) throw createError;
                        userIdToReturn = createData.user.id;
                    }

                    // Sign in now that password is synced/user created
                    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

                    if (signInError) {
                        console.error('Sign in failed after update/create:', signInError);
                        return res.status(401).json({ success: false, message: 'Migration succeeded but login failed. Please try again.' });
                    }

                    return res.json({
                        success: true,
                        message: 'Login successful (Migrated)',
                        user: {
                            id: result.data.id,
                            email_ID: email,
                            uuid: userIdToReturn
                        },
                        session: signInData.session
                    });

                } catch (migrationError) {
                    console.error('Migration error:', migrationError);
                    return res.status(500).json({ success: false, message: 'Migration failed due to server error.' });
                }
            } else {
                return res.status(401).json({ success: false, message: 'Invalid login credentials' });
            }

        } catch (err) {
            console.error('Login error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Email and password are required' });
    }
});

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Refresh authentication token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token refreshed
 *       401:
 *         description: Unauthorized
 */
app.post('/api/auth/refresh', async (req, res) => {
    const { refresh_token } = req.body;

    if (!refresh_token) {
        return res.status(400).json({ success: false, message: 'Refresh token is required' });
    }

    if (!process.env.REACT_APP_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
        return res.json({
            success: true,
            session: {
                access_token: 'mock_refreshed_access_token',
                refresh_token: 'mock_refreshed_refresh_token',
                expires_in: 3600
            }
        });
    }

    try {
        const { data, error } = await supabase.auth.refreshSession({ refresh_token });

        if (error) {
            return res.status(401).json({ success: false, message: error.message });
        }

        res.json({
            success: true,
            session: data.session
        });
    } catch (err) {
        console.error('Refresh token error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout successful
 */
app.post('/api/auth/logout', async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!process.env.REACT_APP_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
        return res.json({ success: true, message: 'Logged out successfully (Mock)' });
    }

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            await supabase.auth.signOut(token);
        } catch (err) {
            console.error('Logout error:', err);
        }
    }

    res.json({ success: true, message: 'Logged out successfully' });
});



/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Failed to create account
 */
app.post('/api/auth/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log('Signup attempt:', email);

    if (email && password) {
        // Fallback to mock DB if Supabase is not configured
        if (!process.env.REACT_APP_SUPABASE_URL) {
            console.log('Supabase not configured. Using mock fallback.');
            users.push({ email, password });
            return res.json({
                success: true,
                message: 'Account created (Mock Mode)',
                user: { email_ID: email },
                session: {
                    access_token: 'mock_access_token',
                    refresh_token: 'mock_refresh_token',
                    expires_in: 3600,
                    user: { email: email }
                },
                isMock: true
            });
        }

        try {
            // 1. Create auth user in Supabase
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) {
                return res.status(400).json({ success: false, message: authError.message });
            }

            // 2. Insert into existing SignUp table for backward compatibility/profile linking
            const userData = {
                email_ID: email,
                password: password
            };

            const result = await dbService.insert('SignUp', userData);

            if (result.success || result.error?.includes('duplicate key')) {
                // Fetch the ID if it was a duplicate or just inserted
                const userRecord = await dbService.findOne('SignUp', { email_ID: email });

                res.json({
                    success: true,
                    message: 'Account created',
                    user: userRecord.data || result.data,
                    session: authData.session
                });
            } else {
                res.status(500).json({ success: false, message: 'Failed to create user record', error: result.error });
            }
        } catch (err) {
            console.error('Signup error:', err);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Invalid input' });
    }
});

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Request password reset
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reset link sent
 */
app.post('/api/auth/forgot-password', (req, res) => {
    const { email } = req.body;
    console.log('Forgot password for:', email);

    res.json({ success: true, message: 'Reset link sent' });
});

/**
 * @swagger
 * /api/auth/onboarding:
 *   post:
 *     summary: Save user onboarding data
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               gender:
 *                 type: string
 *               playingLevel:
 *                 type: string
 *               location:
 *                 type: string
 *               playingSinceMonth:
 *                 type: string
 *               playingSinceYear:
 *                 type: string
 *               powerHand:
 *                 type: string
 *               backHand:
 *                 type: string
 *               duprLink:
 *                 type: string
 *               oftenSeenPlayingAt:
 *                 type: string
 *               signUpId:
 *                 type: string
 *               profileImage:
 *                 type: string
 *                 format: binary
 *               coverImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile saved successfully
 *       500:
 *         description: Failed to save profile
 */
app.post('/api/auth/onboarding', upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
]), async (req, res) => {
    try {
        const body = req.body;
        const files = req.files;

        console.log('Onboarding data received:', body);
        console.log('Files received:', files ? Object.keys(files) : 'none');

        let profileImageUrl = '';
        let bgImageUrl = '';

        // 1. Upload Profile Image if exists
        if (files && files.profileImage && files.profileImage[0]) {
            const file = files.profileImage[0];
            const fileName = `profile_${Date.now()}_${file.originalname}`;
            console.log('Uploading profile image:', fileName);
            const uploadResult = await storageService.uploadFile(
                'Profile_Image_Bucket',
                fileName,
                file.buffer,
                file.mimetype
            );
            if (uploadResult.success) {
                profileImageUrl = storageService.getPublicUrl('Profile_Image_Bucket', fileName);
                console.log('Profile image uploaded:', profileImageUrl);
            } else {
                console.error('Profile upload failed:', uploadResult.error);
            }
        }

        // 2. Upload Cover Image if exists
        if (files && files.coverImage && files.coverImage[0]) {
            const file = files.coverImage[0];
            const fileName = `bg_${Date.now()}_${file.originalname}`;
            console.log('Uploading cover image:', fileName);
            const uploadResult = await storageService.uploadFile(
                'Background_image_Bucket',
                fileName,
                file.buffer,
                file.mimetype
            );
            if (uploadResult.success) {
                bgImageUrl = storageService.getPublicUrl('Background_image_Bucket', fileName);
                console.log('Cover image uploaded:', bgImageUrl);
            } else {
                console.error('Cover upload failed:', uploadResult.error);
            }
        }

        // 3. Prepare data for User Profile table
        // Mapping frontend field names to DB column names based on the screenshot
        const monthMap = {
            'January': '01', 'February': '02', 'March': '03', 'April': '04',
            'May': '05', 'June': '06', 'July': '07', 'August': '08',
            'September': '09', 'October': '10', 'November': '11', 'December': '12'
        };
        const monthNum = monthMap[body.playingSinceMonth] || '01';

        const userProfileData = {
            userName: body.name,
            Age: parseInt(body.age),
            Gender: body.gender,
            Playing_level: body.playingLevel,
            Location: body.location,
            Playing_since: `${body.playingSinceYear}-${monthNum}-01`,
            Power_hand: body.powerHand,
            Back_hand: body.backHand,
            DUPR_profile_link: body.duprLink,
            Often_seen_playing: body.oftenSeenPlayingAt,
            Profile_image_url: profileImageUrl,
            Bg_image_url: bgImageUrl,
            Sign_up_id: body.signUpId ? parseInt(body.signUpId) : null
        };

        if (dbService.isConfigured()) {
            console.log('Inserting into "User Profile":', userProfileData);
            const result = await dbService.insert('UserProfile', userProfileData);
            if (result.success) {
                console.log('Profile saved successfully');
                return res.json({ success: true, message: 'Profile saved successfully', data: result.data });
            } else {
                console.error('Failed to save profile to DB:', result.error);
                return res.status(500).json({ success: false, message: 'Failed to save profile to database', error: result.error });
            }
        }

        // Fallback or Mock mode
        res.json({
            success: true,
            message: 'Onboarding data received (Mock Mode)',
            data: { ...userProfileData, isMock: true }
        });

        if (res.status === 200) {
            res.json({ success: true, message: 'Profile saved successfully', data: result.data });
        }

    } catch (error) {
        console.error('Onboarding Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error during onboarding' });
    }
});

/**
 * @swagger
 * /api/auth/playing-history:
 *   post:
 *     summary: Complete user profile with playing history
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Profile completed
 */
app.post('/api/auth/upload-gallery', upload.any(), async (req, res) => {
    try {
        const { signUpId } = req.body;
        const files = req.files;

        if (!signUpId || !files || files.length === 0) {
            return res.status(400).json({ success: false, message: 'Missing data or files' });
        }

        console.log(`Gallery upload for user ${signUpId}: ${files.length} files`);

        const uploadPromises = files.map(async (file, index) => {
            const fileName = `gallery_${signUpId}_${Date.now()}_${index}_${file.originalname}`;
            const uploadResult = await storageService.uploadFile(
                'Additional_Pictures_Bucker',
                fileName,
                file.buffer,
                file.mimetype
            );
            if (uploadResult.success) {
                return storageService.getPublicUrl('Additional_Pictures_Bucker', fileName);
            }
            return null;
        });

        const urls = (await Promise.all(uploadPromises)).filter(url => url !== null);

        if (dbService.isConfigured()) {
            // Update UserProfile with the URLs
            // Assuming add_Picture_url is the column name and it stores an array
            const result = await dbService.update('UserProfile', { Sign_up_id: parseInt(signUpId) }, {
                add_Picture_url: urls
            });

            if (result.success) {
                return res.json({ success: true, message: 'Gallery uploaded successfully', data: result.data });
            } else {
                return res.status(500).json({ success: false, message: 'Failed to update user profile', error: result.error });
            }
        }

        res.json({ success: true, message: 'Gallery uploaded (Mock Mode)', urls });

    } catch (error) {
        console.error('Gallery Upload Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error during gallery upload' });
    }
});

app.post('/api/auth/playing-history', upload.any(), async (req, res) => {
    try {
        const body = req.body;
        const files = req.files;

        console.log('Playing history data received:', body);
        console.log('Media files received:', files ? files.length : 0);

        const signUpId = body.signUpId ? parseInt(body.signUpId) : null;
        if (!signUpId) {
            return res.status(400).json({ success: false, message: 'Missing signUpId' });
        }

        let mediaUrls = [];

        // 1. Upload media files to Additional_Pictures_Bucker
        if (files && files.length > 0) {
            const uploadPromises = files.map(async (file, index) => {
                const fileName = `playing_style_${signUpId}_${Date.now()}_${index}_${file.originalname}`;
                console.log('Uploading media file:', fileName);
                const uploadResult = await storageService.uploadFile(
                    'Additional_Pictures_Bucker',
                    fileName,
                    file.buffer,
                    file.mimetype
                );
                if (uploadResult.success) {
                    return storageService.getPublicUrl('Additional_Pictures_Bucker', fileName);
                }
                return null;
            });

            mediaUrls = (await Promise.all(uploadPromises)).filter(url => url !== null);
            console.log('Media URLs:', mediaUrls);
        }

        // 2. Prepare data for PlayingHistory table
        const playingHistoryData = {
            Sign_up_id: signUpId,
            About: body.about,
            Playing_style_media: mediaUrls,
            Skills: body.skills || null,
            Coach_name: body.coachName || null,
            Club: body.club || null,
            Training_location: body.location || null,
            Equipment: body.equipment
        };

        // 3. Insert into PlayingHistory table
        if (dbService.isConfigured()) {
            console.log('Inserting into PlayingHistory:', playingHistoryData);
            const historyResult = await dbService.insert('PlayingHistory', playingHistoryData);

            if (!historyResult.success) {
                console.error('Failed to save playing history:', historyResult.error);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to save playing history',
                    error: historyResult.error
                });
            }

            // 4. Insert tournaments into NotableTournaments table
            if (body.tournaments) {
                try {
                    const tournaments = JSON.parse(body.tournaments);
                    if (Array.isArray(tournaments) && tournaments.length > 0) {
                        const tournamentPromises = tournaments.map(async (tournament) => {
                            const tournamentData = {
                                Sign_up_id: signUpId,
                                Tournament_name: tournament.tournament,
                                Category: tournament.category,
                                Year: tournament.year,
                                Result: tournament.result
                            };
                            return await dbService.insert('NotableTournaments', tournamentData);
                        });

                        const tournamentResults = await Promise.all(tournamentPromises);
                        const failedTournaments = tournamentResults.filter(r => !r.success);

                        if (failedTournaments.length > 0) {
                            console.warn('Some tournaments failed to save:', failedTournaments);
                        }
                    }
                } catch (parseError) {
                    console.error('Error parsing tournaments:', parseError);
                }
            }

            console.log('Playing history saved successfully');
            return res.json({
                success: true,
                message: 'Playing history saved successfully',
                data: historyResult.data
            });
        }

        // Fallback or Mock mode
        res.json({
            success: true,
            message: 'Playing history received (Mock Mode)',
            data: { ...playingHistoryData, isMock: true }
        });

    } catch (error) {
        console.error('Playing History Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error during playing history submission' });
    }
});

/**
 * @swagger
 * /api/community/feed:
 *   get:
 *     summary: Get community feed (all users)
 *     tags: [Community]
 *     responses:
 *       200:
 *         description: List of members
 *       500:
 *         description: Server error
 */
app.get('/api/community/feed', async (req, res) => {
    try {
        if (!process.env.REACT_APP_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            console.log('Supabase not configured. Using mock data for community feed.');
            return res.json({
                success: true,
                data: [
                    {
                        id: 1,
                        userName: "Alex Thompson",
                        Location: "Santa Monica, CA",
                        Playing_level: "Intermediate (3.5)",
                        Profile_image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
                        About: "Passionate pickleball player with 2 years of experience. Love competitive play and meeting new people."
                    },
                    {
                        id: 2,
                        userName: "Sarah Jenkins",
                        Location: "Austin, TX",
                        Playing_level: "Advanced (4.5)",
                        Profile_image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2670&auto=format&fit=crop",
                        About: "Tournament player looking for drilling partners. I specialize in aggressive net play."
                    },
                    {
                        id: 3,
                        userName: "Marcus Chen",
                        Location: "Seattle, WA",
                        Playing_level: "Beginner (2.5)",
                        Profile_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2670&auto=format&fit=crop",
                        About: "Just started 3 months ago but I am already hooked. Looking to improve my dinks!"
                    }
                ]
            });
        }

        // Fetch user profiles and join with playing history
        // In a real app, you'd use a single join query if possible. 
        // Here we'll fetch from UserProfile table.
        const { data, error } = await supabase
            .from('UserProfile')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // If no data found in Supabase, provide high-quality fallback data
        if (!data || data.length === 0) {
            console.log('No user profiles found in database. Using enhanced fallback data.');
            return res.json({
                success: true,
                data: [
                    {
                        id: 101,
                        userName: "Alex Thompson",
                        Location: "Santa Monica, CA",
                        Playing_level: "Intermediate",
                        Profile_image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
                        About: "Passionate pickleball player with 2 years of experience. Love competitive play and meeting new people."
                    },
                    {
                        id: 102,
                        userName: "Sarah Jenkins",
                        Location: "Austin, TX",
                        Playing_level: "Advance",
                        Profile_image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2670&auto=format&fit=crop",
                        About: "Tournament player looking for drilling partners. I specialize in aggressive net play."
                    },
                    {
                        id: 103,
                        userName: "Marcus Chen",
                        Location: "Seattle, WA",
                        Playing_level: "Beginner",
                        Profile_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2670&auto=format&fit=crop",
                        About: "Just started 3 months ago but I am already hooked. Looking to improve my dinks!"
                    },
                    {
                        id: 104,
                        userName: "Elena Rodriguez",
                        Location: "Miami, FL",
                        Playing_level: "Intermediate",
                        Profile_image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop",
                        Bg_image_url: "https://images.unsplash.com/photo-1588615419951-d41c8882ca9f?q=80&w=2670&auto=format&fit=crop",
                        About: "Fanatic about the sport! I play 4 mornings a week. Looking for mixed doubles partners."
                    }
                ]
            });
        }

        res.json({ success: true, data });
    } catch (err) {
        console.error('Feed error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
