import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
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
  const [direction, setDirection] = useState(1);
  const activeSolution = SOLUTIONS_DATA[activeIndex];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? SOLUTIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === SOLUTIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  const handleTabClick = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
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

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FAF9FD] relative overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animated scroll entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
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
        </motion.div>

        {/* Tab Pills with active slider indication */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {SOLUTIONS_DATA.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(idx)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-purple-50 text-purple-950 border border-purple-400 shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>}
                <span>{item.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Animated Slide Container with smooth sliding effect */}
        <div className="relative overflow-hidden mb-8 min-h-[460px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSolution.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -8000 || offset.x < -70) {
                  handleNext();
                } else if (swipe > 8000 || offset.x > 70) {
                  handlePrev();
                }
              }}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-purple-500/5 border border-purple-100/80 cursor-grab active:cursor-grabbing"
            >
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 hover:from-rose-200 hover:to-purple-200 transition-all border border-pink-200/50 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{activeSolution.ctaPrimary}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                    </button>

                    <button
                      onClick={() => onConsultation(activeSolution.name)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {SOLUTIONS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? 'w-7 h-2.5 rounded-full bg-purple-600'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next solution"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
