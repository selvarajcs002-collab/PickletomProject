
import React, { useState } from 'react';
import { Heart, ThumbsDown, MessageCircle, Share2 } from 'lucide-react';

interface LikeSectionComponentProps {
    likes?: number;
    dislikes?: number;
    commentsCount?: number;
    onLike?: () => void;
    onDislike?: () => void;
    onComment?: () => void;
}

const LikeSectionComponent: React.FC<LikeSectionComponentProps> = ({
    likes = 0,
    dislikes = 0,
    commentsCount = 0,
    onLike,
    onDislike,
    onComment
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [localLikes, setLocalLikes] = useState(likes);
    const [localDislikes, setLocalDislikes] = useState(dislikes);

    const handleLike = () => {
        if (isLiked) {
            setLocalLikes(prev => prev - 1);
            setIsLiked(false);
        } else {
            setLocalLikes(prev => prev + 1);
            setIsLiked(true);
            if (isDisliked) {
                setLocalDislikes(prev => prev - 1);
                setIsDisliked(false);
            }
        }
        onLike?.();
    };

    const handleDislike = () => {
        if (isDisliked) {
            setLocalDislikes(prev => prev - 1);
            setIsDisliked(false);
        } else {
            setLocalDislikes(prev => prev + 1);
            setIsDisliked(true);
            if (isLiked) {
                setLocalLikes(prev => prev - 1);
                setIsLiked(false);
            }
        }
        onDislike?.();
    };

    return (
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-50 mt-4">
            <div className="flex items-center gap-6">
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 transition-all active:scale-90 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                >
                    <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                    <span className="text-sm font-bold">{localLikes}</span>
                </button>

                <button
                    onClick={handleDislike}
                    className={`flex items-center gap-2 transition-all active:scale-90 ${isDisliked ? 'text-[#812926]' : 'text-gray-400 hover:text-[#812926]'}`}
                >
                    <ThumbsDown size={20} fill={isDisliked ? "currentColor" : "none"} />
                    <span className="text-sm font-bold">{localDislikes}</span>
                </button>

                <button
                    onClick={onComment}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-all active:scale-90"
                >
                    <MessageCircle size={20} />
                    <span className="text-sm font-bold">{commentsCount}</span>
                </button>
            </div>

            <button className="text-gray-400 hover:text-gray-600 transition-all active:scale-90">
                <Share2 size={20} />
            </button>
        </div>
    );
};

export default LikeSectionComponent;
