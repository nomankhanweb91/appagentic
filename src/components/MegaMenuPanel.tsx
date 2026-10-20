import React from 'react';
import { MegaMenuConfig } from '../data/megaMenuData';
import { CheckCircle2, ArrowRight, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

interface MegaMenuPanelProps {
  config: MegaMenuConfig;
  onItemClick: (hashtag: string) => void;
  onRequestQuote?: () => void;
}

export const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({
  config,
  onItemClick,
  onRequestQuote,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-7xl mx-auto px-2 sm:px-4"
    >
      <div className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] border border-slate-100 p-6 sm:p-8 lg:p-9 text-slate-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column (Brand & Standard Highlight) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 mb-3 tracking-wide">
                {config.badge}
              </span>

              {/* Title with Gradient */}
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                  {config.titlePrefix}
                </span>
                <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FF4500] via-[#E11D48] to-[#9333EA] text-transparent bg-clip-text tracking-tight block mt-0.5">
                  {config.titleHighlight}
                </span>
                {/* Gradient underline accent */}
                <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-[#FF4500] to-[#9333EA] mt-2 mb-4"></div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {config.description}
              </p>

              {/* Engineering Standard Card */}
              <div className="border-l-4 border-l-purple-600 bg-slate-50/80 rounded-r-2xl p-4 border-y border-r border-slate-100 mb-6 transition-all hover:bg-slate-50">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-bold tracking-wider text-slate-500 uppercase">
                    {config.engineeringStandard.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {config.engineeringStandard.verifiedText}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {config.engineeringStandard.heading}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {config.engineeringStandard.body}
                </p>
              </div>
            </div>

            {/* Optional Global Clients Row */}
            {config.clients && config.clients.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-bold text-slate-900">
                    Our Global <span className="text-rose-600">Clients</span>
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium">Enterprise Scale</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {config.clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 hover:bg-slate-100/90 transition-colors border border-slate-200/70 rounded-xl px-2.5 py-2 text-center flex flex-col items-center justify-center h-12 shadow-2xs group"
                    >
                      <span className="text-[12px] font-bold text-slate-800 tracking-tight group-hover:text-purple-700 transition-colors">
                        {client.name}
                      </span>
                      {client.subtext && (
                        <span className="text-[9px] text-slate-400 font-medium">
                          {client.subtext}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Catalog Grid & Trust Footprint) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              {/* Header with Title and Domain Count */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">
                    {config.catalogTitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {config.catalogSubtitle}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/80 shadow-2xs">
                  {config.domainCountBadge}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2.5">
                {config.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.hashtag}
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick(item.hashtag);
                      }}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-100/80 active:scale-[0.99]"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-200 group-hover:scale-105 shadow-2xs`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] font-semibold text-slate-800 group-hover:text-purple-700 transition-colors truncate">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-[11px] text-slate-400 font-normal truncate mt-0.5">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}

                {/* Explore All CTA Button (Prominently placed in the grid matching reference) */}
                {config.exploreAllButton && (
                  <a
                    href={config.exploreAllButton.hashtag}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick(config.exploreAllButton!.hashtag);
                    }}
                    className="group relative overflow-hidden flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-[#FF3B30] via-[#FF2D55] to-[#9333EA] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 text-white">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-[9px] uppercase font-bold tracking-wider text-white/80">
                          {config.exploreAllButton.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white">
                          {config.exploreAllButton.sublabel}
                        </div>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white text-purple-700 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Trust & Consultation Row */}
            <div className="pt-5 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              {config.trustBadges && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 font-medium">
                  {config.trustBadges.map((badge, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              )}

              {config.ctaLink && (
                <button
                  onClick={() => {
                    if (onRequestQuote) {
                      onRequestQuote();
                    } else {
                      onItemClick(config.ctaLink!.hashtag);
                    }
                  }}
                  className="inline-flex items-center gap-1 font-semibold text-purple-700 hover:text-purple-800 transition-colors underline-offset-4 hover:underline text-left cursor-pointer shrink-0"
                >
                  <span>{config.ctaLink.text}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
