import React, { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { CAMPAIGNS } from '../data/campaigns';
import { Campaign, CampaignCategory } from '../types';

interface WorkShowcaseProps {
  onSelectCampaign: (campaign: Campaign) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onSelectCampaign }) => {
  const [activeCategory, setActiveCategory] = useState<CampaignCategory>('all');

  const filteredCampaigns = activeCategory === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter((c) => c.category === activeCategory);

  const categories: { key: CampaignCategory; label: string }[] = [
    { key: 'all', label: 'All Campaigns' },
    { key: 'luxury-fashion', label: 'Luxury & Haute Couture' },
    { key: 'commercial', label: 'Commercials & TVC' },
    { key: 'product-film', label: 'Kinetic & Product Films' },
  ];

  return (
    <section id="work" className="py-24 px-6 sm:px-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-3">
              // SELECTED PORTFOLIO & CAMPAIGNS
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-[-0.04em]">
              Selected Work.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all ${
                  activeCategory === cat.key
                    ? 'bg-white text-black font-bold'
                    : 'border border-white/15 text-zinc-400 hover:text-white hover:border-white/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              onClick={() => onSelectCampaign(campaign)}
              className="group border border-white/10 bg-[#0D0D0D] hover:border-white/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border-b border-white/10">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white">
                    {campaign.client}
                  </span>
                  <span className="px-2.5 py-0.5 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold">
                    {campaign.aspectRatio}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 bg-white text-black font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2">
                    <Eye size={14} />
                    <span>Inspect Treatment Deck</span>
                  </span>
                </div>
              </div>

              {/* Campaign Content Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    <span>{campaign.clientIndustry}</span>
                    <span>{campaign.duration}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-zinc-300 transition-colors tracking-tight">
                    {campaign.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-mono italic p-3 bg-black border-l-2 border-white">
                    “{campaign.whatIfQuestion}”
                  </p>
                </div>

                {/* Performance Metrics Row */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {campaign.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-black/60 p-2.5 border border-white/10">
                      <div className="text-xs font-black text-white font-mono">{m.value}</div>
                      <div className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Format: {campaign.channels.slice(0, 3).join(' • ')}
                  </span>
                  <div className="flex items-center gap-1 text-white font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>View Brief</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
