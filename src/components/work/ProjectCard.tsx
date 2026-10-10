import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
  const hasVideo = project.slug === 'kalki-hud-vision';
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Subtle interactive 3D spring tilt
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -2.5;
    const rotY = ((x - centerX) / centerX) * 2.5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const isDarkProject = project.slug === 'kalki' || project.slug === 'codedroid';

  const displayImage = (isFeatured && project.gallery && project.gallery[activeImageIndex])
    ? project.gallery[activeImageIndex].src
    : project.heroImage;

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`group relative glass-card rounded-2xl transition-all duration-300 flex flex-col overflow-hidden text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#E0561B]/40 shadow-xs hover:shadow-xl hover:shadow-[#E0561B]/5 ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Background Watermark Numeral */}
      <span className="absolute top-10 right-6 text-7xl sm:text-8xl font-sans font-black text-black/[0.03] select-none pointer-events-none tracking-tighter z-0">
        {String(project.order || 1).padStart(2, '0')}
      </span>

      {/* Studio Chrome Window Header */}
      <div className={`col-span-12 flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-[#E5E7EB] relative z-10 ${
        isDarkProject && isFeatured ? 'bg-[#18181B] text-white border-white/10' : 'bg-[#FAFAFA]'
      }`}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          <span className={`ml-2 text-[0.65rem] font-mono tracking-wider ${
            isDarkProject && isFeatured ? 'text-[#A1A1AA]' : 'text-[#71717A]'
          }`}>
            sys://qavironel/{project.slug}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B] animate-pulse" />
          <span className="text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-[#E0561B]">
            {project.status}
          </span>
        </div>
      </div>

      {/* Image Preview Container with Inner Studio Frame */}
      <div 
        className={`relative overflow-hidden z-10 ${
          isFeatured 
            ? 'lg:col-span-7 p-4 sm:p-6 flex items-center justify-center self-stretch min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] ' + (isDarkProject ? 'bg-[#0A0A0A]' : 'bg-[#F4F4F5]')
            : 'aspect-[16/10] bg-[#F4F4F5]'
        }`}
      >
        <Link 
          to={`/work/${project.slug}`} 
          className={`block w-full h-full relative overflow-hidden ${
            isFeatured ? 'rounded-xl shadow-2xl border border-white/10 min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]' : ''
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={displayImage}
              src={displayImage}
              alt={`${project.title} interface preview`}
              loading="lazy"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{ duration: 0.25 }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = '/images/projects/kalki/kalki-hero.png';
                }
              }}
              className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104 ${
                hasVideo ? 'group-hover:opacity-0 transition-opacity duration-300' : ''
              }`}
            />
          </AnimatePresence>

          {hasVideo && (
            <video
              src="/videos/project-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Gradient Gloss Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Link>

        {/* Floating Category Tag */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10 flex flex-wrap gap-2 pointer-events-none">
          <span className="px-3 py-1 text-[0.68rem] font-mono bg-white/90 backdrop-blur-md text-[#0A0A0A] font-bold rounded-full border border-black/5 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Interactive Gallery Switcher Chips for Featured Cards */}
        {isFeatured && project.gallery && project.gallery.length > 1 && (
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
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
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#71717A] mb-3">
            <span className="uppercase tracking-wider text-[#E0561B] font-semibold">{project.eyebrow}</span>
            <span>{project.year}</span>
          </div>

          {/* Microsoft Store Verified Badge for K.A.L.K.I. */}
          {project.slug === 'kalki' && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[0.68rem] font-mono font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>STORE VERIFIED · v1.0.4 · 9P6HJPQZBGFQ</span>
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

