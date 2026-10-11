const fs = require('fs');
const path = require('path');

const duplicateFilesToRemove = [
  'public/images/projects/kalki/01 Hero.png',
  'public/images/projects/kalki/02 Ask.png',
  'public/images/projects/kalki/03 Today.png',
  'public/images/projects/kalki/04 Memory.png',
  'public/images/projects/kalki/05 Workbench.png',
  'public/images/projects/kalki/06 Oversight.png',
  'public/images/projects/kalki/07 Settings.png',
  'public/images/projects/kalki/KALKI – Microsoft Store Marketing Kit@2x.png',
  'public/images/projects/kalki-cover.png'
];

let totalSavedBytes = 0;
let removedCount = 0;

for (const f of duplicateFilesToRemove) {
  const p = path.resolve(f);
  if (fs.existsSync(p)) {
    const size = fs.statSync(p).size;
    fs.unlinkSync(p);
    totalSavedBytes += size;
    removedCount++;
    console.log(`Removed duplicate: ${f} (${(size / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`Already removed or not found: ${f}`);
  }
}

console.log(`Deduplication complete. Removed ${removedCount} duplicate files. Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
