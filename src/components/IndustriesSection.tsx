import React, { useState } from 'react';
import { INDUSTRIES_DATA, IndustryItem } from '../data/content';
import { ChevronLeft, ChevronRight, ArrowRight, Building2 } from 'lucide-react';

interface IndustriesSectionProps {
  onShowWhatWeBuild: (industry: IndustryItem | string) => void;
  onRequestConsultation: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onShowWhatWeBuild,
  onRequestConsultation
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="industry" className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
              SECTOR SPECIALIZATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              Deep Expertise Across Every
            </span>{' '}
            <span className="text-[#8C3BE2]">Industry We Serve</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Sectors where we understand the workflows, the regulations, and what breaks under real operating pressure.
          </p>
        </div>

        {/* 6 Cards (5 Industries + 1 Custom Consultation Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Media Image */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-48 bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-purple-900 shadow-sm">
                    Category: {ind.category}
                  </div>
                </div>

                {/* Header */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {ind.title}
                </h3>

                {/* Services Metadata */}
                <div className="text-[11px] font-bold tracking-wider text-purple-700 uppercase mb-4 leading-relaxed">
                  SERVICES: {ind.services.join(' · ')}
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {ind.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onShowWhatWeBuild(ind)}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm flex items-center justify-between"
              >
                <span>Show What We Build</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
            </div>
          ))}

          {/* 6th Card: Your Industry Not Listed? */}
          <div className="bg-white rounded-3xl p-8 border border-purple-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-50 text-purple-700 border border-purple-200/60 mb-4">
                SPECIALIZED BUILDS
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Your Industry Not Listed?
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                We engineer bespoke cloud and AI solutions for aerospace, clean energy, legal tech, robotics, and complex enterprise compliance requirements.
              </p>
            </div>

            <button
              onClick={onRequestConsultation}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-300 transition-all flex items-center justify-between"
            >
              <span>Request Custom Consultation</span>
              <ArrowRight className="w-4 h-4 text-purple-700" />
            </button>
          </div>
        </div>

        {/* Carousel indicator controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage(0)}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            <span className="w-6 h-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
          </div>

          <button
            onClick={() => setCurrentPage(0)}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
