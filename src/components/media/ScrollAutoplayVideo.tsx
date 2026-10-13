import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export interface ScrollAutoplayVideoProps {
  src: string;
  poster?: string;
  alt: string;
  badgeText?: string;
  aspectRatio?: string;
  className?: string;
  overlayGradient?: boolean;
}

export const ScrollAutoplayVideo: React.FC<ScrollAutoplayVideoProps> = ({
  src,
  poster,
  alt,
  badgeText = 'LIVE RUNTIME',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  overlayGradient = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [userPaused, setUserPaused] = useState<boolean>(false);

  // Set defaultMuted and muted for mobile WebKit & modern browser autoplay security policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [src]);

  // Safe playback trigger
  const attemptPlay = useCallback(() => {
    if (!videoRef.current || userPaused) return;
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = isMuted;

    try {
      const playPromise = videoRef.current.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay policy prevented playback until user interaction or muted
            setIsPlaying(false);
          });
      }
    } catch {
      setIsPlaying(false);
    }
  }, [isMuted, userPaused]);

  // Safe pause trigger
  const attemptPause = useCallback(() => {
    if (!videoRef.current) return;
    try {
      videoRef.current.pause();
      setIsPlaying(false);
    } catch {
      // Ignored
    }
  }, []);

  // IntersectionObserver: automatically starts playback when the project enters the screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            if (!userPaused) {
              attemptPlay();
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            attemptPause();
          }
        });
      },
      {
        threshold: [0, 0.15, 0.35, 0.6],
        rootMargin: '0px 0px -5% 0px',
      }
    );

    observer.observe(container);

    // Pause on tab visibility change
    const handleVisibility = () => {
      if (document.hidden) {
        attemptPause();
      } else if (!userPaused) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [attemptPlay, attemptPause, userPaused]);

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  // Toggle user audio
  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Manual Play / Pause toggle
  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      setUserPaused(false);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black rounded-2xl select-none group/player ${aspectRatio} ${className}`}
    >
      {/* Poster Image fallback */}
      {poster && (
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isVideoLoaded && isPlaying ? 'opacity-0 scale-102' : 'opacity-100 scale-100'
          }`}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        onLoadedData={() => setIsVideoLoaded(true)}
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle vignette/sheen */}
      {overlayGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      )}

      {/* Top Left Live Status Pill */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[0.65rem] font-mono text-white pointer-events-none transition-all">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            isPlaying ? 'bg-white animate-pulse' : 'bg-white/40'
          }`}
        />
        <span className="tracking-wider uppercase font-semibold">
          {badgeText} · {isPlaying ? 'PLAYING' : 'READY'}
        </span>
      </div>

      {/* Top Right Quick Controls */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlayPause}
          className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 active:scale-95 shadow-sm"
          aria-label={isPlaying ? 'Pause video preview' : 'Play video preview'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>

        {/* Audio Mute/Unmute Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 active:scale-95 shadow-sm"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Bottom Timeline Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/15 z-20 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-150 ease-linear shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
