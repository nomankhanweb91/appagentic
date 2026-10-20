import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E5BFF] via-[#4338CA] to-[#6366F1] text-white">
      {/* Background Graphic & Robot/Engineering Imagery */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 mix-blend-overlay">
        <img
          src="/assets/aistudio/1_5a0453e4.png"
          alt="AI Native Product Engineering Background"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Atmospheric Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/40 border border-white/20 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold tracking-wider text-slate-100 uppercase">
              AI-NATIVE PRODUCT STUDIO
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Build Smarter Products.{' '}
            <span className="block text-white/95">Engineer What's Next.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-100/90 leading-relaxed max-w-2xl font-normal mb-10">
            Appagentix combines product strategy, software engineering and artificial
            intelligence to help businesses build, modernize and scale digital products.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-black/10 hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </a>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-20 pt-10 border-t border-white/15">
          <p className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight">
            Trusted, Certified & Recognized Globally
          </p>

          {/* Partner Logo Marquee / Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {/* Mixpanel */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <MixpanelLogo />
            </div>

            {/* Claude Partner */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <ClaudePartnerLogo />
            </div>

            {/* Microsoft Solutions Partner */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <MicrosoftPartnerLogo />
            </div>

            {/* CBS */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <CbsLogo />
            </div>

            {/* Google Developers */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <GoogleDevLogo />
            </div>

            {/* Forbes */}
            <div className="bg-white rounded-xl py-3 px-4 flex items-center justify-center shadow-md h-14 hover:scale-[1.02] transition-transform">
              <ForbesLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
