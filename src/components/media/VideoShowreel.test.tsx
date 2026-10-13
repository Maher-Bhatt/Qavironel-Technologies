import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { VideoShowreel } from './VideoShowreel';

describe('VideoShowreel Continuous Playlist Carousel', () => {
  beforeEach(() => {
    // Mock HTMLMediaElement play & pause
    vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
    vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});

    class MockIntersectionObserver {
      callback: (entries: any[]) => void;
      constructor(callback: (entries: any[]) => void) {
        this.callback = callback;
      }
      observe() {
        this.callback([{ isIntersecting: true, intersectionRatio: 1 }]);
      }
      unobserve() {}
      disconnect() {}
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders initial channel 01 as playing now in continuous playlist', () => {
    const { container } = render(<VideoShowreel />);
    expect(screen.getByText('CONTINUOUS PLAYLIST · 1/3')).toBeDefined();
    expect(screen.getAllByText('Engineering Craftsmanship & Momentum').length).toBeGreaterThanOrEqual(1);
    
    const video = container.querySelector('video') as HTMLVideoElement;
    expect(video).toBeDefined();
    expect(video.getAttribute('src')).toBe('/videos/tech-atmosphere.mp4');
  });

  it('automatically advances from video 1 -> 2 -> 3 -> 1 on video ended event', () => {
    const { container } = render(<VideoShowreel />);

    // Video 1 -> Video 2
    let video = container.querySelector('video') as HTMLVideoElement;
    expect(video.getAttribute('src')).toBe('/videos/tech-atmosphere.mp4');
    expect(screen.getByText('CONTINUOUS PLAYLIST · 1/3')).toBeDefined();

    act(() => {
      fireEvent.ended(video);
    });

    expect(screen.getByText('CONTINUOUS PLAYLIST · 2/3')).toBeDefined();
    expect(screen.getAllByText('Full-Stack Platform & SaaS Architecture').length).toBeGreaterThanOrEqual(1);
    video = container.querySelector('video') as HTMLVideoElement;
    expect(video.getAttribute('src')).toBe('/videos/hero-showreel.mp4');

    // Video 2 -> Video 3
    act(() => {
      fireEvent.ended(video);
    });

    expect(screen.getByText('CONTINUOUS PLAYLIST · 3/3')).toBeDefined();
    expect(screen.getAllByText('Technical HUD & Spatial Computer Vision').length).toBeGreaterThanOrEqual(1);
    video = container.querySelector('video') as HTMLVideoElement;
    expect(video.getAttribute('src')).toBe('/videos/project-reel.mp4');

    // Video 3 -> loops back to Video 1
    act(() => {
      fireEvent.ended(video);
    });

    expect(screen.getByText('CONTINUOUS PLAYLIST · 1/3')).toBeDefined();
    expect(screen.getAllByText('Engineering Craftsmanship & Momentum').length).toBeGreaterThanOrEqual(1);
    video = container.querySelector('video') as HTMLVideoElement;
    expect(video.getAttribute('src')).toBe('/videos/tech-atmosphere.mp4');
  });

  it('allows manual channel switching by clicking playlist buttons', () => {
    const { container } = render(<VideoShowreel />);

    // Click on CH 02
    const switchButtons = screen.getAllByRole('button');
    const ch2Button = switchButtons.find(b => b.textContent?.includes('CH 02'));
    expect(ch2Button).toBeDefined();

    act(() => {
      fireEvent.click(ch2Button!);
    });

    expect(screen.getByText('CONTINUOUS PLAYLIST · 2/3')).toBeDefined();
    const video = container.querySelector('video') as HTMLVideoElement;
    expect(video.getAttribute('src')).toBe('/videos/hero-showreel.mp4');
  });
});
