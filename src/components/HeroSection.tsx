import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { getAssetUrl } from '../utils/assets';
import {
  MixpanelLogo,
  ClaudePartnerLogo,
  MicrosoftPartnerLogo,
  CbsLogo,
  GoogleDevLogo,
  ForbesLogo
} from './BrandLogos';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  const partnerLogos = [
    { component: <MixpanelLogo />, key: 'mixpanel' },
    { component: <ClaudePartnerLogo />, key: 'claude' },
    { component: <MicrosoftPartnerLogo />, key: 'microsoft' },
    { component: <CbsLogo />, key: 'cbs' },
    { component: <GoogleDevLogo />, key: 'google' },
    { component: <ForbesLogo />, key: 'forbes' },
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#3730A3] to-[#4C1D95] text-white">
      {/* Background Graphic: User's high-resolution Hero Banner image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={getAssetUrl('assets/aistudio/hero_banner_e6083244.png')}
          alt="AI Native Product Engineering Background"
          className="w-full h-full object-cover object-center lg:object-[center_35%] scale-105 opacity-55 mix-blend-screen filter contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Deep gradient overlays for text legibility and rich atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E1B4B]/80 to-[#31104B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B081A] via-transparent to-transparent" />
      </div>

      {/* Atmospheric Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/20 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-slate-100 uppercase">
              AI-NATIVE PRODUCT STUDIO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Build Smarter Products.{' '}
            <span className="block text-white/95">Engineer What's Next.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-base sm:text-lg lg:text-xl text-slate-100/95 leading-relaxed max-w-2xl font-normal mb-10"
          >
            Appagentix combines product strategy, software engineering and artificial
            intelligence to help businesses build, modernize and scale digital products.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium border border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Social Proof Bar with Higher Height and Scrollable / Marquee Functionality */}
        <div className="mt-20 pt-10 border-t border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Trusted, Certified & Recognized Globally
              </p>
              <p className="text-xs text-white/70 mt-1">
                Strategic technology alliances and enterprise validation standards
              </p>
            </div>
            
            {/* Scroll navigation controls for mobile & desktop */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/60 font-medium hidden sm:inline mr-2">
                Scroll or swipe horizontally ⟷
              </span>
              <button
                onClick={handleScrollLeft}
                aria-label="Scroll logos left"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={handleScrollRight}
                aria-label="Scroll logos right"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>

          {/* Infinite Scrollable & Marquee Logo Track with increased height (h-24 sm:h-28 / min-w-[250px]) */}
          <div 
            ref={scrollContainerRef}
            className="relative w-full overflow-x-auto no-scrollbar py-2 scroll-smooth cursor-grab active:cursor-grabbing"
          >
            <div className="animate-marquee flex items-center gap-6">
              {/* Loop 1 */}
              {partnerLogos.map((item, idx) => (
                <div
                  key={`loop-1-${idx}`}
                  className="bg-white rounded-2xl px-8 flex items-center justify-center shadow-lg h-24 sm:h-28 min-w-[240px] sm:min-w-[260px] shrink-0 hover:scale-[1.04] transition-transform duration-200"
                >
                  {item.component}
                </div>
              ))}
              {/* Loop 2 for seamless infinite scroll */}
              {partnerLogos.map((item, idx) => (
                <div
                  key={`loop-2-${idx}`}
                  className="bg-white rounded-2xl px-8 flex items-center justify-center shadow-lg h-24 sm:h-28 min-w-[240px] sm:min-w-[260px] shrink-0 hover:scale-[1.04] transition-transform duration-200"
                >
                  {item.component}
                </div>
              ))}
              {/* Loop 3 for ultra-smooth loop on wide screens */}
              {partnerLogos.map((item, idx) => (
                <div
                  key={`loop-3-${idx}`}
                  className="bg-white rounded-2xl px-8 flex items-center justify-center shadow-lg h-24 sm:h-28 min-w-[240px] sm:min-w-[260px] shrink-0 hover:scale-[1.04] transition-transform duration-200"
                >
                  {item.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
