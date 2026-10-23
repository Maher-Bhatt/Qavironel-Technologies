const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;

const root = path.resolve(__dirname, '..');
const secondsPerImage = 3;

const previews = [
  {
    output: 'cip-project-video.mp4',
    images: [
      'public/images/projects/cip/cip-pipeline-110-hero.webp',
      'public/images/projects/cip/cip-drainage-040-hero.webp',
      'public/images/projects/cip/cip-roads-117.webp',
      'public/images/projects/cip/cip-mechanical-115.webp'
    ]
  },
  {
    output: 'codedroid-project-video.mp4',
    images: [
      'public/images/projects/codedroid-cover.png',
      'public/images/projects/codedroid-devices.png',
      'public/images/work/codedroid-multidevice.webp'
    ]
  }
];

for (const preview of previews) {
  const sources = preview.images.map((image) => path.join(root, image));
  for (const source of sources) {
    if (!fs.existsSync(source)) throw new Error(`Missing project image: ${source}`);
  }

  const args = ['-hide_banner', '-loglevel', 'error', '-y'];
  for (const source of sources) {
    args.push('-loop', '1', '-framerate', '24', '-t', String(preview.duration ?? secondsPerImage), '-i', source);
  }

  const filters = sources.map((_, index) => {
    const outro = preview.duration ?? secondsPerImage;
    const fadeOut = sources.length === 1
      ? `fade=t=out:st=${Math.max(0, outro - 0.8)}:d=0.8`
      : `fade=t=out:st=${secondsPerImage - 0.35}:d=0.35`;
    return `[${index}:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.00045,1.045)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1280x720:fps=24,settb=expr=1/24,setpts=PTS-STARTPTS,fade=t=in:st=0:d=0.35,${fadeOut},format=yuv420p[v${index}]`;
  });

  const finalLabel = 'projectpreview';
  if (sources.length > 1) {
    filters.push(`${sources.map((_, index) => `[v${index}]`).join('')}concat=n=${sources.length}:v=1:a=0,format=yuv420p[${finalLabel}]`);
  } else {
    filters[0] = filters[0].replace('[v0]', `[${finalLabel}]`);
  }

  const duration = sources.length === 1
    ? preview.duration
    : secondsPerImage * sources.length;
  args.push(
    '-filter_complex', filters.join(';'),
    '-map', `[${finalLabel}]`,
    '-t', String(duration),
    '-an',
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '24',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    path.join(root, 'public/videos', preview.output)
  );

  execFileSync(ffmpeg, args, { stdio: 'inherit' });
  process.stdout.write(`Created public/videos/${preview.output}\n`);
}
