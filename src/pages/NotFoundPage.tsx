import React from 'react';
import { SEO } from '../components/seo/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you are looking for does not exist." noIndex />
      
      <div className="min-h-[80vh] bg-[#FAFAFA] dark:bg-[#0A0A0A] text-black dark:text-white flex items-center justify-center pt-32 pb-20 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-xl w-full mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Error 404
          </span>
          <h1 className="font-display font-black text-7xl sm:text-9xl tracking-tight text-black dark:text-white">
            404
          </h1>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto font-light">
            The route you navigated to does not exist or has been relocated within our studio directory.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white border border-black/10 dark:border-white/10 text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
