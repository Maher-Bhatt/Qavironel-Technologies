import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { ArrowUpRight, ArrowRight, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { playClickSound } from '../../utils/soundEffects';

interface ProjectCardProps {
  project: Project;
  layout?: 'featured' | 'standard';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = 'standard',
}) => {
  const isFeatured = layout === 'featured';
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Subtle interactive 3D spring tilt & video hover/scroll state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  // Set defaultMuted and muted on DOM element for mobile Safari compatibility
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = isMuted;
    }
  }, [project.videoSrc, isMuted]);

  // Automatic scroll-triggered video playback when the project card enters the screen
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
        setIsInView(true);
        if (videoRef.current) {
          videoRef.current.defaultMuted = true;
          videoRef.current.muted = isMuted;
          videoRef.current.play().catch(() => {});
        }
      } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
        setIsInView(false);
        if (videoRef.current) {
          videoRef.current.pause();
          setIsHovered(false);
          setIsPlayingMobile(false);
        }
      }
    }, { threshold: [0, 0.15, 0.35] });

    observer.observe(card);

    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
        setIsPlayingMobile(false);
      } else if (!document.hidden && isInView && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView, isMuted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -2;
    const rotY = ((x - centerX) / centerX) * 2;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      try {
        const playPromise = videoRef.current.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      } catch {
        // Fallback for autoplay-restricted environments
      }
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
    if (videoRef.current && !isPlayingMobile) {
      videoRef.current.pause();
    }
  };

  const toggleMobileVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlayingMobile) {
      videoRef.current.pause();
      setIsPlayingMobile(false);
    } else {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      try {
        const playPromise = videoRef.current.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise
            .then(() => setIsPlayingMobile(true))
            .catch(() => {});
        } else {
          setIsPlayingMobile(true);
        }
      } catch {
        // Fallback
      }
    }
  };

  const isDarkProject = project.slug === 'kalki' || project.slug === 'codedroid';

  const displayImage = (isFeatured && project.gallery && project.gallery[activeImageIndex])
    ? project.gallery[activeImageIndex].src
    : project.heroImage;

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className={`group relative glass-card rounded-2xl transition-all duration-300 flex flex-col overflow-hidden text-black dark:text-white bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 shadow-xs hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Background Watermark Numeral */}
      <span className="absolute top-10 right-6 text-7xl sm:text-8xl font-sans font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none tracking-tighter z-0">
        {String(project.order || 1).padStart(2, '0')}
      </span>

      {/* Studio Chrome Window Header */}
      <div className="col-span-12 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 border-b border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 relative z-10 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="text-[0.62rem] sm:text-[0.68rem] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 ml-1 truncate max-w-[130px] sm:max-w-none">
            sys://qavironel/{project.slug}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 text-right">
          <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-black dark:text-white">
            {project.category}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700 text-xs">·</span>
          <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-zinc-500 dark:text-zinc-400">
            {project.year}
          </span>
        </div>
      </div>

      {/* Image / Video Preview Viewport */}
      <div 
        className={`relative overflow-hidden z-10 flex items-center justify-center ${
          isFeatured 
            ? 'lg:col-span-7 p-4 sm:p-6 lg:p-8 ' + (isDarkProject ? 'bg-black' : 'bg-white dark:bg-zinc-950')
            : 'p-4 sm:p-5 h-[260px] sm:h-[300px] ' + (isDarkProject ? 'bg-black' : 'bg-white dark:bg-zinc-950')
        } border-b lg:border-b-0 border-black/10 dark:border-white/10`}
      >
        <Link 
          to={`/work/${project.slug}`} 
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={displayImage}
              src={displayImage}
              alt={`${project.title} interface preview`}
              loading="lazy" width="1920" height="1080"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.85 }}
              transition={{ duration: 0.2 }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = '/images/projects/kalki/kalki-hero.png';
                }
              }}
              className={`max-w-full max-h-full w-auto h-auto object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                isFeatured ? 'max-h-[380px] sm:max-h-[440px]' : 'max-h-[230px] sm:max-h-[260px]'
              }`}
            />
          </AnimatePresence>

          {/* Automatic Scroll & Hover Video Playback */}
          {project.videoSrc && (
            <video
              ref={videoRef}
              src={project.videoSrc}
              muted={isMuted}
              loop
              playsInline
              webkit-playsinline="true"
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out pointer-events-none ${
                isInView || isHovered || isPlayingMobile ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          )}
        </Link>

        {/* Video Controls & Live HUD Indicator */}
        {project.videoSrc && (
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[0.62rem] font-mono pointer-events-none">
              <span className={`w-1.5 h-1.5 rounded-full ${isInView || isHovered || isPlayingMobile ? 'bg-white animate-pulse' : 'bg-white/40'}`} />
              <span>{isInView || isHovered || isPlayingMobile ? 'PLAYING' : 'IDLE'}</span>
            </div>
          </div>
        )}

        {/* Interactive Gallery Switcher Chips for Featured Cards */}
        {isFeatured && project.gallery && project.gallery.length > 1 && (
          <div className="absolute bottom-3 left-2 right-2 sm:left-4 sm:right-4 z-20 flex items-center justify-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 overflow-x-auto scrollbar-none">
            {project.gallery.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  playClickSound();
                  setActiveImageIndex(idx);
                }}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[0.6rem] sm:text-[0.65rem] font-mono shrink-0 transition-colors ${
                  activeImageIndex === idx
                    ? 'bg-white text-black font-bold shadow-xs'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {idx === 0 ? '01 · HUD' : idx === 1 ? '02 · ASK' : idx === 2 ? '03 · TODAY' : '04 · MEMORY'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div 
        className={`p-5 sm:p-8 flex flex-col justify-between relative z-10 ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
            <span className="uppercase tracking-wider text-black dark:text-white font-semibold text-[0.68rem] sm:text-xs">
              {project.eyebrow}
            </span>
            <span className="text-[0.65rem] sm:text-[0.68rem] text-zinc-600 dark:text-zinc-300 font-semibold shrink-0">
              {project.status}
            </span>
          </div>

          {/* Microsoft Store Verified Badge for K.A.L.K.I. */}
          {project.slug === 'kalki' && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/15 text-black dark:text-white text-[0.65rem] sm:text-[0.68rem] font-mono font-bold mb-3 max-w-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
              <span className="truncate">STORE VERIFIED · v1.0.4 · ID: 9P6HJPQZBGFQ</span>
            </div>
          )}

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 grid grid-cols-2 gap-3">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10">
                  <p className="text-lg sm:text-xl font-bold font-display text-black dark:text-white tabular-nums">{m.value}</p>
                  <p className="text-[0.7rem] text-zinc-500 dark:text-zinc-400 font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.68rem] font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-black/5 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.68rem] font-mono text-zinc-500 dark:text-zinc-400 px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <Link 
            to={`/work/${project.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-black dark:text-white" />
          </Link>

          {project.links.length > 0 && (
            <a 
              href={project.links[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors font-medium"
              title={project.links[0].label}
            >
              <span>{project.links[0].type === 'github' ? 'GitHub' : 'Live'}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

