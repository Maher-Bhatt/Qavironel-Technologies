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
    copper: 'bg-[#E0561B]/10 text-[#E0561B] border border-[#E0561B]/30 rounded',
    charcoal: 'bg-[#0A0A0A] text-white border border-[#27272A] rounded',
    outline: 'bg-transparent text-[#0A0A0A] border border-[#E5E7EB] rounded',
    subtle: 'bg-[#F4F4F5] text-[#52525B] border border-[#E5E7EB] rounded',
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono select-none ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
