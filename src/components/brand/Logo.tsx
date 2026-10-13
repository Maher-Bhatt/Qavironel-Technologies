import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  asLink?: boolean;
}

/**
 * Official Qavironel Technologies Logo Component (Brand Identity v2.0)
 *
 * Renders the path-built architectural Q signature with Forest Green accent (#174C3A),
 * Deep Evergreen (#103629), Graphite (#191D1A), Sage Green (#879B89), and Warm Ivory (#F5F5F0).
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme: explicitTheme,
  className = '',
  size = 'md',
  showTagline = false,
  asLink = true,
}) => {
  let contextTheme = 'light';
  try {
    const ctx = useTheme();
    if (ctx) contextTheme = ctx.theme;
  } catch {
    // outside provider fallback
  }

  const isDarkBg = (explicitTheme || contextTheme) === 'dark';

  const markSize = 
    size === 'sm' ? 'w-7 h-7' : 
    size === 'lg' ? 'w-11 h-11' : 
    'w-8 h-8 sm:w-9 sm:h-9';

  const textSize = 
    size === 'sm' ? 'text-[1.02rem]' : 
    size === 'lg' ? 'text-[1.38rem]' : 
    'text-[1.14rem] sm:text-[1.2rem]';

  const subtextSize = 
    size === 'sm' ? 'text-[0.52rem] tracking-[0.22em]' : 
    size === 'lg' ? 'text-[0.68rem] tracking-[0.26em]' : 
    'text-[0.58rem] sm:text-[0.62rem] tracking-[0.24em]';

  // Architectural path-built Q signature from official v2.0 Brand Kit
  const MarkSvg = () => (
    <svg 
      className={`${markSize} shrink-0 transition-transform duration-300 group-hover:scale-105`} 
      viewBox="0 0 128 128" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Qavironel architectural Q mark"
    >
      {/* Primary architectural loop */}
      <path 
        d="M78 14 H50 L19 45 V75 L47 103 H75 L92 86 V55 L81 34" 
        fill="none" 
        stroke={isDarkBg ? '#F5F5F0' : '#191D1A'} 
        strokeWidth="13.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Forward momentum routing exit stroke */}
      <path 
        d="M69 71 L108 110" 
        fill="none" 
        stroke={isDarkBg ? '#879B89' : '#174C3A'} 
        strokeWidth="13.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );

  const LogoContent = (
    <>
      <MarkSvg />
      {variant !== 'mark' && (
        <div className="flex flex-col justify-center">
          <div className={`flex items-center tracking-[-0.03em] font-display font-extrabold ${textSize} leading-none`}>
            <span className={isDarkBg ? 'text-[#F5F5F0]' : 'text-[#191D1A]'}>QAVIRONEL</span>
          </div>
          <div className={`flex items-center font-mono font-medium ${subtextSize} uppercase leading-none mt-1`}>
            <span className={isDarkBg ? 'text-[#879B89]' : 'text-[#174C3A]'}>TECHNOLOGIES</span>
          </div>
          {showTagline && (
            <div className="flex items-center tracking-[0.16em] font-sans font-medium text-[0.52rem] uppercase leading-none mt-1.5 pt-1 border-t border-[#D9DED7] dark:border-[#879B89]/25 text-[#737A73] dark:text-[#879B89]">
              IDEAS. ENGINEERED.
            </div>
          )}
        </div>
      )}
    </>
  );

  if (!asLink) {
    return (
      <div 
        className={`inline-flex items-center gap-3 select-none ${className}`}
        aria-label="Qavironel Technologies"
      >
        {LogoContent}
      </div>
    );
  }

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`} 
      aria-label="Qavironel Technologies Home"
    >
      {LogoContent}
    </Link>
  );
};

export default Logo;
