import React from 'react';
import { PRODUCTION_STEPS } from '../data/services';
import { Sparkles, Film, Cpu, Palette, Volume2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProductionPipelineProps {
  onOpenWhatIfStudio: () => void;
}

export const ProductionPipeline: React.FC<ProductionPipelineProps> = ({ onOpenWhatIfStudio }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Sparkles size={20} className="text-amber-400" />;
      case 1: return <Palette size={20} className="text-amber-400" />;
      case 2: return <Cpu size={20} className="text-amber-400" />;
      case 3: return <Volume2 size={20} className="text-amber-400" />;
      default: return <Film size={20} className="text-amber-400" />;
    }
  };

  return (
    <section id="pipeline" className="py-24 relative bg-[#06070A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Cpu size={13} />
            <span>HOW WE DIRECT AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            The Slancio Production Lab
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-sans">
            AI without human art direction is chaos. Here is our rigorous 4-stage pipeline that ensures frame-by-frame brand consistency, emotional storytelling, and broadcast cinema finishing.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PRODUCTION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-cinematic-card border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between space-y-5 relative group"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
                <span className="font-mono text-2xl font-black text-zinc-700 group-hover:text-amber-400/50 transition-colors">
                  {step.step}
                </span>
              </div>

              {/* Title & Category */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                  {step.category}
                </span>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {step.description}
              </p>

              {/* Tools & Tech Stack Pill */}
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                {step.tools}
              </div>
            </div>
          ))}
        </div>

        {/* Consistency & IP Safety Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-black/40 to-amber-500/10 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-black flex items-center justify-center shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Enterprise IP Protection & Commercial Rights Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans">
                Every commercial rendered by slancio comes with full worldwide commercial ownership, custom proprietary LoRA privacy, and zero model data leakage.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenWhatIfStudio}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>Test Our Pipeline</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
