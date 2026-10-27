const fs = require('fs');
const path = require('path');

// Live deployment domain (NOTE FOR OWNER: flip back to https://qavironel.com when custom domain is purchased)
const baseUrl = 'https://qavironel-technologies.vercel.app';
const today = new Date().toISOString().split('T')[0];

// Extract project slugs from src/data/projects.ts
const projectsPath = path.resolve(__dirname, '../src/data/projects.ts');
const projectsContent = fs.readFileSync(projectsPath, 'utf8');
const slugMatches = [...projectsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

// Ensure unique slugs
const projectSlugs = Array.from(new Set(slugMatches));

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/work', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

const projectRoutes = projectSlugs.map((slug) => ({
  path: `/work/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allRoutes = [...staticRoutes, ...projectRoutes];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf8');

console.log(`Successfully generated public/sitemap.xml with ${allRoutes.length} URLs (7 static + ${projectRoutes.length} project routes).`);
