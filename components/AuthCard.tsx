import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <header className="mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="text-white text-6xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl">
          PickleOn
        </h1>
      </header>
      
      <main className="w-full max-w-[1000px] bg-white rounded-[20px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] px-6 py-10 md:px-[60px] md:py-14 transition-all overflow-hidden relative">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-[#1a1a1a] text-4xl md:text-5xl font-black tracking-tight mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-gray-400 text-lg font-semibold leading-relaxed max-w-[85%] mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {children}
      </main>
    </div>
  );
};

export default AuthCard;