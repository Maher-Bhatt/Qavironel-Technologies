export interface PricingTier {
  id: string;
  number: string;
  name: string;
  startingPriceInr: string;
  startingPriceUsd: string;
  badge: string;
  tagline: string;
  turnaround: string;
  scope: string[];
  goodFor: string;
  actionText: string;
  isPlaceholder?: boolean;
}

export interface EngagementPillar {
  number: string;
  title: string;
  description: string;
}

/**
 * Pricing & Engagement Models Data Source
 * 
 * NOTE: As per guidelines, all starting rates and prices are left as clearly marked
 * TODO placeholders. The owner should specify actual pricing/starting rates.
 */
export const pricingTiers: PricingTier[] = [
  {
    id: 'web',
    number: '01',
    name: 'Bespoke Websites & Digital Fronts',
    startingPriceInr: 'TODO: [Set starting INR rate, e.g. ₹XX,XXX]',
    startingPriceUsd: 'TODO: [Set starting USD rate, e.g. $XXX]',
    badge: '1–2 Week Delivery',
    tagline: 'Brand-led web experiences, product stories, and editorial storefronts.',
    turnaround: '1–2 weeks sprint',
    scope: [
      'Custom React 19 + Vite architecture with tailored typography',
      'Mobile-first responsive design audited on physical viewports',
      'Core Web Vitals 95+ performance & zero bloated plugins',
      'SEO metadata, OpenGraph cards & rich Schema.org JSON-LD',
      'Contact inquiry forms with direct email & WhatsApp routing',
      '100% full intellectual property handover & 30-day warranty'
    ],
    goodFor: 'Established businesses, creative brands, and engineering firms upgrading their digital presence.',
    actionText: 'Plan a website build',
    isPlaceholder: true
  },
  {
    id: 'platform',
    number: '02',
    name: 'Web Applications & SaaS MVPs',
    startingPriceInr: 'TODO: [Set starting INR rate, e.g. ₹XX,XXX]',
    startingPriceUsd: 'TODO: [Set starting USD rate, e.g. $X,XXX]',
    badge: '2–4 Week Delivery',
    tagline: 'Full-stack platforms, client portals, and custom operational tools.',
    turnaround: '2–4 weeks sprint',
    scope: [
      'Complete full-stack architecture (React 19, TypeScript, Supabase/PostgreSQL)',
      'Secure authentication, role-based access control (RBAC) & Row-Level Security',
      'Private merchant/admin workspaces for real-time operations',
      'Payment gateways (UPI, Stripe, Razorpay) & WhatsApp Business automation',
      'REST & OpenAPI endpoints with strict Zod runtime schema validation',
      'CI/CD deployment pipelines (Vercel, AWS, Cloudflare) + 30-day warranty'
    ],
    goodFor: 'Founders launching new products or teams replacing tangled spreadsheets with purpose-built tools.',
    actionText: 'Shape your platform',
    isPlaceholder: true
  },
  {
    id: 'ai',
    number: '03',
    name: 'Applied AI & Systems Automation',
    startingPriceInr: 'TODO: [Set starting INR rate, e.g. ₹XX,XXX]',
    startingPriceUsd: 'TODO: [Set starting USD rate, e.g. $X,XXX]',
    badge: '3–5 Week Delivery',
    tagline: 'Custom AI workflows, local LLMs, and guarded system integrations.',
    turnaround: '3–5 weeks sprint',
    scope: [
      'Air-gapped on-premises local LLM runtimes (Ollama, quantized LLaMA)',
      'Multi-model inference routing (Groq LLaMA 3.3, Claude, OpenAI, Gemini)',
      'Vector memory indexing & semantic retrieval (ChromaDB / SQLite-vec)',
      'Strict zero-data-retention and zero model training on proprietary business data',
      'Hardware-bound secrets management (DPAPI vaulting) & defense-in-depth',
      'Voice input interfaces (offline VOSK / Whisper) & custom agent adapters'
    ],
    goodFor: 'Organizations looking to embed practical AI into daily workflows without risking sensitive data.',
    actionText: 'Explore AI solutions',
    isPlaceholder: true
  },
  {
    id: 'retainer',
    number: '04',
    name: 'Engineering Retainer & Continuous Sprints',
    startingPriceInr: 'TODO: [Set monthly INR retainer, e.g. ₹XX,XXX / mo]',
    startingPriceUsd: 'TODO: [Set monthly USD retainer, e.g. $XXX / mo]',
    badge: 'Monthly Partnership',
    tagline: 'Dedicated senior engineering capacity for continuous velocity and support.',
    turnaround: 'Ongoing monthly sprints',
    scope: [
      'Direct partner collaboration with Maher Bhatt & senior engineering team',
      'Continuous feature engineering, UI refinement, and user journey optimizations',
      'Proactive dependency upgrades, security patching, and audit compliance',
      'Rapid hotfix response for production anomalies (same-day triage)',
      'Bi-weekly milestone roadmap calls & transparent asynchronous Git updates',
      'Predictable monthly rate with zero hidden hourly overages; cancel anytime'
    ],
    goodFor: 'Growing platforms requiring dependable senior engineering without full-time agency overhead.',
    actionText: 'Discuss a retainer',
    isPlaceholder: true
  }
];

export const engagementPillars: EngagementPillar[] = [
  {
    number: '01',
    title: '100% Fixed-Scope Proposals',
    description: 'We agree on exact technical deliverables before line zero. You get a transparent project roadmap with zero surprise hourly overages.'
  },
  {
    number: '02',
    title: 'Milestone-Gated Payments',
    description: 'Fees are staged across verifiable gates: Architecture & Blueprint (30%), Core Engineering Sprint (40%), and Hardening & Handover (30%).'
  },
  {
    number: '03',
    title: 'Direct Senior Access',
    description: 'No account managers or junior delegations. You work directly with Maher Bhatt and senior engineers from the first call to launch.'
  },
  {
    number: '04',
    title: '30-Day Engineering Warranty',
    description: 'Every launch includes 30 days of active monitoring, bug remediation, DNS routing support, and complete repository ownership handover.'
  }
];
