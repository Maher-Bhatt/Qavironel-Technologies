import { TeamMember, Testimonial } from '../types';

export const companyConfig = {
  name: 'Qavironel Technologies',
  shortName: 'Qavironel',
  tagline: 'Ideas. Engineered.',
  eyebrow: 'Independent Technology & Digital Product Studio',
  description: 'Qavironel Technologies brings together strategy, design, software engineering, and applied AI to transform ambitious ideas into thoughtfully crafted digital experiences.',
  foundedLocation: 'Vadodara, Gujarat, India',
  email: 'velocitywe6@gmail.com',
  secondaryEmail: 'maherbhatt01@gmail.com',
  phone: '+91 98795 29957',
  whatsappUrl: 'https://wa.me/919879529957',
  githubOrg: 'https://github.com/Maher-Bhatt',
  linkedinUrl: 'https://linkedin.com/in/maher-bhatt-206035362',
  portfolioOrigin: 'Previously operating as Velocity Web, rebranded to Qavironel Technologies to reflect an expanded practice across full-stack software, mobile runtimes, and applied AI systems.'
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Maher Bhatt',
    role: 'Co-Founder · Lead Engineer',
    bio: 'Full-stack software engineer and cybersecurity researcher. Leads architecture, frontend systems, mobile runtimes, and applied AI tooling across all studio builds. 2nd-year B.Tech Computer Engineering student at ITM SLS Baroda University.',
    credentials: [
      'Published K.A.L.K.I. on Microsoft Store (Store ID: 9P6HJPQZBGFQ)',
      '2nd Place — Bug Bounty, Security BSides Vadodara',
      '4th Place — Capture the Flag (CTF), Security BSides Vadodara',
      '27+ Industry Badges (~20 Google Cloud, IBM Python/Data)',
      'Conducted live OSINT & cybersecurity awareness seminars'
    ],
    skills: ['React & Next.js', 'TypeScript', 'Python & Chaquopy', 'Applied LLMs', 'Cybersecurity & CTF', 'System Architecture'],
    image: '/images/team/maher-bhatt.webp',
    links: {
      github: 'https://github.com/Maher-Bhatt',
      linkedin: 'https://linkedin.com/in/maher-bhatt-206035362',
      website: 'https://maherbhatt.me'
    }
  },
  {
    name: 'Anurag Pandey',
    role: 'Co-Founder · Frontend Engineer',
    bio: 'The studio’s quality anchor. Focuses on frontend component craftsmanship, responsive ergonomics, and rigorous cross-device QA so every build holds up under real traffic on real devices.',
    credentials: [
      'Co-engineered ITM Notes adopted by 300+ university peers',
      'Frontend component architecture across production React codebases',
      'Specialist in touch-first mobile ergonomics and responsive layouts'
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Cross-Device QA', 'UI Ergonomics', 'Performance Tuning'],
    image: '/images/team/anurag-pandey.webp',
    links: {
      github: 'https://github.com/Maher-Bhatt'
    }
  },
  {
    name: 'JaydevSinh Gohil',
    role: 'Co-Founder · Strategy & SEO',
    bio: 'Leads project scoping, client alignment, and technical SEO architecture. Ensures every web platform is engineered with semantic metadata, structured sitemaps, and search discoverability built in from day one.',
    credentials: [
      'Engineered technical SEO architectures across international and local projects',
      'Digital campaign strategy across regional and overseas markets',
      'Manages client lifecycles from discovery and scoping to post-launch handover'
    ],
    skills: ['Technical SEO', 'Search Architecture', 'Project Scoping', 'Conversion Strategy', 'Client Success'],
    image: '/images/team/maher-bhatt.webp', // fallback placeholder
    links: {
      linkedin: 'https://linkedin.com/in/maher-bhatt-206035362'
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
    quote: 'Before ITM Notes, study materials and past year question papers were lost across hundreds of WhatsApp messages. Having a clean, searchable hub has genuinely helped hundreds of us prepare for exams without stress.',
    author: 'Harshal Patel',
    role: 'B.Tech Student',
    organization: 'ITM SLS Baroda University',
    projectSlug: 'itm-notes'
  }
];

export const faqs = [
  {
    question: 'How does Qavironel Technologies work with clients?',
    answer: 'You collaborate directly with the engineers and designers building your project—no account managers or opaque handoffs. We run weekly milestone previews, communicate via WhatsApp and video calls, and provide live staging links throughout the build.'
  },
  {
    question: 'What is the typical timeline for a website or MVP?',
    answer: 'Most focused marketing and commerce storefronts launch in 1 to 2 weeks. Custom web applications and SaaS MVPs typically range from 2 to 4 weeks depending on the complexity of role permissions, data models, and integrations.'
  },
  {
    question: 'Do you work with international clients outside India?',
    answer: 'Yes. We work remotely with clients across North America, Europe, the Middle East, and Asia, using asynchronous check-ins, structured deliverables, and international payment processing.'
  },
  {
    question: 'What technology stack do you use?',
    answer: 'We select the right tool for the job rather than forcing one framework. Our core stack includes React, Vite, Next.js, Astro, TypeScript, and Tailwind CSS on the frontend; Node.js, Python, PostgreSQL, and Supabase on the backend; and local or cloud LLMs for applied AI features.'
  },
  {
    question: 'Do you provide post-launch support and warranty?',
    answer: 'Every project includes dedicated post-launch support (30 days standard, with ongoing options). We monitor performance, handle bug fixes, assist with content updates, and ensure your infrastructure runs smoothly.'
  }
];
