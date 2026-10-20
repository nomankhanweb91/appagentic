import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onGetStarted: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onGetStarted }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              ABOUT APPAGENTIX
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We build the systems{' '}
              <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
                businesses run on.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Appagentix is a digital engineering partner for companies whose software can no longer keep up with their business. Instead of bouncing your project between isolated departments, a single team handles everything from product design and custom software to AI and cloud infrastructure, from the first call to production support.
            </p>

            {/* The Broken Agency Model */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                THE BROKEN AGENCY MODEL
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We built this company to fix a broken agency model. Most businesses are forced to choose between two flawed options:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold text-base leading-none">•</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">Fast but fragile agencies:</strong> They move quickly but stall the moment the architecture gets complex.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold text-base leading-none">•</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">Slow but scalable integrators:</strong> They have the process to handle massive scale, but lack the urgency to move fast.
                  </span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                We sit right in the middle. The senior engineers who scope your architecture are the same people writing the code and taking your calls after launch.
              </p>
            </div>

            {/* Operational & Regulatory Pressure */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                OPERATIONAL & REGULATORY PRESSURE
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our approach is built to handle real operational and regulatory pressure:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold text-base leading-none">•</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">110+ products delivered</strong> for everyone from funded startups launching an MVP to enterprises migrating legacy systems.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold text-base leading-none">•</span>
                  <span>
                    <strong className="text-slate-900 font-semibold">10+ industries served</strong>, with deep expertise in high-stakes environments like HIPAA-compliant healthcare and SOC 2–audited FinTech.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Metric Cards + Dark Statement Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Stat 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                  7+
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mb-3" />
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  Years building software
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                  110+
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mb-3" />
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  Products delivered
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                  100+
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mb-3" />
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  Engineers, designers and architects
                </div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
                  10+
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mb-3" />
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  Industries served
                </div>
              </motion.div>
            </div>

            {/* Dark Luminous Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#0C0819] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-slate-800"
            >
              <div className="flex items-center gap-1.5 text-pink-400 mb-3">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <Sparkles className="w-3 h-3 text-purple-400" />
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                You own the code, the architecture, and every decision behind it. We stay accountable to all three, long after you go live.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
