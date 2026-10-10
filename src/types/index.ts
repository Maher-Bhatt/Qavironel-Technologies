export type ProjectCategory = 
  | 'All Work'
  | 'Client Work' 
  | 'Digital Products' 
  | 'AI & Software' 
  | 'Product Lab' 
  | 'Academic Build' 
  | 'Experiments';

export interface ProjectMetric {
  value: string;
  label: string;
  context?: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'demo' | 'external';
}

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
  gallery: ProjectGalleryItem[];
  metrics?: ProjectMetric[];
  links: ProjectLink[];
}

export interface ServiceMetric {
  value: string;
  label: string;
}

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

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectSlug?: string;
}
