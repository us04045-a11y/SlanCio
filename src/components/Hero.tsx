import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Pause, Maximize2, ShieldCheck, Zap, Film, Layers } from 'lucide-react';
import { CAMPAIGNS } from '../data/campaigns';
import { Campaign } from '../types';

interface HeroProps {
  onSelectCampaign: (campaign: Campaign) => void;
  onOpenWhatIfStudio: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCampaign, onOpenWhatIfStudio, onOpenContact }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const activeCampaign = CAMPAIGNS[activeIdx] || CAMPAIGNS[0];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % CAMPAIGNS.length);
          return 0;
        }
        return prev + 1.25;
      });
    }, 75);

    return () => clearInterval(interval);
  }, [isPlaying, activeIdx]);

  const handleSelectReel = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  return (
    <section className="relative pt-8 pb-20 overflow-hidden bg-[#0A0A0A]">
      {/* Massive Bold Background Typography Watermark */}
      <div className="absolute left-[-20px] top-[15%] opacity-[0.03] select-none pointer-events-none z-0">
        <h1 className="text-[260px] sm:text-[380px] lg:text-[480px] font-black leading-none tracking-tighter text-white">
          SLANCIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-white/40" />
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-zinc-400">
            The Future of Production // Global AI Creative Studio
          </span>
        </div>

        {/* Hero Title with Bold Typography Archetype */}
        <div className="max-w-5xl space-y-8">
          <h1 className="text-5xl sm:text-7xl lg:text-[104px] leading-[0.92] font-black tracking-tight text-white font-display uppercase">
            WHAT IF <br />
            <span className="italic font-light text-zinc-400">IS WHERE WE</span> <br />
            BEGIN.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            <div className="hidden sm:block h-[1px] w-24 bg-white/40 shrink-0" />
            <p className="text-base sm:text-xl font-light text-zinc-300 max-w-2xl leading-relaxed">
              Cinematic visual campaigns for global brands. <strong className="text-white font-semibold">AI is our production technology. Advertising and creativity are what we sell.</strong>
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-white hover:bg-zinc-200 text-black font-display font-bold text-xs tracking-widest uppercase rounded-lg shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
            >
              <span>Start A Project</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={onOpenWhatIfStudio}
              className="px-7 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/20 hover:border-white/40 rounded-lg font-display font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2"
            >
              <Sparkles size={14} className="text-amber-400" />
              <span>Launch "What If" Pitch Generator</span>
            </button>
          </div>
        </div>

        {/* Cinematic Showcase Stage / Reel Theater */}
        <div className="mt-16 relative">
          <div className="relative rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/10 shadow-2xl">
            
            {/* Cinematic Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#080808] border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-white text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  REEL // 0{activeIdx + 1} OF 0{CAMPAIGNS.length}
                </span>
                <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                  {activeCampaign.category.toUpperCase()} • {activeCampaign.clientIndustry}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title={isPlaying ? 'Pause Auto-Reel' : 'Play Auto-Reel'}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} className="text-white" />}
                </button>
                <button
                  onClick={() => onSelectCampaign(activeCampaign)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-zinc-200 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/25"
                >
                  <Maximize2 size={12} />
                  <span>Inspect Brief & Storyboard</span>
                </button>
              </div>
            </div>

            {/* Main Stage Image & Cinematic Overlay */}
            <div 
              className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-black overflow-hidden group cursor-pointer" 
              onClick={() => onSelectCampaign(activeCampaign)}
            >
              <img
                src={activeCampaign.image}
                alt={activeCampaign.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Cinematic Vignette & Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-transparent" />

              {/* Floating Campaign Info Card on Left */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xl z-20 space-y-3">
                <div className="inline-block px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
                  {activeCampaign.client}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                  {activeCampaign.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 italic font-mono bg-black/50 backdrop-blur-sm p-3 rounded-lg border-l-2 border-white">
                  “{activeCampaign.whatIfQuestion}”
                </p>

                {/* Quick metrics pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeCampaign.metrics.slice(0, 3).map((m, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.08] backdrop-blur-md border border-white/10 text-zinc-200">
                      <span className="text-zinc-400 mr-1">{m.label}:</span>
                      <strong className="text-white font-semibold">{m.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Click to expand hover hint */}
              <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-zinc-300 group-hover:border-white/40 group-hover:text-white transition-all">
                <Film size={13} className="text-white" />
                <span>Click to view treatment deck</span>
              </div>
            </div>

            {/* Reel Progress Bar */}
            <div className="w-full bg-zinc-900 h-[2px] relative overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Reel Chapter Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 bg-[#090909] divide-x divide-white/5 border-t border-white/10">
              {CAMPAIGNS.map((camp, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={camp.id}
                    onClick={() => handleSelectReel(idx)}
                    className={`p-3.5 text-left transition-all relative overflow-hidden ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white" />
                    )}
                    <span className="text-[10px] font-mono block text-zinc-500 uppercase">
                      0{idx + 1} // {camp.category.replace('-', ' ')}
                    </span>
                    <span className="text-xs font-semibold block truncate mt-0.5 text-zinc-200">
                      {camp.title.split('—')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Global Production Proof Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-white">4–7 Days</div>
              <div className="text-[11px] text-zinc-400 font-mono">Concept to Master Turnaround</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-white">100% Locked</div>
              <div className="text-[11px] text-zinc-400 font-mono">Brand Asset & Texture Consistency</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-white">8K UHD Master</div>
              <div className="text-[11px] text-zinc-400 font-mono">DaVinci 32-Bit Float Grade</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <Film size={20} />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-display font-bold text-white">Multi-Format</div>
              <div className="text-[11px] text-zinc-400 font-mono">9:16 Social • 16:9 Cinema • DOOH</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
