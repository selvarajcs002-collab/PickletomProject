
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import SocialPost from './SocialPost.tsx';
import pickleballFeedData from '../src/data/pickleball-feed-data.json';

const CommunityFeed: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load JSON data and map to SocialPost format
        const socialPosts = pickleballFeedData.map((item: any, index: number) => ({
            id: 1000 + index,
            name: item.profilename,
            location: ['Court Side', 'Morning Match', 'Tournament Day', 'Training Session', 'Local Park'][index % 5],
            profileImage: '',
            coverImage: item.posturl,
            about: item.desc,
            likes: Math.floor(Math.random() * 200) + 50,
            dislikes: Math.floor(Math.random() * 30),
            comments: Array(80).fill({}),
            time: item.time,
            sport: item.sport
        }));

        setPosts(socialPosts.sort(() => Math.random() - 0.5));

        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex flex-col items-center justify-center p-12">
                <Loader2 className="w-12 h-12 text-[#812926] animate-spin mb-4" />
                <p className="text-gray-500 font-bold animate-pulse">Loading feed...</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-10 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Community Feed</h1>
                <p className="text-gray-500 font-medium leading-relaxed">Stay updated with the latest from the pickleball community</p>
            </div>

            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <SocialPost key={post.id} post={post} />
                ))}
            </div>

            <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest text-sm">
                You've reached the end for now! 🏓
            </div>
        </div>
    );
};

export default CommunityFeed;
