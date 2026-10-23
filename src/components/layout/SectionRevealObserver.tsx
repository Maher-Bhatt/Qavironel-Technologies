import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Reveals page sections as they enter the viewport without hiding content from assistive tech. */
export const SectionRevealObserver: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.querySelector('main');
    if (!root) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer: IntersectionObserver | undefined;

    if (!reducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('studio-section-reveal--visible');
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    }

    const registerSections = () => {
      root.querySelectorAll<HTMLElement>('.site-page section:not([data-studio-reveal])').forEach((section) => {
        section.dataset.studioReveal = 'true';
        section.classList.add('studio-section-reveal');
        if (observer) observer.observe(section);
        else section.classList.add('studio-section-reveal--visible');
      });
    };

    registerSections();
    const mutations = new MutationObserver(registerSections);
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
};

export default SectionRevealObserver;
