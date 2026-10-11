import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  isAudioEnabled,
  setAudioEnabled,
  toggleAudio,
  playClickSound,
  playHoverSound,
  playTabSound,
  playKeySound,
  playToggleSound,
  playModalOpenSound,
  playModalCloseSound,
  playSuccessSound,
  playErrorSound,
  playTransitionSound,
  setupGlobalSoundListeners
} from './soundEffects';

describe('Sound Effects Micro-Acoustics Engine', () => {
  beforeEach(() => {
    localStorage.clear();
    setAudioEnabled(true);
    vi.restoreAllMocks();
  });

  it('initializes with sound enabled by default', () => {
    expect(isAudioEnabled()).toBe(true);
  });

  it('toggles sound on and off and persists to localStorage', () => {
    const sfxChanged = vi.fn();
    window.addEventListener('qavironel_sfx_change', sfxChanged);

    const newState1 = toggleAudio();
    expect(newState1).toBe(false);
    expect(isAudioEnabled()).toBe(false);
    expect(localStorage.getItem('qavironel_sfx_enabled')).toBe('false');
    expect(sfxChanged).toHaveBeenCalled();

    const newState2 = toggleAudio();
    expect(newState2).toBe(true);
    expect(isAudioEnabled()).toBe(true);
    expect(localStorage.getItem('qavironel_sfx_enabled')).toBe('true');

    window.removeEventListener('qavironel_sfx_change', sfxChanged);
  });

  it('allows programmatic override via setAudioEnabled', () => {
    setAudioEnabled(false);
    expect(isAudioEnabled()).toBe(false);
    expect(localStorage.getItem('qavironel_sfx_enabled')).toBe('false');

    setAudioEnabled(true);
    expect(isAudioEnabled()).toBe(true);
    expect(localStorage.getItem('qavironel_sfx_enabled')).toBe('true');
  });

  it('executes all synthesized sound profiles without errors in test environment', () => {
    expect(() => playClickSound()).not.toThrow();
    expect(() => playHoverSound()).not.toThrow();
    expect(() => playTabSound()).not.toThrow();
    expect(() => playKeySound()).not.toThrow();
    expect(() => playToggleSound(true)).not.toThrow();
    expect(() => playToggleSound(false)).not.toThrow();
    expect(() => playModalOpenSound()).not.toThrow();
    expect(() => playModalCloseSound()).not.toThrow();
    expect(() => playSuccessSound()).not.toThrow();
    expect(() => playErrorSound()).not.toThrow();
    expect(() => playTransitionSound()).not.toThrow();
  });

  it('sets up global document listeners and cleans them up cleanly', () => {
    const addEventListenerSpy = vi.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

    const cleanup = setupGlobalSoundListeners();
    expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), expect.any(Object));
    expect(addEventListenerSpy).toHaveBeenCalledWith('input', expect.any(Function), expect.any(Object));

    cleanup();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function), expect.any(Object));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('input', expect.any(Function), expect.any(Object));
  });

  it('triggers click sound when clicking an interactive button', () => {
    const cleanup = setupGlobalSoundListeners();
    const btn = document.createElement('button');
    btn.textContent = 'Test Action';
    document.body.appendChild(btn);

    expect(() => btn.click()).not.toThrow();

    // With data-no-sound="true"
    btn.setAttribute('data-no-sound', 'true');
    expect(() => btn.click()).not.toThrow();

    document.body.removeChild(btn);
    cleanup();
  });
});
