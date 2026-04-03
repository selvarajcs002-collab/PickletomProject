import http from './httpClient';
import { PostDto } from '../models/PostDto';

export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}

export const postService = {
    getPosts: async (): Promise<PostDto[]> => {
        try {
            const response = await http.get('/posts') as ApiResponse<PostDto[]>;
            return response.data || [];
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    },
};
