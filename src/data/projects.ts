import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'kalki',
    title: 'KALKI 2.0',
    eyebrow: 'Desktop assistant · Local & cloud AI (K.A.L.K.I.)',
    category: 'AI & Software',
    categoryLabel: 'Software · Applied AI',
    status: 'Active Open Source · Live on Microsoft Store',
    featured: true,
    order: 1,
    year: '2025–2026',
    summary: 'A local-first desktop assistant that brings voice input, model selection, local memory, and guarded system tools into one workspace. Published on the Microsoft Store as KALKI 2.0 (K.A.L.K.I.) and open source on GitHub.',
    audience: 'People who want a desktop assistant with voice controls, local tools, and a choice of AI providers.',
    challenge: 'Desktop assistants can be easy to use but limited in control, or flexible but difficult to set up. K.A.L.K.I. brings voice, model choice, and system tools into a single interface while keeping sensitive actions behind explicit controls.',
    objectives: [
      'Engineer a responsive visual HUD providing real-time telemetry, model status, and memory state.',
      'Support swappable inference providers: local models (Ollama/Llama 3) and cloud APIs (Groq LLaMA-3.3-70B, LLaMA-4-Scout, OpenAI, Gemini).',
      'Implement an authenticated localhost communication layer with DPAPI hardware-bound vault protection.',
      'Protect system resources by keeping host command execution explicitly sandboxed and gated behind confirmation flags.'
    ],
    solution: 'The app pairs a local runtime with a visual desktop workspace. It supports voice input, local conversation history, several model providers, and system tools that require explicit confirmation.',
    whyItMatters: 'The project explores how an assistant can feel capable while making its access and actions easier to understand.',
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
    videoPoster: '/videos/kalki-video-poster.webp',
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
    eyebrow: 'Commerce · Streetwear storefront and shop tools',
    category: 'Client Work',
    categoryLabel: 'Client work · Online retail',
    status: 'Production Storefront & Owner Console',
    featured: true,
    order: 2,
    year: '2026',
    summary: 'A mobile storefront and owner console for Z Tees India, designed around streetwear drops, product details, and direct customer ordering.',
    audience: 'Streetwear shoppers browsing on mobile and the team managing products and orders.',
    challenge: 'Orders and product questions were handled through social messages, making it harder to keep product information and order details in one place. The store needed a clear shopping flow and a simpler way for the team to manage its catalogue.',
    objectives: [
      'Engineer an editorial, drop-driven customer storefront displaying 60+ active streetwear designs.',
      'Create a short checkout flow that prepares order details for WhatsApp and UPI payment.',
      'Develop a protected owner workspace (/admin) with Supabase Auth for real-time catalog updates and order triage.',
      'Implement a multi-angle Media Studio allowing the merchant to upload front, back, detail, and lifestyle photos.',
      'Package an Expo React Native Android mobile client for on-the-go customer shopping and store management.',
      'Reduce recurring platform fees and keep the storefront responsive on mobile networks.'
    ],
    solution: 'The customer storefront organizes collections, product imagery, and size selection, then prepares an order for WhatsApp. A private owner console supports catalogue updates and order review.',
    whyItMatters: 'The storefront and the day-to-day tools are designed together, so customers and the shop team can use one connected experience.',
    workflow: [
      'Customer Discovery: Shoppers browse seasonal drops with interactive category chips, color swatches, and instant search across 61 designs.',
      'Product & Fit Inspection: Detailed product view featuring 240 GSM cotton specifications, oversized fit guides, and multi-angle photography.',
      'WhatsApp checkout: Customers send their selected products, sizes, and delivery details to the shop to complete an order.',
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
    videoPoster: '/videos/ztees-video-poster.webp',
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
    eyebrow: 'Civil engineering · Corporate website',
    category: 'Client Work',
    categoryLabel: 'Client work · Infrastructure',
    status: 'Corporate Client Platform',
    featured: true,
    order: 3,
    year: '2026',
    summary: 'A corporate website for Classic Infrastructure Projects, presenting the civil engineering firm’s services, project experience, and company information.',
    audience: 'Clients and procurement teams looking for information about the company and its infrastructure work.',
    challenge: 'The company needed a clear online presence to explain its capabilities and make project information easier to find.',
    objectives: [
      'Design an authoritative corporate presence reflecting 15+ years of infrastructure contracting experience.',
      'Showcase real high-resolution field photography categorized by discipline: Pipeline, Stormwater Drainage, Protection Works, Roads, and Mechanical Engineering.',
      'Implement an interactive RFP/quotation request system with automated email notifications for corporate bid inquiries.',
      'Guarantee fast loading speeds for field inspectors and municipal officials reviewing profiles on mobile devices in the field.'
    ],
    solution: 'The site brings company information, project examples, and service details into one structured experience, with a direct path for new inquiries.',
    whyItMatters: 'A considered digital presence can help a specialist engineering firm explain its work clearly to prospective clients.',
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
    videoSrc: '/videos/cip-project-video.mp4',
    videoPoster: '/images/projects/cip/cip-pipeline-110-hero.webp',
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
      { label: 'Discuss a similar infrastructure project', url: '/contact', type: 'demo' }
    ]
  },
  {
    slug: 'civic-sathi',
    title: 'Civic Sathi',
    eyebrow: 'Civic services · Smart India Hackathon 2026',
    category: 'Product Lab',
    categoryLabel: 'Prototype · Civic technology',
    status: 'SIH 2026 National Finalist Platform',
    featured: true,
    order: 4,
    year: '2026',
    summary: 'A civic-service prototype developed by Team Vertex for Smart India Hackathon 2026. It brings public reporting, issue mapping, and municipal workflows into a connected platform.',
    audience: 'Residents exploring local services and the teams responsible for reviewing and responding to civic reports.',
    challenge: 'Civic issues can be difficult to report and follow when information is spread across separate channels. The prototype explores a more connected path from a resident’s report to municipal review.',
    objectives: [
      'Build four role-based portals for residents, municipal teams, contractors, and administrators.',
      'Create a GIS map with severity levels and locality views for Delhi, Mumbai, Bengaluru, and Vadodara.',
      'Create a four-step reporting flow with voice input, AI category suggestions, and location-tagged evidence.',
      'Use HDBSCAN clustering to identify duplicate reports and group related infrastructure issues.',
      'Develop a contractor rating model that combines resident feedback, service checks, and municipal inspections.',
      'Add a community hub with weather and air-quality information, plus voting on local projects.'
    ],
    solution: 'The prototype combines a public reporting portal, a map for exploring issues, and separate views for municipal staff and contractors. It also includes community information and participatory budgeting concepts.',
    whyItMatters: 'The work tests how mapping and clear status information could make civic services easier to understand and follow.',
    workflow: [
      'Issue reporting: Residents describe a problem by voice or text, add a location and photo, and receive a suggested category.',
      'Locality map: A Leaflet map shows reports by area and severity across four cities.',
      'Contractor ratings: Resident feedback, service checks, and municipal inspections contribute to contractor ratings.',
      'Community voting: Residents can vote on proposed local projects, such as street lighting, parks, and clinics.',
      'Municipal review: Ward officers group related reports, assign contractors, and track progress through resolution.'
    ],
    buildNotes: [
      'Organized as a monorepo with separate applications for residents, municipal teams, contractors, and administrators.',
      'Integrated Leaflet and OpenStreetMap GIS engine for interactive locality polygons and real-time severity heatmaps.',
      'Used HDBSCAN clustering to group related reports into shared work items.',
      'Connected Open-Meteo API for real-time Air Quality Index (AQI) and meteorological telemetry in the Community Hub.',
      'Built an offline-capable progressive web app with English, Hindi, and Gujarati language support.'
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
    videoSrc: '/videos/civic-sathi-video.mp4',
    videoPoster: '/videos/civic-sathi-video-poster.webp',
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
    eyebrow: 'Mobile development · Android coding app',
    category: 'Digital Products',
    categoryLabel: 'Open source · Mobile software',
    status: 'Active Open Source Build',
    featured: true,
    order: 5,
    year: '2025–2026',
    summary: 'An Android coding environment with a multi-language editor, integrated terminal, and on-device Python and JavaScript tools.',
    audience: 'Students and developers who want to write and try code from an Android device.',
    challenge: 'Most mobile editors are designed for reading or making quick changes. CodeDroid brings editing and selected development tools into a workspace that fits on a phone or tablet.',
    objectives: [
      'Deliver fluid, multi-tab code editing with syntax highlighting across 18 programming languages.',
      'Embed on-device interpreters (Chaquopy for Python, Rhino for JS) requiring no internet access.',
      'Integrate cloud execution runners (Piston API) for compiling C, C++, Java, and Go.',
      'Include programmer-friendly keyboard extensions, Vim mode, auto-indentation, and a terminal.'
    ],
    solution: 'The Android app pairs a CodeMirror-based editor with on-device Python and JavaScript runtimes, plus an integrated terminal for working through small programs.',
    whyItMatters: 'A portable coding environment makes it easier to practise and experiment away from a desktop setup.',
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
    videoSrc: '/videos/codedroid-project-video.mp4',
    videoPoster: '/images/projects/codedroid-cover.png',
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
    eyebrow: 'Education · Engineering study platform',
    category: 'Academic Build',
    categoryLabel: 'Education · Student platform',
    status: 'Live Production Platform',
    featured: true,
    order: 6,
    year: '2025–2026',
    summary: 'A study portal for engineering students at ITM (SLS) Baroda University, bringing course materials, coding practice, quizzes, and study tools together.',
    audience: 'Engineering students organizing coursework and preparing for practicals and exams.',
    challenge: 'Course notes, practicals, question banks, and planning tools were spread across different places. The portal brings these resources into a single space students can return to throughout the semester.',
    objectives: [
      'Deploy an in-browser zero-setup Coding Lab featuring 154 runnable engineering practicals across Java, C, SQL, and Python.',
      'Deliver an academic Markdown reader with KaTeX LaTeX math rendering, Pomodoro focus sprints, and continuous text-to-speech audio lectures.',
      'Build transparent mathematical calculators for 10-point relative SGPA prediction, reverse exam targets, and UGC 75% attendance safety margin modeling.',
      'Index 954 university multiple-choice questions into a timed subject quiz engine with grand mock exam simulations.',
      'Engineer Campus Pulse—a real-time peer discussion forum with privacy-preserving Anonymous Mask protection to safeguard students from academic retaliation.',
      'Centralize 52+ official syllabus documents, mid-semester test (MST) question banks, and faculty lecture slides with one-click offline PDF access.'
    ],
    solution: 'The platform combines a practicals library, timed quizzes, a syllabus reader, academic calculators, and a student community area. It is built as a Progressive Web App for use across desktop and mobile devices.',
    whyItMatters: 'The project brings routine study tasks and course resources closer together in one student-focused product.',
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
    videoPoster: '/videos/itm-notes-video-poster.webp',
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
  }
];

export const categories: { id: Project['category']; label: string }[] = [
  { id: 'All Work', label: 'All Work' },
  { id: 'Client Work', label: 'Client Work' },
  { id: 'Digital Products', label: 'Digital Products' },
  { id: 'AI & Software', label: 'AI & Software' },
  { id: 'Product Lab', label: 'Product Lab' },
  { id: 'Academic Build', label: 'Academic Builds' }
];
