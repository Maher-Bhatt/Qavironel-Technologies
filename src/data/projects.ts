import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'classic-infrastructure',
    title: 'Classic Infrastructure Projects',
    eyebrow: 'Heavy Civil & Engineering Contractor Platform · Enterprise Client',
    category: 'Client Work',
    categoryLabel: 'Client Work · Industrial & Corporate Infrastructure',
    status: 'Corporate Client Platform',
    featured: true,
    order: 1,
    year: '2026',
    summary: 'A full-scale corporate web application and qualification credential showcase for Classic Infrastructure Projects (CIP), an established engineering contracting firm (Est. 2008) executing pipeline networks, municipal drainage, heavy civil works, and mechanical installations.',
    audience: 'Government procurement officers, municipal corporations, public sector utilities, and industrial plant heads evaluating prequalification credentials and technical execution capacity for tenders.',
    challenge: 'Classic Infrastructure Projects has over 15 years of proven field execution—including multi-kilometer pipeline networks and municipal storm water RCC box culverts—yet lacked an institutional digital presence. In high-stakes tenders, decision-makers demand immediate, verifiable evidence of past execution, machinery fleets, safety standards, and structured bid inquiry channels.',
    objectives: [
      'Design an authoritative corporate presence reflecting 15+ years of infrastructure contracting experience.',
      'Showcase real high-resolution field photography categorized by discipline: Pipeline, Storm Water Drainage, Protection Works, Roads, and Mechanical Engineering.',
      'Implement an interactive RFP/quotation request system with automated email notifications for corporate bid inquiries.',
      'Guarantee fast loading speeds for field inspectors and municipal officials reviewing profiles on mobile devices in the field.'
    ],
    solution: 'Engineered a full-stack corporate platform using TanStack Start, React 19, and Tailwind CSS v4. Features comprehensive project portfolios, verified technical specifications, downloadable company profiles, and structured quotation request workflows.',
    whyItMatters: 'Proves Qavironel’s capability to serve established heavy-industry contractors and commercial enterprises. We translate complex engineering credentials, machinery assets, and compliance documentation into an authoritative, modern digital experience.',
    workflow: [
      'Procurement officers review corporate profile, client track record, and verified contracting strengths.',
      'Filter dynamic project gallery by sector (Pipeline, Drainage, Civil/Structural, Mechanical, Industrial Roads).',
      'Inspect high-resolution field execution photography and technical scope specifications.',
      'Submit structured RFP inquiries via integrated quote modal with instant email dispatch to CIP management.'
    ],
    buildNotes: [
      'Engineered with TanStack Start, React 19, and Tailwind CSS v4.',
      'High-density webp image pipeline compressing dozens of field photography assets without visual degradation.',
      'Backend quote API powered by server functions and Nodemailer with enterprise input validation.',
      'Strict adherence to verified client facts: no fabricated statistics, exaggerated capacities, or synthetic awards.'
    ],
    scopeNote: 'Engineered for Classic Infrastructure Projects (CIP), established 2008.',
    technologies: ['React 19', 'TanStack Start', 'Tailwind CSS v4', 'Nodemailer', 'High-Density WebP Pipeline', 'Lucide Icons', 'Zod Validation'],
    heroImage: '/images/projects/cip/cip-new-1-hero.webp',
    gallery: [
      {
        src: '/images/projects/cip/cip-pipeline-110-hero.webp',
        alt: 'Large-diameter pipeline network excavation and laying',
        caption: 'Pipeline transmission network execution featuring heavy mechanical excavation and precision joint welding.'
      },
      {
        src: '/images/projects/cip/cip-drainage-040-hero.webp',
        alt: 'Municipal storm water RCC box drain construction',
        caption: 'Heavy reinforced cement concrete (RCC) storm water drainage channel constructed for municipal flood management.'
      },
      {
        src: '/images/projects/cip/cip-protection-107-hero.webp',
        alt: 'Gabion river retaining wall and embankment protection',
        caption: 'Engineered gabion retaining wall system providing structural embankment reinforcement against erosion.'
      },
      {
        src: '/images/projects/cip/cip-roads-117.webp',
        alt: 'Industrial asphalt roadway construction and compaction',
        caption: 'Heavy-duty industrial bitumen roadway surfacing and mechanical compaction for plant transport corridors.'
      },
      {
        src: '/images/projects/cip/cip-mechanical-115.webp',
        alt: 'Plant mechanical piping and structural installation',
        caption: 'Industrial mechanical piping fabrication and valve manifold assembly for chemical and utility installations.'
      },
      {
        src: '/images/projects/cip/cip-new-2-hero.webp',
        alt: 'Deep trench pipeline alignment and safety shoring',
        caption: 'Deep trench pipeline alignment with structural earth retention and laser level alignment.'
      }
    ],
    metrics: [
      { value: 'Est. 2008', label: 'Company Heritage', context: '15+ years of verified infrastructure contracting' },
      { value: '62+', label: 'Field Photo Assets', context: 'High-resolution project gallery documentation' },
      { value: 'TanStack', label: 'Start Architecture', context: 'React 19 full-stack performance' }
    ],
    links: [
      { label: 'Client Category: Heavy Civil EPC', url: '/contact', type: 'external' }
    ]
  },
  {
    slug: 'ztees',
    title: 'Ztees',
    eyebrow: 'E-Commerce Storefront · Production Commerce',
    category: 'Client Work',
    categoryLabel: 'Client Work · E-Commerce',
    status: 'Live Storefront',
    featured: true,
    order: 2,
    year: '2026',
    summary: 'A mobile-first editorial storefront for an Indian streetwear brand, designed around quick product discovery and a direct WhatsApp order journey.',
    audience: 'Shoppers looking for graphic and heavyweight oversized streetwear drops, especially users browsing on phones who prefer conversational ordering over high-friction checkout funnels.',
    challenge: 'The brand was managing product drops and orders manually through Instagram direct messages, creating lost inquiries, repetitive product questions, and checkout drop-off. The client needed a fast, credible digital storefront without the overhead or ongoing monthly fees of a heavyweight Shopify or Magento subscription.',
    objectives: [
      'Enable rapid collection browsing and size verification on mobile devices.',
      'Transition shoppers into an automated WhatsApp order pre-fill without losing cart intent.',
      'Ship from initial creative brief to production launch within 48 hours.',
      'Maintain lightweight, instant-load performance across 4G and mobile networks.'
    ],
    solution: 'Designed and engineered a custom editorial storefront combining streetwear visual appeal with immediate conversion mechanics. Features include dynamic collection campaigns, structured size guides, high-density product photography grids, WhatsApp pre-populated checkout messaging, and UPI payment guidance.',
    whyItMatters: 'Demonstrates that small consumer brands do not always need an expensive multi-page checkout architecture to build trust. Crafting a high-speed, editorial presentation paired with natural regional payment habits (WhatsApp + UPI) produces higher completion rates than generic templates.',
    workflow: [
      'Editorial drop showcase featuring new arrivals and campaign artwork.',
      'Category and size filtering with clear price and inventory visibility.',
      'Product detail inspection with material details and fit specifications.',
      'One-tap "Order via WhatsApp" trigger generating an exact SKU, size, and pricing message for the seller.'
    ],
    buildNotes: [
      'Engineered with React, Vite, and Tailwind CSS for minimal bundle footprint.',
      'Optimized asset pipeline with modern responsive image sizing and webp conversion.',
      'Integrated OpenGraph cards tailored for social media drop shares.'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp Business Flow', 'UPI Integration', 'Performance SEO'],
    heroImage: '/images/work/ztees-hero.webp',
    gallery: [
      {
        src: '/images/projects/ztees-cover.jpg',
        alt: 'Ztees streetwear storefront hero drop presentation',
        caption: 'The editorial Mirzapur campaign hero banner highlighting the latest oversized graphic drop.'
      },
      {
        src: '/images/projects/ztees-products.png',
        alt: 'Ztees product collection grid with size and pricing tags',
        caption: 'Mobile-first product grid with instant size selectors and direct WhatsApp ordering buttons.'
      },
      {
        src: '/images/projects/ztees/porsche-911-studio.jpg',
        alt: 'Ztees Porsche 911 studio editorial drop mockup',
        caption: 'Studio editorial mockup showcasing heavy-cotton oversized apparel styling and typography.'
      },
      {
        src: '/images/projects/ztees/awakened-royal-blue-studio.jpg',
        alt: 'Ztees Awakened Royal Blue graphic tee mockup',
        caption: 'High-contrast studio garment render displaying front graphic placement and fabric texture.'
      },
      {
        src: '/images/projects/ztees/batman-batmobile-blueprint.jpg',
        alt: 'Ztees Batmobile blueprint conceptual graphic piece',
        caption: 'Technical blueprint graphic edition developed for targeted pop-culture drop campaigns.'
      },
      {
        src: '/images/projects/ztees/silent-crest-lavender-studio.jpg',
        alt: 'Ztees Silent Crest lavender studio render',
        caption: 'Pastel studio colorway photography prepared for summer drop lookbooks.'
      }
    ],
    metrics: [
      { value: '~2 Days', label: 'Brief to Production', context: 'Rapid turnkey delivery for a scheduled drop' },
      { value: '100%', label: 'Mobile-First', context: 'Optimized touch targets and vertical scrolling' },
      { value: 'Zero', label: 'Monthly SaaS Fees', context: 'Custom build eliminates recurring platform costs' }
    ],
    links: [
      { label: 'Visit Live Storefront', url: 'https://ztees.store/', type: 'live' }
    ]
  },
  {
    slug: 'kalki',
    title: 'K.A.L.K.I.',
    eyebrow: 'Local-First AI Desktop Assistant · Microsoft Store & Open Source',
    category: 'AI & Software',
    categoryLabel: 'Applied AI · Software Engineering',
    status: 'Active Open Source · Live on Microsoft Store',
    featured: true,
    order: 3,
    year: '2025–2026',
    summary: 'A voice-capable desktop assistant combining a tactical HUD, multi-model inference router (Groq LLaMA-3.3-70B, LLaMA-4-Scout vision, offline Ollama fallback), hardware-bound DPAPI vault, local memory, and guarded platform actions.',
    audience: 'Power users, developers, and security-conscious creators who want an intelligent desktop companion that operates close to the machine without sending sensitive credentials or unverified actions to uncontrolled third parties.',
    challenge: 'Most desktop AI assistants either rely entirely on cloud-hosted closed models that log user prompts, or they are fragile CLI scripts with no intuitive graphical interface. K.A.L.K.I. needed to unify voice interaction, multi-model flexibility, and local hardware awareness inside an aesthetic dashboard—while enforcing strict boundary controls over local shell execution.',
    objectives: [
      'Engineer a responsive visual HUD providing real-time telemetry, model status, and memory state.',
      'Support swappable inference providers: local models (Ollama/Llama 3) and cloud APIs (Groq LLaMA-3.3-70B, LLaMA-4-Scout, OpenAI, Gemini).',
      'Implement an authenticated localhost communication layer with DPAPI hardware-bound vault protection.',
      'Protect system resources by keeping host command execution explicitly sandboxed and gated behind confirmation flags.'
    ],
    solution: 'Built an architecture centered on an authenticated local daemon paired with a rich tactical PWA HUD. Features voice input with wake-word detection, local SQLite conversational memory, vision-assisted screen analysis, network/security diagnostic utilities (Shodan OSINT, CVE intelligence, Webscan), Telegram remote control, and guarded execution adapters.',
    whyItMatters: 'AI assistants must not become uninspected backdoors into personal operating systems. By engineering transparent trust boundaries, DPAPI hardware-bound token protection, and local model support, K.A.L.K.I. proves how applied AI and security engineering belong together.',
    workflow: [
      'Daemon startup initializes hardware-bound DPAPI vault and verifies provider availability.',
      'User triggers interaction via hotkey or voice command.',
      'Intent engine routes task to either local Ollama daemon or remote model based on task sensitivity.',
      'System actions execute through guarded adapters with explicit logging and confirmation.'
    ],
    buildNotes: [
      'Local-first runtime ensures basic offline utilities operate without active internet access.',
      'Speech recognition powered by offline VOSK models alongside optional cloud Whisper.',
      'Cybersecurity toolkit includes IP lookups, port checks, and password entropy testers.',
      'Published live on the Microsoft Store (Package ID: 9P6HJPQZBGFQ), with continuous open-source releases on GitHub.'
    ],
    scopeNote: 'Experimental capabilities such as deep operating system automation remain strictly guarded behind manual confirmation flags to ensure device safety.',
    technologies: ['Python', 'Local LLMs (Ollama)', 'Groq (LLaMA-3.3-70B)', 'DPAPI Vault', 'VOSK Voice Recognition', 'Custom HUD Architecture', 'Security Boundaries'],
    heroImage: '/images/projects/kalki/kalki-hud.png',
    gallery: [
      {
        src: '/images/projects/kalki/kalki-hud.png',
        alt: 'K.A.L.K.I. tactical desktop HUD displaying cognitive router state',
        caption: 'The reactive desktop HUD displaying active model connection, memory index, and telemetry.'
      },
      {
        src: '/images/projects/kalki/hud_tactical.png',
        alt: 'K.A.L.K.I. tactical telemetry panel and audio visualizer',
        caption: 'Real-time audio waveform visualizer and cognitive status telemetry monitors.'
      },
      {
        src: '/images/projects/kalki/hud_models.png',
        alt: 'K.A.L.K.I. multi-model selection and inference routing panel',
        caption: 'Model routing selector supporting Ollama local inference, Groq LLaMA, OpenAI, and Gemini.'
      },
      {
        src: '/images/projects/kalki/settings_general.png',
        alt: 'K.A.L.K.I. general preferences and secure token configuration',
        caption: 'System settings interface managing hardware-bound secrets and localhost authorization tokens.'
      },
      {
        src: '/images/projects/kalki/marketing_1.png',
        alt: 'K.A.L.K.I. Microsoft Store release showcase slide',
        caption: 'Official product presentation highlighting offline voice recognition, local vault, and security tools.'
      }
    ],
    metrics: [
      { value: 'v1.0.24', label: 'Store Version', context: 'Live on Microsoft Store (ID: 9P6HJPQZBGFQ)' },
      { value: 'Local-First', label: 'Architecture', context: 'Data and credentials stay on your hardware' },
      { value: 'Multi-LLM', label: 'Inference Routing', context: 'Ollama, Groq LLaMA 3.3, LLaMA-4-Scout, OpenAI' }
    ],
    links: [
      { label: 'View on Microsoft Store', url: 'https://apps.microsoft.com/detail/9P6HJPQZBGFQ', type: 'live' },
      { label: 'View Repository on GitHub', url: 'https://github.com/Maher-Bhatt/KALKI', type: 'github' },
      { label: 'View Releases on GitHub', url: 'https://github.com/Maher-Bhatt/KALKI/releases', type: 'live' }
    ]
  },
  {
    slug: 'finmate-ai',
    title: 'FinMate AI',
    eyebrow: 'Full-Stack AI Financial Platform · Product Lab Prototype',
    category: 'Product Lab',
    categoryLabel: 'Product Lab Prototype · Fintech & Applied AI',
    status: 'Product Lab Prototype (Full Codebase Shipped)',
    featured: true,
    order: 4,
    year: '2025–2026',
    summary: 'A full-stack financial bookkeeping and tax intelligence platform built with TanStack Start, React 19, Supabase, and Groq LLaMA models—featuring automated receipt OCR, GST tax slab categorization, and contextual AI advisory chat.',
    audience: 'Freelancers, independent contractors, and modern businesses who find legacy accounting software clunky and disconnected from digital receipt workflows.',
    challenge: 'Micro-businesses and freelancers struggle with timely ledger entry, classifying invoices under correct tax categories, and deciphering monthly cash burn. Existing tools require manual line-item entry and offer zero contextual financial guidance.',
    objectives: [
      'Engineer full-stack server functions for instant receipt OCR extraction via Groq vision models.',
      'Extract total amounts, merchants, tax identification numbers, and suggested expense categories automatically.',
      'Ground an AI financial advisor in user monthly income, expense summaries, and recent transaction records.',
      'Build interactive cash-flow dashboards, recurring subscription monitors, and goal trackers using Recharts.'
    ],
    solution: 'Designed and built a complete full-stack web application leveraging TanStack Start (SSR & server functions), Supabase (Auth, Storage, and PostgreSQL DB), and Groq AI API. Users snap or upload receipt images which are parsed in seconds, populated into structured transactions, and reflected in real-time cash flow visualizations.',
    whyItMatters: 'Proves high-velocity execution of modern full-stack engineering, combining bleeding-edge React 19 and TanStack Start with practical applied AI capabilities.',
    workflow: [
      'User snaps a photo or uploads a vendor bill/receipt into secure Supabase storage.',
      'TanStack Start server function invokes Groq API to extract amount, merchant, tax ID, and category.',
      'Transaction logs to database with one-click verification and automated monthly summary update.',
      'Conversational AI advisor analyzes monthly burn, recurring subscriptions, and projected tax liabilities.'
    ],
    buildNotes: [
      'Full codebase shipped using React 19, TanStack Start, and Tailwind CSS v4.',
      'Backend server functions (`advisor.functions.ts`, `receipt.functions.ts`) enforce Supabase authentication.',
      'Database schema models transactions, categories, recurring subscriptions, goals, and invoices in PostgreSQL.',
      'Active product lab prototype codebase.'
    ],
    scopeNote: 'Full prototype codebase engineered and verified in product lab.',
    technologies: ['React 19', 'TanStack Start', 'Tailwind CSS v4', 'Supabase (Auth & DB)', 'Groq API (LLaMA-3.3)', 'Receipt OCR', 'Recharts', 'Zod'],
    heroImage: '/images/work/ztees-hero.webp',
    gallery: [],
    metrics: [
      { value: 'Full-Stack', label: 'Working Codebase', context: 'TanStack Start server functions & Supabase' },
      { value: 'Groq AI', label: 'Receipt OCR', context: 'Automated receipt data extraction' },
      { value: 'AI Advisor', label: 'Contextual Chat', context: 'Grounded in monthly income & expense records' }
    ],
    links: [
      { label: 'Qavironel Product Lab Prototype', url: '/contact', type: 'external' }
    ]
  },
  {
    slug: 'civic-sathi',
    title: 'Civic Sathi',
    eyebrow: 'Civic Intelligence & Grievance Platform · Multi-Role System',
    category: 'Product Lab',
    categoryLabel: 'Civic Technology · Product Lab Monorepo',
    status: 'SIH 2026 Build / Product Lab Monorepo',
    featured: true,
    order: 5,
    year: '2026',
    summary: 'A 4-role civic operations platform connecting citizen grievance reporting, location-tagged photographic evidence, municipal intelligence triage, and contractor dispatch.',
    audience: 'Citizens reporting neighborhood infrastructure problems, municipal officials tracking remediation progress, and authorized contractors assigned to verified civic work orders.',
    challenge: 'Civic complaint channels are notoriously broken: citizen reports lack actionable location data or photographic proof, while municipal work orders disappear into opaque internal spreadsheets without public accountability.',
    objectives: [
      'Build a public-facing citizen reporting portal with geo-location capture and image evidence uploads.',
      'Architect role-separated portals for Municipal Officers, Contractors, and Administrators.',
      'Integrate AI issue clustering (HDBSCAN) to detect duplicate reports and prioritize systemic hazards.'
    ],
    solution: 'Designed and implemented an integrated civic monorepo featuring 4 distinct role applications: Citizen Public Portal, Municipal Operations Dashboard, Contractor Dispatch App, and Admin Command Center. Public citizens submit geo-tagged complaints with photographic proof and track resolution progress via unique ticket numbers.',
    whyItMatters: 'Demonstrates full-stack system architecture, monorepo discipline, and role-based access control (RBAC) applied to real-world municipal problems. Developed for Smart India Hackathon 2026 by Team Vertex.',
    workflow: [
      'Citizen submits road hazard or sanitation issue with photo proof and GPS coordinates.',
      'Public ticket generated for real-time tracking without requiring private user registration.',
      'Municipal officer verifies report severity, sets priority, and assigns registered contractor.',
      'Contractor uploads completion proof to close ticket, updating the public status audit trail.'
    ],
    buildNotes: [
      'Engineered as a monorepo containing 4 distinct role applications (admin, municipality, contractor, public).',
      'Frontend built with React 19, TypeScript, and Tailwind CSS.',
      'Integrated map coordinate mapping, HDBSCAN clustering heuristics, and photo verification checks.'
    ],
    scopeNote: 'Presented as an independent product-lab prototype developed for Smart India Hackathon 2026, with public demo portals accessible online.',
    technologies: ['React 19', 'FastAPI', 'Neon Postgres', 'HDBSCAN Clustering', 'Leaflet / GIS Mapping', 'Role-Based Access Control'],
    heroImage: '/images/projects/civic-sathi/vadodara-civic-atmosphere.webp',
    gallery: [
      {
        src: '/images/projects/civic-sathi/civic-sathi-logo.png',
        alt: 'Civic Sathi brand identity and official project emblem',
        caption: 'The official Civic Sathi project identity engineered for Smart India Hackathon 2026.'
      },
      {
        src: '/images/projects/civic-sathi/vadodara-civic-atmosphere.webp',
        alt: 'Civic Sathi municipal pilot context photography',
        caption: 'Pilot municipal deployment context tailored for municipal flood and sanitation challenges.'
      },
      {
        src: '/images/projects/civic-public-home.png',
        alt: 'Civic Sathi citizen landing page and issue report launcher',
        caption: 'The public citizen portal welcoming reports with step-by-step guidance and status lookup.'
      },
      {
        src: '/images/projects/civic-public-how-it-works.png',
        alt: 'Civic Sathi four-step civic resolution lifecycle walkthrough',
        caption: 'The public resolution workflow showing the progression from report to contractor verification.'
      },
      {
        src: '/images/projects/civic-municipality-login.png',
        alt: 'Civic Sathi municipal department officer authentication portal',
        caption: 'Dedicated municipal portal login with department-specific authentication.'
      },
      {
        src: '/images/projects/civic-contractor-login.png',
        alt: 'Civic Sathi contractor dispatch and job verification interface',
        caption: 'Contractor dashboard entrance for assigned field work and resolution proof uploads.'
      }
    ],
    metrics: [
      { value: '4 Separate', label: 'Role Surfaces', context: 'Citizen, Municipality, Contractor, and Admin' },
      { value: 'HDBSCAN', label: 'AI Clustering', context: 'Duplicate detection & hotspot ranking' },
      { value: 'SIH 2026', label: 'Hackathon Concept', context: 'Developed by Team Vertex for national competition' }
    ],
    links: [
      { label: 'View Public Portal Demo', url: 'https://janmind-public.vercel.app/', type: 'live' },
      { label: 'View Repository on GitHub', url: 'https://github.com/Maher-Bhatt/Civic-Sathi', type: 'github' }
    ]
  },
  {
    slug: 'codedroid',
    title: 'CodeDroid',
    eyebrow: 'Android Mobile IDE · Open Source Developer Tooling',
    category: 'Digital Products',
    categoryLabel: 'Developer Tooling · Mobile Engineering',
    status: 'Active Open Source Build',
    featured: true,
    order: 6,
    year: '2025–2026',
    summary: 'A pocket development environment for Android with an offline CodeMirror editor, integrated terminal, and on-device execution for Python and JavaScript.',
    audience: 'Computer science students, mobile learners, and traveling engineers who need to write, test, and debug scripts from an Android smartphone or tablet without needing a laptop.',
    challenge: 'Existing mobile text editors either stop at simple syntax coloring with no execution capability, or they require heavy cloud subscriptions that fail completely when offline. CodeDroid aimed to transform an ordinary mobile phone into a self-contained runtime environment.',
    objectives: [
      'Deliver fluid, multi-tab code editing with syntax highlighting across 18 programming languages.',
      'Embed on-device interpreters (Chaquopy for Python, Rhino for JS) requiring no internet access.',
      'Integrate cloud execution runners (Piston API) for compiling C, C++, Java, and Go.',
      'Include programmer-friendly keyboard extensions, Vim mode, auto-indentation, and a terminal.'
    ],
    solution: 'Engineered a native Android application packaging a customized CodeMirror webview editor alongside embedded native runtimes. Chaquopy provides a complete Python 3 standard library directly inside the APK, while an integrated terminal emulator captures standard in/out streams for true interactive script testing.',
    whyItMatters: 'Drastically lowers the barrier to entry for computer science students in developing regions who own a smartphone but lack reliable access to a personal laptop or home broadband. Makes learning to code accessible anywhere.',
    workflow: [
      'Create or open workspace files via the built-in Android file picker.',
      'Edit scripts with syntax highlighting, line numbers, autocomplete, and code folding.',
      'Execute Python or JS directly on the mobile processor without sending code across the network.',
      'View terminal output, inspect errors, or preview live HTML/CSS/JS in an integrated webview.'
    ],
    buildNotes: [
      'Chaquopy bridge translates Android bytecode into native CPython calls.',
      'Rhino JS engine powers offline JavaScript execution directly in memory.',
      'Configured with custom soft-keyboard toolbars for quick access to brackets, symbols, and tabs.'
    ],
    technologies: ['Android SDK', 'Java / Kotlin', 'Chaquopy (Python Runtime)', 'Rhino JS Engine', 'CodeMirror', 'Piston API'],
    heroImage: '/images/work/codedroid-multidevice.webp',
    gallery: [
      {
        src: '/images/projects/codedroid-cover.png',
        alt: 'CodeDroid code editing view with syntax highlighting and file tree',
        caption: 'Multi-tab editor interface with line numbers, dark theme, and symbol shortcuts.'
      },
      {
        src: '/images/projects/codedroid-devices.png',
        alt: 'CodeDroid responsive interface across Android phone and tablet screens',
        caption: 'Adapts seamlessly across mobile phones and tablet viewports with split terminal views.'
      }
    ],
    metrics: [
      { value: '18+', label: 'Languages Supported', context: 'Syntax highlighting and execution profiles' },
      { value: 'Offline', label: 'Python & JS Runtimes', context: 'True on-device compilation without internet' },
      { value: 'Mobile-Native', label: 'Android Package', context: 'Optimized touch ergonomics and file management' }
    ],
    links: [
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/CodeDroid', type: 'github' },
      { label: 'Download APK Package', url: 'https://github.com/Maher-Bhatt/CodeDroid/releases/latest', type: 'demo' }
    ]
  },
  {
    slug: 'statskill-ai',
    title: 'StatSkill AI',
    eyebrow: 'Adaptive Learning & Skill-Gap Analytics · SIH 2026',
    category: 'Product Lab',
    categoryLabel: 'Product Lab Prototype · AI & Workforce Analytics',
    status: 'SIH 2026 Competitive Build',
    featured: false,
    order: 7,
    year: '2026',
    summary: 'A skill-gap assessment and adaptive learning platform designed for the statistical workforce, featuring interactive proficiency rubrics, dynamic radar evaluations, and personalized curriculum pathways.',
    audience: 'Data analysts, government statisticians, and university researchers looking to identify gaps in statistical modeling, survey sampling, and quantitative analysis.',
    challenge: 'Traditional learning platforms offer static multiple-choice tests that fail to assess real-world data science intuition or model diagnostics. StatSkill AI was conceived to evaluate practical proficiency and adapt training paths in real time.',
    objectives: [
      'Engineer a multi-dimensional competency radar assessing survey methodology, probability, and inference.',
      'Visualize skill-gap distributions against benchmark industry roles.',
      'Deliver fluid, responsive analytics using React, Vite, Recharts, and Framer Motion.',
      'Collaborate in a cross-functional hackathon team separating frontend analytics from backend services.'
    ],
    solution: 'Engineered an interactive analytics and learning dashboard where users complete scenario-based evaluations. Visualizes multidimensional competency profiles and suggests targeted micro-modules to close diagnosed skill deficiencies.',
    whyItMatters: 'Demonstrates deep capability in complex data visualization, interactive chart design (Recharts), and specialized enterprise dashboard engineering.',
    workflow: [
      'Practitioner completes diagnostic assessment covering probability, survey sampling, and data governance.',
      'Adaptive engine calculates score weights across 6 core statistical competency vectors.',
      'Interactive radar chart displays practitioner capabilities versus target role requirements.',
      'Personalized modular learning curriculum generates with prioritized improvement topics.'
    ],
    buildNotes: [
      'Frontend built with React, TypeScript, Vite, Recharts, and Framer Motion.',
      'Modular component architecture designed for rapid integration with team backend APIs.',
      'Engineered for Smart India Hackathon 2026 workforce development problem statements.'
    ],
    scopeNote: 'Competitive frontend prototype developed for Smart India Hackathon 2026; frontend architecture led by Maher Bhatt.',
    technologies: ['React', 'TypeScript', 'Vite', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
    heroImage: '/images/work/codedroid-multidevice.webp',
    gallery: [],
    metrics: [
      { value: 'SIH 2026', label: 'Hackathon Track', context: 'Workforce skill analytics platform' },
      { value: 'Multi-Vector', label: 'Radar Analytics', context: 'Interactive competency benchmarking' },
      { value: 'Vite + React', label: 'Frontend Stack', context: 'High-speed component architecture' }
    ],
    links: [
      { label: 'SIH 2026 Product Prototype', url: '/contact', type: 'external' }
    ]
  },
  {
    slug: 'itm-notes',
    title: 'ITM Notes',
    eyebrow: 'Student Resource Platform · Digital Product',
    category: 'Digital Products',
    categoryLabel: 'Digital Products · Education',
    status: 'Live Platform',
    featured: false,
    order: 8,
    year: '2025–2026',
    summary: 'A focused study platform that organizes Semester 2 engineering subjects, materials, practice quizzes, and search for 300+ B.Tech students.',
    audience: 'Undergraduate engineering students who need unified, instant access to syllabus-aligned study materials without digging through unorganized messaging groups and cloud folders.',
    challenge: 'Course materials, previous year exam papers, and laboratory assignments were scattered across disparate cloud drives, messaging groups, and outdated portals. Students routinely struggled to locate accurate study guides during exam preparation cycles.',
    objectives: [
      'Organize curricula into clean, searchable digital subject modules.',
      'Provide instant client-side search across chapters, topics, and important exam questions.',
      'Ensure 100% mobile usability for studying on transit and between classes.',
      'Keep hosting and maintenance zero-cost through an optimized static JAMstack architecture.'
    ],
    solution: 'Designed and deployed a responsive educational hub indexing five core engineering subjects: Python Programming, C Language, Digital Electronics, Probability & Statistics, and Financial Accounting. Includes downloadable lecture PDFs, curated important question banks, and progress tracking.',
    whyItMatters: 'Demonstrates how thoughtful information architecture and clean design can turn chaotic academic documents into an empowering daily tool that directly serves hundreds of fellow university peers.',
    workflow: [
      'Landing dashboard displays active semester syllabus and recent syllabus notices.',
      'Students select a subject to access structured units, lecture slides, and formula sheets.',
      'Global search bar filters topics and question banks in real time.',
      'One-click PDF preview or direct download for offline study.'
    ],
    buildNotes: [
      'Built using React and TypeScript deployed to Vercel edge networks.',
      'Curated content verified in collaboration with university course representatives.',
      'Optimized with client-side indexing for zero-latency instant search.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Client-side Search Index', 'Vercel Edge Platform'],
    heroImage: '/images/work/itm-notes-home.webp',
    gallery: [
      {
        src: '/images/projects/itmnotes-cover.png',
        alt: 'ITM Notes study dashboard showcasing Semester 2 subject cards',
        caption: 'The main dashboard organizing five foundational semester subjects with progress indicators.'
      },
      {
        src: '/images/projects/itmnotes-subjects.png',
        alt: 'ITM Notes subject syllabus breakdown and PDF resource listings',
        caption: 'Subject detail view with structured unit modules, downloadable guides, and exam question banks.'
      }
    ],
    metrics: [
      { value: '300+', label: 'Active University Students', context: 'Adopted across engineering student cohort' },
      { value: '5 Core', label: 'B.Tech Subjects', context: 'Python, C, Digital Electronics, Stats & Accounting' },
      { value: '100%', label: 'Mobile Optimized', context: 'Designed for quick study on phones' }
    ],
    links: [
      { label: 'Visit Live Study Platform', url: 'https://itm-notes-new.vercel.app/', type: 'live' },
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/itm-notes', type: 'github' }
    ]
  },
  {
    slug: 'chain-of-achievements',
    title: 'Chain of Achievements',
    eyebrow: 'Blockchain Credential System · Smart Contract Lab',
    category: 'Experiments',
    categoryLabel: 'Open Source · Web3 & Smart Contracts',
    status: 'Open Source Prototype',
    featured: false,
    order: 9,
    year: '2025',
    summary: 'A blockchain verification prototype exploring tamper-proof academic and professional certification issuance on an Ethereum testnet.',
    audience: 'Educational institutions, certification authorities, and students requiring immutable, verifiable proof of achievement.',
    challenge: 'Digital certificates in PDF format are easily spoofed or altered, while centralized verification APIs depend entirely on the issuing institution remaining operational.',
    objectives: [
      'Write and deploy ERC-721 smart contracts representing non-transferable achievement tokens.',
      'Build a lightweight React interface for minting and cryptographic verification.',
      'Deliver working code in a rapid 4-hour hackathon sprint.'
    ],
    solution: 'Developed Solidity contracts allowing authorized issuers to mint certificate tokens containing IPFS metadata hashes, verifiable on public block explorers.',
    whyItMatters: 'Demonstrates hands-on smart contract engineering, cryptographic verification principles, and Web3 frontend integration.',
    workflow: [
      'Issuer connects authorized Web3 wallet.',
      'Mints non-transferable certificate token with metadata stored on IPFS.',
      'Anyone can verify credential validity against the blockchain contract.'
    ],
    technologies: ['Solidity', 'Ethereum Testnet', 'Web3.js', 'React', 'IPFS'],
    heroImage: '/images/projects/velocity-cover.png',
    gallery: [],
    links: [
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/chain-of-achievements', type: 'github' }
    ]
  },
  {
    slug: 'socialsafe',
    title: 'SocialSafe',
    eyebrow: 'Login Awareness Lab · Cybersecurity Education',
    category: 'Experiments',
    categoryLabel: 'Open Source · Cybersecurity Education',
    status: 'Open Source Lab',
    featured: false,
    order: 10,
    year: '2026',
    summary: 'An educational login awareness and phishing defense demonstration built with zero network storage, strict CSP boundaries, and security awareness guidance.',
    audience: 'Students and computer users learning to recognize credential harvesting risks and understand web defense boundaries.',
    challenge: 'Security awareness lectures often feel abstract without hands-on demonstrations showing how credential submission actually works—and how strict web boundaries protect users.',
    objectives: [
      'Build a completely isolated demonstration login page with zero network transmission.',
      'Enforce Content Security Policy: form-action none and connect-src none.',
      'Teach URL inspection, HTTPS limitations, and password manager safety.'
    ],
    solution: 'Engineered a dependency-free educational lab that performs strictly synchronous in-memory comparison against dummy values, clearing credentials immediately with zero network logging.',
    whyItMatters: 'Reflects deep cybersecurity discipline, defensive engineering practices, and privacy-first architectural choices.',
    workflow: [
      'Interactive login lab with dummy credentials.',
      'Synchronous credential erasure on every interaction.',
      'Accompanying security briefing explaining phishing indicators.'
    ],
    technologies: ['HTML5', 'CSS3', 'Modern JavaScript', 'Content Security Policy (CSP)', 'Threat Modeling'],
    heroImage: '/images/projects/kalki-security.png',
    gallery: [],
    links: [
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/SocialSafe', type: 'github' }
    ]
  },
  {
    slug: 'password-generator',
    title: 'Cryptographic Password Generator',
    eyebrow: 'Security Utility · Python CLI',
    category: 'Experiments',
    categoryLabel: 'Open Source · Security Utility',
    status: 'Open Source Utility',
    featured: false,
    order: 11,
    year: '2025',
    summary: 'A Python cryptographic command-line utility for generating cryptographically secure, high-entropy passwords with custom character constraints.',
    audience: 'System administrators and security-conscious developers needing random keys without reliance on online generators.',
    challenge: 'Many simple password generators rely on pseudorandom number generators that lack cryptographic unpredictability.',
    objectives: [
      'Utilize system entropy via Python secrets module.',
      'Provide customizable symbol, digit, and length parameters.',
      'Calculate Shannon entropy to grade generated secret strength.'
    ],
    solution: 'Built a lightweight Python script leveraging OS-level cryptographically secure random number sources to guarantee unpredictability.',
    whyItMatters: 'Shows solid fundamentals in cryptographic libraries, CLI tool design, and security best practices.',
    workflow: [
      'Specify desired password length and character flags.',
      'Generate secure string using OS entropy sources.',
      'Display estimated entropy bits and crack-time safety margin.'
    ],
    technologies: ['Python', 'Secrets Module', 'Cryptographic Entropy', 'CLI Ergonomics'],
    heroImage: '/images/projects/codedroid-cover.png',
    gallery: [],
    links: [
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/Password-Generator', type: 'github' }
    ]
  }
];

export const categories: { id: Project['category']; label: string }[] = [
  { id: 'All Work', label: 'All Work' },
  { id: 'Client Work', label: 'Client Work' },
  { id: 'Digital Products', label: 'Digital Products' },
  { id: 'AI & Software', label: 'AI & Software' },
  { id: 'Product Lab', label: 'Product Lab' },
  { id: 'Experiments', label: 'Experiments & Labs' }
];
