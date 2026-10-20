import React, { useState, useRef, useEffect } from 'react';
import { AppagentixBlackLogo } from './BrandLogos';
import { ChevronDown, Menu, X, ArrowRight, CheckCircle2, LayoutGrid } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  SERVICES_MEGA_MENU,
  SOLUTIONS_MEGA_MENU,
  AI_AGENTS_MEGA_MENU,
  CASE_STUDIES_MEGA_MENU,
  INDUSTRY_MEGA_MENU,
  MegaMenuConfig,
} from '../data/megaMenuData';
import { MegaMenuPanel } from './MegaMenuPanel';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const megaMenus: Record<string, MegaMenuConfig> = {
    services: SERVICES_MEGA_MENU,
    solutions: SOLUTIONS_MEGA_MENU,
    industry: INDUSTRY_MEGA_MENU,
    agents: AI_AGENTS_MEGA_MENU,
    portfolio: CASE_STUDIES_MEGA_MENU,
  };

  const handleMouseEnter = (menuKey: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdown = (menuKey: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
  };

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleHashtagNavigation = (hashtag: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    // Map specific hashtags to main section anchors if needed
    let targetId = hashtag.replace('#', '');
    if (targetId.startsWith('services-')) targetId = 'services';
    if (targetId.startsWith('solutions-')) targetId = 'solutions';
    if (targetId.startsWith('ai-agent-')) targetId = 'ai-capabilities';
    if (targetId.startsWith('case-study-')) targetId = 'portfolio';
    if (targetId.startsWith('industry-')) targetId = 'industry';

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.pushState(null, '', hashtag);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all font-sans"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Zone with Black Logo */}
        <a
          href="#"
          className="flex items-center shrink-0 py-1 transition-transform hover:opacity-90 active:scale-95"
          aria-label="Appagentix Home"
        >
          <AppagentixBlackLogo className="h-8 sm:h-10 w-auto object-contain max-w-[170px] sm:max-w-[220px]" />
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13.5px] font-medium text-slate-700">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleHashtagNavigation('#about');
            }}
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            About Us
          </a>

          {/* 1. Services Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
          >
            <button
              onClick={() => toggleDropdown('services')}
              className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap font-medium cursor-pointer ${
                activeDropdown === 'services'
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* 2. Solutions Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('solutions')}
          >
            <button
              onClick={() => toggleDropdown('solutions')}
              className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap font-medium cursor-pointer ${
                activeDropdown === 'solutions'
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* 3. Industry Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industry')}
          >
            <button
              onClick={() => toggleDropdown('industry')}
              className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap font-medium cursor-pointer ${
                activeDropdown === 'industry'
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              <span>Industry</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'industry' ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* 4. AI Agents Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('agents')}
          >
            <button
              onClick={() => toggleDropdown('agents')}
              className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap font-medium cursor-pointer ${
                activeDropdown === 'agents'
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              <span>AI Agents</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'agents' ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* 5. Case Studies Mega Menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('portfolio')}
          >
            <button
              onClick={() => toggleDropdown('portfolio')}
              className={`flex items-center gap-1.5 py-2.5 transition-colors whitespace-nowrap font-medium cursor-pointer ${
                activeDropdown === 'portfolio'
                  ? 'text-purple-600 font-semibold'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              <span>Case Studies</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'portfolio' ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              handleHashtagNavigation('#blog');
            }}
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Blog
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleHashtagNavigation('#contact');
            }}
            className="hover:text-purple-600 transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </nav>

        {/* Action Button Zone */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:from-[#6D28D9] hover:to-[#7E22CE] shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onRequestQuote}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#7C3AED] shadow-2xs"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown Panels */}
      <AnimatePresence>
        {activeDropdown && megaMenus[activeDropdown] && (
          <div
            className="absolute top-full left-0 right-0 w-full z-50 pointer-events-auto"
            onMouseEnter={() => {
              if (leaveTimerRef.current) {
                clearTimeout(leaveTimerRef.current);
                leaveTimerRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background click overlay */}
            <div
              className="fixed inset-0 top-20 -z-10 bg-slate-950/20 backdrop-blur-xs transition-opacity duration-200"
              onClick={() => setActiveDropdown(null)}
            />
            <MegaMenuPanel
              config={megaMenus[activeDropdown]}
              onItemClick={handleHashtagNavigation}
              onRequestQuote={onRequestQuote}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer (100% Fully Responsive) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-8 space-y-3 overflow-y-auto max-h-[85vh] shadow-xl"
          >
            <div className="grid gap-1">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashtagNavigation('#about');
                }}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
              >
                About Us
              </a>

              {/* Mobile Accordions for Mega Menus */}
              {[
                { id: 'services', label: 'Services', config: SERVICES_MEGA_MENU },
                { id: 'solutions', label: 'Solutions', config: SOLUTIONS_MEGA_MENU },
                { id: 'industry', label: 'Industry', config: INDUSTRY_MEGA_MENU },
                { id: 'agents', label: 'AI Agents', config: AI_AGENTS_MEGA_MENU },
                { id: 'portfolio', label: 'Case Studies', config: CASE_STUDIES_MEGA_MENU },
              ].map((section) => {
                const isExpanded = mobileExpandedSection === section.id;
                return (
                  <div
                    key={section.id}
                    className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50 my-0.5"
                  >
                    <button
                      onClick={() =>
                        setMobileExpandedSection(isExpanded ? null : section.id)
                      }
                      className="w-full flex items-center justify-between px-3.5 py-3 text-left font-semibold text-slate-800 hover:text-purple-600 transition-colors"
                    >
                      <span className="text-sm sm:text-base">{section.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-purple-600' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-3 pb-4 pt-1 bg-white border-t border-slate-100"
                        >
                          {/* Mini header badge & title */}
                          <div className="mb-3 pt-1">
                            <span className="inline-block text-[10px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full mb-1">
                              {section.config.badge}
                            </span>
                            <div className="text-sm font-bold text-slate-900">
                              {section.config.titlePrefix}{' '}
                              <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
                                {section.config.titleHighlight}
                              </span>
                            </div>
                          </div>

                          {/* Grid of items */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {section.config.items.map((item, idx) => {
                              const Icon = item.icon;
                              return (
                                <a
                                  key={idx}
                                  href={item.hashtag}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleHashtagNavigation(item.hashtag);
                                  }}
                                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/70 hover:bg-purple-50 transition-colors border border-slate-100"
                                >
                                  <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg}`}
                                  >
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-semibold text-slate-800 truncate">
                                      {item.title}
                                    </div>
                                    {item.subtitle && (
                                      <div className="text-[10px] text-slate-400 truncate">
                                        {item.subtitle}
                                      </div>
                                    )}
                                  </div>
                                </a>
                              );
                            })}
                          </div>

                          {/* Explore All CTA for Mobile */}
                          {section.config.exploreAllButton && (
                            <a
                              href={section.config.exploreAllButton.hashtag}
                              onClick={(e) => {
                                e.preventDefault();
                                handleHashtagNavigation(
                                  section.config.exploreAllButton!.hashtag
                                );
                              }}
                              className="mt-3 flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#FF3B30] to-[#9333EA] text-white font-semibold text-xs shadow-xs"
                            >
                              <div className="flex items-center gap-2">
                                <LayoutGrid className="w-3.5 h-3.5" />
                                <span>
                                  {section.config.exploreAllButton.label}{' '}
                                  {section.config.exploreAllButton.sublabel}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashtagNavigation('#blog');
                }}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
              >
                Blog
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashtagNavigation('#contact');
                }}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Quote Action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#9333EA] shadow-md active:scale-98 transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
