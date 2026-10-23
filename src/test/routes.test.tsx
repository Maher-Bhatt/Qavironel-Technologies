import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { WorkPage } from '../pages/WorkPage';
import { CaseStudyPage } from '../pages/CaseStudyPage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';
import { LegalPage } from '../pages/LegalPage';
import { NotFoundPage } from '../pages/NotFoundPage';

describe('Route Smoke Tests', () => {
  it('renders HomePage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders WorkPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/work']}>
        <Routes>
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders CaseStudyPage for existing project', () => {
    render(
      <MemoryRouter initialEntries={['/work/kalki']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText('K.A.L.K.I.')).toBeDefined();
  });

  it('renders CaseStudyPage fallback for non-existent slug', () => {
    render(
      <MemoryRouter initialEntries={['/work/unknown-project-xyz']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Case Study Not Found/i)).toBeDefined();
  });

  it('renders AboutPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders ServicesPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders ContactPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders LegalPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/privacy']}>
        <Routes>
          <Route path="/privacy" element={<LegalPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('renders CaseStudyPage for Ztees e-commerce platform', () => {
    render(
      <MemoryRouter initialEntries={['/work/ztees']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText('Ztees')).toBeDefined();
  });

  it('renders CaseStudyPage for Classic Infrastructure Projects', () => {
    render(
      <MemoryRouter initialEntries={['/work/classic-infrastructure']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getAllByText(/Classic Infrastructure Projects/i).length).toBeGreaterThan(0);
  });

  it('renders CaseStudyPage for Civic Sathi', () => {
    render(
      <MemoryRouter initialEntries={['/work/civic-sathi']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getAllByText(/Civic Sathi/i).length).toBeGreaterThan(0);
  });

  it('retires the former CyberGuard project route from the portfolio', () => {
    render(
      <MemoryRouter initialEntries={['/work/socialsafe']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByRole('heading', { name: /Case Study Not Found/i })).toBeDefined();
  });

  it('renders CaseStudyPage for ITM Notes Portal', () => {
    render(
      <MemoryRouter initialEntries={['/work/itm-notes']}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getAllByText(/ITM Notes/i).length).toBeGreaterThan(0);
  });

  it('renders LegalPage for /terms route', () => {
    render(
      <MemoryRouter initialEntries={['/terms']}>
        <Routes>
          <Route path="/terms" element={<LegalPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getAllByText(/Terms of Service/i).length).toBeGreaterThan(0);
  });

  it('renders NotFoundPage route without error', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-404-url']}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeDefined();
  });
});
