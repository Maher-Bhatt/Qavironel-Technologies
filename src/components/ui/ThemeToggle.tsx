import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { playClickSound } from '../../utils/soundEffects';

interface ThemeToggleProps {
  className?: string;
  variant?: 'pill' | 'icon';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'pill',
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    playClickSound();
    toggleTheme();
  };

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className={`p-2 rounded-full border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-white ${
          isDark
            ? 'bg-[#141414] hover:bg-zinc-800 border-white/10 text-white'
            : 'bg-white hover:bg-zinc-50 border-black/10 text-zinc-600 hover:text-black'
        } ${className}`}
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-white transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-600 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.68rem] font-mono transition-all duration-300 border focus-visible:outline-2 focus-visible:outline-[#0A0A0A] dark:focus-visible:outline-white ${
        isDark
          ? 'bg-[#141414] hover:bg-zinc-800 border-white/10 text-white'
          : 'bg-white hover:bg-zinc-50 border-black/10 text-zinc-600 hover:text-black'
      } ${className}`}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-bold tracking-wider">LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 group-hover:-rotate-12" />
          <span className="font-semibold tracking-wider">DARK</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
