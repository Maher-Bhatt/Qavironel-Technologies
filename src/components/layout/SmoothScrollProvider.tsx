import React, { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Prevent browser from restoring old scroll positions across SPA route changes
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Respect user's reduced motion accessibility preference + skip on touch/mobile
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Native scroll is already optimized on mobile touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
};
export default SmoothScrollProvider;
