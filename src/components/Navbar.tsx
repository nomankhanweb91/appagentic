import React, { useState } from 'react';
import { AppagentixLogo } from './BrandLogos';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a href="#" className="flex items-center shrink-0">
          <AppagentixLogo className="w-8 h-8" />
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a
            href="#about"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('services')}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors py-2 whitespace-nowrap"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="#services"
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 hover:text-purple-600 transition-colors"
                >
                  <div className="font-semibold text-slate-900">Digital Transformation</div>
                  <div className="text-xs text-slate-500">Architecture audits & roadmaps</div>
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 hover:text-purple-600 transition-colors"
                >
                  <div className="font-semibold text-slate-900">Mobile & Product Eng</div>
                  <div className="text-xs text-slate-500">Native apps & SaaS MVPs</div>
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 hover:text-purple-600 transition-colors"
                >
                  <div className="font-semibold text-slate-900">Custom Software & ERP</div>
                  <div className="text-xs text-slate-500">Legacy modernization & systems</div>
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 hover:text-purple-600 transition-colors"
                >
                  <div className="font-semibold text-slate-900">AI & Intelligent Automation</div>
                  <div className="text-xs text-slate-500">Agentic workflows & LLM ops</div>
                </a>
                <a
                  href="#services"
                  className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 hover:text-purple-600 transition-colors"
                >
                  <div className="font-semibold text-slate-900">Cloud, Data & DevOps</div>
                  <div className="text-xs text-slate-500">CI/CD, Kubernetes & VPCs</div>
                </a>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('solutions')}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors py-2 whitespace-nowrap"
            >
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1">
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  AI & Agentic Engineering
                </a>
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Healthcare & Digital Care
                </a>
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  FinTech & High-Speed Banking
                </a>
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  ERP & Enterprise Systems
                </a>
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Logistics & Offline Mobile
                </a>
              </div>
            )}
          </div>

          {/* Industry Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industry')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('industry')}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors py-2 whitespace-nowrap"
            >
              <span>Industry</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'industry' && (
              <div className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1">
                <a href="#industry" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Retail & eCommerce
                </a>
                <a href="#industry" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  On-Demand & Marketplaces
                </a>
                <a href="#industry" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Construction & Field Services
                </a>
                <a href="#industry" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Manufacturing & Industry 4.0
                </a>
                <a href="#industry" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Education & EdTech
                </a>
              </div>
            )}
          </div>

          {/* AI Agents Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('agents')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('agents')}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors py-2 whitespace-nowrap"
            >
              <span>AI Agents</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'agents' && (
              <div className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1">
                <a href="#solutions" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Autonomous Multi-Agents
                </a>
                <a href="#ai-capabilities" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  RAG & Knowledge Retrieval
                </a>
                <a href="#tech-stack" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-50 text-slate-800">
                  Deterministic Guardrails
                </a>
              </div>
            )}
          </div>

          <a
            href="#portfolio"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </nav>

        {/* Action Button Zone */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onRequestQuote}
            className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#7C3AED]"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <div className="grid gap-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Services
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Solutions
            </a>
            <a
              href="#industry"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Industry
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </a>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#7C3AED]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
