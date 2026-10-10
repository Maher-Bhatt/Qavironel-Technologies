import { ServicePillar } from '../types';

export const services: ServicePillar[] = [
  {
    id: 'web-design-development',
    number: '01',
    title: 'Web Design & Development',
    tagline: 'Marketing sites, commerce storefronts, and business platforms built from scratch.',
    description: 'We design and engineer bespoke web experiences that load instantly, command attention, and turn visitors into qualified business leads. No generic templates, bloated page-builders, or fragile plugins.',
    whoItsFor: 'Founders, established businesses, and ambitious brands looking for an elevated digital presence that accurately reflects their quality of work.',
    deliverables: [
      'Custom bespoke UI/UX design tailored to your brand identity',
      'Mobile-first responsive frontend implementation (React, Astro, Tailwind CSS)',
      'High-conversion e-commerce storefronts (WhatsApp Commerce, Stripe, UPI)',
      'Sub-second page speeds, asset optimization, and core web vitals tuning',
      'Production deployment, SSL certification, and custom domain setup',
      'Clean CMS integration or lightweight static architecture for easy updates'
    ],
    technologies: ['React', 'Astro', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    exampleProjectSlug: 'ztees'
  },
  {
    id: 'product-software-engineering',
    number: '02',
    title: 'Product & Software Engineering',
    tagline: 'Custom web applications, dashboards, SaaS MVPs, and internal tooling.',
    description: 'We engineer full-stack digital products from the initial architectural schema to production release. We focus on clean data models, resilient APIs, and intuitive user experiences built to scale.',
    whoItsFor: 'Startups building their minimum viable product (MVP), organizations needing custom operational portals, and founders validating new software ideas.',
    deliverables: [
      'Rapid SaaS MVP development from concept to user testing in 2–4 weeks',
      'Role-based access control (RBAC) portals and administrative dashboards',
      'Full-stack API development, relational database modeling, and authentication',
      'Interactive data visualization, complex forms, and status workflows',
      'Scalable cloud infrastructure deployment (Vercel, Supabase, Node.js)'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'REST / GraphQL'],
    exampleProjectSlug: 'civic-sathi'
  },
  {
    id: 'applied-ai-automation',
    number: '03',
    title: 'Applied AI & Automation',
    tagline: 'Practical LLM integrations, intelligent workflows, and local-first AI tools.',
    description: 'We cut through the hype to engineer genuinely useful AI capabilities. From local-first desktop assistants and intelligent document extractors to natural language search and automated workflows, we build AI that solves real operational bottlenecks.',
    whoItsFor: 'Businesses wanting to automate repetitive tasks, founders building AI-native features, and teams exploring secure on-premise or edge inference.',
    deliverables: [
      'Custom LLM feature integrations using OpenAI, Gemini, and Claude APIs',
      'Local-first AI prototypes with privacy-safe open models (Ollama, Llama 3)',
      'Voice-activated HUDs, speech recognition, and synthesized audio interfaces',
      'Intelligent document summarization, information extraction, and parsing pipelines',
      'Defensive AI boundaries ensuring credentials and system actions remain guarded'
    ],
    technologies: ['Python', 'Local LLMs (Ollama)', 'Google Gemini API', 'OpenAI API', 'VOSK Speech Engine'],
    exampleProjectSlug: 'kalki'
  },
  {
    id: 'digital-product-design',
    number: '04',
    title: 'Digital Product Design & Systems',
    tagline: 'Design systems, product interfaces, and user journeys that reduce cognitive load.',
    description: 'Great software starts with clear thinking. We craft cohesive design languages, intuitive layouts, and interaction systems that make complex software feel effortless for the end user.',
    whoItsFor: 'Teams whose current software feels clunky, dated, or confusing, and early-stage products needing a professional interface before launch.',
    deliverables: [
      'End-to-end UX architecture and wireframing for complex multi-step workflows',
      'Polished high-fidelity interface design in Figma with strict component tokens',
      'Comprehensive design systems: typography, color hierarchy, spacing scales, and states',
      'Interactive clickable prototypes for user testing and stakeholder alignment',
      'Handover specifications and design-to-code alignment for developers'
    ],
    technologies: ['Figma', 'Design Tokens', 'Component Systems', 'Interactive Prototyping'],
    exampleProjectSlug: 'itm-notes'
  },
  {
    id: 'technical-optimization-seo',
    number: '05',
    title: 'Technical Optimization & SEO Foundation',
    tagline: 'Performance speedups, semantic architecture, and search discoverability.',
    description: 'A great website is useless if nobody can find it or if it takes five seconds to open. We audit, refactor, and engineer websites to achieve top Core Web Vitals and solid organic search visibility.',
    whoItsFor: 'Companies with existing websites suffering from sluggish load times, poor mobile performance, or invisible search rankings.',
    deliverables: [
      'Core Web Vitals remediation targeting 95+ performance scores',
      'Comprehensive technical SEO: canonicals, Open Graph, dynamic sitemaps, robots.txt',
      'Schema.org JSON-LD structured data for rich search engine snippets',
      'Image asset compression, modern WebP conversion, and font display tuning',
      'Accessibility remediation (WCAG 2.1 AA keyboard navigation, contrast, ARIA)'
    ],
    technologies: ['Lighthouse', 'Schema.org', 'Web Vitals', 'Semantic HTML5', 'Edge Caching'],
    exampleProjectSlug: 'codedroid'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover & Align',
    summary: 'We clarify the exact problem, business goals, target audience, and what the digital experience must prove in the first ten seconds.',
    details: 'Through a direct discovery conversation with our founders, we examine your current challenges, reference inspirations, technical constraints, and desired outcomes. No account managers or layered handoffs.'
  },
  {
    step: '02',
    title: 'Define & Architect',
    summary: 'We agree on precise scope, page hierarchy, technology stack, and visual direction before writing a single line of code.',
    details: 'We map user journeys, define data models, create low-fidelity wireframes, and establish clear delivery milestones. You receive a transparent scope and fixed quote.'
  },
  {
    step: '03',
    title: 'Design & Build',
    summary: 'We craft the design system, write clean modern code, build responsive layouts, and engineer interactions.',
    details: 'You see progress through live staging previews. We test across physical mobile screens, tablets, and desktops, ensuring fluid motion, keyboard accessibility, and sub-second performance.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    summary: 'We deploy to global edge infrastructure, verify production analytics and SEO, and provide post-launch support.',
    details: 'We handle domain configuration, SSL setup, structured data verification, and handover all assets and code cleanly. Every engagement includes dedicated post-launch support to guarantee stability.'
  }
];
