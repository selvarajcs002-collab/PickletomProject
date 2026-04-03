
import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-3 px-3 h-[50px] border-2 border-gray-100 rounded-[15px] bg-white hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] shadow-sm"
    >
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="text-gray-700 font-bold text-base">{label}</span>
    </button>
  );
};

export default SocialButton;
