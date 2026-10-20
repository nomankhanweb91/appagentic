import React, { useState } from 'react';
import { COMPLIANCE_ITEMS, PRACTICE_ITEMS } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  ShieldCheck,
  CreditCard,
  Lock,
  HeartHandshake,
  Code2,
  Copyright,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const SecurityAuditsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSlides = 2;

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getComplianceIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-heart':
        return <ShieldCheck className="w-6 h-6 text-rose-500" />;
      case 'shield-plus':
        return <ShieldAlert className="w-6 h-6 text-pink-500" />;
      case 'credit-card':
        return <CreditCard className="w-6 h-6 text-purple-500" />;
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-blue-500" />;
      case 'shield-lock':
      default:
        return <Lock className="w-6 h-6 text-indigo-500" />;
    }
  };

  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-rose-600" />;
      case 'handshake':
        return <HeartHandshake className="w-5 h-5 text-purple-600" />;
      case 'copyright':
      default:
        return <Copyright className="w-5 h-5 text-slate-800" />;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute -top-20 left-10 w-[500px] h-[300px] bg-rose-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
              <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
                SECURITY, COMPLIANCE & AWARDS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Built to{' '}
              <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
                pass audits
              </span>
            </h2>
          </div>

          {/* Top navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-800 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous compliance"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-800 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
              aria-label="Next compliance"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Sliding Compliance Badge Cards Container */}
        <div className="relative overflow-hidden mb-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
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
                if (swipe < -6000 || offset.x < -60) {
                  handleNext();
                } else if (swipe > 6000 || offset.x > 60) {
                  handlePrev();
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
            >
              {COMPLIANCE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all text-center flex flex-col items-center justify-center min-h-[220px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 shadow-inner">
                    {getComplianceIcon(item.icon)}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-1.5 mb-16">
          <button
            onClick={() => { setDirection(-1); setActiveSlide(0); }}
            className={`transition-all duration-300 cursor-pointer ${
              activeSlide === 0
                ? 'w-6 h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-purple-600'
                : 'w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400'
            }`}
          />
          <button
            onClick={() => { setDirection(1); setActiveSlide(1); }}
            className={`transition-all duration-300 cursor-pointer ${
              activeSlide === 1
                ? 'w-6 h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-purple-600'
                : 'w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400'
            }`}
          />
        </div>

        {/* Section 02 // Practices Divider */}
        <div className="relative flex items-center mb-10">
          <div className="flex-grow border-t border-slate-200" />
          <span className="flex-shrink mx-4 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
            SECTION 02 // PRACTICES
          </span>
          <div className="flex-grow border-t border-slate-200" />
        </div>

        {/* Bottom 4 Practice Cards with staggered entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_ITEMS.map((practice, idx) => (
            <motion.div
              key={practice.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {getPracticeIcon(practice.icon)}
                </div>
                <span className="font-mono text-xs font-bold text-slate-400">
                  {practice.num}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 leading-snug">
                {practice.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
