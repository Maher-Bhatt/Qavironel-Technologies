import { SEO } from '../components/seo/SEO';
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ImageLightbox } from '../components/work/ImageLightbox';
import { ProjectGalleryItem } from '../types';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  Layers, 
  ZoomIn,
  ShieldCheck,
  Compass,
  FileText,
  Play
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { openBookingModal } from '../utils/modalEvents';
import { enforceScrollTop } from '../utils/scroll';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);
  const [activeMediaMode, setActiveMediaMode] = useState<'video' | 'image'>('video');

  const project = projects.find((p) => p.slug === slug);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const mediaContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    enforceScrollTop();
  }, [slug]);

  useEffect(() => {
    const container = mediaContainerRef.current;
    if (!container || !project?.videoSrc || activeMediaMode !== 'video') return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
        if (videoRef.current) {
          videoRef.current.defaultMuted = true;
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    }, { threshold: [0, 0.15, 0.35] });

    observer.observe(container);

    return () => observer.disconnect();
  }, [activeMediaMode, project?.videoSrc]);

  if (!project) {
    return (
      <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-black dark:text-white transition-colors duration-300 pt-36 pb-24 text-center max-w-xl mx-auto px-6">
        <SEO title="Case Study Not Found" noIndex />
        <h1 className="text-3xl font-bold font-sans text-black dark:text-white">Case Study Not Found</h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">The requested project case study could not be located in our portfolio index.</p>
        <div className="mt-8">
          <Button to="/work" variant="primary">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  // Related projects
  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const truncatedSummary = project.summary.length > 155 
    ? `${project.summary.slice(0, 152).trim()}...` 
    : project.summary;

  const resolvedHeroImage = project.slug === 'kalki' 
    ? '/images/work/kalki-standby.webp' 
    : project.heroImage;

  return (
    <article className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-black dark:text-white transition-colors duration-300 pt-28 sm:pt-36 pb-24 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <SEO
        title={`${project.title} — Case Study`}
        description={truncatedSummary}
        type="article"
        image={resolvedHeroImage}
        url={`https://qavironel.com/work/${project.slug}`}
        keywords={project.technologies}
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': ['CreativeWork', 'TechArticle'],
              name: project.title,
              headline: project.eyebrow,
              description: project.summary,
              image: `https://qavironel.com${resolvedHeroImage}`,
              datePublished: `${project.year.split('–')[0]}-01-01`,
              inLanguage: 'en-US',
              author: {
                '@type': 'Organization',
                name: 'Qavironel Technologies',
                url: 'https://qavironel.com'
              },
              publisher: {
                '@type': 'Organization',
                name: 'Qavironel Technologies',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://qavironel.com/brand/qavironel-logo-square.png'
                }
              },
              keywords: project.technologies.join(', ')
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qavironel.com/' },
                { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://qavironel.com/work' },
                { '@type': 'ListItem', position: 3, name: project.title, item: `https://qavironel.com/work/${project.slug}` }
              ]
            }
          ]
        }}
      />
      <div className="max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="border-b border-black/10 dark:border-white/10 pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-2.5 py-1 text-xs font-mono bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded text-black dark:text-white">
              {project.status}
            </span>
            <span className="px-2.5 py-1 text-xs font-mono bg-black text-white dark:bg-white dark:text-black font-semibold rounded">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-zinc-500">Year: {project.year}</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-black dark:text-white tracking-tight leading-[1.08] max-w-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg sm:text-2xl text-zinc-800 dark:text-zinc-200 font-light max-w-4xl leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Action Links */}
          {project.links.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all w-full sm:w-auto ${
                    link.type === 'live'
                      ? 'bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black shadow-xs'
                      : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-black dark:text-white border border-black/10 dark:border-white/15'
                  }`}
                >
                  {link.type === 'github' ? <GithubIcon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Hero Showcase Media — Studio Viewport with Zero Image Cuts */}
        <div ref={mediaContainerRef} className="my-12 sm:my-16 bg-black border border-black/10 dark:border-white/10 rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center shadow-lg min-h-[340px] sm:min-h-[460px] relative overflow-hidden">
          {project.videoSrc && (
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                <span className="text-white uppercase tracking-wider truncate">
                  {activeMediaMode === 'video' ? 'System Showreel (1080p Full HD)' : 'Interface Architecture & System Still'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-lg shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveMediaMode('video')}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                    activeMediaMode === 'video'
                      ? 'bg-white text-black font-semibold shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>1080p Reel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMediaMode('image')}
                  className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                    activeMediaMode === 'image'
                      ? 'bg-white text-black font-semibold shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>Still Frame</span>
                </button>
              </div>
            </div>
          )}

          {project.videoSrc && activeMediaMode === 'video' ? (
            <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video flex items-center justify-center">
              <video
                ref={videoRef}
                src={project.videoSrc}
                poster={
                  project.slug === 'kalki' 
                    ? '/videos/kalki-video-poster.webp' 
                    : project.slug === 'ztees'
                      ? '/videos/ztees-video-poster.webp'
                      : project.slug === 'itm-notes'
                        ? '/videos/itm-notes-video-poster.webp'
                        : '/videos/project-reel-poster.webp'
                }
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={project.heroImage}
              alt={`${project.title} hero interface presentation`}
              className="max-w-full max-h-[540px] w-auto h-auto object-contain rounded-xl drop-shadow-2xl"
            />
          )}
        </div>

        {/* Key Metrics / Highlights if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-16 p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-sans font-extrabold text-3xl sm:text-4xl text-black dark:text-white">{m.value}</p>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">{m.label}</p>
                {m.context && <p className="text-xs text-zinc-600 dark:text-zinc-400">{m.context}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Detailed Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8">
          {/* Main Story (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>The Challenge</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                What needed solving
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {project.challenge}
              </p>
            </section>

            {/* Target Audience */}
            <section className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>Target Audience</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                Who this was engineered for
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {project.audience}
              </p>
            </section>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <section className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                  <span>Strategic Objectives</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                  What the solution had to deliver
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="p-5 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-black dark:text-white leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* The Solution */}
            <section className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>The Solution & Implementation</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                How we architected the system
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {project.solution}
              </p>
            </section>

            {/* Workflow / User Journey */}
            {project.workflow && project.workflow.length > 0 && (
              <section className="space-y-6 pt-8 border-t border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                  <span>Workflow Architecture</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                  The interactive experience in action
                </h2>
                <div className="space-y-4">
                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="p-5 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl flex items-start gap-4 shadow-xs">
                      <span className="font-mono text-sm font-bold text-black dark:text-white px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded">
                        0{idx + 1}
                      </span>
                      <p className="text-sm text-black dark:text-white leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Build Notes */}
            {project.buildNotes && project.buildNotes.length > 0 && (
              <section className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                  <span>Engineering Highlights</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white">
                  Technical craftsmanship & decisions
                </h2>
                <ul className="space-y-3 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.buildNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-black dark:text-white font-bold">•</span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Why It Matters */}
            <section className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 sm:p-8 border rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>The Takeaway</span>
              </div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-black dark:text-white">
                Why this build matters
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {project.whyItMatters}
              </p>
            </section>
          </div>

          {/* Sidebar Metadata (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                  Project Category
                </p>
                <p className="text-base font-bold font-sans text-black dark:text-white">{project.categoryLabel}</p>
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                  Status & Delivery
                </p>
                <p className="text-sm font-semibold text-black dark:text-white">{project.status}</p>
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Technologies Deployed
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.scopeNote && (
                <div className="pt-4 border-t border-black/10 dark:border-white/10">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Boundary Note
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.scopeNote}
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-black/10 dark:border-white/10">
                <Button to="/contact" variant="primary" size="md" className="w-full justify-center">
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-24 pt-16 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 block mb-2">
                  Visual Evidence
                </span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl text-black dark:text-white tracking-tight">
                  The interface, in action.
                </h2>
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Click any capture to inspect in high resolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((item, idx) => (
                <div 
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge image: ${item.caption || item.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage(item);
                    }
                  }}
                  className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl p-4 group cursor-pointer hover:border-black/30 dark:hover:border-white/30 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black flex items-center justify-center p-2">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy" width="1920" height="1080"
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-2 bg-black/90 text-white text-xs font-mono flex items-center gap-1.5 rounded-full border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
        <ImageLightbox 
          item={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />

        {/* Related Case Studies */}
        <section className="mt-24 pt-16 border-t border-black/10 dark:border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans font-bold text-2xl text-black dark:text-white">
              Explore more selected work
            </h2>
            <Link to="/work" className="text-xs font-mono font-semibold uppercase tracking-widest text-black dark:text-white hover:underline">
              View All Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div 
                key={rel.slug}
                className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-black/30 dark:hover:border-white/30 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                    <span className="text-black dark:text-white font-semibold">{rel.category}</span>
                    <span>{rel.year}</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-black dark:text-white">
                    <Link to={`/work/${rel.slug}`} className="hover:opacity-75 transition-opacity">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {rel.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <Link 
                    to={`/work/${rel.slug}`} 
                    className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white hover:opacity-75 transition-opacity inline-flex items-center gap-1"
                  >
                    Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 p-6 sm:p-12 glass-card rounded-2xl text-black dark:text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-black/10 dark:border-white/10">
          <div>
            <h3 className="font-sans font-bold text-2xl text-black dark:text-white">Have a project with a clear next step?</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-light">Tell us what you are trying to build. We will shape the right architecture.</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="btn-glass-shimmer hover:-translate-y-0.5 active:scale-[0.98] px-5 py-3 rounded-full bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xs w-full sm:w-auto"
            >
              <Calendar className="w-3.5 h-3.5 text-white dark:text-black" />
              <span>Schedule Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="btn-glass-shimmer hover:-translate-y-0.5 active:scale-[0.98] px-5 py-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-black/10 dark:border-white/10 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText className="w-3.5 h-3.5 text-black dark:text-white" />
              <span>Get Quote</span>
            </button>
            <Button to="/contact" variant="primary" size="md" showArrow className="btn-glass-shimmer hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto justify-center">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};


