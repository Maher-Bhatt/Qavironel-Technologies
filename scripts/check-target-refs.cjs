const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      res = res.concat(walk(p));
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(f)) {
      res.push(p);
    }
  }
  return res;
}

const files = walk('src').concat(['index.html']);
const targets = [
  '01 Hero.png', '02 Ask.png', '03 Today.png', '04 Memory.png', 
  '05 Workbench.png', '06 Oversight.png', '07 Settings.png', 
  'KALKI – Microsoft Store Marketing Kit@2x.png', 'kalki-cover.png'
];

for (const t of targets) {
  let refCount = 0;
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes(t)) {
      console.log(`Target "${t}" referenced in: ${f}`);
      refCount++;
    }
  }
  if (refCount === 0) {
    console.log(`Target "${t}" is UNREFERENCED anywhere in source code!`);
  }
}
