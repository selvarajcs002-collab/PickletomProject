import { UserDto } from './UserDto';

export interface PostDto {
    postId: string;
    user: UserDto;
    content: string;
    imageUrl?: string | null;
    likes: number;
    comments: number;
    shares: number;
    time: string;
    visibility: 'Public' | 'Followers' | 'Private';
}
