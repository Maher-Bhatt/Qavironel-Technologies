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
  Compass
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-36 pb-24 text-center max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-bold font-sans text-[#171717]">Case Study Not Found</h1>
        <p className="mt-4 text-sm text-[#77746F]">The requested project case study could not be located in our portfolio index.</p>
        <div className="mt-8">
          <Button to="/work" variant="primary">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  // Related projects
  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#77746F] hover:text-[#C7612E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="border-b border-[#DEDAD3] pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="charcoal" size="md">
              {project.status}
            </Badge>
            <Badge variant="copper" size="md">
              {project.categoryLabel}
            </Badge>
            <span className="text-xs font-mono text-[#77746F]">Year: {project.year}</span>
          </div>

          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#171717] tracking-tight editorial-title leading-[1.08] max-w-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-[#77746F] font-light max-w-4xl leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Action Links */}
          {project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    link.type === 'live'
                      ? 'bg-[#C7612E] hover:bg-[#98431F] text-white shadow-sm'
                      : 'bg-[#FFFFFF] hover:bg-[#F6F3ED] text-[#171717] border border-[#DEDAD3]'
                  }`}
                >
                  {link.type === 'github' ? <GithubIcon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Hero Showcase Image */}
        <div className="my-12 sm:my-16 bg-[#20201E] border border-[#2E2E2B] overflow-hidden shadow-xl aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={project.heroImage}
            alt={`${project.title} hero interface representation`}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Key Metrics / Highlights if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-16 p-8 bg-[#FFFFFF] border border-[#DEDAD3] grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-sans font-extrabold text-3xl sm:text-4xl text-[#171717]">{m.value}</p>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">{m.label}</p>
                {m.context && <p className="text-xs text-[#77746F]">{m.context}</p>}
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
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                <span>The Challenge</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                What needed solving
              </h2>
              <p className="text-base sm:text-lg text-[#77746F] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* Target Audience */}
            <section className="space-y-4 pt-8 border-t border-[#DEDAD3]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                <span>Target Audience</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                Who this was engineered for
              </h2>
              <p className="text-base text-[#77746F] leading-relaxed">
                {project.audience}
              </p>
            </section>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <section className="space-y-4 pt-8 border-t border-[#DEDAD3]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                  <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                  <span>Strategic Objectives</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                  What the solution had to deliver
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="p-5 bg-[#FFFFFF] border border-[#DEDAD3] flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C7612E] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#171717] leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* The Solution */}
            <section className="space-y-4 pt-8 border-t border-[#DEDAD3]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                <span>The Solution & Implementation</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                How we architected the system
              </h2>
              <p className="text-base sm:text-lg text-[#77746F] leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Workflow / User Journey */}
            {project.workflow && project.workflow.length > 0 && (
              <section className="space-y-6 pt-8 border-t border-[#DEDAD3]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                  <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                  <span>Workflow Architecture</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                  The interactive experience in action
                </h2>
                <div className="space-y-4">
                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="p-5 bg-[#FFFFFF] border border-[#DEDAD3] flex items-start gap-4">
                      <span className="font-mono text-sm font-bold text-[#C7612E] px-2 py-0.5 bg-[#C7612E]/10">
                        0{idx + 1}
                      </span>
                      <p className="text-sm text-[#171717] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Build Notes */}
            {project.buildNotes && project.buildNotes.length > 0 && (
              <section className="space-y-4 pt-8 border-t border-[#DEDAD3]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                  <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                  <span>Engineering Highlights</span>
                </div>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171717]">
                  Technical craftsmanship & decisions
                </h2>
                <ul className="space-y-3 mt-4 text-sm text-[#77746F]">
                  {project.buildNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#C7612E] font-bold">•</span>
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Why It Matters / Honest Reflection */}
            <section className="space-y-4 pt-8 border-t border-[#DEDAD3] bg-[#FFFFFF] p-8 border">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7612E]">
                <span className="w-1.5 h-1.5 bg-[#C7612E]" />
                <span>The Takeaway</span>
              </div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#171717]">
                Why this build matters
              </h2>
              <p className="text-sm sm:text-base text-[#77746F] leading-relaxed">
                {project.whyItMatters}
              </p>
            </section>
          </div>

          {/* Sidebar Metadata (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-6 sm:p-8 space-y-6 sticky top-28">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#77746F] mb-1">
                  Project Category
                </p>
                <p className="text-base font-bold font-sans text-[#171717]">{project.categoryLabel}</p>
              </div>

              <div className="pt-4 border-t border-[#DEDAD3]">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#77746F] mb-1">
                  Status & Delivery
                </p>
                <p className="text-sm font-semibold text-[#171717]">{project.status}</p>
              </div>

              <div className="pt-4 border-t border-[#DEDAD3]">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#77746F] mb-3">
                  Technologies Deployed
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-[#F6F3ED] text-[#171717] border border-[#DEDAD3]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.scopeNote && (
                <div className="pt-4 border-t border-[#DEDAD3]">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E] mb-1">
                    Boundary Note
                  </p>
                  <p className="text-xs text-[#77746F] leading-relaxed">
                    {project.scopeNote}
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-[#DEDAD3]">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-24 pt-16 border-t border-[#DEDAD3]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
                  Visual Evidence
                </span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight">
                  The interface, in action.
                </h2>
              </div>
              <p className="text-xs font-mono text-[#77746F]">
                Click any capture to inspect in high resolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#DEDAD3] p-4 group cursor-pointer hover:border-[#171717]/40 transition-all shadow-sm"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#20201E]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-[#171717]/90 text-white text-xs font-mono flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-[#77746F] font-mono leading-relaxed">
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
        <section className="mt-24 pt-16 border-t-2 border-[#171717]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sans font-bold text-2xl text-[#171717]">
              Explore more selected work
            </h2>
            <Link to="/work" className="text-xs font-semibold uppercase tracking-widest text-[#C7612E] hover:underline">
              View All Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div 
                key={rel.slug}
                className="bg-[#FFFFFF] border border-[#DEDAD3] p-6 hover:border-[#171717]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#77746F] mb-3">
                    <span>{rel.category}</span>
                    <span>{rel.year}</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#171717]">
                    <Link to={`/work/${rel.slug}`} className="hover:text-[#C7612E] transition-colors">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#77746F] line-clamp-2">
                    {rel.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DEDAD3] flex items-center justify-between">
                  <Link 
                    to={`/work/${rel.slug}`} 
                    className="text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#C7612E] transition-colors inline-flex items-center gap-1"
                  >
                    Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 p-8 sm:p-12 bg-[#171717] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-white">Have a project with a clear next step?</h3>
            <p className="text-sm text-[#77746F] mt-1">Tell us what you are trying to improve. We will shape the right scope.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg" showArrow>
            Start a Conversation
          </Button>
        </div>
      </div>
    </article>
  );
};
