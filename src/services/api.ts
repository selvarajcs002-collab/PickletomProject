import { authService } from './authService.ts';

const API_BASE_URL = 'http://127.0.0.1:5000/api';

// Helper for authenticated requests with auto-refresh
const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
    let token = authService.getAccessToken();
    const headers = { ...options.headers } as Record<string, string>;

    // Check if token needs refresh before making request
    if (authService.needsRefresh()) {
        await refreshToken();
        token = authService.getAccessToken(); // Get new token
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, { ...options, headers });

    // Handle 401 (Unauthorized) - Try to refresh token and retry
    if (response.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
            token = authService.getAccessToken();
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
                return fetch(url, { ...options, headers });
            }
        }
    }

    return response;
};

const refreshToken = async () => {
    const refreshToken = authService.getRefreshToken();
    if (!refreshToken) return false;

    try {
        const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });

        const data = await response.json();
        if (data.success && data.session) {
            authService.setSession(data.session);
            return true;
        } else {
            authService.clearSession();
            return false;
        }
    } catch (error) {
        console.error('RefreshToken Error:', error);
        authService.clearSession();
        return false;
    }
};


export const api = {
    async getCommunityFeed() {
        const response = await fetch(`${API_BASE_URL}/community/feed`);
        return response.json();
    },

    async login(credentials: any) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (data.success && data.session) {
            authService.setSession(data.session);
        }
        return data;
    },

    async signup(data: any) {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.success && result.session) {
            authService.setSession(result.session);
        }
        return result;
    },

    async forgotPassword(email: string) {
        const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        return response.json();
    },

    async submitOnboarding(data: any) {
        const isFormData = data instanceof FormData;
        const response = await authenticatedFetch(`${API_BASE_URL}/auth/onboarding`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? data : JSON.stringify(data),
        });
        return response.json();
    },

    async submitPlayingHistory(data: any) {
        // Convert data to FormData for file uploads
        const formData = new FormData();

        // Convert base64 media to files and add to FormData
        if (data.playingStyleMedia && Array.isArray(data.playingStyleMedia)) {
            const mediaPromises = data.playingStyleMedia
                .filter((media: any) => media && media.url)
                .map(async (media: any, index: number) => {
                    const res = await fetch(media.url);
                    const blob = await res.blob();
                    const file = new File(
                        [blob],
                        `media_${index}.${media.type === 'video' ? 'mp4' : 'jpg'}`,
                        { type: media.type === 'video' ? 'video/mp4' : 'image/jpeg' }
                    );
                    formData.append('media', file);
                });

            // Wait for all media files to be processed
            await Promise.all(mediaPromises);
        }

        // Add signUpId
        if (data.signUpId) {
            formData.append('signUpId', data.signUpId.toString());
        }

        // Add other fields
        formData.append('about', data.about || '');
        formData.append('skills', data.skills || '');
        formData.append('coachName', data.coachName || '');
        formData.append('club', data.club || '');
        formData.append('location', data.location || '');
        formData.append('equipment', data.equipment || '');

        // Add tournaments as JSON string
        if (data.notableTournaments && data.notableTournaments.length > 0) {
            formData.append('tournaments', JSON.stringify(data.notableTournaments));
        }

        const response = await authenticatedFetch(`${API_BASE_URL}/auth/playing-history`, {
            method: 'POST',
            body: formData,
        });
        return response.json();
    },
    async uploadGallery(data: FormData) {
        const response = await authenticatedFetch(`${API_BASE_URL}/auth/upload-gallery`, {
            method: 'POST',
            body: data,
        });
        return response.json();
    },

    // Check if user is logged in
    isAuthenticated() {
        return authService.isAuthenticated();
    },

    logout() {
        const token = authService.getAccessToken();
        if (token) {
            // Notify backend to invalidate token if needed (optional for JWT but good for Supabase)
            fetch(`${API_BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            }).catch(console.error);
        }
        authService.clearSession();
    }
};
