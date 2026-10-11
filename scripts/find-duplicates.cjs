const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      res = res.concat(walk(p));
    } else {
      res.push(p);
    }
  }
  return res;
}

const files = walk('public');
const hashMap = new Map();
const duplicates = [];

for (const f of files) {
  const buf = fs.readFileSync(f);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  if (hashMap.has(hash)) {
    duplicates.push({ original: hashMap.get(hash), duplicate: f, size: buf.length });
  } else {
    hashMap.set(hash, f);
  }
}

console.log('Total files in public:', files.length);
console.log('Duplicates found:', duplicates.length);
for (const d of duplicates) {
  console.log(`- ${d.duplicate} (${(d.size/1024).toFixed(1)} KB) === ${d.original}`);
}
