const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = path.resolve(__dirname, '..', 'screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const captures = [
  // Desktop Light
  { name: 'after_home_desktop', url: 'http://localhost:5173/', width: 1440, height: 1080, dark: false },
  { name: 'after_work_desktop', url: 'http://localhost:5173/work', width: 1440, height: 1080, dark: false },
  { name: 'after_services_desktop', url: 'http://localhost:5173/services', width: 1440, height: 1080, dark: false },
  { name: 'after_about_desktop', url: 'http://localhost:5173/about', width: 1440, height: 1080, dark: false },
  { name: 'after_contact_desktop', url: 'http://localhost:5173/contact', width: 1440, height: 1080, dark: false },
  { name: 'after_casestudy_desktop', url: 'http://localhost:5173/work/kalki', width: 1440, height: 1080, dark: false },

  // Mobile Light
  { name: 'after_home_mobile', url: 'http://localhost:5173/', width: 390, height: 844, dark: false },
  { name: 'after_work_mobile', url: 'http://localhost:5173/work', width: 390, height: 844, dark: false },
  { name: 'after_about_mobile', url: 'http://localhost:5173/about', width: 390, height: 844, dark: false },

  // Desktop Dark Theme
  { name: 'after_home_dark', url: 'http://localhost:5173/', width: 1440, height: 1080, dark: true },
  { name: 'after_about_dark', url: 'http://localhost:5173/about', width: 1440, height: 1080, dark: true },
];

async function captureItem(item) {
  const outFile = path.join(outputDir, `${item.name}.png`);
  console.log(`Capturing [${item.name}] ${item.url} (${item.width}x${item.height}${item.dark ? ' dark' : ''})...`);
  
  return new Promise((resolve) => {
    const tempUserData = path.join(process.env.TEMP || 'C:\\temp', `edge_cap_${Date.now()}_${Math.random().toString(36).substring(7)}`);
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--force-prefers-reduced-motion',
      `--user-data-dir=${tempUserData}`,
      `--window-size=${item.width},${item.height}`,
      '--virtual-time-budget=4000',
    ];

    if (item.dark) {
      args.push('--blink-settings=forceDarkMode=1');
      args.push('--enable-features=WebContentsForceDark');
    }

    args.push(`--screenshot=${outFile}`);
    args.push(item.url);

    const proc = spawn(edgePath, args, { stdio: 'ignore' });
    proc.on('close', (code) => {
      const exists = fs.existsSync(outFile);
      const size = exists ? fs.statSync(outFile).size : 0;
      console.log(`Saved ${item.name}: ${exists} (${size} bytes)`);
      try {
        fs.rmSync(tempUserData, { recursive: true, force: true });
      } catch (e) {}
      resolve(exists);
    });
    proc.on('error', (err) => {
      console.error('Error capturing:', err);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of captures) {
    await captureItem(item);
  }
  console.log('All captures complete.');
}

run();
