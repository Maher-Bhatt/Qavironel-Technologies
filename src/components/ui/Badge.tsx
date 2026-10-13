import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'forest' | 'charcoal' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  size = 'sm',
  className = '',
}) => {
  const sizeStyles = size === 'sm' 
    ? 'px-2.5 py-1 text-[0.68rem] font-semibold tracking-wider uppercase' 
    : 'px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase';

  const forestStyle = 'bg-[#E6ECE5] text-[#174C3A] dark:bg-[#103629] dark:text-[#E6ECE5] border border-[#D9DED7] dark:border-[#879B89]/30 rounded-full';

  const variantStyles = {
    forest: forestStyle,
    charcoal: 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-full',
    outline: 'bg-transparent text-[#0A0A0A] dark:text-white border border-black/10 dark:border-white/10 rounded-full',
    subtle: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10 rounded-full',
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono select-none ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

