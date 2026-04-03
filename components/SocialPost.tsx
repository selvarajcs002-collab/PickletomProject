import React from 'react';
import { MapPin, MoreHorizontal, UserPlus, UserCheck, Heart, MessageCircle, Share2, Star, Timer } from 'lucide-react';
import ProfileLogoComponent from './ProfileLogoComponent.tsx';

interface SocialPostProps {
    post: {
        id: number;
        name: string;
        location: string;
        profileImage?: string;
        coverImage: string;
        about: string;
        likes: number;
        dislikes: number;
        comments: any[];
        time?: string;
        sport?: string;
    };
}

const SocialPost: React.FC<SocialPostProps> = ({ post }) => {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    return (
        <div className="bg-[#FDFBF9] rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#F1E9E2] overflow-hidden mb-12 max-w-2xl mx-auto group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Post Header */}
            <div className="px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <ProfileLogoComponent
                        imageUrl={post.profileImage}
                        name={post.name}
                        size="md"
                        className="shadow-sm border-2 border-white"
                    />
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-extrabold text-xl text-gray-900 leading-tight">{post.name}</h4>
                            <button
                                onClick={() => setIsFollowed(!isFollowed)}
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${isFollowed
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-[#812926]/5 text-[#812926] hover:bg-[#812926] hover:text-white'
                                    }`}
                            >
                                {isFollowed ? (
                                    <>
                                        <UserCheck size={12} />
                                        <span>Following</span>
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={12} />
                                        <span>Follow</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="flex items-center gap-3 text-[12px] font-bold text-gray-400 capitalize">
                            <span className="flex items-center gap-1">
                                {post.time || '23d'}
                            </span>
                            <span className="text-gray-200">•</span>
                            <span className="flex items-center gap-1">
                                {post.location}
                            </span>
                            <span className="text-gray-200">•</span>
                            <div className="flex items-center gap-1.5 text-[#812926]">
                                <span>{post.sport || 'Pickleball'}</span>
                                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[8px] text-white">🎾</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-colors">
                    <MoreHorizontal size={24} />
                </button>
            </div>

            {/* Post Media Container */}
            <div className="px-4 pb-2">
                <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden shadow-inner">
                    <img
                        src={post.coverImage}
                        alt="Post content"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            {/* Interaction Bar - Now below the image */}
            <div className="px-10 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center gap-2 transition-all group/like ${isLiked ? 'text-rose-500 scale-110' : 'text-gray-400 hover:text-rose-500'}`}
                    >
                        <Heart size={24} fill={isLiked ? "currentColor" : "none"} className="transition-transform group-hover/like:scale-110" />
                        <span className="text-sm font-black text-gray-900">{post.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-all group/comment">
                        <MessageCircle size={24} className="transition-transform group-hover/comment:scale-110" />
                        <span className="text-sm font-black text-gray-900">{post.comments.length}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-all group/share">
                        <Share2 size={24} className="transition-transform group-hover/share:scale-110" />
                        <span className="text-sm font-black text-gray-900">502</span>
                    </button>
                </div>
                <button className="text-gray-400 hover:text-amber-500 transition-all active:scale-90">
                    <Star size={24} />
                </button>
            </div>

            {/* Post Description */}
            <div className="px-10 pb-10">
                <p className="text-[#4A4A4A] font-bold text-lg leading-snug">
                    {post.about}
                </p>
            </div>
        </div>
    );
};

export default SocialPost;
