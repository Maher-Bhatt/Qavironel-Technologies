import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  showArrow?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  showArrow = false,
  external = false,
  className = '',
  children,
  onMouseEnter,
  onClick,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider uppercase gap-1.5',
    md: 'px-6 py-3 text-xs font-semibold tracking-widest uppercase gap-2',
    lg: 'px-8 py-3.5 text-sm font-semibold tracking-widest uppercase gap-2.5',
  }[size];

  const variantStyles = {
    primary: 'btn-glass-shimmer bg-[#0A0A0A] hover:bg-[#1C1C1E] text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-[#0A0A0A] border border-black/10 dark:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_14px_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-300',
    secondary: 'btn-glass-shimmer bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-850 text-[#0A0A0A] dark:text-white border border-black/10 dark:border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] transition-all duration-300',
    dark: 'btn-glass-shimmer bg-[#0A0A0A] dark:bg-white hover:bg-black dark:hover:bg-zinc-100 text-white dark:text-[#0A0A0A] border border-black/20 dark:border-white/20 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-300',
    ghost: 'bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white p-0 font-medium tracking-normal normal-case transition-colors duration-200',
  }[variant];

  const baseStyles = 'inline-flex items-center justify-center font-sans rounded-full transition-all group focus-visible:outline-2 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer';

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        external ? (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        )
      )}
    </>
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playHoverSound();
    if (onMouseEnter) (onMouseEnter as any)(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playClickSound();
    if (onClick) (onClick as any)(e);
  };

  if (to) {
    return (
      <Link 
        to={to} 
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        onMouseEnter={handleMouseEnter as any}
        onClick={handleClick as any}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? '_blank' : undefined} 
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        onMouseEnter={handleMouseEnter as any}
        onClick={handleClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      onMouseEnter={handleMouseEnter as any}
      onClick={handleClick as any}
      {...props}
    >
      {content}
    </button>
  );
};

