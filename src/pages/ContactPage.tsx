import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig, faqs } from '../data/company';
import { Mail, Phone, MessageSquare, ChevronDown, ChevronUp, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#121212] text-[#F6F3ED] pt-28 sm:pt-36 pb-24 selection:bg-[#C7612E] selection:text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl pb-12 border-b border-[#262624]">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C7612E] block mb-2">
            Initiate an Engagement
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08] mb-6">
            Have something worth building?
          </h1>
          <p className="text-lg sm:text-xl text-[#A3A099] font-light leading-relaxed">
            Tell us what you're working on, what needs to improve, and where you want to go. We will shape the right technical blueprint. We typically reply with clear next steps within 12–24 hours.
          </p>
        </div>

        {/* Contact Grid: Form (Left) & Direct Channels (Right) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold font-sans text-white mb-6">
              Project Inquiry Form
            </h2>
            <ContactForm />
          </div>

          {/* Direct Channels & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Chat Callout */}
            <div className="bg-[#171717] border border-[#2E2E2B] p-8 text-white space-y-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
                Direct Messenger
              </span>
              <h3 className="font-sans font-bold text-2xl text-white">
                Prefer immediate chat?
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A099] leading-relaxed font-light">
                Skip the form and message our founder directly on WhatsApp. Share your links or creative brief and receive immediate technical feedback.
              </p>
              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7612E] hover:bg-[#98431F] text-white text-xs font-semibold uppercase tracking-widest transition-colors w-full justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="bg-[#171717] border border-[#2E2E2B] p-8 space-y-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C7612E]">
                Studio Coordinates
              </h3>

              <div className="space-y-4 text-sm text-[#A3A099]">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Operating Model</p>
                    <p className="text-xs mt-0.5 text-[#77746F]">Global Remote-First Studio · Serving Founders Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#262624]">
                  <Mail className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Direct Email Inquiries</p>
                    <a href={`mailto:${companyConfig.email}`} className="text-xs text-[#C7612E] hover:underline block mt-0.5 font-mono">
                      {companyConfig.email}
                    </a>
                    <a href={`mailto:${companyConfig.secondaryEmail}`} className="text-xs text-[#77746F] hover:underline block font-mono">
                      {companyConfig.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#262624]">
                  <Clock className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Response Window</p>
                    <p className="text-xs mt-0.5 text-[#77746F]">Within 12 hours across global time zones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-28 pt-16 border-t border-[#262624]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              What to expect before partnering.
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#171717] border border-[#2E2E2B] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-sans font-semibold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <span className="text-[#C7612E] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#262624] text-xs sm:text-sm text-[#A3A099] leading-relaxed font-light">
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
