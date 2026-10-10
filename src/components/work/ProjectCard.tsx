import React, { useState, useRef } from 'react';
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
      videoRef.current.play().catch(e => console.log('Video playback error:', e));
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
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
      className={`group relative glass-card rounded-2xl transition-all duration-300 flex flex-col overflow-hidden text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#E0561B]/40 shadow-xs hover:shadow-xl hover:shadow-[#E0561B]/5 ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Background Watermark Numeral */}
      <span className="absolute top-10 right-6 text-7xl sm:text-8xl font-sans font-black text-black/[0.03] select-none pointer-events-none tracking-tighter z-0">
        {String(project.order || 1).padStart(2, '0')}
      </span>

      {/* Studio Chrome Window Header */}
      <div className="col-span-12 flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-[#E5E7EB] bg-[#FAFAFA] relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="text-[0.68rem] font-mono tracking-wider text-[#71717A] ml-1">
            sys://qavironel/{project.slug}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-[#E0561B]">
            {project.category}
          </span>
          <span className="text-[#D1D5DB] text-xs">·</span>
          <span className="text-[0.65rem] font-mono text-[#71717A]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Image / Video Preview Viewport */}
      <div 
        className={`relative overflow-hidden z-10 flex items-center justify-center ${
          isFeatured 
            ? 'lg:col-span-7 p-4 sm:p-6 lg:p-8 ' + (isDarkProject ? 'bg-[#0A0A0C]' : 'bg-[#F4F4F6]')
            : 'p-4 sm:p-5 h-[260px] sm:h-[300px] ' + (isDarkProject ? 'bg-[#0A0A0C]' : 'bg-[#F8F9FA]')
        } border-b lg:border-b-0 border-[#E5E7EB]`}
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
              loading="lazy"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.85 }}
              transition={{ duration: 0.2 }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop';
                }
              }}
              className={`max-w-full max-h-full w-auto h-auto object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                isFeatured ? 'max-h-[380px] sm:max-h-[440px]' : 'max-h-[230px] sm:max-h-[260px]'
              }`}
            />
          </AnimatePresence>

          {/* Automatic Z-Axis Hover Video Playback System */}
          <video
            ref={videoRef}
            src={project.videoSrc || 'https://cdn.pixabay.com/video/2021/08/04/83866-584758509_large.mp4'}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
              isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        </Link>

        {/* Interactive Gallery Switcher Chips for Featured Cards */}
        {isFeatured && project.gallery && project.gallery.length > 1 && (
          <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
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
                className={`px-2.5 py-1 rounded-lg text-[0.65rem] font-mono transition-colors ${
                  activeImageIndex === idx
                    ? 'bg-[#E0561B] text-white font-bold shadow-xs'
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
        className={`p-6 sm:p-8 flex flex-col justify-between relative z-10 ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#71717A] mb-2">
            <span className="uppercase tracking-wider text-[#E0561B] font-semibold">{project.eyebrow}</span>
            <span className="text-[0.68rem] text-emerald-600 font-semibold">{project.status}</span>
          </div>

          {/* Microsoft Store Verified Badge for K.A.L.K.I. */}
          {project.slug === 'kalki' && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[0.68rem] font-mono font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>STORE VERIFIED · v1.0.4 · ID: 9P6HJPQZBGFQ</span>
            </div>
          )}

          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight group-hover:text-[#E0561B] transition-colors leading-tight">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-[#52525B] leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#E5E7EB] grid grid-cols-2 gap-3">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]/80">
                  <p className="text-lg sm:text-xl font-extrabold font-sans text-[#0A0A0A] tabular-nums">{m.value}</p>
                  <p className="text-[0.7rem] text-[#71717A] font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.68rem] font-mono text-[#52525B] bg-[#F8F9FA] px-2.5 py-1 rounded-md border border-[#E5E7EB]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.68rem] font-mono text-[#71717A] px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
          <Link 
            to={`/work/${project.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0A0A0A] group-hover:text-[#E0561B] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E0561B]" />
          </Link>

          {project.links.length > 0 && (
            <a 
              href={project.links[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#71717A] hover:text-[#E0561B] inline-flex items-center gap-1 transition-colors font-medium"
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

