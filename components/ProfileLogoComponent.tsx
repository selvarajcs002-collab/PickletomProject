
import React from 'react';
import { User } from 'lucide-react';

interface ProfileLogoComponentProps {
    imageUrl?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const ProfileLogoComponent: React.FC<ProfileLogoComponentProps> = ({
    imageUrl,
    name,
    size = 'md',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-16 h-16',
        lg: 'w-24 h-24'
    };

    return (
        <div className={`rounded-[25%] bg-white p-1 shadow-md overflow-hidden flex-shrink-0 ${className}`}>
            <div className={`rounded-[20%] overflow-hidden bg-gray-100 border border-gray-100 ${sizeClasses[size]}`}>
                {imageUrl ? (
                    <img src={imageUrl} alt={name || 'User'} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#812926]/5 text-[#812926]">
                        <User size={size === 'sm' ? 20 : size === 'md' ? 32 : 48} strokeWidth={1.5} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileLogoComponent;
