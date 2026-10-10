import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig, faqs } from '../data/company';
import { Mail, Phone, MapPin, MessageSquare, ChevronDown, ChevronUp, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl pb-12 border-b border-[#DEDAD3]">
          <SectionHeading
            eyebrow="Initiate an Engagement"
            title="Have something worth building?"
            description="Tell us what you're working on, what needs to improve, and where you'd like to go. We'll take it from there. We typically reply with clear next steps within 24 hours."
          />
        </div>

        {/* Contact Grid: Form (Left) & Direct Channels (Right) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold font-sans text-[#171717] mb-6">
              Project Inquiry Form
            </h2>
            <ContactForm />
          </div>

          {/* Direct Channels & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Chat Callout */}
            <div className="bg-[#20201E] border border-[#2E2E2B] p-8 text-white space-y-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7612E]">
                Direct Messenger
              </span>
              <h3 className="font-sans font-bold text-2xl text-white">
                Prefer immediate chat?
              </h3>
              <p className="text-xs sm:text-sm text-[#77746F] leading-relaxed">
                Skip the form entirely and message our founding team on WhatsApp. Share your links or creative brief and receive immediate technical feedback.
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
            <div className="bg-[#FFFFFF] border border-[#DEDAD3] p-8 space-y-6">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#171717]">
                Studio Coordinates
              </h3>

              <div className="space-y-4 text-sm text-[#77746F]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#171717]">Origin & Registered Base</p>
                    <p className="text-xs mt-0.5">{companyConfig.foundedLocation}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#DEDAD3]">
                  <Mail className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#171717]">Inquiries & RFPs</p>
                    <a href={`mailto:${companyConfig.email}`} className="text-xs text-[#C7612E] hover:underline block mt-0.5">
                      {companyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#DEDAD3]">
                  <Clock className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#171717]">Response Commitment</p>
                    <p className="text-xs mt-0.5">Within 24 hours (Monday – Saturday)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#DEDAD3]">
                  <Globe className="w-5 h-5 text-[#C7612E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#171717]">Availability</p>
                    <p className="text-xs mt-0.5">Accepting select new projects for upcoming development cycles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <section className="mt-24 pt-16 border-t-2 border-[#171717]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7612E] block mb-2">
              Common Questions
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#171717] tracking-tight">
              Answered before you ask.
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#DEDAD3] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-lg text-[#171717] hover:text-[#C7612E] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C7612E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#77746F] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#77746F] leading-relaxed border-t border-[#DEDAD3]/60 animate-fade-in">
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
