import { ServicePillar } from '../types';

export const services: ServicePillar[] = [
  {
    id: 'web-design-development',
    number: '01',
    badge: 'FRONTEND CRAFTSMANSHIP',
    title: 'Web Design & Development',
    tagline: 'Marketing sites, commerce storefronts, and business platforms built from scratch.',
    description: 'We design and engineer bespoke web experiences that load instantly, command attention, and turn visitors into qualified business leads. No generic templates, bloated page-builders, or fragile plugins.',
    whoItsFor: 'Founders, established businesses, and ambitious brands looking for an elevated digital presence that accurately reflects their quality of work.',
    image: '/images/work/ztees-hero.webp',
    imageCaption: 'Streetwear Commerce Frontend & Fluid Product Interaction Architecture',
    metrics: [
      { value: 'Fast LCP', label: 'Optimized Image Pipeline' },
      { value: 'High Score', label: 'Performance Engineering' },
      { value: 'Custom Code', label: 'Zero Builder Bloat' }
    ],
    architectureHighlights: [
      'Static Edge Rendering with React 19 selective hydration',
      'Fluid micro-haptic interactions and spring physics motion',
      'High-conversion direct commerce pipeline (WhatsApp & Stripe)',
      'Low-latency Interaction to Next Paint (INP) tuning'
    ],
    deliverables: [
      'Custom bespoke UI/UX design tailored to your brand identity',
      'Mobile-first responsive frontend implementation (React, Astro, Tailwind CSS)',
      'High-conversion e-commerce storefronts (WhatsApp Commerce, Stripe, UPI)',
      'Asset optimization, performance engineering, and Core Web Vitals tuning',
      'Production deployment, SSL certification, and custom domain setup',
      'Clean CMS integration or lightweight static architecture for easy updates'
    ],
    technologies: ['React', 'Astro', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    exampleProjectSlug: 'ztees'
  },
  {
    id: 'product-software-engineering',
    number: '02',
    badge: 'SYSTEMS ARCHITECTURE',
    title: 'Product & Software Engineering',
    tagline: 'Custom web applications, dashboards, SaaS MVPs, and internal tooling.',
    description: 'We engineer full-stack digital products from the initial architectural schema to production release. We focus on clean data models, resilient APIs, and intuitive user experiences built to scale.',
    whoItsFor: 'Startups building their minimum viable product (MVP), organizations needing custom operational portals, and founders validating new software ideas.',
    image: '/images/work/civic-sathi-home.webp',
    imageCaption: 'Civic Sathi Multi-Role RBAC Governance Portal & Real-Time Incident Mesh',
    metrics: [
      { value: '2–4 Wks', label: 'MVP Velocity to Staging' },
      { value: '100%', label: 'Type-Safe API Contracts' },
      { value: 'Multi-Tenant', label: 'Strict RBAC Gatekeeping' }
    ],
    architectureHighlights: [
      'FastAPI + PostgreSQL + Supabase backend architecture',
      'Role-based access control for citizen, contractor, and municipal staff',
      'Sub-second audit logging and geo-tagged telemetry records',
      'Automated staging deployment with live preview environments'
    ],
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
    badge: 'APPLIED AI & NEURAL OPS',
    title: 'Applied AI & Automation',
    tagline: 'Practical LLM integrations, intelligent workflows, and local-first AI tools.',
    description: 'We cut through the hype to engineer genuinely useful AI capabilities. From local-first desktop assistants and intelligent document extractors to natural language search and automated workflows, we build AI that solves real operational bottlenecks.',
    whoItsFor: 'Businesses wanting to automate repetitive tasks, founders building AI-native features, and teams exploring secure on-premises or edge inference.',
    image: '/images/projects/kalki/kalki-hero.png',
    imageCaption: 'K.A.L.K.I. v1.0.4 Microsoft Store Multi-Model AI Assistant with Hardware DPAPI Vault',
    metrics: [
      { value: '240 tok/s', label: 'Groq Cloud Inference' },
      { value: '0 ms Leak', label: 'Local Ollama Air-Gap' },
      { value: 'DPAPI', label: 'Hardware-Encrypted Keys' }
    ],
    architectureHighlights: [
      'Intelligent dynamic routing between Groq, Gemini 2.5 Flash, and local Ollama',
      'Offline neural speech recognition powered by VOSK engine',
      'Hardware-encrypted credential storage via Windows DPAPI',
      'Live proactive HUD diagnostics and telemetry feedback'
    ],
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
    badge: 'PRODUCT CRAFT & DESIGN TOKENS',
    title: 'Digital Product Design & Systems',
    tagline: 'Design systems, product interfaces, and user journeys that reduce cognitive load.',
    description: 'Great software starts with clear thinking. We craft cohesive design languages, intuitive layouts, and interaction systems that make complex software feel effortless for the end user.',
    whoItsFor: 'Teams whose current software feels clunky, dated, or confusing, and early-stage products needing a professional interface before launch.',
    image: '/images/work/codedroid-multidevice.webp',
    imageCaption: 'CodeDroid Multi-Device Engineering Companion & Mathematical Design System',
    metrics: [
      { value: '4pt / 8pt', label: 'Mathematical Spacing Scale' },
      { value: 'WCAG AAA', label: 'Contrast & Accessibility' },
      { value: 'Zero-Drift', label: 'Figma-to-Code Tokens' }
    ],
    architectureHighlights: [
      'Atomic token hierarchy: semantic colors, typography, and elevation',
      'Micro-interaction states: idle, hover, pressed, focused, disabled',
      'Multi-device responsive layouts verified across desktop, tablet, and mobile',
      'Complete developer handover specifications with zero implementation drift'
    ],
    deliverables: [
      'End-to-end UX architecture and wireframing for complex multi-step workflows',
      'Polished high-fidelity interface design in Figma with strict component tokens',
      'Comprehensive design systems: typography, color hierarchy, spacing scales, and states',
      'Interactive clickable prototypes for user testing and stakeholder alignment',
      'Handover specifications and design-to-code alignment for developers'
    ],
    technologies: ['Figma', 'Design Tokens', 'Component Systems', 'Interactive Prototyping'],
    exampleProjectSlug: 'codedroid'
  },
  {
    id: 'technical-optimization-seo',
    number: '05',
    badge: 'EDGE RUNTIME & DISCOVERABILITY',
    title: 'Technical Optimization & SEO Foundation',
    tagline: 'Performance speedups, semantic architecture, and search discoverability.',
    description: 'A digital platform cannot succeed if it suffers from poor discoverability or sluggish loading speeds. We audit, refactor, and engineer websites to achieve top Core Web Vitals and solid organic search visibility.',
    whoItsFor: 'Companies with existing websites suffering from sluggish load times, poor mobile performance, or invisible search rankings.',
    image: '/images/projects/velocity-cover.png',
    imageCaption: 'Performance Engineering, Core Web Vitals Audit & Semantic Schema Engine',
    metrics: [
      { value: 'Targeted', label: 'Core Web Vitals Optimization' },
      { value: 'Low Latency', label: 'Interaction to Next Paint' },
      { value: 'Rich Cards', label: 'Schema.org JSON-LD' }
    ],
    architectureHighlights: [
      'Automated next-gen image conversion (WebP/AVIF) with lazy-load thresholds',
      'Semantic HTML5 structure with dynamic sitemap.xml and robots.txt',
      'Comprehensive Schema.org microdata (Organization, LocalBusiness, Breadcrumbs)',
      'Edge cache stale-while-revalidate headers for sub-second global responses'
    ],
    deliverables: [
      'Core Web Vitals remediation and performance optimization',
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
    details: 'We handle domain configuration, SSL setup, structured data verification, and hand over all assets and code cleanly. Every engagement includes dedicated post-launch support to guarantee stability.'
  }
];
