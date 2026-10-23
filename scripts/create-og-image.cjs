const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;
  const brandDir = path.resolve(__dirname, '../public/images/brand');
  fs.mkdirSync(brandDir, { recursive: true });

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F7F7F7" />
        <stop offset="1" stop-color="#E8E8E8" />
      </linearGradient>
      <linearGradient id="deep" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#161616" />
        <stop offset="1" stop-color="#0A0A0A" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#deep)" />
    <circle cx="1090" cy="75" r="250" fill="none" stroke="#D4D4D4" stroke-width="1" opacity=".18" />
    <circle cx="1090" cy="75" r="190" fill="none" stroke="#D4D4D4" stroke-width="1" opacity=".12" />
    <rect x="54" y="54" width="${width - 108}" height="${height - 108}" rx="4" fill="none" stroke="#F7F7F7" stroke-opacity=".22" />
    <text x="90" y="122" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="#D4D4D4" letter-spacing="4">QAVIRONEL TECHNOLOGIES</text>
    <text x="90" y="273" font-family="Georgia, serif" font-size="108" fill="#F7F7F7" letter-spacing="-3">Software with</text>
    <text x="90" y="386" font-family="Georgia, serif" font-size="108" fill="#E5E5E5" font-style="italic" letter-spacing="-3">purpose.</text>
    <line x1="90" y1="440" x2="1110" y2="440" stroke="#F7F7F7" stroke-opacity=".22" />
    <text x="90" y="494" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#F7F7F7" letter-spacing="1.2">PRODUCT DESIGN  ·  WEB  ·  SOFTWARE  ·  APPLIED AI</text>
    <text x="90" y="548" font-family="Arial, sans-serif" font-size="14" fill="#D4D4D4" letter-spacing="1.2">VADODARA, INDIA  /  WORKING WORLDWIDE</text>
    <text x="1110" y="548" text-anchor="end" font-family="Arial, sans-serif" font-size="14" fill="#F7F7F7" letter-spacing="1.2">QAVIRONEL.COM</text>
  </svg>`;

  const svgBuffer = Buffer.from(svg);
  fs.writeFileSync(path.join(brandDir, 'og-image.svg'), svg, 'utf8');
  await sharp(svgBuffer).png({ quality: 95 }).toFile(path.join(brandDir, 'og-image.png'));
  await sharp(svgBuffer).jpeg({ quality: 92 }).toFile(path.join(brandDir, 'og-image.jpg'));
  console.log('Generated Qavironel wordmark-only social preview assets.');
}

createOgImage().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
