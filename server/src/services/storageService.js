import supabase from '../supabaseClient.js';

class StorageService {
    /**
     * Upload a file to a specific Supabase bucket.
     * @param {string} bucketName - The name of the bucket.
     * @param {string} filePath - The destination path within the bucket.
     * @param {Buffer} fileBuffer - The file content buffer.
     * @param {string} contentType - The MIME type of the file.
     * @returns {Promise<{success: boolean, path: string, error: any}>}
     */
    async uploadFile(bucketName, filePath, fileBuffer, contentType) {
        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized.');
            }

            const { data, error } = await supabase.storage
                .from(bucketName)
                .upload(filePath, fileBuffer, {
                    contentType,
                    upsert: true
                });

            if (error) throw error;

            return { success: true, path: data.path };
        } catch (error) {
            console.error(`Storage Error (upload to ${bucketName}):`, error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Get the public URL of a file in a bucket.
     * @param {string} bucketName - The name of the bucket.
     * @param {string} filePath - The path to the file in the bucket.
     * @returns {string}
     */
    getPublicUrl(bucketName, filePath) {
        if (!supabase) return '';
        const { data } = supabase.storage
            .from(bucketName)
            .getPublicUrl(filePath);

        return data.publicUrl;
    }
}

export const storageService = new StorageService();
