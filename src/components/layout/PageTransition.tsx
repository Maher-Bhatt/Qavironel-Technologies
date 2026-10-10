import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition wrapper to provide ultra-smooth dissolving animations between routes.
 * Implements a high-end fade-in / fade-out with a very subtle scale effect.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ 
        type: 'tween', 
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for premium feel
        duration: 0.5 
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
