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
    bio: 'Full-stack systems engineer, applied AI architect, and cybersecurity researcher. Direct technical leadership on all Qavironel builds—specializing in sub-second web platforms, local-first LLM desktop runtimes, and defensive cloud infrastructure.',
    credentials: [
      'Published K.A.L.K.I. on official Microsoft Store (Store ID: 9P6HJPQZBGFQ, v1.0.4)',
      'Creator of ITM Notes — Open-source academic learning platform for university engineering',
      'Smart India Hackathon Finalist — Architected Civic Sathi multilingual offline PWA',
      '2nd Place — Bug Bounty Competition, Security BSides Vadodara',
      '4th Place — Capture the Flag (CTF), Security BSides Vadodara',
      '27+ Verified Technical Credentials (Google Cloud, IBM Python & Data Science, Outskill GenAI)',
      'Instructor & Speaker — OSINT & Cybersecurity Awareness Seminars',
      'Hands-on full-stack mastery: React 19, TypeScript, TanStack Start, FastAPI, Ollama, DPAPI'
    ],
    skills: [
      'React 19 & Vite',
      'TypeScript',
      'TanStack Start / Router',
      'Python & FastAPI',
      'Applied LLMs & Groq',
      'Local-First AI (Ollama)',
      'DPAPI & Cryptography',
      'Cybersecurity & CTF',
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
    name: 'Dhyani Parikh',
    role: 'Founding Team Member — Frontend & Operations',
    bio: 'Contributing to frontend development and project coordination at Qavironel Technologies, she helps turn design ideas into functional interfaces while supporting project planning, task management, and team collaboration. As she continues developing her technical skills, she brings a collaborative mindset and a commitment to learning, improving, and building thoughtful digital experiences.',
    credentials: [
      'Contributes to responsive website layouts, UI components, and frontend refinements',
      'Assists with visual consistency, cross-device testing, and design system alignment',
      'Helps organize project tasks, priority tracking, milestone coordination, and updates',
      'Assists with meeting preparation, documentation, and workflow communication',
      'Active collaborator in sprint planning, implementation reviews, and design decisions'
    ],
    skills: [
      'Frontend Development',
      'Responsive Layouts',
      'Reusable UI Components',
      'UI/UX Refinements',
      'Task Tracking',
      'Project Operations',
      'Sprint Coordination',
      'Team Collaboration'
    ],
    image: '/images/team/dhyani-parikh.webp',
    links: {
      linkedin: 'https://www.linkedin.com/in/dhyani-parikh-878201377/'
    }
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
    answer: 'You partner directly with our founder and lead systems engineer, Maher Bhatt. Qavironel was founded specifically to eliminate agency fog, junior delegation, and communication middlemen. Every schema decision, API route, and UI micro-interaction is engineered by senior hands with complete accountability.'
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
    answer: 'We engineer strict privacy boundaries tailored to your sensitivity tier. For classified or enterprise data, we deploy completely air-gapped local models (via Ollama and quantized LLaMA) where zero bytes ever leave physical hardware. For high-velocity generative tasks, we implement guarded cloud routing (Groq LLaMA 3.3, Claude, OpenAI) with automated PII redaction and local vector memory (ChromaDB / SQLite-vec).'
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
    answer: 'Every build includes a dedicated 30-day post-launch warranty where we actively monitor Core Web Vitals, resolve any emergent edge-case bugs, configure DNS/CDN routing, and conduct video training sessions for your team. We also offer monthly architectural retainers for continuous feature shipping and security updates.'
  }
];
