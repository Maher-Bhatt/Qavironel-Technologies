const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extensions));
    } else {
      if (extensions.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const files = getAllFiles(srcDir, ['.ts', '.tsx', '.css']);
let totalReplacements = 0;
let modifiedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace #E0561B (case-insensitive) -> #C7612E
  content = content.replace(/#E0561B/gi, '#C7612E');

  // Replace #C2410C (case-insensitive) -> #98431F
  content = content.replace(/#C2410C/gi, '#98431F');

  // Replace rgba(224, 86, 27 or rgba(224,86,27
  content = content.replace(/rgba\(\s*224\s*,\s*86\s*,\s*27/g, 'rgba(199, 97, 46');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFiles++;
    console.log(`Updated: ${path.relative(path.join(__dirname, '..'), file)}`);
  }
}

console.log(`\nCompleted brand color sweep: ${modifiedFiles} files updated.`);
