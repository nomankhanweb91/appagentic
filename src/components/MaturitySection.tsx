import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface MaturitySectionProps {
  onPlanMvp: () => void;
  onEnterpriseArchitect: () => void;
}

export const MaturitySection: React.FC<MaturitySectionProps> = ({
  onPlanMvp,
  onEnterpriseArchitect
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
              ENGAGEMENT ARCHITECTURE & MATURITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              From First MVP to
            </span>{' '}
            <span className="text-[#8C3BE2]">Enterprise Scale.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            The team and the process change with the stage you are at. Engineering standards stay the same.
          </p>
        </motion.div>

        {/* 2 Comparison Cards with staggered animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: For Startups */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">For Startups</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                  0 to 1 Stage
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                You need to reach the market before runway runs out, on a foundation that will not need rebuilding once you raise. We scope tightly, build what matters first, and hand over code your future team can work with.
              </p>

              <hr className="border-slate-100 mb-6" />

              {/* What You Get */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                  WHAT YOU GET:
                </div>

                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>An investor-ready MVP in 8 to 12 weeks.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>AI-native products and features from day one.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Architecture that holds up past your next funding round.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Fixed-scope discovery, so you know cost and timeline.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Avg: 9.4 Wks
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  100% Code IP
                </span>
              </div>

              <button
                onClick={onPlanMvp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Plan Your MVP</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: For Enterprises */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">For Enterprises</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
                  Scale & Modernize
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Your systems have run the business for years, and replacing them cannot mean downtime or a failed audit. We migrate in phases, build compliance into the architecture, and work alongside your internal teams rather than around them.
              </p>

              <hr className="border-slate-100 mb-6" />

              {/* What You Get */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                  WHAT YOU GET:
                </div>

                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>ERP builds, integrations, and phased legacy migration.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>AI automation inside the systems you already run.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>HIPAA, PCI DSS, SOC 2, and GDPR built in.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>Dedicated teams and SLA-backed support after launch.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  Zero Critical Downtime
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60">
                  SOC 2 Type II
                </span>
              </div>

              <button
                onClick={onEnterpriseArchitect}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Talk to an Enterprise Architect</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
