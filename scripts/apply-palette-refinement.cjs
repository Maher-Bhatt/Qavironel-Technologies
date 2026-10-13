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
];

targetFiles.forEach((relPath) => {
  const filePath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing: ${relPath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Specific compound patterns first
  // Headings / accent highlight: text-[#174C3A] dark:text-[#879B89] -> text-[#0E7A57] dark:text-[#34D399]
  content = content.replace(/text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'text-[#0E7A57] dark:text-[#34D399]');
  content = content.replace(/text-\[#174C3A\]\s+hover:underline/g, 'text-[#0E7A57] hover:underline');
  
  // Muted body text: text-[#737A73] dark:text-[#879B89] -> text-[#52635A] dark:text-[#83988D]
  content = content.replace(/text-\[#737A73\]\s+dark:text-\[#879B89\]/g, 'text-[#52635A] dark:text-[#83988D]');
  content = content.replace(/text-\[#343A35\]\s+dark:text-\[#879B89\]/g, 'text-[#334139] dark:text-[#83988D]');
  
  // Backgrounds:
  content = content.replace(/bg-\[#F5F5F0\]\s+dark:bg-\[#101512\]/g, 'bg-[#FAFBFA] dark:bg-[#0B100D]');
  content = content.replace(/bg-\[#FAFAF7\]\s+dark:bg-\[#0C100E\]/g, 'bg-[#FAFBFA] dark:bg-[#0B100D]');
  content = content.replace(/bg-\[#F5F5F0\]/g, 'bg-[#FAFBFA]');
  content = content.replace(/bg-\[#FAFAF7\]/g, 'bg-[#FAFBFA]');
  content = content.replace(/dark:bg-\[#101512\]/g, 'dark:bg-[#0B100D]');
  content = content.replace(/dark:bg-\[#0C100E\]/g, 'dark:bg-[#0B100D]');
  content = content.replace(/dark:bg-\[#161B18\]/g, 'dark:bg-[#121915]');
  content = content.replace(/dark:bg-\[#191D1A\]/g, 'dark:bg-[#121915]');
  content = content.replace(/dark:bg-\[#141A17\]/g, 'dark:bg-[#121915]');

  // Dark text:
  content = content.replace(/dark:text-\[#F5F5F0\]/g, 'dark:text-[#F4F7F5]');
  content = content.replace(/dark:text-\[#F7FAF8\]/g, 'dark:text-[#F4F7F5]');

  // Light text:
  content = content.replace(/text-\[#191D1A\]/g, 'text-[#0F1713]');
  content = content.replace(/text-\[#0F1411\]/g, 'text-[#0F1713]');
  content = content.replace(/text-\[#343A35\]/g, 'text-[#334139]');
  content = content.replace(/text-\[#2E3832\]/g, 'text-[#334139]');
  content = content.replace(/text-\[#737A73\]/g, 'text-[#52635A]');
  content = content.replace(/text-\[#647069\]/g, 'text-[#52635A]');

  // Accent green buttons & badges:
  content = content.replace(/bg-\[#174C3A\]\s+hover:bg-\[#103629\]/g, 'bg-[#0A3828] hover:bg-[#0E4F39]');
  content = content.replace(/bg-\[#0D382B\]\s+hover:bg-\[#07261D\]/g, 'bg-[#0A3828] hover:bg-[#0E4F39]');
  content = content.replace(/bg-\[#174C3A\]/g, 'bg-[#0A3828]');
  content = content.replace(/bg-\[#0D382B\]/g, 'bg-[#0A3828]');
  content = content.replace(/hover:bg-\[#103629\]/g, 'hover:bg-[#062319]');
  content = content.replace(/hover:bg-\[#07261D\]/g, 'hover:bg-[#062319]');

  // Badges & pills:
  content = content.replace(/bg-\[#E6ECE5\]\s+dark:bg-\[#103629\]\s+text-\[#174C3A\]\s+dark:text-\[#879B89\]/g, 'bg-[#EAF4EE] dark:bg-[#13241C] text-[#0A3828] dark:text-[#34D399]');
  content = content.replace(/bg-\[#E6ECE5\]/g, 'bg-[#EAF4EE]');
  content = content.replace(/bg-\[#EBF2ED\]/g, 'bg-[#EAF4EE]');
  content = content.replace(/hover:bg-\[#E6ECE5\]/g, 'hover:bg-[#EAF4EE]');

  // Borders:
  content = content.replace(/border-\[#D9DED7\]/g, 'border-[#E2E8E4]');
  content = content.replace(/border-\[#E2E8E3\]/g, 'border-[#E2E8E4]');

  // Remaining individual tokens:
  content = content.replace(/text-\[#174C3A\]/g, 'text-[#0E7A57]');
  content = content.replace(/text-\[#0D382B\]/g, 'text-[#0E7A57]');
  content = content.replace(/text-\[#155E47\]/g, 'text-[#0E7A57]');
  content = content.replace(/dark:text-\[#879B89\]/g, 'dark:text-[#83988D]');
  content = content.replace(/selection:bg-\[#174C3A\]/g, 'selection:bg-[#0A3828]');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${relPath}`);
});

console.log('Finished updating color tokens.');
