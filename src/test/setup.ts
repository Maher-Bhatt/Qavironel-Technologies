import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Polyfills for JSDOM test environment
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: () => false,
    }),
  });

  window.scrollTo = vi.fn();
  if (window.history) {
    (window.history as any).scrollRestoration = 'auto';
  }
}

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

// Mock Three.js WebGLRenderer & PMREMGenerator constructors for headless jsdom test runs
class MockWebGLRenderer {
  setSize = vi.fn();
  setPixelRatio = vi.fn();
  render = vi.fn();
  dispose = vi.fn();
  compile = vi.fn();
  domElement = document.createElement('canvas');
  toneMapping = 0;
  toneMappingExposure = 1;
}

class MockPMREMGenerator {
  compileEquirectangularShader = vi.fn();
  fromScene = vi.fn().mockReturnValue({ texture: {} });
  dispose = vi.fn();
}

vi.mock('three', async (importOriginal) => {
  const actual = await importOriginal<typeof import('three')>();
  return {
    ...actual,
    WebGLRenderer: MockWebGLRenderer,
    PMREMGenerator: MockPMREMGenerator,
  };
});
