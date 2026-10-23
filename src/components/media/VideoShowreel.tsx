import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface VideoChannel {
  id: string;
  channelNum: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
  poster: string;
  duration: string;
}

const channels: VideoChannel[] = [
  {
    id: 'engineering-craftsmanship',
    channelNum: 'CH 01',
    title: 'Engineering Craftsmanship & Momentum',
    subtitle: 'Design-led execution, micro-interactions & hardware synergy',
    category: 'Studio craft',
    src: '/videos/tech-atmosphere.mp4',
    poster: '/videos/tech-atmosphere-poster.webp',
    duration: '0:15',
  },
  {
    id: 'platform-build',
    channelNum: 'CH 02',
    title: 'Full-Stack Platform & SaaS Architecture',
    subtitle: 'Platform interfaces, responsive flows & working software',
    category: 'Product engineering',
    src: '/videos/hero-showreel.mp4',
    poster: '/videos/hero-showreel-poster.webp',
    duration: '0:30',
  },
  {
    id: 'civic-sathi',
    channelNum: 'CH 03',
    title: 'Civic Sathi · Civic Platform',
    subtitle: 'A connected service experience for residents and municipal teams',
    category: 'Civic technology',
    src: '/videos/civic-sathi-video.mp4',
    poster: '/videos/civic-sathi-video-poster.webp',
    duration: '0:24',
  },
];

export const VideoShowreel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef(false);
  const isInViewportRef = useRef(false);
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentChannel = channels[activeChannelIdx] ?? channels[0];

  const safePlay = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    video.defaultMuted = true;
    video.muted = isMuted;
    void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [isMuted]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && entry.intersectionRatio >= 0.1;
      isInViewportRef.current = visible;
      if (visible && !userPausedRef.current && !prefersReducedMotion) safePlay(videoRef.current);
      else if (!visible) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    }, { threshold: [0, 0.1, 0.5] });
    observer.observe(container);

    const onVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
        setIsPlaying(false);
      } else if (isInViewportRef.current && !userPausedRef.current && !prefersReducedMotion) {
        safePlay(videoRef.current);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [activeChannelIdx, isMuted, prefersReducedMotion, safePlay]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      safePlay(video);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    if (videoRef.current) videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const switchChannel = (index: number) => {
    setActiveChannelIdx(index);
    setProgress(0);
    userPausedRef.current = false;
  };

  const handleVideoEnded = () => switchChannel((activeChannelIdx + 1) % channels.length);

  const seek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current?.duration) return;
    const next = Number(event.currentTarget.value);
    videoRef.current.currentTime = (next / 100) * videoRef.current.duration;
    setProgress(next);
  };

  return (
    <div ref={containerRef} className="studio-reel">
      <div className="studio-reel__heading">
        <div>
          <p className="studio-reel__eyebrow">Motion studies / 001—003</p>
          <h2 className="studio-reel__title">Good work has a rhythm.</h2>
        </div>
        <div className="studio-reel__status">
          <span className={isPlaying ? 'studio-reel__status-dot studio-reel__status-dot--live' : 'studio-reel__status-dot'} />
          <span>CONTINUOUS PLAYLIST · {activeChannelIdx + 1}/{channels.length}</span>
        </div>
      </div>

      <div className="studio-reel__frame">
        <video
          key={currentChannel.id}
          ref={videoRef}
          src={currentChannel.src}
          poster={currentChannel.poster}
          autoPlay={false}
          preload="metadata"
          muted={isMuted}
          playsInline
          onTimeUpdate={() => {
            if (videoRef.current?.duration) setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
          }}
          onEnded={handleVideoEnded}
          onCanPlay={() => {
            if (isInViewportRef.current && !userPausedRef.current && !prefersReducedMotion) safePlay(videoRef.current);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="studio-reel__video"
          aria-label={`${currentChannel.title} video`}
        />
        <div className="studio-reel__vignette" aria-hidden="true" />

        <div className="studio-reel__meta">
          <span>{currentChannel.channelNum} <i>—</i> {currentChannel.category}</span>
          <button type="button" onClick={() => { void containerRef.current?.requestFullscreen?.(); }} aria-label="View showreel full screen">
            <Maximize2 aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="studio-reel__play"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause video showreel' : 'Play video showreel'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!isPlaying ? (
              <motion.span key="play" initial={{ scale: 0.75, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}>
                <Play aria-hidden="true" fill="currentColor" />
              </motion.span>
            ) : (
              <motion.span key="pause" className="studio-reel__pause-icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Pause aria-hidden="true" fill="currentColor" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <div className="studio-reel__captions">
          <div>
            <span>{currentChannel.duration} <i>·</i> {currentChannel.category}</span>
            <h3>{currentChannel.title}</h3>
            <p>{currentChannel.subtitle}</p>
          </div>
          <button type="button" className="studio-reel__sound" onClick={toggleMute} aria-label={isMuted ? 'Unmute video showreel' : 'Mute video showreel'}>
            {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
            <span>{isMuted ? 'Sound off' : 'Sound on'}</span>
          </button>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={seek}
          className="studio-reel__seek"
          aria-label="Seek video showreel"
          style={{ '--reel-progress': `${progress}%` } as React.CSSProperties}
        />
      </div>

      <div className="studio-reel__playlist" role="group" aria-label="Choose a showreel clip">
        {channels.map((channel, index) => (
          <button
            type="button"
            key={channel.id}
            onClick={() => switchChannel(index)}
            aria-pressed={activeChannelIdx === index}
            className={activeChannelIdx === index ? 'studio-reel__track studio-reel__track--active' : 'studio-reel__track'}
          >
            <span>{channel.channelNum}</span>
            <strong>{channel.title}</strong>
            <Play aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoShowreel;
