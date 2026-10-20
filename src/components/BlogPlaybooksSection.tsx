import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BlogPlaybooksSectionProps {
  onOpenArticle: (article: BlogPost | { title: string; category: string; content: string }) => void;
}

export const BlogPlaybooksSection: React.FC<BlogPlaybooksSectionProps> = ({ onOpenArticle }) => {
  const [activeFilter, setActiveFilter] = useState('All Articles');

  const filterTabs = [
    'All Articles',
    'Agentic AI & LLMs',
    'System Architecture',
    'Compliance & Security',
    'Mobile & Offline-First',
    'Product Design'
  ];

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
              THOUGHT LEADERSHIP & ENGINEERING BLOG
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Insights, Architecture &{' '}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              Engineering Playbooks.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Deep dives into autonomous agent workflows, enterprise LLM architectures, zero-downtime migrations, and battle-tested digital product design.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = tab === activeFilter;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#9C27B0] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Featured Blueprint Card with motion hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md mb-12 overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Blueprint Diagram Graphic */}
            <div className="lg:col-span-6 bg-[#0E0B1A] rounded-2xl p-6 text-white relative overflow-hidden min-h-[300px] sm:min-h-[340px] flex flex-col justify-between border border-purple-950">
              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-orange-950/60 text-orange-400 border border-orange-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  FEATURED BLUEPRINT
                </span>
                <span className="font-mono text-xs text-purple-300 font-semibold">
                  v3.4 SLA-ENFORCED
                </span>
              </div>

              {/* High-tech vector nodes graph overlay */}
              <div className="relative my-4 flex items-center justify-center">
                <svg className="w-full h-44 opacity-80" viewBox="0 0 300 160">
                  <circle cx="150" cy="80" r="18" fill="#9333EA" opacity="0.3" />
                  <circle cx="150" cy="80" r="8" fill="#C084FC" />
                  <line x1="150" y1="80" x2="60" y2="40" stroke="#E879F9" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="80" x2="240" y2="40" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="80" x2="70" y2="120" stroke="#A855F7" strokeWidth="1.5" />
                  <line x1="150" y1="80" x2="230" y2="120" stroke="#EC4899" strokeWidth="1.5" />
                  <circle cx="60" cy="40" r="6" fill="#F472B6" />
                  <circle cx="240" cy="40" r="6" fill="#FB7185" />
                  <circle cx="70" cy="120" r="5" fill="#C084FC" />
                  <circle cx="230" cy="120" r="5" fill="#E879F9" />
                </svg>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-900/60 z-10 text-xs">
                <div>
                  <div className="font-bold text-white">Autonomous Vector Sharding</div>
                  <div className="text-[11px] text-purple-300">Deterministic RAG Engine • Zero Drift</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/40">
                  LIVE PASS
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                AGENTIC WORKFLOWS · 7 MIN READ · MARCH 2026
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Architecting Multi-Agent RAG Pipelines with Deterministic Guardrails
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                How we eliminate hallucinations and enforce strict SLA boundaries when orchestrating autonomous agents across enterprise SQL, vector databases, and external CRM APIs under millisecond constraints.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  LlamaIndex Hybrid
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  Semantic Routing
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  Pydantic Evals
                </span>
              </div>

              {/* Author & Button */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                    AT
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Dr. Aris Thorne</div>
                    <div className="text-xs text-slate-500">Principal AI Systems Architect</div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onOpenArticle({
                      title: 'Architecting Multi-Agent RAG Pipelines with Deterministic Guardrails',
                      category: 'Agentic Workflows',
                      content:
                        'Enterprise adoption of LLMs requires rigorous deterministic verification. In this playbook, we outline how our engineering practice constructs multi-agent orchestrations with bounded evaluation layers, semantic routing fallback cascades, and sub-millisecond vector indexing.'
                    })
                  }
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:opacity-95 transition-all shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Media Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 h-44 bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-slate-800 shadow-sm">
                    • {post.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono backdrop-blur-sm">
                    {post.readTime}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h4>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${post.author.avatarBg} flex items-center justify-center font-bold text-xs`}>
                    {post.author.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-[10px] text-slate-500">{post.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenArticle(post)}
                  className="text-xs font-bold text-rose-600 hover:text-purple-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
