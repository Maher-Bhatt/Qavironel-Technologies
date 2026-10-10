import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectGalleryItem } from '../../types';

interface ImageLightboxProps {
  item: ProjectGalleryItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded project screenshot"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 sm:p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 sm:top-4 sm:right-4 z-10 p-2.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white transition-colors shadow-lg"
          aria-label="Close screenshot preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-hidden flex items-center justify-center max-h-[75vh] rounded-xl">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        {item.caption && (
          <div className="mt-4 px-4 py-2 text-center text-xs sm:text-sm text-zinc-300 font-mono max-w-2xl">
            {item.caption}
          </div>
        )}
      </div>
    </div>
  );
};
