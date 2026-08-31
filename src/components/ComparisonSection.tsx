import React from 'react';
import { AGENCY_COMPARISON } from '../data/services';
import { Sparkles, Check, X, AlertCircle } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-24 relative bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Sparkles size={13} />
            <span>THE STRATEGIC EDGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Global Brands Choose Slancio
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-sans">
            How we compare against legacy $300k traditional agency productions and basic unguided AI video generators.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl bg-cinematic-card border border-white/[0.08] overflow-hidden shadow-2xl">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-[#0C0E14] border-b border-white/[0.08] p-4 sm:p-6 text-xs sm:text-sm font-display font-bold">
            <div className="col-span-3 text-zinc-400 font-mono text-xs uppercase tracking-wider">
              Capability / Dimension
            </div>
            <div className="col-span-3 text-zinc-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
              <span>Traditional Agency</span>
            </div>
            <div className="col-span-3 text-zinc-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span>Generic AI Video Tool</span>
            </div>
            <div className="col-span-3 text-amber-400 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>slancio Studio</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/[0.04] text-xs sm:text-sm font-sans">
            {AGENCY_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-white/[0.01] transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-3 font-semibold text-white font-display">
                  {row.feature}
                </div>

                {/* Traditional */}
                <div className="col-span-3 text-zinc-400 pr-4 text-xs sm:text-sm flex items-start gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span>
                  <span>{row.traditional}</span>
                </div>

                {/* AI Tool Only */}
                <div className="col-span-3 text-red-300/80 pr-4 text-xs sm:text-sm flex items-start gap-2">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span>{row.aiToolOnly}</span>
                </div>

                {/* Slancio Standard */}
                <div className="col-span-3 text-amber-300 font-medium pr-2 text-xs sm:text-sm flex items-start gap-2 bg-amber-500/[0.04] p-2.5 rounded-lg border border-amber-500/20">
                  <Check size={16} className="text-amber-400 shrink-0 mt-0.5 font-bold" />
                  <span className="font-semibold text-white">{row.slancio}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
