import { useEffect } from 'react';

/**
 * Custom hook to inject dynamic mouse coordinates into CSS custom properties.
 * Used for the ambient radial spotlight effects on `.glass-card` elements.
 */
export const useAmbientCursor = () => {
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('.glass-card') as HTMLElement;
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);
};
