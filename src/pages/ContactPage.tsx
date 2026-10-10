import { SEO } from '../components/seo/SEO';
import React, { useState } from 'react';
import { Mail, MessageSquare, Globe, Clock, ChevronDown, ChevronUp, Calendar, FileText } from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';
import { companyConfig } from '../data/company';
import { openBookingModal } from '../components/booking/BookingModal';
import { Interactive3DSphere } from '../components/3d/Interactive3DSphere';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqQuery, setFaqQuery] = useState('');

  const faqs = [
    {
      question: "What is your typical project budget and pricing model?",
      answer: "We focus exclusively on high-end digital craftsmanship. Our minimum engagement for bespoke product builds starts at $8,000 USD, while comprehensive branding and web platforms start at $5,000 USD. We operate on a milestone-based fixed pricing model, ensuring full transparency and no unexpected hourly overages."
    },
    {
      question: "What does the IP and code handover process look like?",
      answer: "You own 100% of the Intellectual Property (IP). Upon final payment, we provide a complete, documented repository transfer on GitHub, comprehensive Notion handoff documentation, and full transfer of any Vercel/Supabase infrastructure directly to your organization's accounts."
    },
    {
      question: "Do you integrate AI capabilities into existing projects?",
      answer: "Yes. As specialists in Applied AI, we routinely architect bespoke AI workflows (RAG pipelines, custom LLM wrappers, automated AI agents) into existing products using the Gemini API, OpenAI, and Anthropic's Claude infrastructure."
    },
    {
      question: "What is your tech stack for high-velocity web systems?",
      answer: "Our standard enterprise stack consists of React/Next.js (TypeScript) on the frontend, styled with Tailwind CSS, and powered by Vercel. For 3D interactions, we use Three.js and WebGL. Backend systems rely on Node.js/Python, heavily leveraging Supabase/PostgreSQL for real-time data."
    },
    {
      question: "How long does a typical build take?",
      answer: "While every project varies, a high-end web platform typically takes 4-6 weeks from initial architecture to launch. Full product engineering (like a complex SaaS dashboard or mobile application) ranges from 8-12 weeks."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(faqQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  const toggleFaq = (idx: number) => {
    if (faqQuery.length > 0) return; 
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO title="Contact" />
      <div className="relative bg-white text-[#0A0A0A] pt-28 sm:pt-36 pb-24 overflow-hidden selection:bg-[#E0561B] selection:text-[#0A0A0A] min-h-screen">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E0561B]/10 rounded-full blur-[150px] opacity-40 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] opacity-30 pointer-events-none mix-blend-screen" />

      {/* Hero 3D Abstract Sphere */}
      <div className="absolute top-[-100px] right-[-100px] opacity-40 pointer-events-none hidden lg:block">
        <Interactive3DSphere size={600} />
      </div>

      <div className="relative max-w-[1800px] w-full mx-auto px-5 sm:px-8 lg:px-12 z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#E0561B] block mb-3 border border-[#E0561B]/30 bg-[#E0561B]/10 w-fit px-3 py-1 rounded-full">
            Initiate Contact
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#0A0A0A] leading-[1.05] mb-6">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] via-gray-600 to-gray-900">
              the extraordinary.
            </span>
          </h1>
          <p className="text-lg text-[#71717A] font-light leading-relaxed max-w-xl">
            Whether you are launching a new digital product, requiring AI integration, or elevating your brand's digital presence—our engineering studio is ready.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => openBookingModal('call')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-black text-white text-xs font-extrabold uppercase tracking-widest transition-colors shadow-2xl shadow-black/5"
            >
              <Calendar className="w-4 h-4 text-[#E0561B]" />
              <span>Book Discovery Call (30m)</span>
            </button>
            <button
              type="button"
              onClick={() => openBookingModal('quotation')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F4F4F5] hover:bg-[#E5E7EB] text-[#0A0A0A] border border-[#E5E7EB] text-xs font-extrabold uppercase tracking-widest transition-all backdrop-blur-md"
            >
              <FileText className="w-4 h-4 text-[#71717A]" />
              <span>Request Quotation</span>
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Form Area (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] p-8 sm:p-10 rounded-[2rem] backdrop-blur-3xl shadow-2xl">
              <h2 className="text-2xl font-bold font-sans text-[#0A0A0A] mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E0561B] animate-pulse" />
                Project Inquiry Form
              </h2>
              <ContactForm theme="light" />
            </div>
          </div>

          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Chat Callout */}
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-[2rem] p-8 sm:p-10 backdrop-blur-3xl">
              <span className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.2em] text-[#E0561B] block mb-4">
                Direct Line
              </span>
              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mb-3">
                Immediate chat?
              </h3>
              <p className="text-sm text-[#71717A] leading-relaxed font-light mb-8">
                Skip the form. Message our technical lead directly on WhatsApp to share your brief and get instant architectural feedback.
              </p>
              <a
                href={companyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#E0561B] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-widest transition-colors w-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Secure Chat</span>
              </a>
            </div>

            {/* Studio Coordinates */}
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-[2rem] p-8 sm:p-10 backdrop-blur-3xl">
              <h3 className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.2em] text-[#E0561B] mb-8">
                Studio Coordinates
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-[#52525B] mt-1" />
                  <div>
                    <p className="font-bold text-[#0A0A0A] tracking-wide">Operating Model</p>
                    <p className="text-xs mt-1.5 text-[#71717A] leading-relaxed">Global Remote-First Studio<br/>Serving Ambitious Founders Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-[#E5E7EB]">
                  <Mail className="w-5 h-5 text-[#52525B] mt-1" />
                  <div>
                    <p className="font-bold text-[#0A0A0A] tracking-wide">Direct Inquiries</p>
                    <a href={`mailto:${companyConfig.email}`} className="text-xs text-[#E0561B] hover:text-[#0A0A0A] transition-colors block mt-1.5 font-mono">
                      {companyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-[#E5E7EB]">
                  <Clock className="w-5 h-5 text-[#52525B] mt-1" />
                  <div>
                    <p className="font-bold text-[#0A0A0A] tracking-wide">Response Window</p>
                    <p className="text-xs mt-1.5 text-[#71717A] leading-relaxed">Within 12 hours across<br/>all global time zones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="mt-32 pt-20 border-t border-[#E5E7EB] relative">
          <div className="max-w-3xl mb-12">
            <span className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.2em] text-[#E0561B] block mb-3">
              FAQ Database
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight">
              Operational details.
            </h2>
          </div>

          <div className="max-w-3xl mb-8">
            <div className="relative">
              <input
                type="text"
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                placeholder="Search queries (e.g. 'timeline', 'pricing', 'IP')..."
                className="w-full px-6 py-4 pl-12 rounded-2xl bg-[#F4F4F5] border border-[#E5E7EB] text-sm text-[#0A0A0A] placeholder-gray-500 focus:outline-none focus:border-[#E0561B] focus:bg-[#E5E7EB] transition-all backdrop-blur-md"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#E0561B] font-bold">
                &gt;
              </span>
              {faqQuery && (
                <button
                  type="button"
                  onClick={() => setFaqQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[0.65rem] font-mono text-[#71717A] hover:text-[#0A0A0A] tracking-wider"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx || faqQuery.length > 0;
              return (
                <div 
                  key={idx}
                  className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-2xl backdrop-blur-md overflow-hidden transition-colors hover:border-[#E5E7EB]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-[#0A0A0A]/90">
                      {faq.question}
                    </span>
                    <span className="text-[#E0561B] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB] text-sm text-[#71717A] leading-relaxed font-light">
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
    </>
  );
};

export default ContactPage;



