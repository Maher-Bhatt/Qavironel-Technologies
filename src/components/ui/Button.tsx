import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

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
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider uppercase gap-1.5',
    md: 'px-6 py-3.5 text-xs font-semibold tracking-widest uppercase gap-2',
    lg: 'px-8 py-4 text-sm font-semibold tracking-widest uppercase gap-2.5',
  }[size];

  const variantStyles = {
    primary: 'bg-[#C7612E] hover:bg-[#98431F] text-[#FFFFFF] shadow-xs transition-all duration-200 active:scale-[0.98]',
    secondary: 'bg-white hover:bg-[#F5F2EB] text-[#171717] border border-[#E5E2DC] hover:border-[#171717] shadow-xs transition-all duration-200 active:scale-[0.98]',
    dark: 'bg-[#171717] hover:bg-[#20201E] text-white border border-[#171717] hover:border-[#C7612E] transition-all duration-200 active:scale-[0.98]',
    ghost: 'bg-transparent text-[#6E6B65] hover:text-[#C7612E] p-0 font-medium tracking-normal normal-case transition-colors duration-200',
  }[variant];

  const baseStyles = 'inline-flex items-center justify-center font-sans rounded-none transition-all group focus-visible:outline-2 focus-visible:outline-[#C7612E] focus-visible:outline-offset-2';

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

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
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
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {content}
    </button>
  );
};
