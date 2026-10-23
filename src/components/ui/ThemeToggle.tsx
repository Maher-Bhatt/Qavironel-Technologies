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
        className={`p-2.5 rounded-full border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#161616] dark:focus-visible:outline-[#D4D4D4] ${
          isDark
            ? 'bg-white/[0.04] hover:bg-white/10 border-white/15 text-[#F7F7F7]'
            : 'bg-[#F7F7F7] hover:bg-[#EEEEEE] border-[#D8D8D8] text-[#161616] hover:text-[#0A0A0A]'
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
      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.68rem] font-sans font-semibold tracking-[0.08em] transition-all duration-300 border focus-visible:outline-2 focus-visible:outline-[#161616] dark:focus-visible:outline-[#D4D4D4] ${
        isDark
          ? 'bg-white/[0.04] hover:bg-white/10 border-white/15 text-[#F7F7F7]'
          : 'bg-[#F7F7F7] hover:bg-[#EEEEEE] border-[#D8D8D8] text-[#161616] hover:text-[#0A0A0A]'
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
