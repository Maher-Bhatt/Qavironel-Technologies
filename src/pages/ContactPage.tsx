import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig, faqs } from '../data/company';
import { Mail, Phone, MessageSquare, ChevronDown, ChevronUp, Clock, Globe, Calendar, FileText } from 'lucide-react';
import { openBookingModal } from '../components/booking/BookingModal';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqQuery, setFaqQuery] = useState('');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <div className="bg-white text-[#0A0A0A] pt-28 sm:pt-36 pb-24 selection:bg-[#E0561B] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl pb-12 border-b border-[#E5E7EB]">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-2">
            Initiate an Engagement
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#0A0A0A] tracking-tight leading-[1.08] mb-6">
            Have something worth building?
          </h1>
          <p className="text-lg sm:text-xl text-[#52525B] font-light leading-relaxed">
            Tell us what you're working on, what needs to improve, and where you want to go. We will shape the right technical blueprint. We typically reply with clear next steps within 12–24 hours.
          </p>

          {/* Quick Action Triggers */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#E0561B]" />
              <span>Book a Discovery Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-colors border border-[#E5E7EB]"
            >
              <FileText className="w-4 h-4 text-[#E0561B]" />
              <span>Request Project Quotation</span>
            </button>
          </div>
        </div>

        {/* Contact Grid: Form (Left) & Direct Channels (Right) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold font-sans text-[#0A0A0A] mb-6">
              Project Inquiry Form
            </h2>
            <ContactForm />
          </div>

          {/* Direct Channels & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Chat Callout */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 text-[#0A0A0A] space-y-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0561B]">
                Direct Messenger
              </span>
              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A]">
                Prefer immediate chat?
              </h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-light">
                Skip the form and message our founder directly on WhatsApp. Share your links or creative brief and receive immediate technical feedback.
              </p>
              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-semibold uppercase tracking-widest transition-colors w-full justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl p-8 space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E0561B]">
                Studio Coordinates
              </h3>

              <div className="space-y-4 text-sm text-[#52525B]">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#E0561B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">Operating Model</p>
                    <p className="text-xs mt-0.5 text-[#71717A]">Global Remote-First Studio · Serving Founders Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E5E7EB]">
                  <Mail className="w-5 h-5 text-[#E0561B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">Direct Email Inquiries</p>
                    <a href={`mailto:${companyConfig.email}`} className="text-xs text-[#E0561B] hover:underline block mt-0.5 font-mono font-semibold">
                      {companyConfig.email}
                    </a>
                    <a href={`mailto:${companyConfig.secondaryEmail}`} className="text-xs text-[#71717A] hover:underline block font-mono">
                      {companyConfig.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E5E7EB]">
                  <Clock className="w-5 h-5 text-[#E0561B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">Response Window</p>
                    <p className="text-xs mt-0.5 text-[#71717A]">Within 12 hours across global time zones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-28 pt-16 border-t border-[#E5E7EB]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#E0561B] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              What to expect before partnering.
            </h2>
          </div>

          {/* Instant FAQ Search Input (Blueprint #21) */}
          <div className="max-w-4xl mb-8">
            <div className="relative">
              <input
                type="text"
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                placeholder="Search FAQs (e.g. 'timeline', 'pricing', 'IP handover', 'stack')..."
                className="w-full px-5 py-3.5 pl-12 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-sm text-[#0A0A0A] placeholder-[#71717A] focus:outline-none focus:border-[#E0561B] transition-colors"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#E0561B]">
                🔍
              </span>
              {faqQuery && (
                <button
                  type="button"
                  onClick={() => setFaqQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#71717A] hover:text-[#0A0A0A]"
                >
                  CLEAR
                </button>
              )}
            </div>
            {faqQuery && (
              <p className="mt-2 text-xs font-mono text-[#71717A]">
                Found {filteredFaqs.length} matching result{filteredFaqs.length === 1 ? '' : 's'}
              </p>
            )}
          </div>

          <div className="space-y-4 max-w-4xl">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx || faqQuery.length > 0;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl shadow-xs transition-colors overflow-hidden hover:border-[#E0561B]/30"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-sans font-semibold text-base sm:text-lg text-[#0A0A0A]">
                      {faq.question}
                    </span>
                    <span className="text-[#E0561B] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB] text-xs sm:text-sm text-[#52525B] leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
