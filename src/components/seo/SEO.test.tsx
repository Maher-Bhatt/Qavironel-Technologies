import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { SEO } from './SEO';

describe('SEO component', () => {
  it('renders correct page title and canonical URL in head', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/work/kalki']}>
          <SEO 
            title="K.A.L.K.I. — Case Study" 
            description="Voice-capable desktop assistant with tactical HUD"
          />
        </MemoryRouter>
      </HelmetProvider>
    );

    // In JSDOM with react-helmet-async, Helmet updates document.title and head tags
    expect(document.title).toContain('K.A.L.K.I. — Case Study');
    
    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta?.getAttribute('content')).toContain('Voice-capable desktop assistant');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    expect(canonicalLink?.getAttribute('href')).toBe('https://qavironel.com/work/kalki');

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute('content')).toContain('K.A.L.K.I. — Case Study');
  });

  it('renders noindex directive when requested', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/404']}>
          <SEO title="Page Not Found" noIndex />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(document.title).toContain('Page Not Found');
    const robotsMeta = document.querySelector('meta[name="robots"]');
    expect(robotsMeta?.getAttribute('content')).toContain('noindex, nofollow');
  });
});
