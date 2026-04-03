
import React, { useEffect, useState } from 'react';
import { api } from '../src/services/api.ts';
import { FeedItem } from '../types.ts';
import { User, Loader2, Search } from 'lucide-react';
import FeedItemComponent from './FeedItemComponent.tsx';

const PeopleFeed: React.FC = () => {
    const [members, setMembers] = useState<FeedItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchFeed = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await api.getCommunityFeed();

            if (result && result.success && Array.isArray(result.data)) {
                const mappedData = result.data.map((item: any) => ({
                    id: item.id || Math.random(),
                    name: item.userName || item.name,
                    location: item.Location || item.location || 'Unknown Location',
                    playingLevel: item.Playing_level || item.playingLevel || 'Player',
                    profileImage: item.Profile_image_url || item.profileImage,
                    coverImage: item.Bg_image_url || item.coverImage,
                    about: item.About || item.about || 'No bio provided.',
                    likes: Math.floor(Math.random() * 50),
                    dislikes: Math.floor(Math.random() * 10),
                    comments: []
                }));
                setMembers(mappedData);
            } else {
                setError('Could not load players. Please try again.');
            }
        } catch (error) {
            console.error('Failed to fetch people:', error);
            setError('Connection error. Please check your server.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);

    const filteredMembers = members.filter(member =>
        member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.playingLevel?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center p-12">
                <Loader2 className="w-12 h-12 text-[#812926] animate-spin mb-4" />
                <p className="text-gray-500 font-bold animate-pulse">Loading people...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center p-12 text-center">
                <div className="bg-red-50 text-red-500 p-6 rounded-[20px] mb-6">
                    <p className="font-bold">{error}</p>
                </div>
                <button
                    onClick={fetchFeed}
                    className="px-8 py-3 bg-[#812926] text-white rounded-[15px] font-bold shadow-lg hover:bg-[#6e2220] transition-all"
                >
                    Retry Connection
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">People</h1>
                    <p className="text-gray-500 font-medium leading-relaxed">Connect with other pickleball players</p>
                </div>

                <div className="relative group w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#812926] transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search players..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border-2 border-gray-100 h-[55px] pl-12 pr-6 rounded-[20px] font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#812926]/20 focus:ring-4 focus:ring-[#812926]/5 transition-all shadow-sm"
                    />
                </div>
            </div>

            {filteredMembers.length === 0 ? (
                <div className="bg-gray-50 rounded-[30px] p-20 text-center border-2 border-dashed border-gray-200">
                    <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No players found</h3>
                    <p className="text-gray-500">Try adjusting your search terms</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMembers.map((member, index) => (
                        <FeedItemComponent key={member.id} data={member as any} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PeopleFeed;
