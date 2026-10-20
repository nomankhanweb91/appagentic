import React from 'react';
import { MegaMenuConfig } from '../data/megaMenuData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface MegaMenuPanelProps {
  config: MegaMenuConfig;
  onItemClick: (hashtag: string) => void;
  onRequestQuote?: () => void;
}

export const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({
  config,
  onItemClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-white border-b border-slate-200 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12)] text-slate-900"
    >
      {/* Content spans full width matching header menu padding with uniform, balanced top & bottom space */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (Brand Highlight - Centered Vertically) */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0 my-auto">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-100 mb-2.5 tracking-wide">
                {config.badge}
              </span>

              {/* Title with Gradient */}
              <div className="mb-2">
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
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {config.description}
              </p>

              {/* Read More Button */}
              <div className="pt-3.5">
                <a
                  href={config.ctaLink?.hashtag || `#${config.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(config.ctaLink?.hashtag || `#${config.id}`);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-[12.5px] font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-xs hover:shadow-md transition-all duration-200 group active:scale-[0.98] w-fit cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Catalog Grid without header or explore all button) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3.5 gap-y-2">
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
                    className="group flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-100/80 active:scale-[0.99]"
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
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
