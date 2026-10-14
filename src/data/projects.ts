import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'kalki',
    title: 'K.A.L.K.I.',
    eyebrow: 'Local-First AI Desktop Assistant · Microsoft Store & Open Source',
    category: 'AI & Software',
    categoryLabel: 'Applied AI · Software Engineering',
    status: 'Active Open Source · Live on Microsoft Store',
    featured: true,
    order: 1,
    year: '2025–2026',
    summary: 'A voice-capable desktop assistant combining a tactical HUD, multi-model inference router (Groq LLaMA-3.3-70B, LLaMA-4-Scout vision, offline Ollama fallback), hardware-bound DPAPI vault, local memory, and guarded platform actions.',
    audience: 'Power users, developers, and security-conscious creators who want an intelligent desktop companion that operates close to the machine without sending sensitive credentials or unverified actions to uncontrolled third parties.',
    challenge: 'Most desktop AI assistants either rely entirely on cloud-hosted closed models that log user prompts, or they are fragile CLI scripts with no intuitive graphical interface. K.A.L.K.I. needed to unify voice interaction, multi-model flexibility, and local hardware awareness inside a sleek, aesthetically refined dashboard—while enforcing strict boundary controls over local shell execution.',
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
    heroImage: '/images/projects/kalki/kalki-store-marketing.png',
    videoSrc: '/videos/kalki-video.mp4',
    gallery: [
      {
        src: '/images/projects/kalki/kalki-hero.png',
        alt: 'K.A.L.K.I. main desktop HUD interface and active cognitive status',
        caption: 'The reactive desktop HUD displaying active model connection, memory state, and core interaction center.'
      },
      {
        src: '/images/projects/kalki/kalki-ask.png',
        alt: 'K.A.L.K.I. conversational intelligence interface and multi-model prompting',
        caption: 'Conversational intelligence workspace with multi-model prompt orchestration and real-time streaming telemetry.'
      },
      {
        src: '/images/projects/kalki/kalki-today.png',
        alt: 'K.A.L.K.I. tactical daily briefing and agenda oversight',
        caption: 'Autonomous daily agenda tracking, task synthesis, and proactive desktop notification intelligence.'
      },
      {
        src: '/images/projects/kalki/kalki-memory.png',
        alt: 'K.A.L.K.I. local vector memory vault and semantic retrieval indexing',
        caption: 'Local-first vector memory vault keeping conversational indexing strictly on physical hardware.'
      },
      {
        src: '/images/projects/kalki/kalki-workbench.png',
        alt: 'K.A.L.K.I. developer workbench and guarded code execution studio',
        caption: 'Execution workbench with sandboxed code compilation, system utilities, and diagnostic adapters.'
      },
      {
        src: '/images/projects/kalki/kalki-oversight.png',
        alt: 'K.A.L.K.I. runtime telemetry and inference oversight monitor',
        caption: 'Real-time telemetry monitor tracking token latency, model provider health, and daemon operations.'
      },
      {
        src: '/images/projects/kalki/kalki-settings.png',
        alt: 'K.A.L.K.I. hardware-bound DPAPI vault configuration and preferences',
        caption: 'DPAPI hardware-bound secrets vault and localhost authorization settings.'
      },
      {
        src: '/images/projects/kalki/kalki-store-marketing.png',
        alt: 'K.A.L.K.I. Microsoft Store official release architecture kit',
        caption: 'Official Microsoft Store release presentation highlighting offline voice recognition, local privacy, and multi-model flexibility.'
      }
    ],
    metrics: [
      { value: 'v1.0.4', label: 'Store Version', context: 'Live on Microsoft Store (ID: 9P6HJPQZBGFQ)' },
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
    slug: 'ztees',
    title: 'Ztees',
    eyebrow: 'Direct-to-Consumer Streetwear Engine · Storefront & Operations Console',
    category: 'Client Work',
    categoryLabel: 'Client Work · E-Commerce & Retail Operations',
    status: 'Production Storefront & Owner Console',
    featured: true,
    order: 2,
    year: '2026',
    summary: 'A high-conversion streetwear commerce ecosystem built for Z Tees India, comprising a mobile-first editorial customer storefront (ztees.store), a dedicated private owner operations console (/admin), and an Expo Android mobile app. It features 61 live oversized graphic tees, instant size selection, multi-angle media studio, customer review moderation, and frictionless WhatsApp + UPI conversational checkout.',
    audience: 'D2C apparel shoppers seeking heavyweight 240 GSM graphic streetwear drops, alongside brand owners who require real-time catalog management, order triage, and zero-overhead SaaS operations.',
    challenge: 'The brand was bottlenecked by manual Instagram DM ordering: customer inquiries slipped through message requests, sizing questions were repeated endlessly, and stock counts were impossible to track accurately during limited-quantity drops. Meanwhile, standard Shopify subscriptions imposed monthly overhead, payment gateway transaction cuts, and sluggish mobile page load times.',
    objectives: [
      'Engineer an editorial, drop-driven customer storefront displaying 60+ active streetwear designs.',
      'Build a high-converting frictionless checkout routing orders directly into pre-filled WhatsApp UPI payment messages.',
      'Develop a protected owner workspace (/admin) with Supabase Auth for real-time catalog updates and order triage.',
      'Implement a multi-angle Media Studio allowing the merchant to upload front, back, detail, and lifestyle photos.',
      'Package an Expo React Native Android mobile client for on-the-go customer shopping and store management.',
      'Eliminate recurring SaaS subscription fees while achieving sub-second edge load speeds on mobile networks.'
    ],
    solution: 'Architected a dual-surface e-commerce engine using Vite, React 18, Tailwind CSS, and Supabase PostgreSQL. For consumers, the platform offers an editorial catalog with instant size matrices, interactive drop campaigns (Janmashtami Radha Krishna, Heavyweight, Anime, Motorsport), and automated WhatsApp order generation. For the brand owner, a private console provides live order queues, CSV exports, catalog pricing/GSM toggles, customer review moderation, and cloud media uploads.',
    whyItMatters: 'Demonstrates how high-velocity software engineering eliminates SaaS lock-in: replacing costly commerce subscriptions with a custom, ultra-fast storefront and dedicated owner operations suite that respects Indian consumer checkout habits (WhatsApp + UPI).',
    workflow: [
      'Customer Discovery: Shoppers browse seasonal drops with interactive category chips, color swatches, and instant search across 61 designs.',
      'Product & Fit Inspection: Detailed product view featuring 240 GSM cotton specifications, oversized fit guides, and multi-angle photography.',
      'Frictionless Checkout: Instant bag addition with automated "Buy Now on WhatsApp" pre-formatting SKU, size, price, and customer address.',
      'Owner Order Triage: Brand managers monitor live incoming orders in /admin, update fulfillment status, and add courier tracking notes.',
      'Catalog & Review Operations: Instant product creation with fabric specs, live stock toggles, and customer review moderation ("Read. Check. Publish.").'
    ],
    buildNotes: [
      'Built with React 18, Vite, Tailwind CSS, and Supabase Realtime for instant catalog synchronization.',
      'Integrated Supabase PostgreSQL with Row-Level Security (RLS) separating public catalog reads from protected admin operations.',
      'Engineered automated WhatsApp order payload generator that serializes cart items into formatted WhatsApp Business messages.',
      'Developed native Expo React Native Android mobile app with EAS Build release pipelines.'
    ],
    technologies: [
      'React 18',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Supabase (PostgreSQL & Auth)',
      'Supabase Realtime',
      'React Native (Expo EAS)',
      'WhatsApp Business API',
      'UPI Payment Protocol'
    ],
    heroImage: '/images/projects/ztees/ztees-storefront-hero.png',
    videoSrc: '/videos/ztees-video.mp4',
    gallery: [
      {
        src: '/images/projects/ztees/ztees-storefront-hero.png',
        alt: 'Z Tees India streetwear storefront hero drop presentation',
        caption: 'The Janmashtami Radha Krishna limited edition drop hero banner showcasing 240 GSM oversized apparel.'
      },
      {
        src: '/images/projects/ztees/ztees-drop-catalog.png',
        alt: 'Z Tees editorial product drop catalog with pricing and discount badges',
        caption: 'The New Drop product grid featuring Thunder, Silent Crest, Awakened, and discount badges.'
      },
      {
        src: '/images/projects/ztees/ztees-collection-filter.png',
        alt: 'Z Tees 61-piece collection browser with category chips and search',
        caption: 'Complete 61-design collection browser with category filtering across Heavyweight, Anime, and Motorsport.'
      },
      {
        src: '/images/projects/ztees/ztees-product-detail.png',
        alt: 'Z Tees Silent Crest product detail view with WhatsApp checkout',
        caption: 'Detailed product page with size selector, fabric specs, and direct "Buy Now on WhatsApp" checkout.'
      },
      {
        src: '/images/projects/ztees/ztees-cart-checkout.png',
        alt: 'Z Tees cart drawer and order summary with UPI notice',
        caption: 'Interactive shopping cart with item quantity modifiers, Gujarat free delivery badge, and UPI instructions.'
      },
      {
        src: '/images/projects/ztees/ztees-owner-auth.png',
        alt: 'Z Tees private owner workspace login console',
        caption: 'Protected owner console login ("Run The Drop") authenticated via Supabase Auth for brand operators.'
      },
      {
        src: '/images/projects/ztees/ztees-owner-orders.png',
        alt: 'Z Tees owner operations order queue and customer address triage',
        caption: 'Real-time order management dashboard displaying customer names, delivery addresses, fulfillment notes, and CSV export.'
      },
      {
        src: '/images/projects/ztees/ztees-catalogue-manager.png',
        alt: 'Z Tees catalog editor with GSM fabric specs and live toggles',
        caption: 'Live catalog creator supporting SKU slugs, 240 GSM fabric specs, oversized fit metadata, and instant storefront sync.'
      },
      {
        src: '/images/projects/ztees/ztees-review-moderation.png',
        alt: 'Z Tees customer review moderation console',
        caption: 'Customer voice moderation dashboard ("Read. Check. Publish.") for approving verified 5-star shopper feedback.'
      },
      {
        src: '/images/projects/ztees/ztees-media-studio.png',
        alt: 'Z Tees Media Studio multi-angle photography uploader',
        caption: 'Brand media studio allowing owners to upload and queue front, back, detail, and lifestyle photoshoot angles.'
      }
    ],
    metrics: [
      { value: '61 Active', label: 'Streetwear Designs', context: 'Curated 240 GSM catalog synced via Supabase' },
      { value: 'Dual-Surface', label: 'Storefront + Admin', context: 'Public D2C store & private owner operations console' },
      { value: 'Zero Fees', label: 'Direct WhatsApp + UPI', context: 'Eliminates recurring Shopify & gateway subscription costs' }
    ],
    links: [
      { label: 'Visit Live Storefront', url: 'https://ztees.store/', type: 'live' },
      { label: 'Protected Admin Console', url: 'https://ztees.store/admin/login', type: 'demo' }
    ]
  },
  {
    slug: 'classic-infrastructure',
    title: 'Classic Infrastructure Projects',
    eyebrow: 'Enterprise Contracting Platform · Full-Stack Platform',
    category: 'Client Work',
    categoryLabel: 'Client Work · Industrial & Corporate Infrastructure',
    status: 'Corporate Client Platform',
    featured: true,
    order: 3,
    year: '2026',
    summary: 'A full-scale corporate web application and qualification credential showcase for Classic Infrastructure Projects (CIP), an established engineering contracting firm (Est. 2008) executing pipeline networks, municipal drainage, heavy civil works, and mechanical installations.',
    audience: 'Government procurement officers, municipal corporations, public sector utilities, and industrial plant heads evaluating prequalification credentials and technical execution capacity for tenders.',
    challenge: 'Classic Infrastructure Projects has over 15 years of proven field execution—including multi-kilometer pipeline networks and municipal stormwater RCC box culverts—yet lacked an institutional digital presence. In high-stakes tenders, decision-makers demand immediate, verifiable evidence of past execution, machinery fleets, safety standards, and structured bid inquiry channels.',
    objectives: [
      'Design an authoritative corporate presence reflecting 15+ years of infrastructure contracting experience.',
      'Showcase real high-resolution field photography categorized by discipline: Pipeline, Stormwater Drainage, Protection Works, Roads, and Mechanical Engineering.',
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
    videoSrc: '/videos/hero-showreel.mp4',
    gallery: [
      {
        src: '/images/projects/cip/cip-pipeline-110-hero.webp',
        alt: 'Large-diameter pipeline network excavation and laying',
        caption: 'Pipeline transmission network execution featuring heavy mechanical excavation and precision joint welding.'
      },
      {
        src: '/images/projects/cip/cip-drainage-040-hero.webp',
        alt: 'Municipal stormwater RCC box drain construction',
        caption: 'Heavy reinforced cement concrete (RCC) stormwater drainage channel constructed for municipal flood management.'
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
      { label: 'View EPC Credential Dossier (Enterprise Intranet Portal)', url: '/contact', type: 'live' }
    ]
  },
  {
    slug: 'civic-sathi',
    title: 'Civic Sathi',
    eyebrow: 'Civic Intelligence & Grievance Platform · 4-Portal Municipal Ecosystem',
    category: 'Product Lab',
    categoryLabel: 'Civic Technology & Smart Governance · SIH 2026',
    status: 'SIH 2026 National Finalist Platform',
    featured: true,
    order: 4,
    year: '2026',
    summary: 'A production-grade civic operations ecosystem developed by Team Vertex for Smart India Hackathon 2026. Unifies four role-separated portals (Public Citizen, Municipal Ward Officer, Contractor Dispatch, and Super Admin) featuring AI problem categorization, HDBSCAN duplicate clustering, live locality GIS heatmaps across 4 metros (Delhi, Mumbai, Bengaluru, Vadodara), Participatory Budgeting, and Tri-Partite contractor transparency scoring.',
    audience: 'Urban citizens seeking rapid municipal grievance redressal, municipal ward officers triaging neighborhood complaints, infrastructure contractors fulfilling work orders, and city administrators monitoring cross-ward governance metrics.',
    challenge: 'Municipal complaint channels suffer from deep structural friction: citizens submit ambiguous reports without precise geospatial coordinates or photographic proof, identical complaints overwhelm ward desks without duplicate grouping, and contractor allocation remains opaque without public accountability or performance metrics.',
    objectives: [
      'Architect 4 dedicated role-based portals (Public Citizen, Municipality, Contractor, Super Admin) in a unified monorepo.',
      'Deploy a multi-metro GIS map with live severity zones (Low, Moderate, High, Critical) and locality drilldowns across Delhi, Mumbai, Bengaluru, and Vadodara.',
      'Deliver a frictionless 4-step grievance wizard with natural voice description ("Describe by Voice"), AI suggestions, and GPS evidence uploads.',
      'Implement HDBSCAN machine learning clustering to detect duplicate reports and prioritize systemic civic infrastructure hazards.',
      'Pioneer a Tri-Partite Contractor Rating system combining citizen votes, AI SLA quality verification, and government inspection scores.',
      'Integrate a Daily Community Hub with real-time Open-Meteo AQI telemetry and Participatory Budgeting voting on municipal projects.'
    ],
    solution: 'Engineered Civic Sathi as a high-velocity full-stack monorepo with React 19, TypeScript, Tailwind CSS, Leaflet GIS, FastAPI, and Neon Postgres. Features an interactive citizen map tracking 1,200+ mapped reports across major Indian cities, voice-assisted complaint submission, locality-level issue analytics, live AQI and emergency service cards, and an open democratic participatory budgeting module.',
    whyItMatters: 'Demonstrates full-scale enterprise software architecture applied to civic governance—turning opaque municipal bureaucracy into an accountable, transparent, and participatory digital system for millions of urban residents.',
    workflow: [
      'Citizen Geotagged Reporting: Citizens describe civic issues via voice or text; AI automatically suggests categories, extracts coordinates, and logs photographic evidence.',
      'Interactive Locality Mapping: Live Leaflet GIS map visualizes complaint density, severity hotspots (Low to Critical), and locality drilldowns across 4 metros.',
      'Tri-Partite Contractor Accountability: Public citizens, AI verification models, and municipal inspectors jointly score contractor performance on completed work orders.',
      'Participatory Budgeting: Citizens directly cast democratic votes on local infrastructure initiatives (solar streetlights, lake rejuvenation, health clinics).',
      'Municipal & Admin Dispatch: Ward officers triage clustered complaints, assign vetted contractors, and track resolution proofs to ticket closure.'
    ],
    buildNotes: [
      'Engineered as a high-cohesion monorepo containing 4 distinct role applications (public, municipality, contractor, admin).',
      'Integrated Leaflet and OpenStreetMap GIS engine for interactive locality polygons and real-time severity heatmaps.',
      'Implemented HDBSCAN unsupervised spatial clustering algorithms to group redundant neighborhood complaints into unified work orders.',
      'Connected Open-Meteo API for real-time Air Quality Index (AQI) and meteorological telemetry in the Community Hub.',
      'Built offline-capable PWA client with multi-lingual localization support (English, Hindi, Gujarati).'
    ],
    scopeNote: 'Presented as an independent product-lab prototype developed for Smart India Hackathon 2026, with public demo portals accessible online.',
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Leaflet / OpenStreetMap GIS',
      'FastAPI & Python',
      'Neon PostgreSQL',
      'HDBSCAN Spatial Clustering',
      'Open-Meteo Weather API',
      'Role-Based Access Control (RBAC)',
      'Vite PWA'
    ],
    heroImage: '/images/projects/civic-sathi/civic-sathi-delhi-hero.png',
    videoSrc: '/videos/tech-atmosphere.mp4',
    gallery: [
      {
        src: '/images/projects/civic-sathi/civic-sathi-delhi-hero.png',
        alt: 'Civic Sathi Delhi MCD Citizen Portal with live severity map',
        caption: 'The multi-city citizen portal featuring live severity zones, Leaflet mapping, and 1,200+ mapped reports across Delhi MCD.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-map-analytics.png',
        alt: 'Civic Sathi locality activity map with severity donut distribution',
        caption: 'Interactive GIS mapping interface displaying severity distribution charts (Low, Moderate, High, Critical) and active area rankings.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-locality-drilldown.png',
        alt: 'Civic Sathi India Gate and Central Vista locality drilldown modal',
        caption: 'Granular locality drilldown modal tracking resolved reports, issue mix histograms (road damage, drainage), and recent activity.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-report-wizard.png',
        alt: 'Civic Sathi step-by-step grievance reporting wizard with voice input',
        caption: 'Four-step issue reporting wizard with voice description input ("Describe by Voice"), AI category suggestion, and evidence upload.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-contractor-ratings.png',
        alt: 'Civic Sathi Tri-Partite contractor transparency and ratings leaderboard',
        caption: 'Public contractor accountability board displaying tri-partite scores combining citizen votes, AI SLA checks, and government inspections.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-community-hub.png',
        alt: 'Civic Sathi City Hub community center with real-time AQI and emergency cards',
        caption: 'Daily-use community center showing live Open-Meteo AQI telemetry, emergency service contacts (112, 101, 108), and participatory projects.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-participatory-budgeting.png',
        alt: 'Civic Sathi community projects participatory budgeting voting portal',
        caption: 'Participatory budgeting module empowering citizens to vote on municipal fund allocations for solar lighting, parks, and clinics.'
      },
      {
        src: '/images/projects/civic-sathi/civic-sathi-heritage-panel.png',
        alt: 'Civic Sathi cultural and civic heritage conservation panel',
        caption: 'Municipal heritage foundation panel indexing historical monuments (Red Fort UNESCO, India Gate, Qutub Minar) for conservation.'
      }
    ],
    metrics: [
      { value: '4 Portals', label: 'Role Surfaces', context: 'Citizen, Municipality, Contractor, and Admin command' },
      { value: '1,200+', label: 'Seeded GIS Incident Reports', context: 'Geospatial hotspot test dataset across Delhi MCD (SIH 2026 Prototype)' },
      { value: 'Tri-Partite', label: 'Accountability Model', context: 'Public citizen + AI SLA + government inspection ratings' }
    ],
    links: [
      { label: 'View Public Portal Demo', url: 'https://janmind-public.vercel.app/', type: 'live' },
      { label: 'Explore Civic Map', url: 'https://janmind-public.vercel.app/map', type: 'demo' },
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
    order: 5,
    year: '2025–2026',
    summary: 'A pocket development environment for Android with an offline CodeMirror editor, integrated terminal, and on-device execution for Python and JavaScript.',
    audience: 'Computer science students, mobile learners, and traveling engineers who need to write, test, and debug scripts from an Android smartphone or tablet without requiring a laptop.',
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
    videoSrc: '/videos/tech-atmosphere.mp4',
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
    slug: 'itm-notes',
    title: 'ITM Notes',
    eyebrow: 'Full-Stack Academic Operating System · Engineering Study Suite',
    category: 'Academic Build',
    categoryLabel: 'Academic Build · Academic Systems & EdTech',
    status: 'Live Production Platform',
    featured: false,
    order: 6,
    year: '2025–2026',
    summary: 'A comprehensive academic operating system engineered for engineering undergraduates at ITM (SLS) Baroda University. Unifies an in-browser coding sandbox with 154 runnable practicals, a 954-question timed quiz engine, KaTeX LaTeX syllabus reader with TTS audio lectures, 75% attendance compliance guard, 10-point relative SGPA predictor, and real-time Campus Pulse community.',
    audience: 'Undergraduate computer science and engineering students, faculty, and lab assistants seeking a centralized, high-velocity digital companion for semester coursework, coding practicals, and university examination prep.',
    challenge: 'Engineering coursework suffered from severe platform fragmentation: coding lab assignments required heavy local IDE setups prone to compiler version mismatches, course syllabi and MST/CET question papers were buried in unstructured messaging groups, and students lacked clear mathematical visibility into relative SGPA distributions and UGC-mandated 75% minimum attendance thresholds.',
    objectives: [
      'Deploy an in-browser zero-setup Coding Lab featuring 154 runnable engineering practicals across Java, C, SQL, and Python.',
      'Deliver an academic Markdown reader with KaTeX LaTeX math rendering, Pomodoro focus sprints, and continuous text-to-speech audio lectures.',
      'Build transparent mathematical calculators for 10-point relative SGPA prediction, reverse exam targets, and UGC 75% attendance safety margin modeling.',
      'Index 954 university multiple-choice questions into a timed subject quiz engine with grand mock exam simulations.',
      'Engineer Campus Pulse—a real-time peer discussion forum with privacy-preserving Anonymous Mask protection to safeguard students from academic retaliation.',
      'Centralize 52+ official syllabus documents, mid-semester test (MST) question banks, and faculty lecture slides with one-click offline PDF access.'
    ],
    solution: 'Engineered ITM Notes 2.0 as an offline-first Progressive Web App built with React 18, TypeScript, Tailwind CSS, Radix UI, and Supabase. The platform provides a full in-browser coding sandbox with syntax highlighting and simulated execution, KaTeX mathematical typesetting, continuous audio lecture synthesis, dynamic academic analytics, and real-time peer community feeds.',
    whyItMatters: 'Demonstrates end-to-end full-stack software craftsmanship applied directly to real-world campus workflows—transforming fragmented university PDFs into an empowering daily operating system with gamified streaks, coding practicals, and high-trust peer collaboration.',
    workflow: [
      'Interactive Student Dashboard: Real-time 5-day study streak tracking, XP milestones (Level 9 Architect), 23-day university exam countdown clock, and instant semester switcher.',
      'Integrated Coding Lab: 154 runnable engineering practicals in Java, C, SQL, and Python with in-browser terminal execution and automated test harnesses.',
      'Academic Syllabus Reader: Comprehensive Markdown reader rendering KaTeX LaTeX equations, Mermaid diagrams, integrated text-to-speech audio lectures, and 25-minute Pomodoro sprints.',
      'Academic Calculators: 10-point relative SGPA/CGPA forecaster, Reverse Exam Target ("What Grade Do I Need?"), and 75% UGC Attendance Guard calculating attendance safety thresholds.',
      'Subject Quiz Engine: 954 curated multiple-choice questions with timed mock exam sessions, instant explanation scoring, and unit-wise topic mastery.',
      'Campus Pulse & Materials: Real-time peer discussion forum powered by Supabase with Anonymous Mask shield, paired with a library of 52+ official university question papers and downloadable PDFs.'
    ],
    buildNotes: [
      'Architected with React 18, TypeScript, Tailwind CSS, and Radix UI (shadcn/ui) for a high-density, accessible interface.',
      'Integrated KaTeX and remark-math for sub-millisecond client-side LaTeX equation rendering across engineering subjects.',
      'Engineered custom terminal sandbox simulation supporting code execution across 154 structured university practicals.',
      'Powered real-time campus feeds and peer interactions with Supabase PostgreSQL, Row-Level Security (RLS), and WebSockets.',
      'Configured Vite PWA with service-worker caching for instant offline document retrieval on mobile and desktop.'
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui (Radix)',
      'Supabase (PostgreSQL & RLS)',
      'TanStack React Query',
      'KaTeX Math Engine',
      'Mermaid.js',
      'Recharts',
      'Vite PWA',
      'Vercel Edge Platform'
    ],
    heroImage: '/images/projects/itm/itm-dashboard-hero.png',
    videoSrc: '/videos/itm-notes-video.mp4',
    gallery: [
      {
        src: '/images/projects/itm/itm-dashboard-hero.png',
        alt: 'ITM Notes student dashboard with gamified streak, level milestones, and countdown',
        caption: 'Main student dashboard featuring active study streak tracking, Level 9 Architect XP progress, and live university exam countdown.'
      },
      {
        src: '/images/projects/itm/itm-coding-lab.png',
        alt: 'Interactive in-browser Coding Lab IDE with 154 runnable practicals',
        caption: 'Integrated university coding laboratory with syntax-highlighted IDE, terminal output console, and 154 multi-language practicals.'
      },
      {
        src: '/images/projects/itm/itm-notes-reader.png',
        alt: 'Academic syllabus reader with KaTeX LaTeX math formulas and continuous audio lecture TTS',
        caption: 'Comprehensive markdown reader featuring KaTeX LaTeX formula rendering, integrated audio lecture narration, and Pomodoro focus sprints.'
      },
      {
        src: '/images/projects/itm/itm-gpa-attendance.png',
        alt: '10-point relative SGPA calculator and UGC 75% attendance compliance guard',
        caption: 'Dynamic academic modeling engine calculating 10-point relative SGPA and UGC 75% attendance compliance with safe threshold buffers.'
      },
      {
        src: '/images/projects/itm/itm-quiz-engine.png',
        alt: 'University quiz engine with 954 MCQs and timed grand mock exam mode',
        caption: 'Interactive subject quiz engine indexing 954 multiple-choice questions with timed mock exam conditions and instant performance scoring.'
      },
      {
        src: '/images/projects/itm/itm-campus-social.png',
        alt: 'Campus Pulse social discussion feed with Anonymous Mask anti-retaliation shield',
        caption: 'Real-time student community feed built on Supabase, featuring reactions and privacy-preserving Anonymous Mask protection.'
      },
      {
        src: '/images/projects/itm/itm-materials-library.png',
        alt: 'Centralized academic materials library with 52+ university documents and PDFs',
        caption: 'Centralized repository indexing 52+ official syllabi, lecture presentations, MST/CET question banks, and offline PDFs.'
      },
      {
        src: '/images/projects/itm/itm-exam-countdown.png',
        alt: 'University term examination timetable and live countdown clock',
        caption: 'Live examination command center displaying official university timetables, course codes, and 23-day countdown timers.'
      },
      {
        src: '/images/projects/itm/itm-exam-imp-questions.png',
        alt: 'Unit-wise high-yield exam question banks with 3M, 5M, and 7M model answers',
        caption: 'Curated university question bank organized by unit weights (3M, 5M, 7M) with model answers and quick revision cheat sheets.'
      },
      {
        src: '/images/projects/itm/itm-curriculum-browser.png',
        alt: 'University curriculum browser with 12-week GitHub-style study heatmap',
        caption: 'Engineering curriculum navigation panel featuring semester course codes, 12-week study heatmaps, and revision cheat sheets.'
      }
    ],
    metrics: [
      { value: '154', label: 'Runnable Coding Practicals', context: 'Java, C, SQL & Python in-browser IDE sandbox' },
      { value: '954+', label: 'University MCQ Bank', context: 'Timed practice exams & instant scoring' },
      { value: '251 Topics', label: 'Curriculum Mastered', context: 'KaTeX LaTeX math, audio TTS & 75% attendance guard' }
    ],
    links: [
      { label: 'Visit Live Study Platform', url: 'https://itm-notes-new.vercel.app/', type: 'live' },
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/itm-notes', type: 'github' }
    ]
  },
  {
    slug: 'socialsafe',
    title: 'CyberGuard Security Lab',
    eyebrow: 'Interactive Defense & Awareness Labs · Cybersecurity Education',
    category: 'Experiments',
    categoryLabel: 'Open Source · Cybersecurity Education & Labs',
    status: 'Educational Security Lab Series',
    featured: false,
    order: 7,
    year: '2025–2026',
    summary: 'An educational cybersecurity training suite and interactive awareness lab demonstrating credential harvesting defense, phishing anatomy, session security, and strict client-side isolation across multiple cybersecurity workshops.',
    audience: 'Engineering cohorts, developers, and computer users attending interactive cybersecurity awareness sessions to learn threat recognition and client-side web defense boundaries.',
    challenge: 'Security awareness lectures often feel abstract without hands-on lab demonstrations showing how credential harvesting mechanisms operate, how phishing vectors deceive users, and how strict browser isolation controls neutralize threats.',
    objectives: [
      'Deliver interactive phishing anatomy and credential hygiene modules across multiple educational security sessions.',
      'Demonstrate strict client-side boundary enforcement via Content Security Policy (connect-src none, form-action none).',
      'Execute simulated authentication challenges entirely in ephemeral memory with instant credential erasure.',
      'Equip attendees with practical heuristics for URL validation, HTTPS inspection, and password safety.'
    ],
    solution: 'Engineered a lightweight, dependency-free educational laboratory used across multiple cybersecurity sessions. The lab executes synchronous zero-persistence simulations with immediate credential sanitization, accompanied by structured threat modeling walkthroughs and browser security briefings.',
    whyItMatters: 'Demonstrates defensive engineering principles, safe educational simulation methodology, and the importance of privacy-first architectural boundaries in cybersecurity training.',
    workflow: [
      'Session participants interact with a simulated login workflow to analyze security indicators.',
      'System executes zero-persistence comparison in isolated memory and purges data immediately.',
      'Telemetry briefing explains phishing indicators, form action restrictions, and CSP defenses.',
      'Participants review live browser network inspection showing zero egress or token leakage.'
    ],
    buildNotes: [
      'Conducted and refined across multiple university cybersecurity awareness sessions and peer workshops.',
      'Dependency-free implementation with strict CSP preventing network transmission or storage.',
      'Includes structured educator briefing notes on phishing heuristics and defense in depth.'
    ],
    technologies: ['HTML5', 'CSS3', 'Modern JavaScript', 'Content Security Policy (CSP)', 'Threat Modeling', 'Phishing Analysis', 'Security Awareness'],
    heroImage: '/images/projects/kalki-security.png',
    videoSrc: '/videos/hero-showreel.mp4',
    gallery: [],
    metrics: [
      { value: 'Multi-Session', label: 'Security Lab Series', context: 'Conducted for student cohorts & peer workshops' },
      { value: 'Zero Egress', label: 'Network Transmission', context: 'Strict CSP connect-src and form-action' },
      { value: '100% In-Memory', label: 'Ephemeral Isolation', context: 'Immediate credential destruction on interaction' }
    ],
    links: [
      { label: 'View Source on GitHub', url: 'https://github.com/Maher-Bhatt/SocialSafe', type: 'github' }
    ]
  }
];

export const categories: { id: Project['category']; label: string }[] = [
  { id: 'All Work', label: 'All Work' },
  { id: 'Client Work', label: 'Client Work' },
  { id: 'Digital Products', label: 'Digital Products' },
  { id: 'AI & Software', label: 'AI & Software' },
  { id: 'Product Lab', label: 'Product Lab' },
  { id: 'Academic Build', label: 'Academic Builds' },
  { id: 'Experiments', label: 'Experiments & Labs' }
];
