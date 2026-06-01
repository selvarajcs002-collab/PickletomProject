import { UserDto } from './UserDto';

export interface PostDto {
    postId: string;
    postType: 'post' | 'question' | 'appreciation'; // distinguishes card type in feed
    user: UserDto;
    content: string;
    imageUrl?: string | null;
    recipientName?: string;
    recipientId?: number;
    likes: number;
    comments: number;   // for questions: answer count
    shares: number;
    time: string;
    visibility: 'Public' | 'Followers' | 'Private';
    isLikedByMe: boolean;
    isPinnedByMe: boolean;
}
