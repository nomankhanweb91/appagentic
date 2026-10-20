import React from 'react';
import { HOW_WE_WORK_STEPS } from '../data/content';
import { motion } from 'motion/react';
import {
  Compass,
  GitMerge,
  PenTool,
  Terminal,
  ShieldAlert,
  Rocket,
  Infinity as InfinityIcon
} from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass':
        return <Compass className="w-5 h-5 text-[#FF6B4A]" />;
      case 'git-merge':
        return <GitMerge className="w-5 h-5 text-[#EC4899]" />;
      case 'pen-tool':
        return <PenTool className="w-5 h-5 text-[#D946EF]" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#8B5CF6]" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5 text-[#06B6D4]" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-[#10B981]" />;
      case 'infinity':
      default:
        return <InfinityIcon className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  const topRow = HOW_WE_WORK_STEPS.slice(0, 4);
  const bottomRow = HOW_WE_WORK_STEPS.slice(4, 7);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 lg:py-32 bg-[#0C0819] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            How We Work:{' '}
            <span className="text-[#FF5722]">How an</span>{' '}
            <span className="bg-gradient-to-r from-[#E91E63] via-[#D81B60] to-[#8C3BE2] bg-clip-text text-transparent">
              Engagement Actually Runs
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A structured model from discovery to scale that keeps delivery aligned with KPIs, conversion quality, and measurable business impact.
          </p>
        </motion.div>

        {/* Top Row: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRow.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#140F27]/90 rounded-3xl p-6 sm:p-7 border border-slate-800/80 shadow-lg relative flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header tag and icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
                    style={{
                      boxShadow: `0 0 15px -3px ${step.color}30`
                    }}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Trajectory Arc & Glowing Sphere */}
              <div className="relative pt-6 flex flex-col items-center">
                {/* Glowing Sphere */}
                <div
                  className="w-4 h-4 rounded-full mb-1 relative z-10 group-hover:scale-125 transition-transform"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 14px 2px ${step.color}`
                  }}
                />
                {/* Curved Dotted Arch */}
                <svg
                  className="w-full h-4 overflow-visible"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,20 Q50,0 100,20"
                    fill="none"
                    stroke={step.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bottomRow.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#140F27]/90 rounded-3xl p-6 sm:p-7 border border-slate-800/80 shadow-lg relative flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header tag and icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
                    style={{
                      boxShadow: `0 0 15px -3px ${step.color}30`
                    }}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Trajectory Arc & Glowing Sphere */}
              <div className="relative pt-6 flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full mb-1 relative z-10 group-hover:scale-125 transition-transform"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 14px 2px ${step.color}`
                  }}
                />
                <svg
                  className="w-full h-4 overflow-visible"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,20 Q50,0 100,20"
                    fill="none"
                    stroke={step.color}
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
