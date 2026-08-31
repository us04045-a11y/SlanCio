import React, { useState } from 'react';
import { ArrowRight, Film, CheckCircle2 } from 'lucide-react';
import { WHAT_IF_PRESETS } from '../data/whatIfPrompts';

interface PhilosophyProps {
  onOpenWhatIfStudio: () => void;
}

export const PhilosophyWhatIf: React.FC<PhilosophyProps> = ({ onOpenWhatIfStudio }) => {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(0);
  const activePreset = WHAT_IF_PRESETS[selectedPresetIdx];

  return (
    <section id="philosophy" className="py-24 px-6 sm:px-12 border-b border-white/10 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
            // OUR CORE CREATIVE THESIS
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-[-0.04em] leading-[0.95]">
            “What if is where we begin.”
          </h2>
          <p className="text-lg text-zinc-300 font-light leading-relaxed pt-2">
            Every iconic advertising campaign in history started with a question that seemed physically or financially impossible. At SLANCIO, <span className="text-white font-semibold">we start at “What if?”</span> — then we engineer the visual reality using cinematic generative AI production.
          </p>
        </div>

        {/* The Fundamental Distinction: Creative Agency vs AI Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Box 1: Why AI Alone is Not Advertising */}
          <div className="p-8 border border-white/10 bg-[#0D0D0D] space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              01 // THE PITFALL
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              An AI Tool Is Not An Advertising Agency
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Anyone can enter a text prompt into an AI generator and render a 4-second surreal visual. But a generic clip does not build brand equity, drive DTC conversions, or position a global luxury leader.
            </p>
            <div className="space-y-3 text-xs text-zinc-400 font-mono pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                <span>Zero brand narrative or consumer psychology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                <span>Ignorant of 3-second hook retention & conversion mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                <span>Asset inconsistency, uncanny morphing, and zero sound design</span>
              </div>
            </div>
          </div>

          {/* Box 2: The Slancio Philosophy */}
          <div className="p-8 border border-white/20 bg-[#121212] space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              02 // THE SLANCIO ADVANTAGE
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              Creative First, AI Powered
            </h3>
            <p className="text-sm text-zinc-200 font-light leading-relaxed">
              <span className="text-white font-semibold">Advertising and creativity are what we sell. AI is our production technology.</span> Our creative directors, art leads, and copywriters architect the strategic narrative. Generative AI unlocks physics-defying execution at 10x traditional speed.
            </p>
            <div className="space-y-3 text-xs text-zinc-300 font-mono pt-2 border-t border-white/15">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-white shrink-0" />
                <span>Bespoke narrative arcs tailored to global tier-1 brand equity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-white shrink-0" />
                <span>Zero physical studio delays, weather holds, or location fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-white shrink-0" />
                <span>Hollywood color grading, custom sound score & multi-format delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "What If" Question Board */}
        <div className="border border-white/10 bg-[#0D0D0D] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                INTERACTIVE CONCEPTION MATRIX
              </div>
              <h3 className="text-2xl font-black uppercase text-white mt-1">
                How "What If" Questions Become Real Campaigns
              </h3>
            </div>
            <button
              onClick={onOpenWhatIfStudio}
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white bg-white text-black text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Test Your Own Brand</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Industry Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-5 border-b border-white/10 scrollbar-none">
            {WHAT_IF_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setSelectedPresetIdx(idx)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedPresetIdx === idx
                    ? 'bg-white text-black font-bold'
                    : 'border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                }`}
              >
                {preset.brandType}
              </button>
            ))}
          </div>

          {/* Active Preset Display Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
            <div className="lg:col-span-2 space-y-4 p-6 sm:p-8 bg-black border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                <span>{activePreset.industry}</span>
                <span>/</span>
                <span className="text-white font-semibold">{activePreset.objective}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black uppercase text-white leading-snug">
                “{activePreset.question}”
              </h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                <span className="text-white font-medium">The Commercial Translation: </span> 
                {activePreset.sampleConcept}
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-8 bg-black border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
                  PRODUCTION SCHEMA
                </div>
                <div className="text-sm text-white font-bold mb-3">
                  {activePreset.aesthetic}
                </div>
                <div className="text-xs text-zinc-400 space-y-2 font-mono">
                  <div>• Turnaround: 4–6 Days</div>
                  <div>• Formats: 9:16 Social + 16:9 Cinema</div>
                  <div>• Master Audio: 5.1 & Spatial Stereo</div>
                </div>
              </div>
              <button
                onClick={onOpenWhatIfStudio}
                className="w-full py-3 text-center text-xs font-extrabold uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-all"
              >
                Generate Treatment Deck
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

