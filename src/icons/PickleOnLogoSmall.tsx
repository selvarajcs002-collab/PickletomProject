import React from 'react';

const PickleOnLogoSmall: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`bg-[#812926] rounded-xl flex items-center justify-center text-white font-black ${className}`}>
        P
    </div>
);

export default PickleOnLogoSmall;
