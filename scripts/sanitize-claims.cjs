const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [target, replacement] of replacements) {
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      console.log(`Replaced in ${filePath}: "${target.slice(0, 30)}..."`);
    } else {
      console.warn(`Target not found in ${filePath}: "${target.slice(0, 30)}..."`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. HomePage.tsx
replaceInFile('src/pages/HomePage.tsx', [
  ['<span>Sub-0.8s Core Web Vitals</span>', '<span>Production-Tuned Core Web Vitals</span>'],
  ['4K SCREEN RECORDINGS · LIVE CAPTURE', 'HIGH-DEF SCREEN RECORDINGS · LIVE RUNTIME'],
  [
    'Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Zero bloated dependencies. Sub-second performance by default.',
    'Handcrafted type-safe React, TanStack Start, Python, and applied AI models. Clean modular architecture. Production-tuned performance by default.'
  ]
]);

// 2. ServicesPage.tsx
replaceInFile('src/pages/ServicesPage.tsx', [
  [
    '100/100 Core Web Vitals audit & sub-0.8s load speed',
    'Rigorous Core Web Vitals audit & load speed tuning'
  ]
]);

// 3. AboutPage.tsx
replaceInFile('src/pages/AboutPage.tsx', [
  [
    'Sub-Second Standard',
    'Production Performance'
  ],
  [
    'Every deliverable is benchmarked against Core Web Vitals to guarantee instant interaction speeds, zero render-blocking bloat, and top SEO rankings.',
    'Every deliverable is systematically audited against Core Web Vitals to optimize interaction latency, minimize render-blocking scripts, and improve discoverability.'
  ]
]);

console.log('Sanitized all unsupported claims successfully.');
