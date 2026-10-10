import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasSeen = sessionStorage.getItem('qavironel_preloader_seen');
    if (hasSeen) {
      setComplete(true);
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true);
            sessionStorage.setItem('qavironel_preloader_seen', 'true');
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white text-[#0A0A0A] select-none"
        >
          {/* Top Curtain Split */}
          <motion.div
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            className="absolute top-0 inset-x-0 h-1/2 bg-white origin-top"
          />
          {/* Bottom Curtain Split */}
          <motion.div
            exit={{ y: '100%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            className="absolute bottom-0 inset-x-0 h-1/2 bg-white origin-bottom"
          />

          {/* Center Brand Counter */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0561B] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                Qavironel Technologies
              </span>
            </div>

            <p className="text-5xl sm:text-6xl font-extrabold font-sans tabular-nums tracking-tight">
              {percent < 10 ? `0${percent}` : percent}%
            </p>

            <span className="text-[0.68rem] font-mono text-[#71717A] tracking-widest uppercase">
              INITIALIZING STUDIO RUNTIME // 60 FPS
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
