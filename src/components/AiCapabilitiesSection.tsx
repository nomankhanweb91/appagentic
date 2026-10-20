import React, { useState } from 'react';
import { AI_CAPABILITIES_TABS } from '../data/content';
import {
  Sparkles,
  Cpu,
  Database,
  BarChart3,
  Brain,
  MessageSquare,
  ScanText,
  TrendingUp,
  Eye,
  Layers,
  Zap,
  Shield,
  PieChart,
  Layout,
  Activity,
  ArrowRight
} from 'lucide-react';

interface AiCapabilitiesSectionProps {
  onActionClick: (title: string) => void;
}

export const AiCapabilitiesSection: React.FC<AiCapabilitiesSectionProps> = ({ onActionClick }) => {
  const [activeTabId, setActiveTabId] = useState('ai');
  const activeTab = AI_CAPABILITIES_TABS.find((t) => t.id === activeTabId) || AI_CAPABILITIES_TABS[0];

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-rose-500" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-slate-500" />;
      case 'database':
        return <Database className="w-4 h-4 text-slate-500" />;
      case 'bar-chart':
      default:
        return <BarChart3 className="w-4 h-4 text-slate-500" />;
    }
  };

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-5 h-5 text-rose-600" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-purple-600" />;
      case 'scan':
        return <ScanText className="w-5 h-5 text-violet-600" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-cyan-600" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-indigo-600" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-pink-600" />;
      case 'pie-chart':
        return <PieChart className="w-5 h-5 text-purple-600" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-emerald-600" />;
      case 'activity':
      default:
        return <Activity className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="ai-capabilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
            <span className="text-xs font-bold tracking-wider text-purple-900 uppercase">
              ENTERPRISE AI CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              Make your software smarter
            </span>{' '}
            <span className="text-[#8C3BE2]">with AI</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Most businesses already have the data and systems AI needs. They just aren't connected yet. We help you find where AI will actually pay off, then build it into the software you run.
          </p>
        </div>

        {/* Outer Tab Card Container */}
        <div className="bg-[#FAF9FF] rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-sm">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-purple-100 pb-4 mb-8 overflow-x-auto">
            {AI_CAPABILITIES_TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 text-sm sm:text-base font-bold pb-2 transition-colors whitespace-nowrap ${
                    isActive ? 'text-purple-900' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-pink-100/70' : 'bg-transparent'}`}>
                    {getTabIcon(tab.icon)}
                  </div>
                  <span>{tab.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3 Capability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {activeTab.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50/70 border border-purple-100/60 flex items-center justify-center mb-6">
                    {getCardIcon(card.icon)}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onActionClick(card.title)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E91E63] hover:text-[#C2185B] transition-colors"
                  >
                    <span>{card.cta}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
