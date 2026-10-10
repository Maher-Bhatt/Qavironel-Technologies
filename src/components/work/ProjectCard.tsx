import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

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

  return (
    <motion.article 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-white border border-[#E5E7EB] hover:border-[#E0561B]/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden text-[#0A0A0A] ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Image Preview Container */}
      <div 
        className={`relative overflow-hidden bg-[#F4F4F5] ${
          isFeatured ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[420px]' : 'aspect-[16/10]'
        }`}
      >
        <Link to={`/work/${project.slug}`} className="block w-full h-full relative">
          <img
            src={project.heroImage}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
              hasVideo ? 'group-hover:opacity-0 transition-opacity duration-300' : ''
            }`}
          />
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
        </Link>

        {/* Status Pill on top of image */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 pointer-events-none">
          <span className="px-2.5 py-1 text-[0.68rem] font-mono bg-[#0A0A0A]/90 backdrop-blur-md text-white border border-[#27272A]">
            {project.status}
          </span>
          <span className="px-2.5 py-1 text-[0.68rem] font-mono bg-[#E0561B] text-white font-semibold">
            {project.category}
          </span>
          {hasVideo && (
            <span className="px-2 py-1 text-[0.65rem] font-mono bg-white/95 text-[#0A0A0A] font-bold border border-[#E5E7EB] shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B] animate-pulse" />
              VIDEO REEL
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div 
        className={`p-6 sm:p-8 flex flex-col justify-between ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#71717A] mb-3">
            <span className="uppercase tracking-wider">{project.eyebrow}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight group-hover:text-[#E0561B] transition-colors">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-[#52525B] leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>

          {/* Key Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#E5E7EB] grid grid-cols-2 gap-4">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx}>
                  <p className="text-xl sm:text-2xl font-bold font-sans text-[#0A0A0A]">{m.value}</p>
                  <p className="text-xs text-[#71717A] font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.68rem] font-mono text-[#52525B] bg-[#F8F9FA] px-2.5 py-1 border border-[#E5E7EB]"
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
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0A0A0A] group-hover:text-[#E0561B] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {project.links.length > 0 && (
            <a 
              href={project.links[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#71717A] hover:text-[#E0561B] inline-flex items-center gap-1 transition-colors"
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
