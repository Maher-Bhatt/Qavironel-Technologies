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
const missing = new Set();
const found = new Set();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/["'](\/(?:images|brand|videos)[^"'?#\s]+)["']/g) || [];
  for (const raw of matches) {
    const clean = raw.slice(1, -1);
    if (!fs.existsSync(path.join('public', clean))) {
      missing.add(`${clean} (referenced in ${f})`);
    } else {
      found.add(clean);
    }
  }
}

console.log('Total valid referenced assets found:', found.size);
console.log('Missing referenced assets:', Array.from(missing));
