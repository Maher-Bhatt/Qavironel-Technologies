/**
 * Represents the primary categories used for filtering and organizing projects in the portfolio.
 */
export type ProjectCategory = 
  | 'All Work'
  | 'Client Work' 
  | 'Digital Products' 
  | 'AI & Software' 
  | 'Product Lab' 
  | 'Academic Build' 
  | 'Experiments';

/**
 * Quantifiable success metric associated with a project.
 */
export interface ProjectMetric {
  value: string;
  label: string;
  context?: string;
}

/**
 * Represents an image asset within a project's gallery or case study.
 */
export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

/**
 * External URL resource related to a project.
 */
export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'demo' | 'external';
}

/**
 * Core interface defining a full Project or Case Study in the Qavironel Technologies ecosystem.
 */
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  featured: boolean;
  order: number;
  year: string;
  summary: string;
  audience: string;
  challenge: string;
  objectives?: string[];
  solution: string;
  whyItMatters: string;
  workflow: string[];
  buildNotes?: string[];
  scopeNote?: string;
  technologies: string[];
  heroImage: string;
  videoSrc?: string;
  gallery: ProjectGalleryItem[];
  metrics?: ProjectMetric[];
  links: ProjectLink[];
}

/**
 * Quantifiable metric for a service pillar.
 */
export interface ServiceMetric {
  value: string;
  label: string;
}

/**
 * Defines a core service offering or discipline provided by the agency.
 */
export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  whoItsFor: string;
  deliverables: string[];
  technologies: string[];
  exampleProjectSlug?: string;
  image?: string;
  imageCaption?: string;
  metrics?: ServiceMetric[];
  architectureHighlights?: string[];
}

/**
 * Profile data for an agency team member or founder.
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  skills: string[];
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

/**
 * Client or user testimonial data.
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectSlug?: string;
}
