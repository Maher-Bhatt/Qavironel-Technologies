import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent = () => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <span data-testid="is-dark">{isDark ? 'true' : 'false'}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  );
};

describe('ThemeContext (Light Theme by Default)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to light theme when no preference is stored', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('light');
    expect(screen.getByTestId('is-dark').textContent).toBe('false');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('does NOT switch to dark mode even if OS prefers-color-scheme is dark', () => {
    // Mock matchMedia returning matches: true for dark
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: query.includes('dark'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Must still be light because default is strictly light mode
    expect(screen.getByTestId('current-theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('respects stored dark preference if user explicitly set it previously', () => {
    localStorage.setItem('qavironel_theme', 'dark');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
    expect(screen.getByTestId('is-dark').textContent).toBe('true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles correctly between light and dark and persists to localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('light');

    // Click toggle -> switches to dark
    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('qavironel_theme')).toBe('dark');

    // Click toggle again -> switches back to light
    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('current-theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('qavironel_theme')).toBe('light');
  });
});
