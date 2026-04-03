import React from 'react';
import PickleOnLogoSmall from './PickleOnLogoSmall.tsx';

const PickleOnLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <PickleOnLogoSmall className="w-10 h-10 text-xl" />
        <span className="font-black text-gray-900 tracking-tight text-xl">PickleOn</span>
    </div>
);

export default PickleOnLogo;
