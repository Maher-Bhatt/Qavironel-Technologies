import React, { useEffect, useState } from 'react';
import { SEO } from '../components/seo/SEO';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, Zap } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/soundEffects';
import { Clay3DSculpture } from '../components/3d/Clay3DSculpture';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAction = (path: string) => {
    playClickSound();
    navigate(path);
  };

  return (
    <>
      <SEO title="404 | Reality Not Found" description="The page you are looking for has shifted out of existence." />
      
      <div className="relative min-h-screen bg-[#F4F4F5] text-[#0A0A0A] overflow-hidden flex items-center justify-center pt-24 pb-20 selection:bg-[#E0561B] selection:text-white">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E0561B] opacity-10 blur-[120px] mix-blend-multiply"></div>
        </div>

        {/* 3D Background Element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60 mix-blend-multiply pointer-events-none z-0 transition-transform duration-700 ease-out" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
           <Clay3DSculpture size={900} />
        </div>

        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/10 border border-[#E5E7EB] dark:border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-[#E0561B] backdrop-blur-md mb-8 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>System Anomaly Detected</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans font-black text-[9rem] sm:text-[14rem] lg:text-[18rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#0A0A0A] to-[#71717A] dark:from-white dark:to-zinc-500 drop-shadow-sm select-none mix-blend-overlay"
            style={{ x: mousePos.x, y: mousePos.y }}
          >
            404
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 sm:-mt-12 max-w-2xl bg-white/80 dark:bg-[#121216]/90 backdrop-blur-xl border border-white dark:border-white/10 p-8 sm:p-12 rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>
            
            <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white tracking-tight mb-4">
              Reality Not Found
            </h2>
            <p className="relative z-10 text-[#52525B] dark:text-[#A1A1AA] leading-relaxed mb-10">
              The coordinates you requested have shifted out of our digital continuum. The page might have been moved, deleted, or never existed in this timeline.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleAction('/')}
                onMouseEnter={playHoverSound}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] dark:bg-white hover:bg-[#E0561B] dark:hover:bg-[#E0561B] text-white dark:text-[#0A0A0A] dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-[#E0561B]/20 group"
              >
                <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Return to Base</span>
              </button>

              <button
                onClick={() => handleAction('/work')}
                onMouseEnter={playHoverSound}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-[#1C1C22] hover:bg-[#F4F4F5] dark:hover:bg-[#25252E] border border-[#E5E7EB] dark:border-white/10 text-[#0A0A0A] dark:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 group"
              >
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
                <span>Explore Work</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};
