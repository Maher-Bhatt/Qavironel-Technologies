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
        className={`p-2 rounded-full border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C7612E] ${
          isDark
            ? 'bg-[#20201E] hover:bg-[#2D2D2A] border-[#2D2D2A] text-[#C7612E]'
            : 'bg-[#F6F3ED] hover:bg-[#DEDAD3] border-[#DEDAD3] text-[#77746F] hover:text-[#171717]'
        } ${className}`}
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#C7612E] transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#77746F] transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.68rem] font-mono transition-all duration-300 border focus-visible:outline-2 focus-visible:outline-[#C7612E] ${
        isDark
          ? 'bg-[#20201E] hover:bg-[#2D2D2A] border-[#2D2D2A] text-[#C7612E]'
          : 'bg-[#F6F3ED] hover:bg-[#DEDAD3] border-[#DEDAD3] text-[#77746F] hover:text-[#171717]'
      } ${className}`}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-[#C7612E] transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-bold tracking-wider">LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-[#77746F] transition-transform duration-300 group-hover:-rotate-12" />
          <span className="font-semibold tracking-wider">DARK</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
