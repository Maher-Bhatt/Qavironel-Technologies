import React, { useState, useEffect, useId } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  Mail,
  RefreshCw
} from 'lucide-react';
import { companyConfig } from '../../data/company';
import { playSuccessSound, playTabSound } from '../../utils/soundEffects';

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

type EventFormat = '30min' | '15min' | 'all';

export const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ onSuccess }) => {
  const [selectedFormat, setSelectedFormat] = useState<EventFormat>('30min');
  const [isCalLoaded, setIsCalLoaded] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const embedKey = useId();

  // Determine active calLink
  const activeCalLink = 
    selectedFormat === '30min' 
      ? 'qavironel/30min' 
      : selectedFormat === '15min' 
        ? 'qavironel/15min' 
        : 'qavironel';

  // Initialize Cal.com Embed API
  useEffect(() => {
    let isMounted = true;

    (async function initCal() {
      try {
        const cal = await getCalApi();
        if (!isMounted) return;

        cal('ui', {
          theme: 'auto',
          styles: {
            branding: {
              brandColor: '#0A0A0A',
            },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });

        // Listen for successful booking event directly from Cal.com
        cal('on', {
          action: 'bookingSuccessful',
          callback: () => {
            playSuccessSound();
            setIsBooked(true);
            onSuccess?.();
          },
        });

        setIsCalLoaded(true);
      } catch (err) {
        console.warn('Cal.com embed initialization notice:', err);
        if (isMounted) setIsCalLoaded(true);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [onSuccess]);

  const handleFormatChange = (format: EventFormat) => {
    playTabSound();
    setSelectedFormat(format);
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* 01. Founder Direct Header & Trust Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10 shrink-0">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Direct Live Calendar · Google Meet Auto-Sync</span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white tracking-tight flex items-center gap-2">
            <span>Schedule Discovery with Founders</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Book directly with Maher Bhatt &amp; Anurag Pandey · Verified instant slot confirmation
          </p>
        </div>

        {/* Event Format Selector Pills */}
        <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => handleFormatChange('30min')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedFormat === '30min'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            30 Min (Deep Dive)
          </button>
          <button
            type="button"
            onClick={() => handleFormatChange('15min')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedFormat === '15min'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            15 Min (Intro)
          </button>
          <button
            type="button"
            onClick={() => handleFormatChange('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedFormat === 'all'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            All Sessions
          </button>
        </div>
      </div>

      {/* 02. Success Celebration State */}
      {isBooked && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-100 flex items-start gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold font-sans text-sm text-emerald-950 dark:text-emerald-200">
              Meeting Confirmed &amp; Synchronized!
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              Cal.com has generated your Google Meet link and dispatched the calendar invite directly to your email. Our founding team has received the schedule notification.
            </p>
          </div>
        </div>
      )}

      {/* 03. Embedded Cal.com Interactive Booker */}
      <div className="relative w-full min-h-[580px] sm:min-h-[620px] flex-1 bg-white dark:bg-zinc-950 rounded-2xl border border-black/[0.08] dark:border-white/10 overflow-hidden shadow-inner">
        {!isCalLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xs z-10">
            <RefreshCw className="w-6 h-6 animate-spin text-black dark:text-white" />
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Connecting to live Cal.com scheduling engine...
            </span>
          </div>
        )}

        <Cal
          key={`${embedKey}-${selectedFormat}`}
          calLink={activeCalLink}
          style={{ width: '100%', height: '100%', minHeight: '580px', overflow: 'auto' }}
          config={{ layout: 'month_view', theme: 'auto' }}
        />
      </div>

      {/* 04. Guarantee & Direct Fallback Channels Strip */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 border-t border-black/[0.06] dark:border-white/[0.06] shrink-0">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-black dark:text-white font-medium">
            <Video className="w-3.5 h-3.5" />
            <span>Google Meet Auto-Link</span>
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <span className="inline-flex items-center gap-1 text-black dark:text-white font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mutual NDA Protected</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-zinc-400 dark:text-zinc-500">Having iframe issues?</span>
          <a
            href={`https://cal.com/${activeCalLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-black dark:text-white hover:underline font-bold"
          >
            <span>Open Cal.com Direct</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a
            href={companyConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
