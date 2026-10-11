import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { resetScrollToTop, enforceScrollTop, scrollToHashOrTop } from './scroll';

describe('Scroll Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (window as any).lenis = undefined;
  });

  afterEach(() => {
    (window as any).lenis = undefined;
  });

  it('resets window scroll and document element scroll to top', () => {
    resetScrollToTop();

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    expect(document.documentElement.scrollTop).toBe(0);
    expect(document.body.scrollTop).toBe(0);
    expect(window.history.scrollRestoration).toBe('manual');
  });

  it('resets Lenis virtual scroll when lenis is attached to window', () => {
    const mockLenis = {
      scrollTo: vi.fn(),
    };
    (window as any).lenis = mockLenis;

    resetScrollToTop();

    expect(mockLenis.scrollTo).toHaveBeenCalledWith(0, {
      immediate: true,
      force: true,
    });
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('enforceScrollTop triggers immediate reset and schedules frame resets', async () => {
    vi.useFakeTimers();
    const mockLenis = {
      scrollTo: vi.fn(),
    };
    (window as any).lenis = mockLenis;

    enforceScrollTop();

    expect(mockLenis.scrollTo).toHaveBeenCalledTimes(1);

    // Fast forward timers
    vi.advanceTimersByTime(150);

    expect(mockLenis.scrollTo.mock.calls.length).toBeGreaterThanOrEqual(2);
    vi.useRealTimers();
  });

  it('scrollToHashOrTop falls back to enforceScrollTop when no hash is given', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');
    scrollToHashOrTop();
    expect(scrollToSpy).toHaveBeenCalled();
  });
});
