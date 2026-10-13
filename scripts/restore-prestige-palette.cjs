const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/pages/HomePage.tsx',
  'src/pages/WorkPage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/CaseStudyPage.tsx',
  'src/pages/LegalPage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/components/layout/SiteFooter.tsx',
  'src/components/layout/SiteHeader.tsx',
  'src/components/layout/MobileGlassDock.tsx',
  'src/components/booking/BookingModal.tsx',
  'src/components/booking/RequestQuoteForm.tsx',
  'src/components/booking/ScheduleCallForm.tsx',
  'src/components/contact/ContactForm.tsx',
  'src/components/work/ProjectFilters.tsx',
  'src/components/work/ProjectCard.tsx',
  'src/components/ui/Badge.tsx',
  'src/components/ui/Button.tsx',
  'src/components/ui/ThemeToggle.tsx',
  'src/components/ui/SectionHeading.tsx',
  'src/components/ui/RevealHeadline.tsx',
  'src/components/3d/Hero3DCanvas.tsx',
  'src/components/3d/Hero3DArchitectureStack.tsx',
  'src/components/3d/Clay3DSculpture.tsx',
  'src/components/3d/Interactive3DSphere.tsx',
  'src/components/3d/Spatial3DPrism.tsx',
  'src/components/3d/Spatial3DTorus.tsx',
  'src/components/media/VideoShowreel.tsx',
  'src/components/home/CapabilitiesBentoGrid.tsx',
  'src/components/home/StudioStandardsMatrix.tsx',
  'src/components/home/StudioEngineConsole.tsx',
];

targetFiles.forEach((relPath) => {
  const filePath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing: ${relPath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Accent Green / Mint -> Forest Green #174C3A & Sage #879B89
  content = content.replace(/text-\[#0E7A57\]\s+dark:text-\[#34D399\]/g, 'text-[#174C3A] dark:text-[#879B89]');
  content = content.replace(/text-\[#0E7A57\]/g, 'text-[#174C3A]');
  content = content.replace(/dark:text-\[#34D399\]/g, 'dark:text-[#879B89]');
  content = content.replace(/bg-\[#0E7A57\]/g, 'bg-[#174C3A]');
  content = content.replace(/dark:bg-\[#34D399\]/g, 'dark:bg-[#879B89]');
  content = content.replace(/border-\[#0E7A57\]/g, 'border-[#174C3A]');
  content = content.replace(/dark:border-\[#34D399\]/g, 'dark:border-[#879B89]');

  // 2. Pale Sage Pill Backgrounds
  content = content.replace(/bg-\[#ECFDF5\]\s+dark:bg-\[#143024\]/g, 'bg-[#E6ECE5] dark:bg-[#18241D]');
  content = content.replace(/bg-\[#EAF4EE\]\s+dark:bg-\[#13241C\]/g, 'bg-[#E6ECE5] dark:bg-[#18241D]');
  content = content.replace(/bg-\[#ECFDF5\]/g, 'bg-[#E6ECE5]');
  content = content.replace(/bg-\[#EAF4EE\]/g, 'bg-[#E6ECE5]');
  content = content.replace(/dark:bg-\[#143024\]/g, 'dark:bg-[#18241D]');
  content = content.replace(/dark:bg-\[#13241C\]/g, 'dark:bg-[#18241D]');

  // 3. Full-page background: stark white -> warm ivory #F5F5F0 & dark studio #101512
  content = content.replace(/bg-white\s+dark:bg-\[#0A0A0A\]\s+text-\[#0A0A0A\]\s+dark:text-white/g, 'bg-[#F5F5F0] dark:bg-[#101512] text-[#191D1A] dark:text-[#F5F5F0]');
  content = content.replace(/bg-white\s+dark:bg-\[#0A0A0A\]\s+text-\[#0A0A0A\]\s+dark:text-\[#FFFFFF\]/g, 'bg-[#F5F5F0] dark:bg-[#101512] text-[#191D1A] dark:text-[#F5F5F0]');

  // 4. Studio Cards: bg-white dark:bg-[#141414] or [#121915] -> bg-white dark:bg-[#161D19]
  content = content.replace(/bg-white\s+dark:bg-\[#141414\]/g, 'bg-white dark:bg-[#161D19]');
  content = content.replace(/bg-white\s+dark:bg-\[#121915\]/g, 'bg-white dark:bg-[#161D19]');

  // 5. Borders: #E2E8E4 / black/10 -> #D9DED7
  content = content.replace(/border-\[#E2E8E4\]/g, 'border-[#D9DED7]');

  // 6. Text Tokens
  content = content.replace(/text-\[#0F1713\]\s+dark:text-\[#F4F7F5\]/g, 'text-[#191D1A] dark:text-[#F5F5F0]');
  content = content.replace(/text-\[#0F1713\]/g, 'text-[#191D1A]');
  content = content.replace(/dark:text-\[#F4F7F5\]/g, 'dark:text-[#F5F5F0]');
  content = content.replace(/text-\[#52635A\]\s+dark:text-\[#83988D\]/g, 'text-[#737A73] dark:text-[#A7B0A7]');
  content = content.replace(/text-\[#334139\]\s+dark:text-\[#83988D\]/g, 'text-[#343A35] dark:text-[#B2BDB3]');
  content = content.replace(/text-\[#52635A\]/g, 'text-[#737A73]');
  content = content.replace(/text-\[#334139\]/g, 'text-[#343A35]');
  content = content.replace(/dark:text-\[#83988D\]/g, 'dark:text-[#A7B0A7]');

  // 7. Micro badges: #FAFBFA dark:bg-[#0B100D] -> #F5F5F0 dark:bg-[#101512]
  content = content.replace(/bg-\[#FAFBFA\]\s+dark:bg-\[#0B100D\]/g, 'bg-[#F5F5F0] dark:bg-[#101512]');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Refined: ${relPath}`);
});

console.log('Palette refinement complete.');
