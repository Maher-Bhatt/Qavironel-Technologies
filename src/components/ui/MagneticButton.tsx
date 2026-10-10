import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  pullFactor?: number;
  type?: 'button' | 'submit';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  pullFactor = 0.35,
  type = 'button',
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * pullFactor;
    const deltaY = (e.clientY - centerY) * pullFactor;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    playClickSound();
    onClick?.();
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`relative cursor-pointer transition-colors ${className}`}
    >
      <motion.span
        animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="relative z-10 flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
export default MagneticButton;

