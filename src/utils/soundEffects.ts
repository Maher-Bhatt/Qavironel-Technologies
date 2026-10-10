// Synthesized Web Audio API micro-acoustics (zero external assets required)

let audioCtx: AudioContext | null = null;
let soundEnabled = false; // Default to subtle / opt-in

export const initAudio = () => {
  if (typeof window === 'undefined') return;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
};

export const isAudioEnabled = (): boolean => soundEnabled;

export const toggleAudio = (): boolean => {
  initAudio();
  soundEnabled = !soundEnabled;
  if (soundEnabled && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return soundEnabled;
};

export const playClickSound = () => {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High-pitch subtle click
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.015);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime); // Very quiet tactile tick
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.015);

    // Optional haptic pulse on mobile devices
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(6);
    }
  } catch {
    // Ignore audio permission edge cases
  }
};
