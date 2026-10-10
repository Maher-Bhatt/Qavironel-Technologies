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
    bio: 'Full-stack software engineer, applied AI systems architect, and cybersecurity researcher. Direct technical leadership on all studio builds—from sub-second web platforms and mobile development environments to local-first LLM agents and defensive cloud infrastructure.',
    credentials: [
      'Published K.A.L.K.I. on Microsoft Store (Store ID: 9P6HJPQZBGFQ)',
      '2nd Place — Bug Bounty, Security BSides Vadodara',
      '4th Place — Capture the Flag (CTF), Security BSides Vadodara',
      '27+ Industry Badges (~20 Google Cloud, IBM Python/Data, Outskill GenAI)',
      'Instructor — OSINT & Cybersecurity Awareness Seminars',
      'Architected and shipped multiple production web platforms & client systems'
    ],
    skills: ['React 19 & Next.js', 'TypeScript', 'TanStack Start', 'Python & Chaquopy', 'Applied LLMs & Groq', 'Cybersecurity & CTF', 'System Architecture'],
    image: '/images/team/maher-bhatt.webp',
    links: {
      github: 'https://github.com/Maher-Bhatt',
      linkedin: 'https://linkedin.com/in/maher-bhatt-206035362',
      website: 'https://maherbhatt.me'
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
    question: 'How does Qavironel Technologies collaborate with clients globally?',
    answer: 'We operate as a high-velocity, remote-first studio serving founders and teams worldwide. You collaborate directly with the lead engineer writing your code—no account managers or opaque handoffs. We run weekly asynchronous demos, communicate via WhatsApp/Slack/video calls, and provide live staging links throughout the build.'
  },
  {
    question: 'What is the typical timeline for a web platform or software product?',
    answer: 'Focused brand platforms and commerce storefronts typically launch in 1 to 2 weeks. Custom web applications, SaaS MVPs, and applied AI systems generally range from 2 to 4 weeks depending on data models, authentication boundaries, and integration complexity.'
  },
  {
    question: 'Do you work with international clients across different time zones?',
    answer: 'Yes. We cater to founders and businesses globally across North America, Europe, the Middle East, and Asia. Our workflows are built around clear documentation, asynchronous review cadences, structured milestones, and seamless international payment handling.'
  },
  {
    question: 'What technology stack do you use?',
    answer: 'We engineer with high-performance modern tools: React 19, TypeScript, Vite, TanStack Start/Router, Next.js, and Tailwind CSS on the frontend; Python, FastAPI, Node.js, PostgreSQL, and Supabase on the backend; and local/cloud LLMs (Groq, LLaMA, Ollama, OpenAI) for applied AI pipelines.'
  },
  {
    question: 'Do you provide post-launch support and warranty?',
    answer: 'Every project includes dedicated post-launch support (30 days standard, with ongoing options). We monitor performance, handle bug fixes, assist with content updates, and ensure your infrastructure runs smoothly.'
  }
];
