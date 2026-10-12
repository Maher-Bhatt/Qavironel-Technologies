import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
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

  // Subtle interactive 3D spring tilt & video hover state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);

  // Set defaultMuted and muted on DOM element for mobile Safari compatibility
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [project.videoSrc]);

  // Auto-pause video if card is scrolled off-screen or tab is hidden
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && videoRef.current) {
        videoRef.current.pause();
        setIsHovered(false);
        setIsPlayingMobile(false);
      }
    }, { threshold: 0.1 });

    observer.observe(card);

    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
        setIsPlayingMobile(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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

  const isDarkProject = project.slug === 'kalki' || project.slug === 'codedroid' || project.slug === 'socialsafe';

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
      className={`group relative glass-card rounded-2xl transition-all duration-300 flex flex-col overflow-hidden text-[#171717] dark:text-[#F6F3ED] bg-white dark:bg-[#20201E] border border-[#DEDAD3] dark:border-white/10 hover:border-[#C7612E]/40 shadow-xs hover:shadow-xl hover:shadow-[#C7612E]/5 ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Background Watermark Numeral */}
      <span className="absolute top-10 right-6 text-7xl sm:text-8xl font-sans font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none tracking-tighter z-0">
        {String(project.order || 1).padStart(2, '0')}
      </span>

      {/* Studio Chrome Window Header */}
      <div className="col-span-12 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 border-b border-[#DEDAD3] dark:border-white/10 bg-[#FAFAFA] dark:bg-[#1C1C22] relative z-10 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="text-[0.62rem] sm:text-[0.68rem] font-mono tracking-wider text-[#77746F] dark:text-[#A1A1AA] ml-1 truncate max-w-[130px] sm:max-w-none">
            sys://qavironel/{project.slug}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 text-right">
          <span className="text-[0.6rem] sm:text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
            {project.category}
          </span>
          <span className="text-[#D1D5DB] text-xs">·</span>
          <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-[#77746F]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Image / Video Preview Viewport */}
      <div 
        className={`relative overflow-hidden z-10 flex items-center justify-center ${
          isFeatured 
            ? 'lg:col-span-7 p-4 sm:p-6 lg:p-8 ' + (isDarkProject ? 'bg-[#171717]' : 'bg-[#F4F4F6]')
            : 'p-4 sm:p-5 h-[260px] sm:h-[300px] ' + (isDarkProject ? 'bg-[#171717]' : 'bg-[#F6F3ED]')
        } border-b lg:border-b-0 border-[#DEDAD3]`}
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

          {/* Automatic Hover (Desktop) & Touch-Toggle (Mobile) Video Playback */}
          {project.videoSrc && (
            <video
              ref={videoRef}
              src={project.videoSrc}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
                isHovered || isPlayingMobile ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          )}
        </Link>

        {/* Mobile / Touch Video Reel Trigger Pill */}
        {project.videoSrc && (
          <button
            type="button"
            onClick={toggleMobileVideo}
            className="sm:hidden absolute top-3 right-3 z-30 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[0.62rem] font-mono flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
            aria-label="Toggle preview video"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isPlayingMobile ? 'bg-[#10B981] animate-pulse' : 'bg-[#C7612E]'}`} />
            <span>{isPlayingMobile ? 'Pause Reel' : 'Watch Reel'}</span>
          </button>
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
                    ? 'bg-[#C7612E] text-white font-bold shadow-xs'
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs font-mono text-[#77746F] dark:text-[#A1A1AA] mb-2">
            <span className="uppercase tracking-wider text-[#C7612E] font-semibold text-[0.68rem] sm:text-xs">
              {project.eyebrow}
            </span>
            <span className="text-[0.65rem] sm:text-[0.68rem] text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
              {project.status}
            </span>
          </div>

          {/* Microsoft Store Verified Badge for K.A.L.K.I. */}
          {project.slug === 'kalki' && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-[0.65rem] sm:text-[0.68rem] font-mono font-bold mb-3 max-w-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="truncate">STORE VERIFIED · v1.0.4 · ID: 9P6HJPQZBGFQ</span>
            </div>
          )}

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#141414] dark:text-[#F6F3ED] tracking-tight group-hover:text-[#C7612E] transition-colors leading-tight">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-[#57544E] dark:text-[#A6A29A] leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#DEDAD3] dark:border-white/10 grid grid-cols-2 gap-3">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F6F3ED] dark:bg-[#1A1A20] border border-[#DEDAD3]/80 dark:border-white/10">
                  <p className="text-lg sm:text-xl font-bold font-display text-[#141414] dark:text-[#F6F3ED] tabular-nums">{m.value}</p>
                  <p className="text-[0.7rem] text-[#6E6B65] dark:text-[#A6A29A] font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.68rem] font-mono text-[#77746F] dark:text-[#A1A1AA] bg-[#F6F3ED] dark:bg-[#1A1A20] px-2.5 py-1 rounded-md border border-[#DEDAD3] dark:border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.68rem] font-mono text-[#77746F] dark:text-[#A1A1AA] px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-6 border-t border-[#DEDAD3] dark:border-white/10 flex items-center justify-between">
          <Link 
            to={`/work/${project.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#171717] dark:text-[#F6F3ED] group-hover:text-[#C7612E] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C7612E]" />
          </Link>

          {project.links.length > 0 && (
            <a 
              href={project.links[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#77746F] dark:text-[#A1A1AA] hover:text-[#C7612E] inline-flex items-center gap-1 transition-colors font-medium"
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

