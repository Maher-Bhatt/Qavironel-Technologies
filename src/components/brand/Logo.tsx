import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'wordmark';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  asLink?: boolean;
}

const BRAND_ASSETS = '/brand/identity-v2';

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme: explicitTheme,
  className = '',
  size = 'md',
  asLink = true,
}) => {
  let contextTheme = 'light';
  try {
    const context = useTheme();
    if (context) contextTheme = context.theme;
  } catch {
    // Use the light logo outside of the application theme provider.
  }

  const isDark = (explicitTheme || contextTheme) === 'dark';
  const asset = variant === 'mark'
    ? `${BRAND_ASSETS}/${isDark ? 'qavironel-mark-dark.svg' : 'qavironel-mark-forest.svg'}`
    : variant === 'wordmark'
      ? `${BRAND_ASSETS}/${isDark ? 'qavironel-wordmark-dark.svg' : 'qavironel-wordmark-light.svg'}`
      : `${BRAND_ASSETS}/${isDark ? 'qavironel-logo-horizontal-dark.svg' : 'qavironel-logo-horizontal-light.svg'}`;

  const imageClass = `brand-logo brand-logo--${variant} brand-logo--${size}`;
  const image = <img className={imageClass} src={asset} alt="" aria-hidden="true" />;

  if (!asLink) {
    return (
      <span className={`brand-logo-lockup ${className}`} role="img" aria-label="Qavironel Technologies — Ideas. Engineered.">
        {image}
      </span>
    );
  }

  return (
    <Link
      to="/"
      className={`brand-logo-lockup ${className}`}
      aria-label="Qavironel Technologies home"
    >
      {image}
    </Link>
  );
};

export default Logo;
