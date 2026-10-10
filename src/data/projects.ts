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
    heroImage: '/images/projects/kalki/kalki-store-marketing.png',
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
    slug: 'classic-infrastructure',
    title: 'Classic Infrastructure Projects',
    eyebrow: 'Enterprise Contracting Platform · Full-Stack Platform',
    category: 'Client Work',
    categoryLabel: 'Client Work · Industrial & Corporate Infrastructure',
    status: 'Corporate Client Platform',
    featured: true,
    order: 5,
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
