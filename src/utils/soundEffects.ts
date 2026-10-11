// Synthesized Web Audio API micro-acoustics (zero external assets required)

let audioCtx: AudioContext | null = null;
let lastClickTime = 0;
let lastHoverTime = 0;
let lastKeyTime = 0;

// Read initial preference from localStorage (defaults to true)
let soundEnabled = typeof window !== 'undefined'
  ? localStorage.getItem('qavironel_sfx_enabled') !== 'false'
  : true;

/**
 * Initialize and resume Web Audio Context safely across all modern browsers.
 */
export const initAudio = () => {
  if (typeof window === 'undefined') return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  } catch {
    // Ignore browser policy restrictions
  }
};

export const isAudioEnabled = (): boolean => soundEnabled;

/**
 * Explicitly set audio state (useful for tests or global preferences).
 */
export const setAudioEnabled = (enabled: boolean): void => {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('qavironel_sfx_enabled', soundEnabled ? 'true' : 'false');
      window.dispatchEvent(new CustomEvent('qavironel_sfx_change', { detail: { enabled: soundEnabled } }));
    } catch {
      // Ignore storage errors
    }
  }
};

/**
 * Toggle audio on/off, persist to localStorage, dispatch change event, and play confirmation sound.
 */
export const toggleAudio = (): boolean => {
  initAudio();
  soundEnabled = !soundEnabled;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('qavironel_sfx_enabled', soundEnabled ? 'true' : 'false');
      window.dispatchEvent(new CustomEvent('qavironel_sfx_change', { detail: { enabled: soundEnabled } }));
    } catch {
      // Ignore storage errors
    }
  }
  
  // Play immediate feedback sound
  if (soundEnabled) {
    playToggleSound(true);
  } else {
    // Briefly force sound for the "off" sound before muting
    playMuteSound();
  }
  
  return soundEnabled;
};

// --- CORE SYNTHESIS UTILITY ---
const playOscillator = (
  type: OscillatorType,
  freqStart: number,
  freqEnd: number,
  duration: number,
  volStart: number,
  volEnd: number,
  forcePlay = false
) => {
  if (!soundEnabled && !forcePlay) return;
  try {
    initAudio();
    if (!audioCtx) return;

    const executeSound = () => {
      if (!audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
        if (freqStart !== freqEnd) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 20), audioCtx.currentTime + duration);
        }

        gain.gain.setValueAtTime(volStart, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(Math.max(volEnd, 0.0001), audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch {
        // Ignore audio playback error
      }
    };

    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(executeSound).catch(() => {});
    } else {
      executeSound();
    }
  } catch {
    // Ignore permissions/context limits
  }
};

// --- DISTINCT SOUND PROFILES ---

/**
 * Crisp, tactile mechanical micro-click for buttons, links, and switches.
 */
export const playClickSound = () => {
  const now = Date.now();
  if (now - lastClickTime < 35) return; // Prevent double trigger
  lastClickTime = now;

  playOscillator('sine', 1050, 320, 0.038, 0.16, 0.001);
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(6); } catch {}
  }
};

/**
 * Soft, subtle glass blip on hover. Throttled to prevent acoustic clutter.
 */
export const playHoverSound = () => {
  const now = Date.now();
  if (now - lastHoverTime < 60) return;
  lastHoverTime = now;

  playOscillator('sine', 1200, 1500, 0.035, 0.05, 0.001);
};

/**
 * Clean tactile index tick for tabs, filter chips, and segmented controls.
 */
export const playTabSound = () => {
  playOscillator('sine', 780, 520, 0.04, 0.14, 0.001);
};

/**
 * Soft mechanical key tick for typing inside inputs and textareas.
 */
export const playKeySound = () => {
  const now = Date.now();
  if (now - lastKeyTime < 35) return;
  lastKeyTime = now;

  playOscillator('sine', 480, 320, 0.02, 0.045, 0.001);
};

/**
 * Uplifting harmonic sound when toggling SFX ON.
 */
export const playToggleSound = (enabled: boolean) => {
  if (enabled) {
    playOscillator('sine', 520, 780, 0.08, 0.18, 0.001, true);
    setTimeout(() => {
      playOscillator('sine', 780, 1100, 0.11, 0.18, 0.001, true);
    }, 60);
  }
};

/**
 * Muted settling tone when toggling SFX OFF.
 */
const playMuteSound = () => {
  playOscillator('sine', 480, 220, 0.08, 0.14, 0.001, true);
};

/**
 * Subtle pneumatic opening sound for modals and drawers.
 */
export const playModalOpenSound = () => {
  playOscillator('sine', 260, 580, 0.09, 0.14, 0.001);
};

/**
 * Soft closing sound for modals and drawers.
 */
export const playModalCloseSound = () => {
  playOscillator('sine', 520, 240, 0.07, 0.12, 0.001);
};

/**
 * Harmonic ascending chime (C5 -> E5 -> G5) for successful form submissions.
 */
export const playSuccessSound = () => {
  if (!soundEnabled) return;
  playOscillator('sine', 523.25, 523.25, 0.12, 0.14, 0.001); // C5
  setTimeout(() => {
    playOscillator('sine', 659.25, 659.25, 0.14, 0.16, 0.001); // E5
  }, 85);
  setTimeout(() => {
    playOscillator('sine', 783.99, 783.99, 0.28, 0.18, 0.001); // G5
  }, 170);
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate([10, 30, 10]); } catch {}
  }
};

/**
 * Low double-tap bump for form validation errors.
 */
export const playErrorSound = () => {
  playOscillator('square', 180, 90, 0.12, 0.12, 0.001);
  setTimeout(() => {
    playOscillator('square', 130, 65, 0.14, 0.12, 0.001);
  }, 90);
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(40); } catch {}
  }
};

/**
 * Gentle ambient whoosh during page navigation transitions.
 */
export const playTransitionSound = () => {
  playOscillator('sine', 260, 130, 0.28, 0.06, 0.001);
};

/**
 * Global micro-acoustics listener: automatically binds click, hover & type sounds to ALL
 * interactive controls across the entire application (buttons, links, selects, tabs, inputs).
 */
export const setupGlobalSoundListeners = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  // Unlock AudioContext on first user interaction anywhere
  const unlockAudio = () => {
    initAudio();
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('mousedown', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio, { passive: true });
  window.addEventListener('keydown', unlockAudio, { passive: true });
  window.addEventListener('touchstart', unlockAudio, { passive: true });
  window.addEventListener('mousedown', unlockAudio, { passive: true });

  // Delegated click listener for all interactive elements
  const handleDocumentClick = (e: MouseEvent) => {
    if (!soundEnabled) return;
    const target = e.target as Element | null;
    if (!target) return;

    // Check if target or parent is an interactive control
    const interactive = target.closest<HTMLElement>(
      'button, a, [role="button"], [role="tab"], [role="menuitem"], input[type="submit"], input[type="button"], input[type="reset"], input[type="checkbox"], input[type="radio"], select, summary, [data-sound="click"], .cursor-pointer'
    );

    if (interactive) {
      if (interactive.getAttribute('data-no-sound') === 'true') return;
      playClickSound();
    }
  };

  // Delegated hover listener for pointer/mouse users
  const handleDocumentPointerOver = (e: PointerEvent) => {
    if (!soundEnabled || e.pointerType === 'touch') return;
    const target = e.target as Element | null;
    if (!target) return;

    const interactive = target.closest<HTMLElement>(
      'button, a, [role="button"], [role="tab"], [data-sound-hover="true"]'
    );

    if (interactive && interactive.getAttribute('data-no-sound') !== 'true') {
      playHoverSound();
    }
  };

  // Delegated typing feedback for text inputs and textareas
  const handleDocumentInput = (e: Event) => {
    if (!soundEnabled) return;
    const target = e.target as HTMLElement | null;
    if (!target) return;

    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      playKeySound();
    }
  };

  document.addEventListener('click', handleDocumentClick, { capture: true, passive: true });
  document.addEventListener('pointerover', handleDocumentPointerOver, { capture: true, passive: true });
  document.addEventListener('input', handleDocumentInput, { capture: true, passive: true });

  return () => {
    document.removeEventListener('click', handleDocumentClick, { capture: true });
    document.removeEventListener('pointerover', handleDocumentPointerOver, { capture: true });
    document.removeEventListener('input', handleDocumentInput, { capture: true });
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('mousedown', unlockAudio);
  };
};
