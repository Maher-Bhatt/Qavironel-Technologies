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

  return (
    <motion.article 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-white border border-[#E5E2DC] hover:border-[#C7612E]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col overflow-hidden text-[#171717] ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Image Preview Container */}
      <div 
        className={`relative overflow-hidden bg-[#F5F2EB] ${
          isFeatured ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[420px]' : 'aspect-[16/10]'
        }`}
      >
        <Link to={`/work/${project.slug}`} className="block w-full h-full">
          <img
            src={project.heroImage}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Status Pill on top of image */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-[0.68rem] font-mono bg-[#171717]/90 backdrop-blur-md text-white border border-[#2E2E2B]">
            {project.status}
          </span>
          <span className="px-2.5 py-1 text-[0.68rem] font-mono bg-[#C7612E] text-white font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div 
        className={`p-6 sm:p-8 flex flex-col justify-between ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#8E8B84] mb-3">
            <span className="uppercase tracking-wider">{project.eyebrow}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717] tracking-tight group-hover:text-[#C7612E] transition-colors">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-[#6E6B65] leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>

          {/* Key Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#E5E2DC] grid grid-cols-2 gap-4">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx}>
                  <p className="text-xl sm:text-2xl font-bold font-sans text-[#171717]">{m.value}</p>
                  <p className="text-xs text-[#8E8B84] font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.68rem] font-mono text-[#6E6B65] bg-[#FBF9F5] px-2.5 py-1 border border-[#E5E2DC]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.68rem] font-mono text-[#8E8B84] px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-6 border-t border-[#E5E2DC] flex items-center justify-between">
          <Link 
            to={`/work/${project.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#171717] group-hover:text-[#C7612E] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {project.links.length > 0 && (
            <a 
              href={project.links[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#8E8B84] hover:text-[#C7612E] inline-flex items-center gap-1 transition-colors"
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
