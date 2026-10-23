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
    <Component className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <span key={lineIdx} className="block">
            <motion.span
              initial={{ opacity: 0, y: '0.28em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + lineIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block will-change-transform"
            >
              {words.map((word, wordIdx) => {
                const isHighlight = highlights.some((hw) =>
                  word.toLowerCase().includes(hw)
                );
                return (
                  <span key={wordIdx}>
                    <span className={isHighlight ? 'reveal-headline__highlight' : ''}>
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

