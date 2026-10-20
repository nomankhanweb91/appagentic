import React from 'react';
import { AppagentixWhiteLogo, AwsPartnerLogo, Soc2Badge, Iso27001Badge, Iso9001Badge } from './BrandLogos';
import { ArrowRight, Lock, Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  onTalkToAiTeam: () => void;
  onViewCaseStudies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTalkToAiTeam, onViewCaseStudies }) => {
  return (
    <footer className="bg-[#080512] text-white pt-20 pb-12 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <AppagentixWhiteLogo className="h-9 sm:h-11 w-auto object-contain max-w-[190px] sm:max-w-[240px]" />

            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              Enterprise AI & Product Engineering Partner
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We help enterprises move from AI pilots to production through strategy, governance, product engineering, cloud modernization, and managed delivery teams.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onTalkToAiTeam}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] transition-all"
              >
                <span>Talk to AI Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewCaseStudies}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 border border-slate-700 hover:bg-slate-800/80 transition-all"
              >
                <span>View Case Studies</span>
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Col 1: Enterprise AI */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs tracking-wider uppercase">
                Enterprise AI
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">AI Strategy & Consulting</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">AI Development</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">AI Center of Excellence</a></li>
                <li><a href="#solutions" className="hover:text-purple-400 transition-colors">Agentic AI Systems</a></li>
                <li><a href="#solutions" className="hover:text-purple-400 transition-colors">Enterprise AI Platforms</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">Physical AI & Robotics</a></li>
                <li><a href="#ai-capabilities" className="hover:text-purple-400 transition-colors">Enterprise Search & RAG</a></li>
              </ul>
            </div>

            {/* Col 2: Product Engineering */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs tracking-wider uppercase">
                Product Engineering
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Custom Software Development</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Product Modernization</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Mobile App Development</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">UX & Product Design</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">IoT & Edge Computing</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Dedicated Engineering Teams</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Managed Engineering Services</a></li>
              </ul>
            </div>

            {/* Col 3: Cloud & Platforms */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs tracking-wider uppercase">
                Cloud & Platforms
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Cloud Modernization</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">Cloud Engineering</a></li>
                <li><a href="#services" className="hover:text-purple-400 transition-colors">DevSecOps</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">AWS Consulting</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">Microsoft Azure Consulting</a></li>
                <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">Microsoft Fabric</a></li>
                <li><a href="#solutions" className="hover:text-purple-400 transition-colors">QA Automation</a></li>
              </ul>
            </div>

            {/* Col 4: Resources */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs tracking-wider uppercase">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
                <li><a href="#blog" className="hover:text-purple-400 transition-colors">Press Release</a></li>
                <li><a href="#blog" className="hover:text-purple-400 transition-colors">Insights</a></li>
                <li><a href="#blog" className="hover:text-purple-400 transition-colors">Knowledge Center</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Client Reviews</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Certifications & Partner Strip */}
        <div className="py-10 border-b border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base font-bold text-white mb-1">
              Enterprise AI, Built for Production
            </h4>
            <p className="text-xs text-slate-400">
              Frontier AI partnerships, certified governance, and proven product engineering delivery at enterprise scale.
            </p>
          </div>

          {/* Badges / Logos */}
          <div className="flex flex-wrap items-center gap-5">
            {/* OpenAI */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <span className="text-base">✦</span>
              <span>OpenAI</span>
            </div>

            {/* Claude Partner */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <span className="text-amber-500 font-bold">❋</span>
              <div className="text-left leading-none">
                <span className="text-xs font-bold">Claude</span>
                <span className="text-[8px] text-slate-400 block tracking-wider">PARTNER NETWORK</span>
              </div>
            </div>

            {/* Microsoft Solutions */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <div className="text-left leading-none">
                <span className="text-xs font-bold">Microsoft</span>
                <span className="text-[8px] text-slate-400 block">Solutions Partner</span>
              </div>
            </div>

            {/* AWS Partner */}
            <AwsPartnerLogo />

            {/* SOC 2 Badge */}
            <Soc2Badge />

            {/* ISO 27001 Badge */}
            <Iso27001Badge />

            {/* ISO 9001 Badge */}
            <Iso9001Badge />
          </div>
        </div>

        {/* 3 Global Office Cards */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Office 1 */}
          <div className="bg-[#120E22] rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🇮🇳</span>
              <h4 className="font-bold text-white text-base">India, Noida</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ground floor, C-23, Sector 63 Rd, Near Fortis Hospital,<br />
              C Block, Noida, Uttar Pradesh 201309
            </p>
          </div>

          {/* Office 2 */}
          <div className="bg-[#120E22] rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🇺🇸</span>
              <h4 className="font-bold text-white text-base">USA, Chicago</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              203 N LaSalle St Downtown, #2200,<br />
              Chicago, IL 60601, United States
            </p>
          </div>

          {/* Office 3 */}
          <div className="bg-[#120E22] rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🇺🇸</span>
              <h4 className="font-bold text-white text-base">USA, San Diego</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              1620 Fifth Ave #300,<br />
              San Diego, CA 92101, United States
            </p>
          </div>
        </div>

        {/* Bottom Legal & Social Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            {/* DMCA Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#064e3b]/40 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold">
              <Lock className="w-3 h-3" />
              <span>DMCA PROTECTED</span>
            </div>

            <span>© 2026 appagentix. All rights reserved.</span>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <span className="text-slate-400 text-xs mr-2">Follow us on</span>

            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Facebook className="w-4 h-4 fill-white" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-4 h-4 fill-white" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Youtube className="w-4 h-4 fill-white" />
            </a>

            <a
              href="#"
              aria-label="X Twitter"
              className="w-8 h-8 rounded-full bg-[#000000] border border-slate-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Twitter className="w-3.5 h-3.5 fill-white" />
            </a>

            <a
              href="#"
              aria-label="Medium"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-serif font-black text-xs hover:opacity-90 transition-opacity"
            >
              M
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
