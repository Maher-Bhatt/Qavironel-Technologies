const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// 1. SiteFooter.tsx
replaceInFile('src/components/layout/SiteFooter.tsx', [
  [/bg-\[#F5F5F0\]\s+dark:bg-\[#101512\]\s+text-\[#191D1A\]\s+dark:text-\[#F5F5F0\]/g, 'bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA]'],
  [/<span className="text-\[#174C3A\]\s+dark:text-\[#879B89\]">Engineered\.<\/span>/g, '<span className="text-zinc-400 dark:text-zinc-500 font-light">Engineered.</span>'],
  [/dark:bg-\[#161D19\]/g, 'dark:bg-[#121212]'],
  [/hover:text-\[#174C3A\]\s+dark:hover:text-\[#34D399\]\s+hover:border-\[#174C3A\]\/40/g, 'hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30'],
  [/hover:text-\[#174C3A\]\s+dark:hover:text-\[#34D399\]/g, 'hover:text-black dark:hover:text-white'],
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-zinc-500 dark:text-zinc-400'],
  [/text-\[#174C3A\]/g, 'text-zinc-600 dark:text-zinc-400'],
  [/dark:text-\[#879B89\]/g, 'dark:text-zinc-400'],
  [/text-\[#737A73\]\s+dark:text-\[#A7B0A7\]/g, 'text-zinc-500 dark:text-zinc-400'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
  [/dark:text-\[#A7B0A7\]/g, 'dark:text-zinc-400'],
  [/hover:text-\[#191D1A\]/g, 'hover:text-black'],
  [/hover:text-\[#174C3A\]/g, 'hover:text-black'],
  [/text-\[#D9DED7\]/g, 'text-zinc-300'],
  [/text-\[#191D1A\]/g, 'text-black dark:text-white'],
]);

// 2. MobileGlassDock.tsx
replaceInFile('src/components/layout/MobileGlassDock.tsx', [
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-black dark:text-white'],
  [/text-\[#174C3A\]/g, 'text-black'],
  [/dark:text-\[#879B89\]/g, 'dark:text-white'],
  [/bg-\[#174C3A\]\/10\s+dark:bg-\[#879B89\]\/15/g, 'bg-black/10 dark:bg-white/15'],
  [/border-\[#174C3A\]\/30\s+dark:border-\[#879B89\]\/40/g, 'border-black/20 dark:border-white/30'],
  [/bg-\[#174C3A\]/g, 'bg-black dark:bg-white'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
  [/text-\[#191D1A\]/g, 'text-black dark:text-white'],
  [/border-\[#D9DED7\]/g, 'border-black/10 dark:border-white/10'],
  [/bg-\[#FAFBFA\]/g, 'bg-white'],
]);

// 3. ProjectCard.tsx
replaceInFile('src/components/work/ProjectCard.tsx', [
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-black dark:text-white'],
  [/text-\[#174C3A\]/g, 'text-black'],
  [/dark:text-\[#879B89\]/g, 'dark:text-white'],
  [/dark:text-\[#34D399\]/g, 'dark:text-white'],
  [/dark:bg-\[#161D19\]/g, 'dark:bg-[#121212]'],
  [/bg-\[#E6ECE5\]\s+dark:bg-\[#18241D\]/g, 'bg-zinc-100 dark:bg-zinc-800'],
  [/border-\[#D9DED7\]/g, 'border-black/10 dark:border-white/10'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
  [/text-\[#191D1A\]/g, 'text-black dark:text-white'],
  [/bg-\[#FAFBFA\]/g, 'bg-white'],
  [/bg-\[#174C3A\]/g, 'bg-black dark:bg-white'],
]);

// 4. RequestQuoteForm.tsx & ScheduleCallForm.tsx
['src/components/booking/RequestQuoteForm.tsx', 'src/components/booking/ScheduleCallForm.tsx'].forEach(f => {
  replaceInFile(f, [
    [/bg-\[#101512\]/g, 'bg-[#0A0A0A]'],
    [/dark:bg-\[#101512\]/g, 'dark:bg-[#0A0A0A]'],
    [/border-\[#D9DED7\]/g, 'border-black/10 dark:border-white/10'],
    [/text-\[#737A73\]/g, 'text-zinc-500'],
    [/text-\[#191D1A\]/g, 'text-black dark:text-white'],
  ]);
});

// 5. UI components: Badge.tsx, Button.tsx, RevealHeadline.tsx, SectionHeading.tsx, ThemeToggle.tsx, ProjectFilters.tsx
replaceInFile('src/components/ui/Badge.tsx', [
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-black dark:text-white'],
  [/bg-\[#174C3A\]\/10\s+dark:bg-\[#879B89\]\/15/g, 'bg-black/10 dark:bg-white/15'],
  [/border-\[#174C3A\]\/30\s+dark:border-\[#879B89\]\/40/g, 'border-black/20 dark:border-white/30'],
  [/text-\[#174C3A\]/g, 'text-black dark:text-white'],
  [/dark:text-\[#879B89\]/g, 'dark:text-white'],
]);

replaceInFile('src/components/ui/Button.tsx', [
  [/dark:bg-\[#161D19\]/g, 'dark:bg-[#121212]'],
]);

replaceInFile('src/components/ui/RevealHeadline.tsx', [
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-black dark:text-white'],
  [/text-\[#174C3A\]/g, 'text-black'],
  [/dark:text-\[#879B89\]/g, 'dark:text-white'],
]);

replaceInFile('src/components/ui/SectionHeading.tsx', [
  [/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-black dark:text-white'],
  [/text-\[#174C3A\]/g, 'text-black'],
  [/dark:text-\[#879B89\]/g, 'dark:text-white'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
  [/text-\[#191D1A\]/g, 'text-black dark:text-white'],
]);

replaceInFile('src/components/ui/ThemeToggle.tsx', [
  [/dark:text-\[#34D399\]/g, 'dark:text-white'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
]);

replaceInFile('src/components/work/ProjectFilters.tsx', [
  [/dark:bg-\[#161D19\]/g, 'dark:bg-[#121212]'],
]);

replaceInFile('src/components/media/AmbientHeroCanvas.tsx', [
  [/rgba\(23,\s*76,\s*58/g, 'rgba(10, 10, 10'],
  [/text-\[#737A73\]/g, 'text-zinc-500'],
  [/#174C3A/gi, '#0A0A0A'],
]);

replaceInFile('src/components/layout/SiteHeader.tsx', [
  [/text-\[#737A73\]/g, 'text-zinc-500'],
]);

console.log('Finished residual cleanup.');
