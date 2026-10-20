import React, { useState } from 'react';
import { TECH_STACK_CATEGORIES } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  Bot,
  Layout,
  Server,
  Smartphone,
  Cloud,
  Radio,
  Sparkles
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('ai-data');
  const activeCategory =
    TECH_STACK_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    TECH_STACK_CATEGORIES[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5" />;
      case 'layout':
        return <Layout className="w-5 h-5" />;
      case 'server':
        return <Server className="w-5 h-5" />;
      case 'smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      case 'radio':
        return <Radio className="w-5 h-5" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const renderTechLogo = (logoName: string) => {
    switch (logoName) {
      case 'openai':
        return (
          <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white font-mono font-bold text-sm shadow">
            ✦
          </div>
        );
      case 'claude':
        return (
          <div className="w-9 h-9 rounded-xl bg-amber-700/10 flex items-center justify-center text-amber-800 font-bold text-lg shadow-sm">
            ❋
          </div>
        );
      case 'gemini':
        return (
          <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg shadow-sm">
            ✦
          </div>
        );
      case 'llama':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm">
            🦙
          </div>
        );
      case 'pinecone':
        return (
          <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-mono font-bold text-xs shadow">
            🌲
          </div>
        );
      case 'langchain':
        return (
          <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shadow-sm">
            🔗
          </div>
        );
      case 'react':
        return (
          <div className="w-9 h-9 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-sm shadow-sm">
            ⚛
          </div>
        );
      case 'nextjs':
        return (
          <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xs shadow">
            ▲
          </div>
        );
      case 'typescript':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow">
            TS
          </div>
        );
      case 'tailwind':
        return (
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 font-bold text-sm shadow-sm">
            ≋
          </div>
        );
      case 'nodejs':
        return (
          <div className="w-9 h-9 rounded-xl bg-emerald-600/15 flex items-center justify-center text-emerald-700 font-bold text-sm shadow-sm">
            ⬢
          </div>
        );
      case 'python':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-700 font-bold text-sm shadow-sm">
            🐍
          </div>
        );
      case 'aws':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#232F3E] flex items-center justify-center text-[#FF9900] font-bold text-xs shadow">
            aws
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm shadow-sm">
            ⚡
          </div>
        );
    }
  };

  return (
    <motion.section
      id="tech-stack"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-5">
            <span className="text-xs font-bold tracking-wider text-blue-900 uppercase">
              ENTERPRISE TECHNOLOGY STACK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Built on{' '}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              Modern Foundations
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            High-performance architectures, enterprise standards, and battle-tested modern infrastructure.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Menu */}
          <div className="lg:col-span-4 space-y-2">
            {TECH_STACK_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50/80 border border-blue-200 text-blue-900 shadow-sm font-bold scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-sm sm:text-base">{cat.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-5 h-5 text-blue-600" />}
                </button>
              );
            })}
          </div>

          {/* Right Technology Grid Container */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md min-h-[380px]">
            {/* Category Header */}
            <div className="flex items-start gap-4 pb-8 mb-8 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                {getCategoryIcon(activeCategory.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {activeCategory.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            {/* Sliding Technology Tiles */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {activeCategory.techs.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col items-center justify-center text-center gap-3 group"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {renderTechLogo(tech.logo)}
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
