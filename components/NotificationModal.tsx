import React from 'react';
import { Check, X } from 'lucide-react';

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'success' | 'error';
    title: string;
    message: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
    isOpen,
    onClose,
    type,
    title,
    message,
    buttonText,
    onButtonClick
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-[30px] w-full max-w-sm overflow-hidden shadow-2xl animate-slide-up p-10 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${type === 'success' ? 'border-green-500 bg-white' : 'border-red-500 bg-white'
                        }`}>
                        {type === 'success' ? (
                            <Check className="text-green-500 w-12 h-12" strokeWidth={3} />
                        ) : (
                            <X className="text-red-500 w-12 h-12" strokeWidth={3} />
                        )}
                    </div>
                </div>

                {/* Title */}
                <h2 className={`text-4xl font-black mb-6 ${type === 'success' ? 'text-gray-900' : 'text-red-400'
                    }`}>
                    {title}
                </h2>

                {/* Message Box */}
                <div className={`rounded-[15px] p-6 mb-8 ${type === 'success' ? 'bg-green-100/50' : 'bg-red-50'
                    }`}>
                    <p className="text-gray-800 text-lg font-medium leading-tight">
                        {message}
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={onButtonClick || onClose}
                    className="w-full h-14 rounded-[12px] border-2 border-gray-900 font-bold text-gray-900 text-lg hover:bg-gray-50 transition-colors active:scale-95"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;
