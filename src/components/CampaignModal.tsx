import React from 'react';
import { X, ArrowRight, Film, Layers, CheckCircle2 } from 'lucide-react';
import { Campaign } from '../types';

interface CampaignModalProps {
  campaign: Campaign | null;
  onClose: () => void;
  onBriefCampaign: (campaignTitle: string) => void;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({ campaign, onClose, onBriefCampaign }) => {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-white/20 shadow-2xl overflow-hidden my-8 text-zinc-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold">
              {campaign.client}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline uppercase tracking-wider">
              // CASE STUDY & TREATMENT DECK
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Visual & Title */}
          <div className="relative overflow-hidden aspect-[16/9] bg-black border border-white/10">
            <img
              src={campaign.image}
              alt={campaign.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                {campaign.clientIndustry} / {campaign.duration}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {campaign.title}
              </h2>
            </div>
          </div>

          {/* The "What If" Question Banner */}
          <div className="p-6 bg-black border border-white/15 text-zinc-200 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">THE CORE CATALYST</div>
            <div className="text-xl sm:text-2xl font-black uppercase text-white">
              “{campaign.whatIfQuestion}”
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-1">
              {campaign.brief}
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {campaign.metrics.map((m, idx) => (
              <div key={idx} className="p-4 bg-black border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">{m.value}</div>
                <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* 3-Act Narrative Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-white font-bold tracking-widest">
              <Film size={14} className="text-white" />
              <span>3-Act Narrative Architecture</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-black border border-white/10 space-y-2">
                <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">Act 1 // Hook (0–3s)</div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">{campaign.narrativeBreakdown.act1}</p>
              </div>
              <div className="p-5 bg-black border border-white/10 space-y-2">
                <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">Act 2 // World (3–10s)</div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">{campaign.narrativeBreakdown.act2}</p>
              </div>
              <div className="p-5 bg-black border border-white/10 space-y-2">
                <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">Act 3 // Payoff (10–15s)</div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">{campaign.narrativeBreakdown.act3}</p>
              </div>
            </div>
          </div>

          {/* Art Direction & Prompt Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase text-white font-bold tracking-widest flex items-center gap-2">
                <Layers size={14} className="text-white" />
                <span>Cinematography & Optics</span>
              </div>
              <div className="space-y-2 text-xs text-zinc-300 font-light">
                <div><strong className="text-white font-bold uppercase font-mono">Aesthetic:</strong> {campaign.artDirection.aesthetic}</div>
                <div><strong className="text-white font-bold uppercase font-mono">Lighting:</strong> {campaign.artDirection.lighting}</div>
                <div><strong className="text-white font-bold uppercase font-mono">Camera:</strong> {campaign.artDirection.cinematography}</div>
                <div><strong className="text-white font-bold uppercase font-mono">Audio:</strong> {campaign.artDirection.audioVibe}</div>
              </div>
            </div>

            <div className="p-6 bg-black border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase text-white font-bold tracking-widest flex items-center gap-2">
                <CheckCircle2 size={14} className="text-white" />
                <span>AI Pipeline Architecture</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-light">
                {campaign.promptArchitecture.map((tech, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-5 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Channels: {campaign.channels.join(' / ')}
          </div>
          <button
            onClick={() => {
              onClose();
              onBriefCampaign(campaign.title);
            }}
            className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-zinc-200 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <span>Commission Similar Campaign</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </div>
  );
};

