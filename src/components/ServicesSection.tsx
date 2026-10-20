import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Boxes,
  Smartphone,
  Layers,
  Sparkles,
  Cloud,
  ShieldCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'cubes':
        return (
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
            <Boxes className="w-6 h-6" />
          </div>
        );
      case 'smartphone':
        return (
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
            <Smartphone className="w-6 h-6" />
          </div>
        );
      case 'layers':
        return (
          <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            <Layers className="w-6 h-6" />
          </div>
        );
      case 'sparkles':
        return (
          <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center text-fuchsia-600">
            <Sparkles className="w-6 h-6" />
          </div>
        );
      case 'cloud':
        return (
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Cloud className="w-6 h-6" />
          </div>
        );
      case 'shield-check':
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FAF9FD] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
                Consulting, engineering, and AI
              </span>{' '}
              <span className="text-[#8C3BE2]">— under one roof.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg">
              Six capability areas, combined on most engagements, because transformation rarely fits into just one.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </motion.div>

        {/* 6 Cards Grid with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6">{getServiceIcon(srv.icon)}</div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-purple-600 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="text-sm font-bold text-[#8C3BE2] hover:text-[#7C3AED] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
