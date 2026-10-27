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
 * ============================================================================
 * INSTRUCTIONS FOR THE OWNER (HOW TO ADD REAL TESTIMONIALS):
 * ============================================================================
 * 1. When you receive verified client feedback or quote (e.g., from Classic
 *    Infrastructure Projects, Ztees, or other clients):
 * 2. Update the entries in the `testimonials` array below:
 *    - `quote`: Paste the authentic client testimonial text.
 *    - `author`: Client contact's name (e.g. "Rajesh Patel").
 *    - `role`: Client's official role (e.g. "Managing Director", "Founder").
 *    - `company`: Client business name.
 *    - `location`: Client location (e.g. "Vadodara, Gujarat").
 *    - `projectSlug`: Slug of the case study in src/data/projects.ts ('classic-infrastructure', 'ztees', etc.).
 *    - `projectTitle`: Title of the case study.
 *    - `badge`: Category or industry badge (e.g. "Civil Infrastructure & Contracting").
 *    - `metric`: (Optional) A quantifiable result (e.g. "62+", "100%").
 *    - `metricLabel`: (Optional) Context for the metric.
 *    - `isPlaceholder`: Change from `true` to `false`.
 *
 * Current state: ZERO invented testimonials. All entries below are structured
 * placeholders with `isPlaceholder: true` until the owner pastes authentic client quotes.
 * ============================================================================
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-cip',
    quote:
      'TODO: [Insert verified client quote from Classic Infrastructure Projects — e.g. feedback on digital platform delivery, qualification assets, or technical turnaround]',
    author: 'TODO: [Client Contact Name]',
    role: 'TODO: [Client Title, e.g. Managing Director / Partner]',
    company: 'Classic Infrastructure Projects',
    location: 'Vadodara, Gujarat',
    projectSlug: 'classic-infrastructure',
    projectTitle: 'Classic Infrastructure Projects',
    badge: 'Civil Infrastructure & Contracting · Est. 2008',
    metric: 'TODO: [e.g. 62+]',
    metricLabel: 'TODO: [Metric context, e.g. Verified field photo assets]',
    isPlaceholder: true
  },
  {
    id: 'testimonial-ztees',
    quote:
      'TODO: [Insert verified client quote from Ztees — e.g. feedback on streetwear storefront architecture, WhatsApp order flow, or customer conversion]',
    author: 'TODO: [Client Contact Name]',
    role: 'TODO: [Client Title, e.g. Founder & Creative Lead]',
    company: 'Ztees',
    location: 'Surat, Gujarat',
    projectSlug: 'ztees',
    projectTitle: 'Ztees',
    badge: 'Direct-to-Consumer Streetwear Brand',
    metric: 'TODO: [e.g. 100%]',
    metricLabel: 'TODO: [Metric context, e.g. Custom drop architecture]',
    isPlaceholder: true
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
