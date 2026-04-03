
import React, { useState } from 'react';
import { MapPin, Trophy, UserPlus, UserCheck } from 'lucide-react';
import ProfileLogoComponent from './ProfileLogoComponent.tsx';

interface FeedItemComponentProps {
    data: {
        id: number;
        name: string;
        location: string;
        playingLevel: string;
        profileImage?: string;
        coverImage?: string;
        about: string;
        likes?: number;
        dislikes?: number;
        comments?: any[];
    };
    index: number;
}

const FeedItemComponent: React.FC<FeedItemComponentProps> = ({ data, index }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <div
            className="bg-white rounded-[30px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group animate-slide-up relative"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Follow Button - Floating */}
            <button
                onClick={() => setIsFollowed(!isFollowed)}
                className={`absolute top-6 right-6 z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${isFollowed
                    ? 'bg-green-500 text-white rotate-[360deg]'
                    : 'bg-white/90 backdrop-blur-md text-[#812926] hover:bg-[#812926] hover:text-white'
                    }`}
            >
                {isFollowed ? <UserCheck size={20} /> : <UserPlus size={20} />}
            </button>

            {/* Cover Image Part */}
            <div className="h-32 bg-gray-100 relative overflow-hidden">
                {data.coverImage ? (
                    <img src={data.coverImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#812926]/10 to-[#812926]/5" />
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Content Part */}
            <div className="px-8 pb-8 pt-0 relative">
                {/* Profile Header - Logo and Badge at opposite ends */}
                <div className="relative -mt-12 mb-4 flex items-end justify-between px-1 w-full">
                    <ProfileLogoComponent
                        imageUrl={data.profileImage}
                        name={data.name}
                        size="lg"
                        className="rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl"
                    />
                    <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-100/50 shadow-sm backdrop-blur-sm bg-white/50">
                        <Trophy size={12} />
                        {data.playingLevel}
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#812926] transition-colors">
                            {data.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-400 font-bold text-sm uppercase tracking-wider mt-1">
                            <MapPin size={14} className="text-[#812926]/60" />
                            {data.location}
                        </div>
                    </div>

                    <p className="text-gray-500 font-medium leading-relaxed line-clamp-2 text-sm">
                        {data.about || "No bio provided yet."}
                    </p>

                    <button className="w-full mt-2 h-[50px] bg-gray-50 hover:bg-[#812926] text-gray-900 hover:text-white rounded-[15px] font-bold text-sm transition-all active:scale-95 border border-gray-100 hover:border-[#812926] shadow-sm uppercase tracking-widest">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedItemComponent;
