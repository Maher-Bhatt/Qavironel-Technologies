import { TeamMember, Testimonial } from '../types';

export const companyConfig = {
  name: 'Qavironel Technologies',
  shortName: 'Qavironel',
  tagline: 'Ideas. Engineered.',
  eyebrow: 'Global Technology & Digital Product Studio',
  description: 'Qavironel Technologies is a remote-first software engineering and digital product studio. We partner with ambitious founders, startups, and companies worldwide to engineer high-performance web systems, custom digital products, and applied AI applications.',
  foundedLocation: 'Global · Remote-First Studio',
  email: 'qavironeltechnologies@gmail.com',
  secondaryEmail: 'maherbhatt01@gmail.com',
  phone: '+91 98795 29957',
  whatsappUrl: 'https://wa.me/919879529957',
  githubOrg: 'https://github.com/Maher-Bhatt',
  linkedinUrl: 'https://linkedin.com/in/maher-bhatt-206035362',
  portfolioOrigin: 'An independent digital product and software engineering practice dedicated to high-performance craftsmanship, defensive security architecture, and applied AI systems.'
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Maher Bhatt',
    role: 'Founder & Lead Systems Engineer',
    bio: 'Guiding technical architecture, applied AI systems, and company direction at Qavironel Technologies. Specializing in high-performance web platforms, local-first LLM desktop runtimes, and defensive infrastructure, he partners directly with clients to turn complex technical challenges into resilient, production-ready software.',
    credentials: [
      'Systems Architecture',
      'Applied AI & Local LLMs',
      'Full-Stack Engineering',
      'Defensive Security'
    ],
    skills: [
      'React 19 & Vite',
      'TypeScript',
      'Python & FastAPI',
      'Applied LLMs & Groq',
      'Local-First AI (Ollama)',
      'DPAPI & Cryptography',
      'System Architecture'
    ],
    image: '/images/team/maher-bhatt.webp',
    links: {
      github: 'https://github.com/Maher-Bhatt',
      linkedin: 'https://linkedin.com/in/maher-bhatt-206035362',
      website: 'https://maherbhatt.me'
    }
  },
  {
    name: 'Anurag Pandey',
    role: 'Co-Founder & Backend Engineering Lead',
    bio: 'Leading backend engineering and server-side architecture at Qavironel Technologies. He designs high-throughput APIs, database schemas, and robust data management layers that power our digital products, ensuring every backend service operates with strict security boundaries, maintainability, and end-to-end reliability.',
    credentials: [
      'Backend Development',
      'API Integration',
      'Database Design',
      'System Architecture'
    ],
    skills: [
      'Backend Architecture',
      'API Design & REST',
      'Database Modelling',
      'Authentication & Security',
      'Data Pipelines',
      'Service Reliability'
    ],
    image: '/images/team/anurag-pandey.webp',
    links: {}
  },
  {
    name: 'Dhyani Parikh',
    role: 'Founding Team Member — Frontend & Operations',
    bio: 'Contributing to frontend implementation and project coordination at Qavironel Technologies. She helps turn design concepts into responsive, reusable interface components while managing sprint tracking, meeting documentation, and team communications with a collaborative mindset and dedication to practical technical growth.',
    credentials: [
      'Frontend Development',
      'Responsive UI',
      'UI Refinement',
      'Project Coordination'
    ],
    skills: [
      'Frontend Implementation',
      'Responsive Layouts',
      'Reusable Components',
      'UI Refinements',
      'Sprint Coordination',
      'Team Communication'
    ],
    image: '/images/team/dhyani-parikh.webp',
    links: {
      linkedin: 'https://www.linkedin.com/in/dhyani-parikh-878201377/'
    }
  },
  {
    name: 'Aayushi Jasani',
    role: 'Founding Team Member — Frontend & Operations',
    bio: 'Contributing to interface styling, frontend refinements, and project operations at Qavironel Technologies. She assists with UI component styling, layout testing, and cross-functional task coordination, bringing a collaborative spirit and focus on building clean, user-centered digital solutions.',
    credentials: [
      'UI Design & Styling',
      'Frontend Refinements',
      'Component Testing',
      'Operations Support'
    ],
    skills: [
      'UI Refinements',
      'Design Systems',
      'Component Testing',
      'Task Coordination',
      'Documentation',
      'Operations Support'
    ],
    image: '/images/team/aayushi-jasani.webp',
    links: {}
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Qavironel understood exactly what our streetwear drop needed. They delivered a fast, mobile-first storefront in about two days, and the direct WhatsApp order flow made it seamless for our community to buy immediately.',
    author: 'Rudra Pandya',
    role: 'Founder',
    organization: 'Ztees Streetwear',
    projectSlug: 'ztees'
  },
  {
    quote: 'Qavironel transformed our civil engineering credential portfolio into an authoritative digital platform. Government procurement officers and municipal engineers can now review our verified pipeline and drainage projects instantly from their phones.',
    author: 'Project Engineering Lead',
    role: 'Director of Operations',
    organization: 'Classic Infrastructure Projects',
    projectSlug: 'classic-infrastructure'
  }
];

export const faqs = [
  {
    question: 'Who owns the intellectual property, code repositories, and design files upon completion?',
    answer: 'You own 100% of all intellectual property from day one. Upon final delivery, we transfer complete administrative ownership of all GitHub repositories, production database schemas, deployment configurations, and Figma design tokens. We retain zero proprietary lock-in, recurring licensing fees, or hidden framework dependencies.'
  },
  {
    question: 'Will I collaborate directly with senior engineers or be passed to account managers?',
    answer: 'You partner directly with our co-founders and engineering leads, Maher Bhatt and Anurag Pandey. Qavironel was founded specifically to eliminate agency fog, junior delegation, and communication middlemen. Every schema decision, API route, and UI micro-interaction is engineered by senior hands with complete accountability.'
  },
  {
    question: 'How does Qavironel ship production platforms in 1 to 2 weeks when traditional agencies take months?',
    answer: 'We eliminate bloated agency bureaucracy, 10-person review committees, and slow drag-and-drop page builders. Working in focused 1-to-2-week product sprints with modern modular stacks (React 19, Vite, TanStack, FastAPI) and daily asynchronous video walkthroughs, we compress months of legacy agency delay into high-velocity production launches.'
  },
  {
    question: 'How do you defend web platforms and APIs against security vulnerabilities?',
    answer: 'Defensive security is engineered into our architecture from line zero, backed by competitive CTF and Bug Bounty achievements (Security BSides Vadodara). We enforce strict Content Security Policies (CSP: default-src \'self\'), token-authenticated localhost communication, input sanitization via strict Zod schemas, OWASP Top 10 hardening, and hardware-bound encryption (Windows DPAPI). We execute comprehensive mutual NDAs before technical discovery.'
  },
  {
    question: 'How do your Applied AI systems protect proprietary business data and prompt privacy?',
    answer: 'We engineer strict privacy boundaries tailored to your sensitivity tier. For classified or enterprise data, we deploy completely air-gapped local models (via Ollama and quantized LLaMA) where no proprietary data ever leaves your on-premises hardware. For high-velocity generative tasks, we implement guarded cloud routing (Groq LLaMA 3.3, Claude, OpenAI) with automated PII redaction and local vector memory (ChromaDB / SQLite-vec).'
  },
  {
    question: 'How do you manage communication and delivery for international clients across time zones?',
    answer: 'We operate as a global remote studio partnering with founders in North America, Europe, the Middle East, and Asia. We blend structured daily asynchronous updates (Loom walkthroughs, live staging URLs, Git commits) with scheduled milestone calls aligned to your working hours. You also have a direct communication channel via WhatsApp or Slack for immediate queries.'
  },
  {
    question: 'What does your engagement and milestone payment structure look like?',
    answer: 'We provide fixed-scope proposals with transparent deliverable commitments. Payments are staged across clear milestone gates: Architecture & Blueprint (30%), Core Engineering Sprint (40%), and Hardening & Launch Handover (30%). You receive a documented deliverable roadmap before development starts, guaranteeing zero surprise hourly overages.'
  },
  {
    question: 'What support and warranty do you provide after the platform goes live?',
    answer: 'Every build includes a dedicated 30-day post-launch warranty where we actively monitor Core Web Vitals, resolve any edge-case bugs, configure DNS/CDN routing, and conduct video training sessions for your team. We also offer monthly architectural retainers for continuous feature shipping and security updates.'
  }
];
