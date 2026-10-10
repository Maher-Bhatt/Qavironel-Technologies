// Synthesized Web Audio API micro-acoustics (zero external assets required)

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

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

// --- CORE UTILITY ---
const playOscillator = (
  type: OscillatorType,
  freqStart: number,
  freqEnd: number,
  duration: number,
  volStart: number,
  volEnd: number
) => {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
    if (freqStart !== freqEnd) {
      osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
    }

    gain.gain.setValueAtTime(volStart, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(volEnd, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Ignore permissions/context limits
  }
};

// --- DISTINCT SOUND PROFILES ---

export const playClickSound = () => {
  // A sharp, clean high-tech "tick"
  playOscillator('sine', 980, 440, 0.02, 0.06, 0.001);
  if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(5);
};

export const playHoverSound = () => {
  // Extremely subtle glass-like "tink" for hovering over cards/links
  playOscillator('triangle', 1200, 1600, 0.05, 0.015, 0.001);
};

export const playSuccessSound = () => {
  // Pleasant rising dual-tone chime (Form submissions)
  if (!soundEnabled) return;
  playOscillator('sine', 523.25, 523.25, 0.1, 0.05, 0.001); // C5
  setTimeout(() => {
    playOscillator('sine', 659.25, 659.25, 0.3, 0.06, 0.001); // E5
  }, 100);
  if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([10, 30, 10]);
};

export const playErrorSound = () => {
  // Muted low thud (Form errors)
  playOscillator('square', 150, 80, 0.15, 0.04, 0.001);
  if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(40);
};

export const playTransitionSound = () => {
  // Deep ambient "whoosh" for page routes
  playOscillator('sine', 200, 100, 0.4, 0.02, 0.001);
};
