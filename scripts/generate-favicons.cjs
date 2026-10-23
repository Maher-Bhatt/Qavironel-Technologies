const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#161616" />
  <text x="256" y="374" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="360" fill="#F7F7F7">Q</text>
</svg>`;

async function generateFavicons() {
  const svgBuffer = Buffer.from(iconSvg);
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  fs.writeFileSync(path.join(root, 'public/favicon.svg'), iconSvg, 'utf8');
  fs.mkdirSync(path.join(root, 'public/brand'), { recursive: true });
  fs.writeFileSync(path.join(root, 'public/brand/favicon.svg'), iconSvg, 'utf8');

  for (const size of sizes) {
    const outputNames = [`public/favicon-${size}.png`, `public/brand/favicon-${size}.png`];
    if (size === 180) outputNames.push('public/apple-touch-icon.png');
    if (size === 512) outputNames.push('public/favicon.png');
    for (const output of outputNames) {
      await sharp(svgBuffer).resize(size, size).png().toFile(path.join(root, output));
    }
  }

  console.log('Generated typographic Q icons for browser and home-screen use.');
}

generateFavicons().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
