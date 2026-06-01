import http from "./httpClient";
import { BASE_URL } from "./api";
import { PostDto } from "../models/PostDto";

export interface PostResponse {
    success: boolean;
    message: string;
    data?: any;
}

export interface LikeResponse {
    success: boolean;
    message: string;
    isLiked: boolean;
    likeCount: number;
}

export const postService = {
    // ── Feed ──────────────────────────────────────────────────
    getPosts: async (requestingUserId?: number): Promise<PostDto[]> => {
        const query = requestingUserId ? `?requestingUserId=${requestingUserId}` : "";
        const response: PostResponse = await http.get(`/Post/feed${query}`);
        if (response.success && Array.isArray(response.data)) {
            return response.data as PostDto[];
        }
        return [];
    },

    // ── Interactions ──────────────────────────────────────────
    toggleLike: async (postId: string, userId: number, postType: string = "POST"): Promise<LikeResponse> => {
        return await http.post("/Post/like", { postId: parseInt(postId), userId, postType: postType.toUpperCase() });
    },

    hidePost: async (postId: string, userId: number, postType: string = "POST"): Promise<PostResponse> => {
        return await http.post("/Post/hide", { postId: parseInt(postId), userId, postType: postType.toUpperCase() });
    },

    pinPost: async (postId: string, userId: number, postType: string = "POST"): Promise<PostResponse> => {
        return await http.post("/Post/pin", { postId: parseInt(postId), userId, postType: postType.toUpperCase() });
    },

    // ── Upload post media (to Supabase via API) then create post
    uploadPostMedia: async (fileUri: string, userId: number): Promise<string | null> => {
        const formData = new FormData();
        const filename = fileUri.split("/").pop() || "post_media";
        const match = /\.(\w+)$/.exec(filename);
        const isVideo = match && ['mp4', 'mov', 'avi', 'MOV', 'MP4'].includes(match[1]);
        const mimeType = isVideo ? `video/${match![1].toLowerCase()}` : `image/${match ? match[1].toLowerCase() : 'jpeg'}`;

        formData.append("file", { uri: fileUri, name: filename, type: mimeType } as any);
        formData.append("fileType", "post");
        formData.append("userId", userId.toString());

        // ⚠️ Do NOT set Content-Type manually — React Native auto-sets multipart/form-data with boundary
        const res = await fetch(`${BASE_URL}/upload/single`, {
            method: "POST",
            body: formData,
        });
        const json = await res.json();
        // API returns SingleUploadResponse: { status, url, message }
        return json?.url ?? null;
    },

    // ── Delete ─────────────────────────────────────────────────
    deletePost: async (postId: string, userId: number, postType: string = "POST"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/delete", { 
                postId: parseInt(postId), 
                userId,
                postType: postType.toUpperCase()
            });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to delete post" };
        }
    },

    // ── Update ─────────────────────────────────────────────────
    updatePost: async (postId: string, userId: number, caption: string, imageUrl?: string, visibility: string = "Public", postType: string = "POST"): Promise<PostResponse> => {
        try {
            return await http.put("/Post/update", {
                postId: parseInt(postId),
                userId,
                caption,
                imageUrl: imageUrl ?? null,
                visibility: visibility || "Public",
                postType: postType.toUpperCase()
            });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to update post" };
        }
    },

    // ── Create ─────────────────────────────────────────────────
    createPost: async (userId: number, caption: string, mediaUrl: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/create", { userId, caption, mediaUrl, visibility });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to create post" };
        }
    },

    createQuestion: async (userId: number, question: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/question", { userId, question, visibility });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to post question" };
        }
    },

    createAppreciation: async (userId: number, toUserId: number, message: string, visibility: string = "Public"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/appreciation", { userId, toUserId, message, visibility });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to share appreciation" };
        }
    },

    // ── Comments ───────────────────────────────────────────────
    addComment: async (postId: string, userId: number, commentText: string, postType: string = "POST"): Promise<PostResponse> => {
        try {
            return await http.post("/Post/comment", { postId, userId, commentText, postType });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to add comment" };
        }
    },

    getComments: async (postId: string, postType: string = "POST"): Promise<any> => {
        try {
            const response: any = await http.get(`/Post/comments/${postId}?postType=${postType}`);
            return response.success ? response.data : [];
        } catch (error) {
            return [];
        }
    },

    // ── Q&A Answers ────────────────────────────────────────────
    addAnswer: async (questionId: string, userId: number, answerText: string): Promise<PostResponse> => {
        try {
            return await http.post("/Post/answer", { questionId: parseInt(questionId), userId, answerText });
        } catch (error: any) {
            return { success: false, message: error.message || "Failed to post answer" };
        }
    },

    getAnswers: async (questionId: string): Promise<any[]> => {
        try {
            const res = await http.get(`/Post/answers/${questionId}`);
            return res?.data ?? [];
        } catch { return []; }
    },
};
