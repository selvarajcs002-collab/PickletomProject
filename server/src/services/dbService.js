import supabase from '../supabaseClient.js';

/**
 * Generic database service to handle CRUD operations.
 */
class DBService {
    /**
     * Check if Supabase is properly configured.
     * @returns {boolean}
     */
    isConfigured() {
        return !!supabase;
    }

    /**
     * Insert a record into a table.
     * @param {string} table - The table name.
     * @param {object} data - The data to insert.
     * @returns {Promise<{success: boolean, data: any, error: any}>}
     */
    async insert(table, data) {
        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized. Please check your .env configuration.');
            }
            const { data: result, error } = await supabase
                .from(table)
                .insert([data])
                .select();

            if (error) throw error;

            return { success: true, data: result[0] };
        } catch (error) {
            console.error(`DB Error (insert into ${table}):`, error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Find a record in a table.
     * @param {string} table - The table name.
     * @param {object} query - The query object (e.g., { email_ID: 'test@example.com' }).
     * @returns {Promise<{success: boolean, data: any, error: any}>}
     */
    async findOne(table, query) {
        try {
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .match(query)
                .single();

            if (error && error.code !== 'PGRST116') throw error; // PGRST116 is "no rows found"

            return { success: true, data };
        } catch (error) {
            console.error(`DB Error (findOne from ${table}):`, error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Update a record in a table.
     * @param {string} table - The table name.
     * @param {object} query - The query object (e.g., { id: 1 }).
     * @param {object} data - The data to update.
     * @returns {Promise<{success: boolean, data: any, error: any}>}
     */
    async update(table, query, data) {
        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized.');
            }
            const { data: result, error } = await supabase
                .from(table)
                .update(data)
                .match(query)
                .select();

            if (error) throw error;

            return { success: true, data: result[0] };
        } catch (error) {
            console.error(`DB Error (update in ${table}):`, error.message);
            return { success: false, error: error.message };
        }
    }
}

export const dbService = new DBService();
