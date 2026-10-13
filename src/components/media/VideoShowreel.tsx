import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Activity, Layers } from 'lucide-react';

interface VideoChannel {
  id: string;
  channelNum: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
  poster: string;
  duration: string;
  tags: string[];
}

export const VideoShowreel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const channels: VideoChannel[] = [
    {
      id: 'kalki-tactical',
      channelNum: 'CH 01',
      title: 'K.A.L.K.I. Desktop AI Assistant',
      subtitle: 'Local-first neural runtime, voice command pipeline & tactical HUD v1.0.4',
      category: 'APPLIED AI SYSTEMS',
      src: '/videos/kalki-video.mp4',
      poster: '/images/projects/kalki-launch.png',
      duration: '0:22',
      tags: ['Local LLaMA', 'Groq Multi-LLM', 'VOSK Audio', 'DPAPI Vault'],
    },
    {
      id: 'platform-build',
      channelNum: 'CH 02',
      title: 'Full-Stack Platform & SaaS Architecture',
      subtitle: 'Recorded client platform sprint demo & responsive user flows',
      category: 'PRODUCTION RUNTIME',
      src: '/videos/hero-showreel.mp4',
      poster: '/videos/hero-showreel-poster.webp',
      duration: '0:30',
      tags: ['React 19', 'TypeScript', 'FastAPI', 'High-Performance'],
    },
    {
      id: 'project-reel',
      channelNum: 'CH 03',
      title: 'Tactical HUD & Spatial Computer Vision',
      subtitle: 'Real-time object segmentation, token streaming & UI interaction',
      category: 'COMPUTER VISION',
      src: '/videos/project-reel.mp4',
      poster: '/videos/project-reel-poster.webp',
      duration: '0:15',
      tags: ['OpenCV', 'YOLOv8', 'Spatial Tracking', 'Local Inference'],
    },
    {
      id: 'studio-atmosphere',
      channelNum: 'CH 04',
      title: 'Engineering Craftsmanship & Momentum',
      subtitle: 'Design-led execution, micro-interactions & hardware synergy',
      category: 'STUDIO CRAFT',
      src: '/videos/tech-atmosphere.mp4',
      poster: '/videos/tech-atmosphere-poster.webp',
      duration: '0:15',
      tags: ['Clean Architecture', 'Type-Safe', 'Global Studio'],
    },
  ];

  const currentChannel = channels[activeChannelIdx] || channels[0];

  const containerRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef<boolean>(false);
  const isInViewportRef = useRef<boolean>(false);

  const safePlay = (video: HTMLVideoElement | null, onPlayed?: () => void) => {
    if (!video) return;
    try {
      const promise = video.play();
      if (promise && typeof promise.then === 'function') {
        promise
          .then(() => onPlayed?.())
          .catch(() => {});
      } else {
        onPlayed?.();
      }
    } catch {
      // Safe fallback for restricted playback
    }
  };

  // Viewport-aware playback: play when visible, pause when scrolled away (upside or downside)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = isMuted;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
        isInViewportRef.current = isVisible;

        if (videoRef.current) {
          if (isVisible) {
            // Only auto-resume if user didn't explicitly pause and doesn't prefer reduced motion
            if (!userPausedRef.current && !prefersReducedMotion) {
              safePlay(videoRef.current, () => setIsPlaying(true));
            }
          } else {
            // Offscreen: pause immediately to save GPU, battery, and memory bandwidth
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: [0, 0.1, 0.5] }
    );

    observer.observe(container);

    // If already in viewport and allowed to play, trigger immediate start on channel change
    if (isInViewportRef.current && !userPausedRef.current && !prefersReducedMotion && videoRef.current) {
      safePlay(videoRef.current, () => setIsPlaying(true));
    }

    // Pause when browser tab is hidden / minimized
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else if (isInViewportRef.current && !userPausedRef.current && !prefersReducedMotion) {
        safePlay(videoRef.current, () => setIsPlaying(true));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion, activeChannelIdx, isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      userPausedRef.current = true;
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      safePlay(videoRef.current, () => setIsPlaying(true));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  const switchChannel = (idx: number) => {
    setActiveChannelIdx(idx);
    userPausedRef.current = false;
    setProgress(0);
  };

  // Automatically advance to the next video when current one finishes (1 -> 2 -> 3 -> 1)
  const handleVideoEnded = () => {
    const nextIdx = (activeChannelIdx + 1) % channels.length;
    switchChannel(nextIdx);
  };

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Video Frame Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] bg-[#0A0A0A] shadow-[0_24px_60px_rgba(0,0,0,0.08)] group">
        {/* HTML5 Video Player */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#0A0A0A]">
          <video key={currentChannel.id}
            ref={videoRef}
            src={currentChannel.src}
            poster={currentChannel.poster}
            autoPlay={!prefersReducedMotion}
            preload="auto"
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onCanPlay={() => {
              if (isInViewportRef.current && !userPausedRef.current && !prefersReducedMotion) {
                safePlay(videoRef.current, () => setIsPlaying(true));
              }
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Top Glassmorphic HUD Ribbon */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-white text-[0.68rem] font-mono shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-bold tracking-wider">{currentChannel.channelNum}</span>
              <span className="text-white/40">·</span>
              <span className="tracking-wide text-white/90 uppercase">{currentChannel.category}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-white/80 text-[0.68rem] font-mono shadow-lg">
              <Activity className="w-3.5 h-3.5 text-zinc-400" />
              <span>CONTINUOUS PLAYLIST · {activeChannelIdx + 1}/{channels.length}</span>
            </div>
          </div>

          {/* Center Play Indicator on hover / pause */}
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/15 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause video showreel' : 'Play video showreel'}
          >
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-7 h-7 ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Bottom Scrub Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
            <div 
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom Controls Overlay */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between z-10 pointer-events-none">
            <div className="max-w-md space-y-1">
              <p className="text-white font-sans font-bold text-lg sm:text-xl drop-shadow-md">
                {currentChannel.title}
              </p>
              <p className="text-white/80 text-xs font-light hidden sm:block drop-shadow-sm">
                {currentChannel.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white hover:text-zinc-300 transition-colors shadow-lg cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white hover:text-zinc-300 transition-colors shadow-lg cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Channel Selection Matrix: Tailored Mobile vs Tablet/Desktop Architecture */}
        
        {/* 1. MOBILE-ONLY COMPACT SEGMENTED PILL BAR (< sm) */}
        <div className="block sm:hidden p-3 bg-white dark:bg-[#121212] border-t border-black/10 dark:border-white/10">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5">
            {channels.map((chan, idx) => {
              const isSelected = activeChannelIdx === idx;
              return (
                <button
                  key={chan.id}
                  type="button"
                  onClick={() => switchChannel(idx)}
                  className={`flex-1 py-2 px-1.5 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs font-bold'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 text-[0.68rem] font-mono font-bold">
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black animate-pulse" />}
                    <span>{chan.channelNum}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-black dark:text-white truncate text-[0.75rem] max-w-[170px] sm:max-w-[220px] min-w-0">
              {currentChannel.title}
            </span>
            <span className="text-[0.65rem] text-black dark:text-white font-bold shrink-0">
              PLAYING NOW
            </span>
          </div>
        </div>

        {/* 2. TABLET & DESKTOP 4-COLUMN ARCHITECTURAL MATRIX (sm+) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 bg-white dark:bg-[#121212] border-t border-black/10 dark:border-white/10">
          {channels.map((chan, idx) => {
            const isSelected = activeChannelIdx === idx;
            return (
              <button
                key={chan.id}
                type="button"
                onClick={() => switchChannel(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-black dark:bg-white border-black dark:border-white text-white dark:text-black shadow-md'
                    : 'bg-zinc-50 dark:bg-zinc-900 border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 text-black dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[0.68rem] font-mono mb-1.5">
                  <span className={isSelected ? 'text-white dark:text-black font-bold' : 'text-zinc-500 dark:text-zinc-400 font-semibold'}>
                    {chan.channelNum}
                  </span>
                  <span className={isSelected ? 'text-white/70 dark:text-black/70 font-bold' : 'text-zinc-400 dark:text-zinc-500'}>
                    {isSelected ? 'PLAYING NOW' : 'SWITCH'}
                  </span>
                </div>
                <p className="font-display font-bold text-xs sm:text-sm line-clamp-1">
                  {chan.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {chan.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className={`text-[0.62rem] font-mono px-1.5 py-0.5 rounded-sm ${
                        isSelected 
                          ? 'bg-white/15 dark:bg-black/10 text-white/90 dark:text-black/90' 
                          : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-black/10 dark:border-white/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};


