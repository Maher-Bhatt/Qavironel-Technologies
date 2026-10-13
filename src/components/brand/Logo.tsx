import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme: explicitTheme,
  className = '',
  size = 'md',
}) => {
  let contextTheme = 'light';
  try {
    const ctx = useTheme();
    if (ctx) contextTheme = ctx.theme;
  } catch {
    // outside provider fallback
  }

  const isDarkBg = (explicitTheme || contextTheme) === 'dark';

  const markSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-8 h-8';

  const MarkSvg = () => (
    <svg 
      className={`${markSize} shrink-0 transition-transform duration-300 group-hover:scale-105`} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Precision octagonal badge */}
      <rect width="120" height="120" rx="26" fill={isDarkBg ? '#FFFFFF' : '#0A0A0A'} />
      {/* Architectural geometric Q loop */}
      <path 
        d="M 42 24 L 78 24 L 96 42 L 96 76 L 78 94 L 42 94 L 24 76 L 24 42 Z" 
        stroke={isDarkBg ? '#0A0A0A' : '#FFFFFF'} 
        strokeWidth="9" 
        strokeLinejoin="round" 
        fill="none" 
      />
      {/* Inner architectural core */}
      <path 
        d="M 48 40 L 72 40 L 82 50 L 82 68 L 72 78 L 48 78 L 38 68 L 38 50 Z" 
        fill={isDarkBg ? '#E5E5E5' : '#171717'} 
      />
      {/* Angled engineering dynamic crossbar */}
      <path 
        d="M 46 62 L 66 62 L 98 94 L 82 98 L 52 68 Z" 
        fill={isDarkBg ? '#0A0A0A' : '#FFFFFF'} 
      />
      {/* Pure monochrome optic precision dot */}
      <circle cx="60" cy="59" r="6" fill={isDarkBg ? '#0A0A0A' : '#FFFFFF'} />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <Link 
        to="/" 
        className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-90 ${className}`} 
        aria-label="Qavironel Technologies Home"
      >
        <MarkSvg />
      </Link>
    );
  }

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`} 
      aria-label="Qavironel Technologies Home"
    >
      <MarkSvg />
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-[-0.03em] font-display font-extrabold text-[1.12rem] leading-none">
          <span className={isDarkBg ? 'text-white' : 'text-[#0A0A0A]'}>QAVIR</span>
          <span className={isDarkBg ? 'text-white' : 'text-[#0A0A0A]'}>O</span>
          <span className={isDarkBg ? 'text-white' : 'text-[#0A0A0A]'}>NEL</span>
        </div>
        <div className="flex items-center tracking-[0.24em] font-mono font-medium text-[0.58rem] uppercase leading-none mt-1">
          <span className={isDarkBg ? 'text-zinc-400' : 'text-[#737373]'}>TECHNOLOGIES</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
