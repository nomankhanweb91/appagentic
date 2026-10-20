import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsSection } from './components/SolutionsSection';
import { MaturitySection } from './components/MaturitySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { SeniorTeamSection } from './components/SeniorTeamSection';
import { ServicesSection } from './components/ServicesSection';
import { AiCapabilitiesSection } from './components/AiCapabilitiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SecurityAuditsSection } from './components/SecurityAuditsSection';
import { BlogPlaybooksSection } from './components/BlogPlaybooksSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { CaseStudy, IndustryItem, BlogPost } from './data/content';
import { ArrowRight, CheckCircle2, Shield, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteTitle, setQuoteTitle] = useState('Request an Engineering Quote');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    category: string;
    content: string;
    author?: string;
  } | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  // Quick quote form inside modal
  const [modalFormSubmitted, setModalFormSubmitted] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalService, setModalService] = useState('Full-Cycle Product Engineering');
  const [modalNote, setModalNote] = useState('');

  const openQuoteModal = (customTitle = 'Request an Engineering Quote') => {
    setQuoteTitle(customTitle);
    setModalFormSubmitted(false);
    setQuoteModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalFormSubmitted(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-600 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar onRequestQuote={() => openQuoteModal('Request a Custom Quote')} />

      <main>
        {/* 1. Hero Section + Global Partners (Screenshot 1) */}
        <HeroSection onRequestQuote={() => openQuoteModal('Start Your Product Build')} />

        {/* 2. Solutions We Build, End to End (Screenshot 2) */}
        <SolutionsSection
          onConsultation={(solution) =>
            openQuoteModal(`Technical Consultation: ${solution}`)
          }
        />

        {/* 3. Engagement Architecture & Maturity: Startups to Enterprise (Screenshot 3) */}
        <MaturitySection
          onPlanMvp={() => openQuoteModal('Plan Your Startup MVP (8-12 Wks)')}
          onEnterpriseArchitect={() =>
            openQuoteModal('Enterprise Architecture Consultation')
          }
        />

        {/* 4. Case Studies: The problem, the build, the result (Screenshot 4) */}
        <CaseStudiesSection
          onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* 5. Pitch vs Build: The people who pitch it are the people who build it (Screenshot 5) */}
        <SeniorTeamSection />

        {/* 6. Services: Consulting, engineering, and AI — under one roof (Screenshot 6) */}
        <ServicesSection
          onSelectService={(service) => {
            setModalService(service);
            openQuoteModal(`Explore Service: ${service}`);
          }}
        />

        {/* 7. Enterprise AI Capabilities: Make your software smarter with AI (Screenshot 7) */}
        <AiCapabilitiesSection
          onActionClick={(capability) =>
            openQuoteModal(`Implement AI Capability: ${capability}`)
          }
        />

        {/* 8. Sector Specialization: Deep Expertise Across Every Industry We Serve (Screenshot 8) */}
        <IndustriesSection
          onShowWhatWeBuild={(ind) => {
            if (typeof ind === 'string') {
              openQuoteModal(`Industry Solutions: ${ind}`);
            } else {
              setSelectedIndustry(ind);
            }
          }}
          onRequestConsultation={() =>
            openQuoteModal('Request Custom Industry Consultation')
          }
        />

        {/* 9. How We Work: How an Engagement Actually Runs (Screenshot 9) */}
        <HowWeWorkSection />

        {/* 10. Technology Stack: Built on Modern Foundations (Screenshot 10) */}
        <TechStackSection />

        {/* 11. About Appagentix: We build the systems businesses run on (Screenshot 11) */}
        <AboutSection onGetStarted={() => scrollToContact()} />

        {/* 12. Testimonials: What clients say (Screenshot 12) */}
        <TestimonialsSection />

        {/* 13. Security, Compliance & Practices: Built to pass audits (Screenshot 13) */}
        <SecurityAuditsSection />

        {/* 14. Blog & Playbooks: Insights, Architecture & Engineering Playbooks (Screenshot 14) */}
        <BlogPlaybooksSection
          onOpenArticle={(art) => {
            if ('excerpt' in art) {
              const blog = art as BlogPost;
              setSelectedArticle({
                title: blog.title,
                category: blog.category,
                content: blog.excerpt,
                author: blog.author.name
              });
            } else {
              setSelectedArticle(art);
            }
          }}
        />

        {/* 15. Weekly Engineering Memo & Contact Form: Tell us what's not working (Screenshot 15) */}
        <ContactSection />

        {/* 16. FAQs: Frequently Asked Questions (Screenshot 16) */}
        <FaqSection />
      </main>

      {/* 17. Comprehensive Dark Footer (Screenshot 17) */}
      <Footer
        onTalkToAiTeam={() => openQuoteModal('Talk to our AI Engineering Team')}
        onViewCaseStudies={() => {
          const el = document.getElementById('portfolio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* MODAL 1: Quick Quote & Consultation */}
      <Modal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        title={quoteTitle}
        maxWidth="max-w-xl"
      >
        {modalFormSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Request Sent Successfully</h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, {modalName || 'Partner'}. A senior solutions architect will contact you within 1 business day with architecture insights and next steps.
            </p>
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#7C3AED]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleModalSubmit} className="space-y-4">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-purple-50 text-purple-900 text-xs font-medium border border-purple-100 mb-2">
              <Shield className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Strict bilateral NDA protected. Direct response from senior architects.</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={modalName}
                onChange={(e) => setModalName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={modalEmail}
                onChange={(e) => setModalEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Primary Area of Focus
              </label>
              <select
                value={modalService}
                onChange={(e) => setModalService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                <option value="AI & Agentic Engineering">AI & Agentic Engineering</option>
                <option value="Startup MVP Build (8-12 Wks)">Startup MVP Build (8-12 Wks)</option>
                <option value="Enterprise Legacy Modernization">Enterprise Legacy Modernization</option>
                <option value="Mobile & Offline-First Apps">Mobile & Offline-First Apps</option>
                <option value="Cloud, DevOps & SOC 2 Hardening">Cloud, DevOps & SOC 2 Hardening</option>
                <option value="Full-Cycle Product Engineering">Full-Cycle Product Engineering</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Project Scope / Timeline Goals
              </label>
              <textarea
                rows={3}
                value={modalNote}
                onChange={(e) => setModalNote(e.target.value)}
                placeholder="Describe current architecture bottlenecks or target launch dates..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Submit Technical Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* MODAL 2: Full Case Study Story */}
      {selectedCaseStudy && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCaseStudy(null)}
          title={`Case Study: ${selectedCaseStudy.title}`}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-900">
              <img
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white text-purple-900 shadow">
                Category: {selectedCaseStudy.category}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-bold text-purple-700 uppercase">
              SERVICES: {selectedCaseStudy.services.join(' · ')}
            </div>

            {selectedCaseStudy.metrics && (
              <div className="grid grid-cols-3 gap-3 bg-purple-50/70 p-4 rounded-2xl border border-purple-100">
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-extrabold text-purple-900">{m.value}</div>
                    <div className="text-[11px] text-slate-600 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Challenge & Architectural Solution
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {selectedCaseStudy.fullStory || selectedCaseStudy.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Client details protected under NDA</span>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  openQuoteModal(`Inquire about ${selectedCaseStudy.title} Architecture`);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7C3AED]"
              >
                Discuss Similar Architecture
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 3: Article / Engineering Playbook Reader */}
      {selectedArticle && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-orange-600 uppercase">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span>Engineering Playbook</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {selectedArticle.title}
            </h3>

            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800 space-y-2">
              <div className="text-purple-400">// Architecture Guardrail Specification</div>
              <p className="text-slate-300">
                {selectedArticle.content}
              </p>
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <h4 className="font-bold text-slate-900">Production Implementation Principles:</h4>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li>Strict deterministic boundaries around stochastic LLM inference routines.</li>
                <li>Bi-directional evaluation harness running synthetic test suites on every commit.</li>
                <li>Zero-knowledge cryptographic isolation of sensitive customer records.</li>
                <li>Self-healing circuit breakers with automatic latency fallback routing.</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Published by Appagentix Systems Lab</span>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  openQuoteModal(`Architectural Review for ${selectedArticle.title}`);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-purple-600"
              >
                Schedule Technical Review
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 4: Industry Solutions Breakdown */}
      {selectedIndustry && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedIndustry(null)}
          title={`Sector Practice: ${selectedIndustry.title}`}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white text-purple-900 shadow">
                Category: {selectedIndustry.category}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-purple-700 uppercase mb-2">
                CORE DELIVERABLES: {selectedIndustry.services.join(' · ')}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">
                Key Systems Engineered For This Sector:
              </h4>
              <ul className="space-y-2">
                {selectedIndustry.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Battle-tested in high-stakes environments</span>
              <button
                onClick={() => {
                  const indName = selectedIndustry.title;
                  setSelectedIndustry(null);
                  openQuoteModal(`Inquire about ${indName} Systems`);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7C3AED]"
              >
                Build For {selectedIndustry.title}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
