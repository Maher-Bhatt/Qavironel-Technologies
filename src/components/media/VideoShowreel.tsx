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
      id: 'platform-build',
      channelNum: 'CH 01',
      title: 'Full-Stack Platform & SaaS Architecture',
      subtitle: 'Recorded client platform sprint demo & responsive user flows',
      category: 'PRODUCTION RUNTIME',
      src: '/videos/hero-showreel.mp4',
      poster: '/videos/hero-showreel-poster.webp',
      duration: '0:30',
      tags: ['React 19', 'TypeScript', 'FastAPI', 'High-Performance'],
    },
    {
      id: 'kalki-hud',
      channelNum: 'CH 02',
      title: 'Tactical HUD & Spatial Computer Vision',
      subtitle: 'Real-time object segmentation, token streaming & UI interaction',
      category: 'APPLIED AI SYSTEMS',
      src: '/videos/project-reel.mp4',
      poster: '/videos/project-reel-poster.webp',
      duration: '0:14',
      tags: ['OpenCV', 'YOLOv8', 'Spatial Tracking', 'Local Inference'],
    },
    {
      id: 'studio-atmosphere',
      channelNum: 'CH 03',
      title: 'Engineering Craftsmanship & Momentum',
      subtitle: 'Design-led execution, micro-interactions & hardware synergy',
      category: 'STUDIO CRAFT',
      src: '/videos/tech-atmosphere.mp4',
      poster: '/videos/tech-atmosphere-poster.webp',
      duration: '0:17',
      tags: ['Clean Architecture', 'Type-Safe', 'Global Studio'],
    },
  ];

  const currentChannel = channels[activeChannelIdx];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
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
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="w-full relative">
      {/* Video Frame Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] bg-[#0A0A0A] shadow-[0_24px_60px_rgba(0,0,0,0.08)] group">
        {/* HTML5 Video Player */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#0A0A0A]">
          <video key={currentChannel.id}
            ref={videoRef}
            src={currentChannel.src}
            poster={currentChannel.poster}
            autoPlay={!prefersReducedMotion}
            loop
            preload="metadata"
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Top Glassmorphic HUD Ribbon */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0A0A0A]/75 backdrop-blur-md border border-white/10 text-white text-[0.68rem] font-mono shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#C7612E] animate-pulse" />
              <span className="font-bold tracking-wider">{currentChannel.channelNum}</span>
              <span className="text-white/40">·</span>
              <span className="tracking-wide text-white/90 uppercase">{currentChannel.category}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/75 backdrop-blur-md border border-white/10 text-white/80 text-[0.68rem] font-mono shadow-lg">
              <Activity className="w-3.5 h-3.5 text-[#C7612E]" />
              <span>HIGH-DEF RUNTIME REEL</span>
            </div>
          </div>

          {/* Center Play Indicator on hover / pause */}
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
            aria-label={isPlaying ? 'Pause video showreel' : 'Play video showreel'}
          >
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="w-16 h-16 rounded-full bg-[#C7612E] text-white flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-7 h-7 ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Bottom Scrub Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
            <div 
              className="h-full bg-[#C7612E] transition-all duration-100 ease-linear"
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
                className="p-2.5 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/15 text-white hover:text-[#C7612E] transition-colors shadow-lg"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/15 text-white hover:text-[#C7612E] transition-colors shadow-lg"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Channel Selection Matrix (Clay-style interactive strip) */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-3">
          {channels.map((chan, idx) => {
            const isSelected = activeChannelIdx === idx;
            return (
              <button
                key={chan.id}
                type="button"
                onClick={() => switchChannel(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white shadow-sm'
                    : 'bg-[#F8F9FA] border-[#E5E7EB] hover:bg-white text-[#0A0A0A]'
                }`}
              >
                <div className="flex items-center justify-between text-[0.68rem] font-mono mb-1.5">
                  <span className={isSelected ? 'text-[#C7612E] font-bold' : 'text-[#71717A] font-semibold'}>
                    {chan.channelNum}
                  </span>
                  <span className={isSelected ? 'text-white/60' : 'text-[#71717A]'}>
                    {isSelected ? 'PLAYING NOW' : 'SWITCH'}
                  </span>
                </div>
                <p className="font-sans font-bold text-xs sm:text-sm line-clamp-1">
                  {chan.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {chan.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className={`text-[0.62rem] font-mono px-1.5 py-0.5 rounded-sm ${
                        isSelected 
                          ? 'bg-white/10 text-white/90' 
                          : 'bg-white text-[#71717A] border border-[#E5E7EB]'
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


