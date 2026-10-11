const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const videos = [
  { name: 'hero-showreel.mp4', poster: 'hero-showreel-poster.webp' },
  { name: 'project-reel.mp4', poster: 'project-reel-poster.webp' },
  { name: 'tech-atmosphere.mp4', poster: 'tech-atmosphere-poster.webp' }
];

const videosDir = path.resolve(__dirname, '../public/videos');
const backupDir = path.resolve(__dirname, '../.media_originals');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

for (const v of videos) {
  const inputPath = path.join(videosDir, v.name);
  const backupPath = path.join(backupDir, v.name);
  const posterPath = path.join(videosDir, v.poster);
  const tempOptimizedPath = path.join(videosDir, `opt_${v.name}`);

  if (!fs.existsSync(inputPath)) {
    console.warn('File not found:', inputPath);
    continue;
  }

  // 1. Backup original if not already backed up
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log(`Backed up original to: ${backupPath}`);
  }

  // 2. Generate crisp poster image at 1.0 second mark
  console.log(`Generating poster: ${v.poster}...`);
  try {
    execSync(`"${ffmpegPath}" -y -ss 00:00:01 -i "${backupPath}" -vframes 1 -q:v 2 "${posterPath}"`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Error generating poster for ${v.name}:`, e.message);
  }

  // 3. Transcode to web-optimized 1080p MP4 (H.264, crf 24, faststart for streaming, strip silent audio)
  console.log(`Transcoding optimized web version of ${v.name}...`);
  try {
    execSync(`"${ffmpegPath}" -y -i "${backupPath}" -vf "scale='min(1920,iw)':-2" -c:v libx264 -crf 24 -preset medium -movflags +faststart -an "${tempOptimizedPath}"`, { stdio: 'inherit' });

    const origSize = fs.statSync(backupPath).size;
    const newSize = fs.statSync(tempOptimizedPath).size;
    console.log(`${v.name}: ${(origSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - newSize / origSize) * 100)}% reduction)`);

    // Replace public version with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(tempOptimizedPath, inputPath);
  } catch (e) {
    console.error(`Error optimizing ${v.name}:`, e.message);
    if (fs.existsSync(tempOptimizedPath)) fs.unlinkSync(tempOptimizedPath);
  }
}

console.log('Video optimization and poster generation complete.');
