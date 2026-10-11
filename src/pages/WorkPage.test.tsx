import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WorkPage } from './WorkPage';

describe('WorkPage & Filtering', () => {
  it('renders heading and projects initially', () => {
    render(
      <MemoryRouter>
        <WorkPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /Selected work/i })).toBeDefined();

    // Verify key projects are visible
    expect(screen.getByText('K.A.L.K.I.')).toBeDefined();
    expect(screen.getByText('Ztees')).toBeDefined();
    expect(screen.getByText('Civic Sathi')).toBeDefined();
  });

  it('filters projects when a category button is clicked', () => {
    render(
      <MemoryRouter>
        <WorkPage />
      </MemoryRouter>
    );

    // Click on AI & Software filter button
    const aiButtons = screen.getAllByRole('button', { name: /AI & Software/i });
    expect(aiButtons.length).toBeGreaterThan(0);
    fireEvent.click(aiButtons[0]);

    // K.A.L.K.I. is in AI & Software category, should be visible
    expect(screen.getByText('K.A.L.K.I.')).toBeDefined();

    // Reset back to All Work
    const allButtons = screen.getAllByRole('button', { name: /All Work/i });
    expect(allButtons.length).toBeGreaterThan(0);
    fireEvent.click(allButtons[0]);

    // Ztees should be visible again
    expect(screen.getByText('Ztees')).toBeDefined();
  });
});
