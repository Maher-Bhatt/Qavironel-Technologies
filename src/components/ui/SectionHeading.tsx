import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3 tracking-[0.2em] uppercase font-semibold text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7612E]" />
          <span className={isDark ? 'text-[#C7612E]' : 'text-[#C7612E]'}>{eyebrow}</span>
        </div>
      )}
      <h2 
        className={`font-sans font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl editorial-title ${
          isDark ? 'text-[#FFFFFF]' : 'text-[#171717]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={`mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? 'text-[#77746F]' : 'text-[#77746F]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
