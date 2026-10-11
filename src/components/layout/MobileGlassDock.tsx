import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, MessageSquare, LayoutGrid } from 'lucide-react';
import { openBookingModal } from '../booking/BookingModal';
import { companyConfig } from '../../data/company';

export const MobileGlassDock: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden flex justify-center pointer-events-none">
      <nav 
        aria-label="Mobile Quick Actions"
        className="pointer-events-auto w-full max-w-sm glass-dock rounded-full px-2.5 py-2 flex items-center justify-between border border-white/80 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-colors duration-300"
      >
        {/* Book Call Button */}
        <button
          type="button"
          onClick={() => openBookingModal('call')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 text-[#171717] dark:text-[#F6F3ED] active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-[#C7612E] mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Book Call</span>
        </button>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-[#DEDAD3] dark:bg-white/10" />

        {/* Request Quotation */}
        <button
          type="button"
          onClick={() => openBookingModal('quotation')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 text-[#171717] dark:text-[#F6F3ED] active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4 text-[#C7612E] mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Get Quote</span>
        </button>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-[#DEDAD3] dark:bg-white/10" />

        {/* WhatsApp Chat */}
        <a
          href={companyConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 text-[#171717] dark:text-[#F6F3ED] active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Separator */}
        <div className="w-[1px] h-6 bg-[#DEDAD3] dark:bg-white/10" />

        {/* Selected Work */}
        <Link
          to="/work"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/60 dark:hover:bg-white/10 text-[#171717] dark:text-[#F6F3ED] active:scale-95 transition-all"
        >
          <LayoutGrid className="w-4 h-4 text-[#77746F] dark:text-[#A1A1AA] mb-0.5" />
          <span className="text-[0.65rem] font-mono font-bold tracking-tight">Work</span>
        </Link>
      </nav>
    </div>
  );
};

