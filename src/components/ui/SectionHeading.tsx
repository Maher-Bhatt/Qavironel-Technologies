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
  const isLight = theme === 'light';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3 tracking-[0.2em] uppercase font-semibold text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
          <span className="text-black dark:text-white">{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-sans font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-tight ${
        isLight ? 'text-black dark:text-white dark:text-[#F5F5F0]' : 'text-white'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-light ${
          isLight ? 'text-zinc-500 dark:text-[#A6A29A]' : 'text-[#A1A1AA]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

