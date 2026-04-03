
import React, { useState } from 'react';
import { Send, User } from 'lucide-react';

interface Comment {
    id: number;
    userName: string;
    text: string;
    timestamp: string;
}

interface CommentsComponentProps {
    comments?: Comment[];
    onAddComment?: (text: string) => void;
}

const CommentsComponent: React.FC<CommentsComponentProps> = ({
    comments = [],
    onAddComment
}) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment?.(newComment);
            setNewComment('');
        }
    };

    return (
        <div className="mt-4 animate-fade-in">
            <div className="space-y-4 max-h-[200px] overflow-y-auto mb-4 pr-2 custom-scrollbar">
                {comments.length === 0 ? (
                    <p className="text-gray-400 text-sm italic py-2 text-center">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
                                <User size={16} />
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-2xl px-4 py-2">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-black text-gray-900">{comment.userName}</span>
                                    <span className="text-[10px] text-gray-400">{comment.timestamp}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-snug">{comment.text}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <form onSubmit={handleSubmit} className="relative group">
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#812926]/10 h-[45px] pl-4 pr-12 rounded-[15px] text-sm font-medium focus:outline-none transition-all"
                />
                <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#812926] text-white rounded-[10px] flex items-center justify-center disabled:opacity-30 disabled:grayscale transition-all active:scale-90"
                >
                    <Send size={14} />
                </button>
            </form>
        </div>
    );
};

export default CommentsComponent;
