import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToHashOrTop } from '../utils/scroll';

/**
 * Custom hook to manage scrolling behavior on route transitions.
 * Restores scroll to top on navigation, or scrolls to a specific hash if present.
 * Integrates with Lenis smooth scroll and native browser scroll restoration.
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    scrollToHashOrTop(hash);
  }, [pathname, hash]);
};
