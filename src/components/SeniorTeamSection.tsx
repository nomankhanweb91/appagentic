import React from 'react';
import { Users, GitFork, CheckSquare } from 'lucide-react';

export const SeniorTeamSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#090614] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#8C3BE2] bg-clip-text text-transparent">
              The people who pitch it are the people
            </span>{' '}
            <span className="bg-gradient-to-r from-[#E91E63] via-[#C2185B] to-[#7B1FA2] bg-clip-text text-transparent">
              who build it
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            You know how this usually goes. Senior architects run the pitch. The contract gets signed. Delivery passes to a team you've never met, and you spend the first month explaining your business again to people who were not in the room.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 border-t border-b border-slate-800/80 py-8 lg:py-12">
          {/* Col 1 */}
          <div className="py-8 md:py-0 md:px-8 lg:px-12 first:pl-0 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-lg shadow-purple-950/40">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Senior–Led Delivery
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The same senior engineers who plan your project are the ones writing the code.
            </p>
          </div>

          {/* Col 2 */}
          <div className="py-8 md:py-0 md:px-8 lg:px-12 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 shadow-lg shadow-pink-950/40">
              <GitFork className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              One Team, Whole Lifecycle
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Strategy, design, engineering, and support - no handoffs, no lost context.
            </p>
          </div>

          {/* Col 3 */}
          <div className="py-8 md:py-0 md:px-8 lg:px-12 last:pr-0 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-lg shadow-amber-950/40">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Documented by Default
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              You own the code, the architecture, and every decision behind it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
