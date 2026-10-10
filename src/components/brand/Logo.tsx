import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light'; // dark = for dark backgrounds, light = for light backgrounds
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const isDarkBg = theme === 'dark';

  const markSrc = isDarkBg 
    ? '/brand/qavironel-monogram-light.png' 
    : '/brand/qavironel-monogram.png';

  const wordmarkSrc = isDarkBg 
    ? '/brand/qavironel-wordmark-light.png' 
    : '/brand/qavironel-wordmark.png';

  const markHeight = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-12' : 'h-9';
  const wordmarkHeight = size === 'sm' ? 'h-5' : size === 'lg' ? 'h-8' : 'h-6';

  if (variant === 'mark') {
    return (
      <Link to="/" className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-90 ${className}`} aria-label="Qavironel Technologies Home">
        <img 
          src={markSrc} 
          alt="Qavironel Q Monogram" 
          className={`${markHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to="/" className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-90 ${className}`} aria-label="Qavironel Technologies Home">
        <img 
          src={markSrc} 
          alt="Qavironel" 
          className={`${markHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
        <img 
          src={wordmarkSrc} 
          alt="Qavironel Technologies" 
          className={`${wordmarkHeight} w-auto object-contain`}
        />
      </Link>
    );
  }

  // Full default variant with mark + typographic wordmark lockup
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3.5 group transition-opacity hover:opacity-95 ${className}`} 
      aria-label="Qavironel Technologies — Home"
    >
      <div className="relative shrink-0">
        <img 
          src={markSrc} 
          alt="Qavironel Mark" 
          className={`${markHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-[-0.03em] font-extrabold text-[1.05rem] leading-none uppercase">
          <span className={isDarkBg ? 'text-white' : 'text-[#0A0A0A]'}>QAVIR</span>
          <span className="text-[#E0561B]">O</span>
          <span className={isDarkBg ? 'text-white' : 'text-[#0A0A0A]'}>NEL</span>
        </div>
        <div className="flex items-center justify-between mt-1 tracking-[0.24em] font-semibold text-[0.55rem] uppercase leading-none">
          <span className="text-[#71717A]">TECHNOLOGIES</span>
        </div>
      </div>
    </Link>
  );
};
