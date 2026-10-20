import React from 'react';
import { MegaMenuConfig } from '../data/megaMenuData';
import { ArrowRight, LayoutGrid } from 'lucide-react';
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
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-white border-b border-slate-200 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12)] text-slate-900"
    >
      {/* Content spans full width matching header menu padding with compact vertical height */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-5 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (Brand & Standard Highlight) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-100 mb-2 tracking-wide">
                {config.badge}
              </span>

              {/* Title with Gradient */}
              <div className="mb-1.5">
                <span className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight block leading-tight">
                  {config.titlePrefix}
                </span>
                <span className="text-2xl sm:text-[28px] font-black bg-gradient-to-r from-[#FF4500] via-[#E11D48] to-[#9333EA] text-transparent bg-clip-text tracking-tight block leading-tight mt-0.5">
                  {config.titleHighlight}
                </span>
                {/* Gradient underline accent */}
                <div className="h-1 w-11 rounded-full bg-gradient-to-r from-[#FF4500] to-[#9333EA] mt-1.5 mb-2.5"></div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal mb-3">
                {config.description}
              </p>

              {/* Engineering Standard Card */}
              <div className="border-l-4 border-l-purple-600 bg-slate-50/80 rounded-r-xl p-2.5 sm:p-3 border-y border-r border-slate-100 mb-3 transition-all hover:bg-slate-50">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="font-bold tracking-wider text-slate-500 uppercase">
                    {config.engineeringStandard.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 text-[10.5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {config.engineeringStandard.verifiedText}
                  </span>
                </div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                  {config.engineeringStandard.heading}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {config.engineeringStandard.body}
                </p>
              </div>
            </div>

            {/* Optional Global Clients Row */}
            {config.clients && config.clients.length > 0 && (
              <div className="pt-1">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900 text-[11.5px]">
                    Our Global <span className="text-rose-600">Clients</span>
                  </span>
                  <span className="text-slate-400 text-[10px] font-medium">Enterprise Scale</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {config.clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 hover:bg-slate-100/90 transition-colors border border-slate-200/70 rounded-lg px-2 py-1 text-center flex flex-col items-center justify-center h-8 sm:h-8.5 shadow-2xs group"
                    >
                      <span className="text-[11px] font-bold text-slate-800 tracking-tight group-hover:text-purple-700 transition-colors leading-none truncate w-full">
                        {client.name}
                      </span>
                      {client.subtext && (
                        <span className="text-[8.5px] text-slate-400 font-medium leading-none mt-0.5 truncate w-full">
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
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block leading-none">
                    {config.catalogTitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug mt-0.5">
                    {config.catalogSubtitle}
                  </h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200/80 shadow-2xs">
                  {config.domainCountBadge}
                </span>
              </div>

              {/* Items Grid (Compact row heights and paddings) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-1.5">
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
                      className="group flex items-center gap-2.5 p-1.5 sm:p-1.5 rounded-xl hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-100/80 active:scale-[0.99]"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-200 group-hover:scale-105 shadow-2xs`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-[12.5px] font-semibold text-slate-800 group-hover:text-purple-700 transition-colors truncate leading-tight">
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-[10px] text-slate-400 font-normal truncate mt-0.5 leading-tight">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}

                {/* Explore All CTA Button (Compact & vibrant) */}
                {config.exploreAllButton && (
                  <a
                    href={config.exploreAllButton.hashtag}
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick(config.exploreAllButton!.hashtag);
                    }}
                    className="group relative overflow-hidden flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#FF3B30] via-[#FF2D55] to-[#9333EA] text-white shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 text-white">
                        <LayoutGrid className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-[8.5px] uppercase font-bold tracking-wider text-white/85">
                          {config.exploreAllButton.label}
                        </div>
                        <div className="text-xs sm:text-[12.5px] font-bold text-white truncate">
                          {config.exploreAllButton.sublabel}
                        </div>
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white text-purple-700 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
