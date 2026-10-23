import { ServicePillar } from '../types';

export const services: ServicePillar[] = [
  {
    id: 'web-design-development',
    number: '01',
    badge: 'WEB & COMMERCE',
    title: 'Web Design & Development',
    tagline: 'Marketing sites, commerce storefronts, and business platforms built from scratch.',
    description: 'We create responsive web experiences that make your offer clear, reflect the character of your brand, and help visitors take the next step.',
    whoItsFor: 'Founders and established businesses that need a distinctive digital presence or a more useful way to sell online.',
    image: '/images/work/ztees-hero.webp',
    imageCaption: 'Ztees storefront · A direct-to-customer streetwear shop',
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
      'Brand-aligned website design and page structure',
      'Responsive frontend development for mobile and desktop',
      'Product catalogs and straightforward checkout flows',
      'Performance, image, and Core Web Vitals improvements',
      'Production deployment, SSL certification, and custom domain setup',
      'Clean CMS integration or lightweight static architecture for easy updates'
    ],
    technologies: ['React', 'Astro', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    exampleProjectSlug: 'ztees'
  },
  {
    id: 'product-software-engineering',
    number: '02',
    badge: 'PRODUCT ENGINEERING',
    title: 'Product & Software Engineering',
    tagline: 'Custom web applications, dashboards, SaaS MVPs, and internal tooling.',
    description: 'We take digital products from early definition through design, engineering, and release, with a focus on clear workflows and dependable foundations.',
    whoItsFor: 'Startups shaping a first product and organizations that need software for a specific operational workflow.',
    image: '/images/work/civic-sathi-home.webp',
    imageCaption: 'Civic Sathi · A resident and municipal service platform',
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
      'MVP planning, scope definition, and delivery milestones',
      'Role-based applications and administrative dashboards',
      'APIs, data models, and sign-in workflows',
      'Forms, maps, status updates, and reporting features',
      'Scalable cloud infrastructure deployment (Vercel, Supabase, Node.js)'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'REST / GraphQL'],
    exampleProjectSlug: 'civic-sathi'
  },
  {
    id: 'applied-ai-automation',
    number: '03',
    badge: 'AI & AUTOMATION',
    title: 'Applied AI & Automation',
    tagline: 'Practical LLM integrations, intelligent workflows, and local-first AI tools.',
    description: 'AI is useful when it solves a real task. We help teams explore product features, automate repetitive work, and make deliberate choices about data and oversight.',
    whoItsFor: 'Businesses reducing repetitive work, founders adding AI features, and teams evaluating local or private model options.',
    image: '/images/projects/kalki/kalki-hero.png',
    imageCaption: 'K.A.L.K.I. · A desktop assistant with local AI options',
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
      'AI features and workflow automation, scoped to a real task',
      'Prototypes using local models where they fit the project',
      'Voice input, transcription, and audio interfaces',
      'Document summaries and information extraction',
      'Defensive AI boundaries ensuring credentials and system actions remain guarded'
    ],
    technologies: ['Python', 'Local LLMs (Ollama)', 'Google Gemini API', 'OpenAI API', 'VOSK Speech Engine'],
    exampleProjectSlug: 'kalki'
  },
  {
    id: 'digital-product-design',
    number: '04',
    badge: 'PRODUCT DESIGN',
    title: 'Digital Product Design & Systems',
    tagline: 'Design systems, product interfaces, and user journeys that reduce cognitive load.',
    description: 'We turn complex workflows into clearer user journeys, coherent interface systems, and software that feels easier to understand.',
    whoItsFor: 'Teams whose current software feels clunky, dated, or confusing, and early-stage products needing a professional interface before launch.',
    image: '/images/work/codedroid-multidevice.webp',
    imageCaption: 'CodeDroid · A development environment for Android',
    metrics: [
      { value: '4pt / 8pt', label: 'Mathematical Spacing Scale' },
      { value: 'WCAG 2.1 AA', label: 'Contrast & Accessibility' },
      { value: 'Zero-Drift', label: 'Figma-to-Code Tokens' }
    ],
    architectureHighlights: [
      'Atomic token hierarchy: semantic colors, typography, and elevation',
      'Micro-interaction states: idle, hover, pressed, focused, disabled',
      'Multi-device responsive layouts verified across desktop, tablet, and mobile',
      'Complete developer handover specifications with zero implementation drift'
    ],
    deliverables: [
      'User journeys, wireframes, and interface design',
      'Reusable interface components and design foundations',
      'Responsive and accessible interaction states',
      'Prototypes for feedback and stakeholder review',
      'Handover specifications and design-to-code alignment for developers'
    ],
    technologies: ['Figma', 'Design Tokens', 'Component Systems', 'Interactive Prototyping'],
    exampleProjectSlug: 'codedroid'
  },
  {
    id: 'technical-optimization-seo',
    number: '05',
    badge: 'PERFORMANCE & SEARCH',
    title: 'Technical Optimization & SEO Foundation',
    tagline: 'Performance speedups, semantic architecture, and search discoverability.',
    description: 'We help existing sites become faster, easier to navigate, and technically clearer for search engines and assistive technologies.',
    whoItsFor: 'Organizations whose existing site needs technical cleanup, accessibility improvements, or stronger search foundations.',
    image: '/images/projects/velocity-cover.png',
    imageCaption: 'Technical improvements for speed, accessibility, and search',
    metrics: [
      { value: 'Targeted', label: 'Core Web Vitals Optimization' },
      { value: 'Low Latency', label: 'Interaction to Next Paint' },
      { value: 'Rich Cards', label: 'Schema.org JSON-LD' }
    ],
    architectureHighlights: [
      'Automated next-gen image conversion (WebP/AVIF) with lazy-load thresholds',
      'Semantic HTML5 structure with dynamic sitemap.xml and robots.txt',
      'Comprehensive Schema.org structured data (Organization, WebSite, CaseStudy, Breadcrumbs)',
      'Edge cache stale-while-revalidate headers for sub-second global responses'
    ],
    deliverables: [
      'Core Web Vitals assessment and targeted improvements',
      'Page metadata, canonical URLs, and social previews',
      'Structured data and sitemap configuration',
      'Image, font, and frontend asset optimization',
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
    summary: 'We clarify the problem, goals, users, and what a useful outcome looks like.',
    details: 'Through a direct discovery conversation with our founders, we examine your current challenges, reference inspirations, technical constraints, and desired outcomes. No account managers or layered handoffs.'
  },
  {
    step: '02',
    title: 'Define & Architect',
    summary: 'We agree on scope, priorities, technical approach, and visual direction before implementation.',
    details: 'We map user journeys, define data models, create low-fidelity wireframes, and establish clear delivery milestones. You receive a transparent scope and fixed quote.'
  },
  {
    step: '03',
    title: 'Design & Build',
    summary: 'We share work in progress, gather feedback, and refine responsive, accessible experiences.',
    details: 'You see progress through live staging previews. We test across physical mobile screens, tablets, and desktops, ensuring fluid motion, keyboard accessibility, and sub-second performance.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    summary: 'We prepare the release, hand over the code and assets, and agree on any follow-up support.',
    details: 'We handle domain configuration, SSL setup, structured data verification, and hand over all assets and code cleanly. Every engagement includes dedicated post-launch support to guarantee stability.'
  }
];
