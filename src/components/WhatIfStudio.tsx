import React, { useState } from 'react';
import { Sparkles, ArrowRight, Copy, Check, Film, Sliders, Layers, Volume2, RefreshCw } from 'lucide-react';
import { WHAT_IF_PRESETS, generateLocalPitch } from '../data/whatIfPrompts';
import { GeneratedPitch } from '../types';

interface WhatIfStudioProps {
  onPreFillInquiry: (briefText: string, brandName: string) => void;
}

export const WhatIfStudio: React.FC<WhatIfStudioProps> = ({ onPreFillInquiry }) => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('Luxury Timepieces & Jewelry');
  const [whatIfInput, setWhatIfInput] = useState('');
  const [objective, setObjective] = useState('Brand Anthem & 3D Anamorphic Billboard');
  const [aesthetic, setAesthetic] = useState('Obsidian Noir × Stardust Golden Rim Lighting');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState<GeneratedPitch | null>(null);
  const [copied, setCopied] = useState(false);

  const industries = [
    'Luxury Timepieces & Jewelry',
    'Automotive & Clean Mobility',
    'Haute Couture & Streetwear',
    'Cosmetics & Skincare Biotech',
    'Spirits & Premium Beverage',
    'Consumer Tech & Audio',
    'DTC Performance Apparel'
  ];

  const objectives = [
    'Brand Anthem & 3D Anamorphic Billboard',
    'High-Retention TikTok & Reels Campaign (9:16)',
    'Cinematic Product Launch Film (4K YouTube)',
    'AI UGC-Style Hyper-Converting Social Ad Pack',
    'Global Omnichannel Brand Repositioning'
  ];

  const aesthetics = [
    'Obsidian Noir × Stardust Golden Rim Lighting',
    'Cyber-Noir Tokyo Rain × Aerodynamic Carbon Fiber',
    'Ethereal Glacial Dew × Botanical Luminescence',
    'High-Voltage Kinetic Neon × Zero-Gravity Studio',
    'Brutalist Monolithic Architecture × Liquid Metallic Silk',
    'Warm Minimalist Scandinavian Light & Macro Textures'
  ];

  const handleApplyPreset = (preset: typeof WHAT_IF_PRESETS[0]) => {
    setBrandName(preset.brandType);
    setIndustry(preset.industry);
    setWhatIfInput(preset.question);
    setAesthetic(preset.aesthetic);
    setObjective(preset.objective);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const pitch = generateLocalPitch(
        brandName || 'Nova Concept',
        industry,
        whatIfInput || `What if ${brandName || 'this brand'} defied every physical rule of advertising?`,
        objective,
        aesthetic
      );
      setGeneratedPitch(pitch);
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    if (!generatedPitch) return;
    const text = `SLANCIO CREATIVE BRIEF: ${generatedPitch.brandName}
TAGLINE: "What if is where we begin."

WHAT IF HOOK: ${generatedPitch.whatIfHook}
BIG IDEA: ${generatedPitch.bigIdea}

ART DIRECTION & OPTICS:
- Aesthetic: ${generatedPitch.creativeDirection.visualAesthetic}
- Lighting: ${generatedPitch.creativeDirection.lightingAndOptics}
- Sound: ${generatedPitch.creativeDirection.soundDesignMood}

3-ACT STORYBOARD:
${generatedPitch.storyboardActs.map(a => `${a.act} [${a.timing}]\nVisual: ${a.visualDescription}\nVO/Copy: ${a.voiceoverOrCopy}\n`).join('\n')}

CHANNEL STRATEGY:
${generatedPitch.channelStrategy.map(c => `- ${c.platform} (${c.format}): ${c.hookMechanism}`).join('\n')}

PRODUCTION SPECS:
Turnaround: ${generatedPitch.aiProductionFeasibility.turnaroundEstimate}
Fidelity: ${generatedPitch.aiProductionFeasibility.renderFidelity}
Cost Agility: ${generatedPitch.aiProductionFeasibility.traditionalBudgetSavings}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendToInquiry = () => {
    if (!generatedPitch) return;
    const briefSummary = `Brand: ${generatedPitch.brandName} (${industry})\nWhat If: ${generatedPitch.whatIfHook}\nObjective: ${objective}\nAesthetic: ${aesthetic}`;
    onPreFillInquiry(briefSummary, generatedPitch.brandName);
  };

  return (
    <section id="what-if-studio" className="py-24 px-6 sm:px-12 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
            // INTERACTIVE CAMPAIGN ARCHITECT
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-[-0.04em]">
            The "What If" Studio.
          </h2>
          <p className="text-lg text-zinc-300 font-light leading-relaxed">
            Test how SLANCIO transforms an audacious "What If" premise into a cinematic 3-act advertising treatment deck, complete with shot breakdowns, optics parameters, and channel delivery strategy.
          </p>
        </div>

        {/* Quick Idea Presets Row */}
        <div className="mb-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
            SELECT A HIGH-CONCEPT PRESET:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {WHAT_IF_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset)}
                className="p-3 bg-[#0D0D0D] hover:bg-[#151515] border border-white/10 hover:border-white/40 text-left transition-all text-xs group"
              >
                <span className="font-mono text-[9px] text-zinc-400 block group-hover:text-white uppercase tracking-wider">
                  {preset.industry.split(' ')[0]}
                </span>
                <span className="font-bold text-white block truncate mt-1">
                  {preset.brandType}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Creative Input Controls (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 p-6 sm:p-8 bg-[#0D0D0D] border border-white/10">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <Sliders size={14} className="text-white" />
                CAMPAIGN PARAMETERS
              </span>
              <span className="text-[10px] font-mono text-zinc-400">01 // INPUT</span>
            </div>

            {/* Brand Name Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Brand / Product Name
              </label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="e.g. AURA Genève, VORTEX Milano"
                className="w-full px-4 py-2.5 bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white font-sans"
              />
            </div>

            {/* Industry Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Target Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans cursor-pointer"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind} className="bg-zinc-900 text-white">
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* The "What If" Prompt */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                <span>The "What If" Question</span>
                <span className="text-white font-bold">// THE CORE HOOK</span>
              </label>
              <textarea
                value={whatIfInput}
                onChange={(e) => setWhatIfInput(e.target.value)}
                rows={3}
                placeholder="e.g. What if our luxury timepiece was assembled by gravitational forces in deep space?"
                className="w-full px-4 py-2.5 bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white font-sans resize-none"
              />
            </div>

            {/* Advertising Objective */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Advertising Objective & Target
              </label>
              <select
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans cursor-pointer"
              >
                {objectives.map((obj) => (
                  <option key={obj} value={obj} className="bg-zinc-900 text-white">
                    {obj}
                  </option>
                ))}
              </select>
            </div>

            {/* Visual Aesthetic Direction */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Visual & Lighting Style Bible
              </label>
              <select
                value={aesthetic}
                onChange={(e) => setAesthetic(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans cursor-pointer"
              >
                {aesthetics.map((aes) => (
                  <option key={aes} value={aes} className="bg-zinc-900 text-white">
                    {aes}
                  </option>
                ))}
              </select>
            </div>

            {/* Generate Trigger Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 px-6 bg-white hover:bg-zinc-200 text-black font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw size={14} className="animate-spin text-black" />
                  <span>Synthesizing Treatment Deck...</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} className="text-black" />
                  <span>Generate "What If" Treatment</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Treatment Deck Output (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {generatedPitch ? (
              <div className="p-6 sm:p-8 bg-[#0D0D0D] border border-white/20 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Header of Generated Deck */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      <span>SLANCIO CREATIVE TREATMENT DECK</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase text-white mt-1">
                      {generatedPitch.brandName}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="px-3 py-1.5 bg-black hover:bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors uppercase"
                    >
                      {copied ? <Check size={13} className="text-white" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied' : 'Copy Brief'}</span>
                    </button>
                    <button
                      onClick={handleSendToInquiry}
                      className="px-3.5 py-1.5 bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-all"
                    >
                      <span>Brief Slancio</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                {/* The "What If" Core Angle */}
                <div className="p-5 bg-black border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">The "What If" Spark</div>
                  <div className="text-base sm:text-lg font-black uppercase text-white">
                    “{generatedPitch.whatIfHook}”
                  </div>
                  <p className="text-xs text-zinc-300 pt-1 font-light leading-relaxed">
                    {generatedPitch.bigIdea}
                  </p>
                </div>

                {/* 3-Act Narrative Storyboard */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Film size={12} className="text-white" />
                    <span>3-Act Cinematic Storyboard</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {generatedPitch.storyboardActs.map((act, aIdx) => (
                      <div key={aIdx} className="p-3.5 bg-black border border-white/10 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-white font-mono font-bold uppercase">
                          <span>{act.act}</span>
                          <span className="text-[10px] text-zinc-400">{act.timing}</span>
                        </div>
                        <p className="text-zinc-300 font-light leading-relaxed">
                          {act.visualDescription}
                        </p>
                        <div className="text-zinc-400 font-mono text-[10px] bg-zinc-900/50 p-1.5 border border-white/5">
                          <span className="text-zinc-500 mr-1 uppercase">VO/Audio:</span>
                          <span className="text-zinc-300 italic">{act.voiceoverOrCopy}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Art Direction & Sound Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-black border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Layers size={11} />
                      <span>Cinematography & Optics</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {generatedPitch.creativeDirection.lightingAndOptics}
                    </p>
                  </div>

                  <div className="p-4 bg-black border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Volume2 size={11} />
                      <span>Spatial Sound Design</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {generatedPitch.creativeDirection.soundDesignMood}
                    </p>
                  </div>
                </div>

                {/* Production Turnaround & Feasibility Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-4 text-zinc-400">
                    <div>
                      <span>Turnaround: </span>
                      <strong className="text-white">{generatedPitch.aiProductionFeasibility.turnaroundEstimate}</strong>
                    </div>
                    <div>
                      <span>Master: </span>
                      <strong className="text-white">{generatedPitch.aiProductionFeasibility.renderFidelity.split('/')[0]}</strong>
                    </div>
                  </div>
                  <button
                    onClick={handleSendToInquiry}
                    className="text-white font-bold uppercase tracking-wider flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    <span>Proceed with brief</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>
            ) : (
              /* Empty Initial State */
              <div className="p-8 sm:p-12 bg-[#0D0D0D] border border-white/10 flex-1 flex flex-col items-center justify-center text-center space-y-5">
                <div className="w-12 h-12 border border-white/20 bg-black flex items-center justify-center text-white">
                  <Sparkles size={20} />
                </div>
                <div className="max-w-md space-y-2">
                  <h3 className="text-xl font-black uppercase text-white">
                    Ready to architect your campaign?
                  </h3>
                  <p className="text-sm text-zinc-400 font-light">
                    Choose a preset or configure your parameters on the left, then click <strong className="text-white font-semibold">"Generate Treatment"</strong> to preview a complete 3-act narrative storyboard and technical direction.
                  </p>
                </div>
                <button
                  onClick={handleGenerate}
                  className="px-6 py-2.5 border border-white/20 hover:border-white bg-black text-xs font-mono font-bold text-white uppercase tracking-widest transition-all"
                >
                  Generate Sample Deck Now
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

