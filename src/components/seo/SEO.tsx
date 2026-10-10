import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyConfig } from '../../data/company';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website',
  image = '/images/brand/og-image.jpg', // Placeholder for actual OG image
  url = 'https://qavironel.com'
}) => {
  const defaultTitle = 'Qavironel Technologies | Advanced Digital Studio';
  const defaultDesc = companyConfig.description || 'We engineer high-velocity digital products, brands, and AI architectures.';
  
  const siteTitle = title ? `${title} | Qavironel` : defaultTitle;
  const siteDesc = description || defaultDesc;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDesc} />
      <meta name="theme-color" content="#E0561B" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
