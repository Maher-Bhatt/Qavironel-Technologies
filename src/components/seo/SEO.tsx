import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { companyConfig } from '../../data/company';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website',
  image = '/images/brand/og-image.jpg',
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
  url,
  keywords,
  noIndex = false,
  structuredData
}) => {
  const location = useLocation();
  const siteOrigin = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || 'https://qavironel.com';

  const defaultTitle = `${companyConfig.name} — ${companyConfig.tagline} | Digital Product & Software Studio`;
  const defaultDesc = companyConfig.description || 'Global technology and digital product studio architecting high-performance web platforms, SaaS applications, and applied AI systems.';

  const pageTitle = title 
    ? (title.includes(companyConfig.name) || title.includes(companyConfig.shortName))
      ? title 
      : `${title} | ${companyConfig.name}` 
    : defaultTitle;
  const pageDesc = description || defaultDesc;
  const metaImageAlt = imageAlt || pageTitle;

  // Resolve canonical URL: use passed url, or current router pathname with trailing slash on root
  const canonicalUrl = url || (location.pathname === '/' ? `${siteOrigin}/` : `${siteOrigin}${location.pathname}`);

  // Ensure absolute image URL for Open Graph
  const ogImageUrl = image.startsWith('http') 
    ? image 
    : image.startsWith('/') 
      ? `${siteOrigin}${image}` 
      : `${siteOrigin}/${image}`;

  const isPng = ogImageUrl.toLowerCase().endsWith('.png');
  const isWebp = ogImageUrl.toLowerCase().endsWith('.webp');
  const imageType = isPng ? 'image/png' : isWebp ? 'image/webp' : 'image/jpeg';

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteOrigin}/#organization`,
    name: companyConfig.name,
    alternateName: companyConfig.shortName,
    slogan: companyConfig.tagline,
    url: siteOrigin,
    logo: `${siteOrigin}/brand/qavironel-logo-square.png`,
    email: companyConfig.email,
    description: companyConfig.description,
    sameAs: [
      companyConfig.githubOrg,
      companyConfig.linkedinUrl
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'inquiries',
      email: companyConfig.email,
      availableLanguage: ['English', 'Hindi', 'Gujarati']
    }
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDesc} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Directive */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={companyConfig.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={metaImageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qavironel" />
      <meta name="twitter:creator" content="@qavironel" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={metaImageAlt} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || baseSchema)}
      </script>
    </Helmet>
  );
};
