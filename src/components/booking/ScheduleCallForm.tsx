import React, { useState, useEffect, useId, useMemo } from 'react';
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
  RefreshCw,
  Globe
} from 'lucide-react';
import { companyConfig } from '../../data/company';
import { playSuccessSound, playTabSound } from '../../utils/soundEffects';
import { detectUserTimezone, STUDIO_TIMEZONE, getTimezoneShortName } from '../../utils/timezone';

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

type EventFormat = '30min' | '15min' | 'all';

export const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ onSuccess }) => {
  const [selectedFormat, setSelectedFormat] = useState<EventFormat>('30min');
  const [isCalLoaded, setIsCalLoaded] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const detectedTz = useMemo(() => detectUserTimezone(), []);
  const [activeTz, setActiveTz] = useState<string>(detectedTz);
  const embedKey = useId();

  // Determine active calLink with explicit timezone parameter
  const baseCalLink =
    selectedFormat === '30min' 
      ? 'qavironel/30min' 
      : selectedFormat === '15min' 
        ? 'qavironel/15min' 
        : 'qavironel';

  const activeCalLink = `${baseCalLink}?timeZone=${encodeURIComponent(activeTz)}&tz=${encodeURIComponent(activeTz)}`;

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
      {/* 01. Project conversation and booking options */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10 shrink-0">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
            <span>Direct Live Calendar · Google Meet Auto-Sync</span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white tracking-tight flex items-center gap-2">
            <span>Schedule a project conversation</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Choose a time to share your goals and questions with the studio.
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

      {/* 01.5 Timezone Context Bar & Fast Preset Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 text-xs shrink-0">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
          <span className="text-zinc-600 dark:text-zinc-400">
            Current timezone:{' '}
            <span className="font-mono font-semibold text-black dark:text-white">
              {activeTz} ({getTimezoneShortName(activeTz)})
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <span className="text-zinc-400 dark:text-zinc-500">Preset:</span>
          <button
            type="button"
            onClick={() => {
              playTabSound();
              setActiveTz(STUDIO_TIMEZONE);
            }}
            className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
              activeTz === STUDIO_TIMEZONE
                ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                : 'text-zinc-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            India (IST · UTC+5:30)
          </button>
          {detectedTz !== STUDIO_TIMEZONE && (
            <button
              type="button"
              onClick={() => {
                playTabSound();
                setActiveTz(detectedTz);
              }}
              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                activeTz === detectedTz
                  ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                  : 'text-zinc-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              Detected ({getTimezoneShortName(detectedTz)})
            </button>
          )}
        </div>
      </div>

      {/* 02. Success Celebration State */}
      {isBooked && (
        <div className="p-4 rounded-2xl bg-zinc-500/10 border border-zinc-500/20 text-zinc-900 dark:text-zinc-100 flex items-start gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-zinc-600 dark:text-zinc-300 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-bold font-sans text-sm text-zinc-950 dark:text-zinc-200">
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
          key={`${embedKey}-${selectedFormat}-${activeTz}`}
          calLink={activeCalLink}
          style={{ width: '100%', height: '100%', minHeight: '580px', overflow: 'auto' }}
          config={{
            layout: 'month_view',
            theme: 'auto',
            timeZone: activeTz,
            tz: activeTz,
          }}
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
            className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:underline font-bold"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
