import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../../utils/soundEffects';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

export const Preloader: React.FC = () => {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);
  const [stageText, setStageText] = useState('BOOTING DIGITAL RUNTIME...');
  const soundPlayedRef = useRef<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Check if session has already seen the intro
    const hasSeen = sessionStorage.getItem('qavironel_preloader_seen_v2');
    if (hasSeen) {
      setComplete(true);
      return;
    }

    // Target duration ~2.4 seconds total for a luxurious, intentional intro
    const totalDuration = 2200; // 2.2s count + 300ms exit
    const startTime = performance.now();

    const stages = [
      { threshold: 0, text: 'BOOTING DIGITAL RUNTIME & PROTOCOLS' },
      { threshold: 24, text: 'PRE-WARMING THREE.JS WEBGL CONDUITS' },
      { threshold: 54, text: 'HYDRATING LOCAL INFERENCE & DPAPI VAULT' },
      { threshold: 82, text: 'CALIBRATING KINETIC MOTIONS & VITALS' },
      { threshold: 99, text: 'INITIALIZATION COMPLETE · STUDIO READY' },
    ];

    let animationFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Organic easing curve with subtle anticipation
      // EaseOutCubic with small step plateau around 75%
      let eased = 1 - Math.pow(1 - progress, 2.8);
      
      // Calculate display percentage (0 to 100)
      const currentVal = Math.min(Math.floor(eased * 100), 100);
      setPercent(currentVal);

      // Sound ticks on milestones
      const milestones = [25, 55, 85, 100];
      milestones.forEach((m) => {
        if (currentVal >= m && !soundPlayedRef.current[m]) {
          soundPlayedRef.current[m] = true;
          try {
            playClickSound();
          } catch {
            // ignore
          }
        }
      });

      // Update stage text
      for (let i = stages.length - 1; i >= 0; i--) {
        if (currentVal >= stages[i].threshold) {
          setStageText(stages[i].text);
          break;
        }
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        // Hold 100% state for 250ms for psychological satisfaction
        setTimeout(() => {
          setComplete(true);
          sessionStorage.setItem('qavironel_preloader_seen_v2', 'true');
        }, 260);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    // Escape key listener for immediate skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setComplete(true);
        sessionStorage.setItem('qavironel_preloader_seen_v2', 'true');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setComplete(true);
    sessionStorage.setItem('qavironel_preloader_seen_v2', 'true');
  };

  const formattedPercent = percent < 10 ? `0${percent}` : `${percent}`;

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-white text-[#0A0A0A] select-none p-6 sm:p-10 pointer-events-auto"
        >
          {/* Top Curtain Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: '-100%', 
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="absolute top-0 inset-x-0 h-1/2 bg-white origin-top z-0 shadow-lg"
          />

          {/* Bottom Curtain Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: '100%', 
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="absolute bottom-0 inset-x-0 h-1/2 bg-white origin-bottom z-0 shadow-lg"
          />

          {/* Background Technical Grid Watermark */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" 
            aria-hidden="true" 
          />

          {/* 01. TOP TELEMETRY BAR */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#E5E7EB] pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E0561B] animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#0A0A0A] uppercase">
                Qavironel Technologies
              </span>
              <span className="text-[#A1A1AA] hidden sm:inline">/</span>
              <span className="text-[0.68rem] font-mono text-[#71717A] hidden sm:inline">
                STUDIO RUNTIME OS
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#71717A]">
              <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                60 FPS STREAM
              </span>
              <span className="text-[#E5E7EB] hidden md:inline">|</span>
              <span className="tracking-widest">BUILD 2026.04</span>
            </div>
          </div>

          {/* 02. CENTER HERO STAGE */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-xl mx-auto py-8">
            {/* Center Brand Monogram with Subtle Rotating Halo */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer rotating dashed reticle */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute w-24 h-24 rounded-full border border-dashed border-[#E0561B]/30"
              />
              {/* Subtle inner pulse ring */}
              <div className="absolute w-18 h-18 rounded-full bg-[#E0561B]/10 animate-ping opacity-30" />
              
              {/* Monogram image */}
              <div className="relative w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] p-2.5 flex items-center justify-center shadow-sm">
                <img 
                  src="/brand/qavironel-monogram.png" 
                  alt="Qavironel" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Giant Architectural Percentage Display */}
            <div className="flex items-baseline justify-center tracking-tighter">
              <span className="font-sans font-black text-7xl sm:text-8xl md:text-9xl text-[#0A0A0A] tabular-nums select-none leading-none">
                {formattedPercent}
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#E0561B] ml-1.5 leading-none">
                %
              </span>
            </div>

            {/* Micro Precision Fraction Counter */}
            <p className="mt-3 text-xs font-mono tracking-widest text-[#71717A]">
              PROGRESS INDEX · [ {((percent / 100)).toFixed(2)} / 1.00 ]
            </p>

            {/* Precision Laser Loading Track */}
            <div className="mt-8 w-64 sm:w-80 md:w-96 h-1 bg-[#F4F4F5] rounded-full overflow-hidden relative border border-[#E5E7EB]/80 shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#E0561B]/70 via-[#E0561B] to-[#FF7A3D] rounded-full relative"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              >
                {/* Glowing laser tip */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#E0561B]" />
              </motion.div>
            </div>

            {/* Dynamic Telemetry Stage Status */}
            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-mono text-[#0A0A0A]">
              <Terminal className="w-3.5 h-3.5 text-[#E0561B] animate-pulse" />
              <span className="tracking-wider uppercase text-[0.7rem] sm:text-xs">
                {stageText}
              </span>
            </div>
          </div>

          {/* 03. BOTTOM FOOTER TELEMETRY & SKIP */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#E5E7EB] pt-4 text-xs font-mono text-[#71717A]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B]" />
              <span className="hidden sm:inline">REMOTE-FIRST DIGITAL STUDIO</span>
              <span className="text-[#E5E7EB] hidden sm:inline">|</span>
              <span className="text-[#0A0A0A] font-semibold">IDEAS. ENGINEERED.</span>
            </div>

            <button
              type="button"
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#52525B] hover:text-[#0A0A0A] transition-colors border border-[#E5E7EB]"
            >
              <span>[ESC] SKIP INTRO</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
