import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.REACT_APP_SUPABASE_URL;
// Use Service Role Key for backend operations to bypass RLS
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY;

let supabase;

try {
    if (!supabaseURL || !supabaseURL.startsWith('http')) {
        console.warn('WARNING: REACT_APP_SUPABASE_URL is not set or invalid.');
    } else if (!supabaseKey || supabaseKey.length < 20) {
        console.warn('WARNING: Supabase Key is not set or invalid.');
    } else {
        supabase = createClient(supabaseURL, supabaseKey);
        console.log('Supabase client initialized with Service Role Key.');
    }
} catch (error) {
    console.error('Failed to initialize Supabase client:', error.message);
}

export default supabase;