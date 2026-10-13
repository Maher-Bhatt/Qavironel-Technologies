import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Logo } from './Logo';

describe('Logo Component (Brand Identity v2.0)', () => {
  it('renders the official full logo with QAVIRONEL TECHNOLOGIES', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    expect(screen.getByText('QAVIRONEL')).toBeDefined();
    expect(screen.getByText('TECHNOLOGIES')).toBeDefined();
    expect(screen.getByRole('link', { name: /Qavironel Technologies Home/i })).toBeDefined();
  });

  it('renders mark-only variant without text wordmark', () => {
    render(
      <BrowserRouter>
        <Logo variant="mark" />
      </BrowserRouter>
    );

    expect(screen.queryByText('QAVIRONEL')).toBeNull();
    expect(screen.getByRole('link', { name: /Qavironel Technologies Home/i })).toBeDefined();
  });

  it('supports dark theme rendering with approved palette', () => {
    render(
      <BrowserRouter>
        <Logo theme="dark" />
      </BrowserRouter>
    );

    const qavironel = screen.getByText('QAVIRONEL');
    expect(qavironel.className).toContain('text-[#F5F5F0]');
    const technologies = screen.getByText('TECHNOLOGIES');
    expect(technologies.className).toContain('text-[#879B89]');
  });
});
