/**
 * Scroll management utilities for Single Page Application route transitions.
 * Integrates directly with Lenis smooth scrolling, native browser scrolling,
 * and Framer Motion AnimatePresence life cycles to ensure pages always load from the top.
 */

export function resetScrollToTop(): void {
  if (typeof window === 'undefined') return;

  // 1. Enforce manual scroll restoration so browsers do not restore previous page offsets
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // 2. Reset Lenis virtual scroll engine if active
  const lenis = (window as any).lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(0, { immediate: true, force: true });
  }

  // 3. Reset native document and window positions immediately
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }
  if (document.body) {
    document.body.scrollTop = 0;
  }
}

/**
 * Resets scroll immediately and schedules follow-up checks across layout frames.
 * Critical for asynchronous route transitions (e.g. AnimatePresence mode="wait", React.lazy).
 */
export function enforceScrollTop(): void {
  resetScrollToTop();

  if (typeof window === 'undefined') return;

  // Re-assert on next requestAnimationFrame
  requestAnimationFrame(() => {
    resetScrollToTop();
  });

  // Re-assert after brief timeout in case new components or suspense boundaries complete mounting
  setTimeout(() => {
    resetScrollToTop();
  }, 30);

  setTimeout(() => {
    resetScrollToTop();
  }, 100);
}

/**
 * Safely scrolls to a target DOM hash or falls back to top.
 */
export function scrollToHashOrTop(hash?: string): void {
  if (typeof window === 'undefined') return;

  if (hash) {
    // Wait for the new route's DOM tree to mount
    setTimeout(() => {
      try {
        const element = document.querySelector(hash);
        if (element) {
          const lenis = (window as any).lenis;
          if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(element, { offset: -90 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      } catch (err) {
        // Fall through to top if selector is invalid
      }
      enforceScrollTop();
    }, 120);
    return;
  }

  enforceScrollTop();
}
