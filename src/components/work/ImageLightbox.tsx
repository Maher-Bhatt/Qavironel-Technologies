import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectGalleryItem } from '../../types';

interface ImageLightboxProps {
  item: ProjectGalleryItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab') {
        // Keep focus inside close button since it is the only interactive control
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-8 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded project screenshot"
      onClick={onClose}
    >
      <div 
        data-lenis-prevent="true"
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 sm:p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-black/60 sm:bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-hidden flex items-center justify-center max-h-[75vh] w-full rounded-xl">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[75vh] max-w-full w-auto object-contain rounded-xl"
          />
        </div>

        {item.caption && (
          <div className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-center text-[11px] sm:text-sm text-zinc-300 font-mono max-w-2xl">
            {item.caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
