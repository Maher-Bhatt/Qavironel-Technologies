import React, { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { enforceScrollTop } from '../../utils/scroll';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition wrapper to provide ultra-smooth dissolving animations between routes.
 * Implements a high-end fade-in / fade-out with a very subtle scale effect.
 * Enforces scroll-to-top immediately upon route entry so pages always start from the top.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useLayoutEffect(() => {
    // If no specific anchor hash is in the URL, guarantee the new page loads from the very top
    if (typeof window !== 'undefined' && !window.location.hash) {
      enforceScrollTop();
    }
  }, []);

  useEffect(() => {
    // Navigation is completely silent to avoid scroll/transition sound
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ 
        type: 'tween', 
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for premium feel
        duration: 0.35 
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
