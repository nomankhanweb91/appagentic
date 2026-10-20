import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../data/content';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Monitor,
  Bot,
  MessageSquare,
  ShieldCheck,
  Search,
  Check,
  Zap,
  Shield,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';

interface SolutionsSectionProps {
  onConsultation: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onConsultation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = SOLUTIONS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SOLUTIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SOLUTIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getMetricIcon = (type: string) => {
    switch (type) {
      case 'check':
        return <Check className="w-3.5 h-3.5 text-emerald-600" />;
      case 'zap':
        return <Zap className="w-3.5 h-3.5 text-purple-600" />;
      case 'shield':
      default:
        return <Shield className="w-3.5 h-3.5 text-blue-600" />;
    }
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-4 h-4 text-amber-600" />;
      case 'message':
        return <MessageSquare className="w-4 h-4 text-pink-600" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-blue-600" />;
      case 'search':
        return <Search className="w-4 h-4 text-purple-600" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-cyan-600" />;
      case 'activity':
        return <Activity className="w-4 h-4 text-rose-600" />;
      default:
        return <Layers className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#FAF9FD] relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/60 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
              FULL-CYCLE ENGINEERING & CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              Solutions We Build,
            </span>{' '}
            <span className="text-[#8C3BE2]">End to End.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Five areas where most of our work happens, each delivered by the same senior team from scoping to support.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {SOLUTIONS_DATA.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-50 text-purple-950 border border-purple-400 shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-purple-500/5 border border-purple-100/80 mb-8 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeSolution.tagline}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeSolution.description}
              </p>

              {/* Metric chips */}
              <div className="space-y-2 pt-2">
                {activeSolution.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700 mr-2 mb-2"
                  >
                    {getMetricIcon(metric.icon)}
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onConsultation(activeSolution.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 hover:from-rose-200 hover:to-purple-200 transition-all border border-pink-200/50"
                >
                  <span>{activeSolution.ctaPrimary}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                </button>

                <button
                  onClick={() => onConsultation(activeSolution.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all"
                >
                  <span>{activeSolution.ctaSecondary}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Stack Box Container */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9FF] rounded-2xl p-6 sm:p-8 border border-purple-200/70 relative">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                        {activeSolution.stackTitle}
                      </h4>
                      <p className="text-xs text-purple-600 font-medium">
                        {activeSolution.stackSubtitle}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Active</span>
                  </div>
                </div>

                {/* 2x2 Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {activeSolution.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-lg bg-slate-50 mt-0.5">
                          {getModuleIcon(mod.icon)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            {mod.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 leading-snug">
                            {mod.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer notes */}
                <div className="flex items-center justify-between text-[11px] text-purple-600 font-medium pt-2 border-t border-purple-100/60">
                  <span>{activeSolution.footerLeft}</span>
                  <span className="font-mono text-purple-700 font-bold">{activeSolution.footerRight}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {SOLUTIONS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-200 ${
                  i === activeIndex
                    ? 'w-6 h-2 rounded-full bg-purple-600'
                    : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Next solution"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
