import React from 'react';
import { Link } from 'react-router-dom';
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
    <article 
      className={`group relative bg-[#FFFFFF] border border-[#DEDAD3] hover:border-[#171717]/40 transition-all duration-300 flex flex-col overflow-hidden ${
        isFeatured ? 'lg:grid lg:grid-cols-12 gap-0' : ''
      }`}
    >
      {/* Image Preview Container */}
      <div 
        className={`relative overflow-hidden bg-[#20201E] ${
          isFeatured ? 'lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[320px] lg:min-h-[460px]' : 'aspect-[16/10]'
        }`}
      >
        <Link to={`/work/${project.slug}`} className="block w-full h-full">
          <img
            src={project.heroImage}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </Link>

        {/* Status Pill on top of image */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <Badge variant="charcoal" size="sm">
            {project.status}
          </Badge>
          <Badge variant="copper" size="sm">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content Container */}
      <div 
        className={`p-6 sm:p-8 flex flex-col justify-between ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-[#77746F] mb-3">
            <span className="uppercase tracking-wider">{project.eyebrow}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717] tracking-tight group-hover:text-[#C7612E] transition-colors">
            <Link to={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#77746F] leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Key Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#DEDAD3] grid grid-cols-2 gap-4">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx}>
                  <p className="text-xl sm:text-2xl font-bold font-sans text-[#171717]">{m.value}</p>
                  <p className="text-xs text-[#77746F] font-mono tracking-tight mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[0.7rem] font-mono text-[#77746F] bg-[#F6F3ED] px-2.5 py-1 border border-[#DEDAD3]/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.7rem] font-mono text-[#77746F] px-1 py-1">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="mt-8 pt-6 border-t border-[#DEDAD3] flex items-center justify-between">
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
              className="text-xs font-mono text-[#77746F] hover:text-[#C7612E] inline-flex items-center gap-1 transition-colors"
              title={project.links[0].label}
            >
              <span>{project.links[0].type === 'github' ? 'GitHub' : 'Live'}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
