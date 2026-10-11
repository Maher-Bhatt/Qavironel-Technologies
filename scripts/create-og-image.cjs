const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  const brandDir = path.resolve(__dirname, '../public/images/brand');
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
  }

  // Create an SVG card template using approved charcoal (#171717), copper (#C7612E), and warm off-white (#F6F3ED)
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#171717" />
        <stop offset="100%" stop-color="#20201E" />
      </linearGradient>
      <linearGradient id="copperLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C7612E" />
        <stop offset="50%" stop-color="#E0561B" />
        <stop offset="100%" stop-color="#98431F" />
      </linearGradient>
    </defs>

    <!-- Deep Charcoal Base -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Hairline Grid Pattern -->
    <g opacity="0.04" stroke="#FFFFFF" stroke-width="1">
      <line x1="80" y1="0" x2="80" y2="${height}" />
      <line x1="320" y1="0" x2="320" y2="${height}" />
      <line x1="600" y1="0" x2="600" y2="${height}" />
      <line x1="880" y1="0" x2="880" y2="${height}" />
      <line x1="1120" y1="0" x2="1120" y2="${height}" />
      <line x1="0" y1="120" x2="${width}" y2="120" />
      <line x1="0" y1="315" x2="${width}" y2="315" />
      <line x1="0" y1="510" x2="${width}" y2="510" />
    </g>

    <!-- Inner Border Framing -->
    <rect x="40" y="40" width="${width - 80}" height="${height - 80}" rx="20" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.1" />

    <!-- Top Copper Accent Bar -->
    <rect x="90" y="85" width="60" height="4" fill="url(#copperLine)" rx="2" />

    <!-- Eyebrow Tag -->
    <text x="90" y="130" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#C7612E" letter-spacing="3">DIGITAL PRODUCT &amp; SOFTWARE ENGINEERING STUDIO</text>

    <!-- Brand Header -->
    <text x="90" y="230" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="64" font-weight="800" fill="#F6F3ED" letter-spacing="-1.5">Qavironel Technologies</text>

    <!-- Tagline -->
    <text x="90" y="300" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="400" fill="#77746F">Ideas. <tspan fill="#C7612E" font-weight="700">Engineered.</tspan></text>

    <!-- Divider -->
    <line x1="90" y1="360" x2="1110" y2="360" stroke="#FFFFFF" stroke-width="1" opacity="0.08" />

    <!-- Pillar Capabilities -->
    <g font-family="'JetBrains Mono', monospace" font-size="14" font-weight="600" fill="#DEDAD3" letter-spacing="1">
      <circle cx="100" cy="420" r="4" fill="#C7612E" />
      <text x="116" y="425">HIGH-VELOCITY WEB PLATFORMS</text>

      <circle cx="500" cy="420" r="4" fill="#C7612E" />
      <text x="516" y="425">APPLIED AI &amp; LOCAL LLMS</text>

      <circle cx="870" cy="420" r="4" fill="#C7612E" />
      <text x="886" y="425">DEFENSIVE SYSTEMS</text>
    </g>

    <!-- Subtitle Description -->
    <text x="90" y="480" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="300" fill="#77746F">
      Bespoke digital architecture, full-stack product development, and applied AI systems.
    </text>

    <!-- Domain Footer Badge -->
    <rect x="90" y="525" width="180" height="34" rx="17" fill="#20201E" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.1" />
    <text x="120" y="547" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="700" fill="#F6F3ED" letter-spacing="1">qavironel.com</text>

    <!-- Location -->
    <text x="1110" y="547" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="500" fill="#77746F">GLOBAL · REMOTE-FIRST STUDIO</text>
  </svg>
  `;

  const svgBuffer = Buffer.from(svgOverlay);

  // Generate PNG
  const pngPath = path.resolve(brandDir, 'og-image.png');
  await sharp(svgBuffer).png({ quality: 95 }).toFile(pngPath);
  console.log('Generated:', pngPath);

  // Generate JPG
  const jpgPath = path.resolve(brandDir, 'og-image.jpg');
  await sharp(svgBuffer).jpeg({ quality: 92 }).toFile(jpgPath);
  console.log('Generated:', jpgPath);
}

createOgImage().catch(console.error);
