import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS_DATA.length / itemsPerPage);

  const displayedTestimonials = TESTIMONIALS_DATA.slice(
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
      x: dir > 0 ? 120 : -120,
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
      x: dir < 0 ? 120 : -120,
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
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden"
    >
      {/* Background radial aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            What{' '}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              clients say
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Real feedback, real results: proven excellence from the people who matter most — our partners.
          </p>
        </motion.div>

        {/* Sliding Testimonial Cards */}
        <div className="relative overflow-hidden mb-12 min-h-[380px]">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-grab active:cursor-grabbing"
            >
              {displayedTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Pill Tag + Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${t.categoryTheme}`}>
                        {t.category}
                      </span>
                      <Quote className="w-6 h-6 text-rose-500 fill-rose-500/20" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-normal italic">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className={`w-11 h-11 rounded-full border-2 flex items-center justify-center font-bold text-sm ${t.color} bg-slate-50`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {t.author}
                      </div>
                      <div className="text-xs text-slate-500">
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous testimonials"
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
                    ? 'w-7 h-2.5 rounded-full bg-gradient-to-r from-rose-500 to-purple-600'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
