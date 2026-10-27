export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  projectSlug: string;
  projectTitle: string;
  badge: string;
  metric?: string;
  metricLabel?: string;
  isPlaceholder?: boolean;
}

export interface ClientPartner {
  name: string;
  category: string;
  location: string;
  scope: string;
  projectSlug: string;
}

/**
 * Verified Client Testimonials
 * 
 * Verbatim client quotes for Ztees and ITM SLS Baroda University.
 * Note: Harshal Patel's testimonial refers to "Velocity Web", the studio's prior brand name.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-ztees',
    quote:
      "They delivered our entire store website in roughly 2 working days. It is incredibly polished, and we're already seeing noticeable growth after launching.",
    author: 'Rudra Pandya',
    role: 'Founder of Ztees',
    company: 'Ztees',
    location: 'Surat, Gujarat',
    projectSlug: 'ztees',
    projectTitle: 'Ztees',
    badge: 'Direct-to-Consumer Streetwear Brand',
    isPlaceholder: false
  },
  {
    id: 'testimonial-itm',
    quote:
      "I randomly texted Velocity Web asking them to make a note-sharing website for CETS. They actually did it as a charity project, and I'm so happy with what they built.",
    author: 'Harshal Patel',
    role: 'Student, ITM SLS Baroda University',
    company: 'ITM SLS Baroda University',
    location: 'Vadodara, Gujarat',
    projectSlug: 'itm-notes',
    projectTitle: 'ITM Notes',
    badge: 'Academic Technology & Student Portal',
    isPlaceholder: false
  }
];

export const clientPartners: ClientPartner[] = [
  {
    name: 'Classic Infrastructure Projects',
    category: 'Heavy Civil Infrastructure & Contracting',
    location: 'Vadodara, Gujarat',
    scope: 'Corporate Qualification Platform & Bid Architecture',
    projectSlug: 'classic-infrastructure'
  },
  {
    name: 'Ztees',
    category: 'Direct-to-Consumer Apparel & Retail',
    location: 'Surat, Gujarat',
    scope: 'Custom Storefront, Supabase Console & WhatsApp Ordering',
    projectSlug: 'ztees'
  },
  {
    name: 'Smart India Hackathon 2026',
    category: 'Civic Technology & Urban Operations',
    location: 'National Finalist Platform',
    scope: '4-Portal Municipal GIS & Grievance Resolution Architecture',
    projectSlug: 'civic-sathi'
  },
  {
    name: 'ITM SLS Baroda University',
    category: 'Academic Technology & Student Tooling',
    location: 'Vadodara, Gujarat',
    scope: 'Engineering Practicals Portal & Study Environment',
    projectSlug: 'itm-notes'
  }
];
