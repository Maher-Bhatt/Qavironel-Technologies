import React from 'react';
import { motion } from 'framer-motion';

interface RevealHeadlineProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
  highlightWord?: string | string[];
}

export const RevealHeadline: React.FC<RevealHeadlineProps> = ({
  children,
  className = '',
  as = 'h1',
  delay = 0.1,
  highlightWord,
}) => {
  const lines = children.split('\n');
  const Component = motion[as];

  const highlights = Array.isArray(highlightWord)
    ? highlightWord.map((w) => w.toLowerCase())
    : highlightWord
    ? [highlightWord.toLowerCase()]
    : [];

  return (
    <Component className={`overflow-hidden ${className}`}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <span key={lineIdx} className="block overflow-hidden py-0.5 sm:py-1">
            <motion.span
              initial={{ y: '120%', rotate: 1.5 }}
              animate={{ y: '0%', rotate: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + lineIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block origin-bottom-left"
            >
              {words.map((word, wordIdx) => {
                const isHighlight = highlights.some((hw) =>
                  word.toLowerCase().includes(hw)
                );
                return (
                  <span key={wordIdx}>
                    <span className={isHighlight ? 'text-black dark:text-white' : ''}>
                      {word}
                    </span>
                    {wordIdx < words.length - 1 && ' '}
                  </span>
                );
              })}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
};
export default RevealHeadline;

