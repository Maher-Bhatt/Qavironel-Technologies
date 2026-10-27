export interface StudioSocialLink {
  id: 'linkedin' | 'github' | 'x';
  label: string;
  url: string;
  isPlaceholder?: boolean;
}

export const isConfiguredSocialLink = (link: StudioSocialLink): boolean => {
  return !link.isPlaceholder && Boolean(link.url) && !link.url.startsWith('TODO') && link.url.startsWith('http');
};

/**
 * Studio-Level Social Profiles (Single Source of Truth)
 *
 * NOTE FOR THE OWNER:
 * To enable official studio links in the header and footer, supply the verified URLs below
 * and change `isPlaceholder: true` to `false` (or remove `isPlaceholder`).
 *
 * Unconfigured / placeholder links are automatically hidden from the site UI to avoid dead links.
 */
export const studioSocialLinks: StudioSocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: '',
    isPlaceholder: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    url: '',
    isPlaceholder: true,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    url: '',
    isPlaceholder: true,
  },
];
