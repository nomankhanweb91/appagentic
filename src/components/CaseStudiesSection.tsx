import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenCaseStudy }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(CASE_STUDIES.length / itemsPerPage);

  const displayedStudies = CASE_STUDIES.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handlePageClick = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
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
      x: dir < 0 ? 140 : -140,
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
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden"
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
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              The problem, the build,
            </span>{' '}
            <span className="text-[#8C3BE2]">the result.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Every engagement below started with something that wasn't working. Client names are withheld under NDA. CareNote AI is a concept from our AI practice.
          </p>
        </motion.div>

        {/* Animated Sliding Case Studies Track */}
        <div className="relative overflow-hidden mb-10 min-h-[580px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-grab active:cursor-grabbing"
            >
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
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 hover:from-orange-200 hover:to-purple-200 transition-all border border-pink-200/60 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Read the Full Story</span>
                      <ArrowRight className="w-4 h-4 text-purple-700" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  i === currentPage
                    ? 'w-7 h-2.5 rounded-full bg-purple-600'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next case study"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
