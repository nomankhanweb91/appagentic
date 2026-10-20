import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/content';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenCaseStudy }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(CASE_STUDIES.length / itemsPerPage);

  const displayedStudies = CASE_STUDIES.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              The problem, the build,
            </span>{' '}
            <span className="text-[#8C3BE2]">the result.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Every engagement below started with something that wasn't working. Client names are withheld under NDA. CareNote AI is a concept from our AI practice.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {displayedStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Media banner image with purple tone gradient */}
                <div className="relative rounded-2xl overflow-hidden mb-6 h-56 sm:h-64 bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Subtle category overlay pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-purple-800 shadow-sm">
                    Category: {study.category}
                  </div>
                </div>

                {/* Header Row */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Services metadata */}
                <div className="text-xs font-bold tracking-wider text-purple-700 uppercase mb-4">
                  SERVICES: {study.services.join(' · ')}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  {study.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onOpenCaseStudy(study)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm"
                >
                  <span>Read the Full Story</span>
                  <ArrowRight className="w-4 h-4 text-purple-700" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-200 ${
                  i === currentPage
                    ? 'w-6 h-2 rounded-full bg-purple-600'
                    : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
