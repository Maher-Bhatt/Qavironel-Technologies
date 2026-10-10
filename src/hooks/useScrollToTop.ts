import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to manage scrolling behavior on route transitions.
 * Restores scroll to top on navigation, or scrolls to a specific hash if present.
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
};
