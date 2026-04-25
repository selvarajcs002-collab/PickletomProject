import http from "./httpClient";

export interface PostResponse {
    success: boolean;
    message: string;
    data?: any;
}

export const postService = {
    createPost: async (userId: number, caption: string, mediaUrl: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/create", {
                userId,
                caption,
                mediaUrl,
                visibility
            });
        } catch (error: any) {
            return {
                success: false,
                message: error.message || "Failed to create post"
            };
        }
    },

    createQuestion: async (userId: number, question: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/question", {
                userId,
                question,
                visibility
            });
        } catch (error: any) {
            return {
                success: false,
                message: error.message || "Failed to post question"
            };
        }
    },

    createAppreciation: async (userId: number, recipientProfile: string, message: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/appreciation", {
                userId,
                recipientProfile,
                message,
                visibility
            });
        } catch (error: any) {
            return {
                success: false,
                message: error.message || "Failed to share appreciation"
            };
        }
    }
};
