import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'copper' | 'charcoal' | 'outline' | 'subtle';
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

  const variantStyles = {
    copper: 'bg-[#C7612E]/10 text-[#C7612E] border border-[#C7612E]/30 rounded',
    charcoal: 'bg-[#171717] text-white border border-[#20201E] rounded',
    outline: 'bg-transparent text-[#171717] dark:text-[#F6F3ED] border border-[#DEDAD3] dark:border-white/10 rounded',
    subtle: 'bg-[#F6F3ED] dark:bg-[#20201E] text-[#77746F] dark:text-[#A1A1AA] border border-[#DEDAD3] dark:border-white/10 rounded',
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono select-none ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};

