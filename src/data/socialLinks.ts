export interface StudioSocialLink {
  id: 'linkedin' | 'github' | 'x';
  label: string;
  url: string;
  isPlaceholder: boolean;
}

/**
 * Studio-Level Social Profiles (Single Source of Truth)
 *
 * NOTE FOR THE OWNER:
 * Replace the placeholder values below with your verified studio profile URLs:
 * 1. LinkedIn: Replace with your official company page (e.g. https://www.linkedin.com/company/qavironel-technologies)
 * 2. GitHub: Replace with your studio organization (e.g. https://github.com/qavironel-technologies)
 * 3. X: Replace with your official X/Twitter profile (e.g. https://x.com/qavironel)
 *
 * Individual team member links (Maher, Anurag, Dhyani, etc.) are kept separate in src/data/company.ts.
 */
export const studioSocialLinks: StudioSocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'TODO: https://www.linkedin.com/company/your-studio-handle',
    isPlaceholder: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'TODO: https://github.com/your-studio-org',
    isPlaceholder: true,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    url: 'TODO: https://x.com/your-studio-handle',
    isPlaceholder: true,
  },
];
