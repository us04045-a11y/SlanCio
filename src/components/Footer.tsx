import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenWhatIfStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenWhatIfStudio }) => {
  return (
    <footer className="border-t border-white/10 bg-[#080808] text-[#F5F5F5] font-sans relative overflow-hidden">
      {/* Massive Watermark */}
      <div className="absolute right-0 bottom-[-40px] opacity-[0.025] select-none pointer-events-none font-display font-black text-[220px] lg:text-[340px] leading-none tracking-tighter text-white">
        SLANCIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* Top Call to Action Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-zinc-400">
              The Next Era of Advertising
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-none">
              WHAT IF IS WHERE WE BEGIN.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-lg">
              Cinematic visual campaigns for global brands. We merge high-level creative strategy with AI-powered production to build the next generation of advertising.
            </p>
          </div>

          <div
            onClick={onOpenContact}
            className="w-32 h-32 sm:w-36 sm:h-36 border border-white/20 rounded-full flex flex-col items-center justify-center group cursor-pointer hover:bg-white hover:text-black transition-all shrink-0 select-none shadow-2xl"
          >
            <span className="text-[11px] uppercase tracking-widest font-black text-center px-4 leading-tight">
              Start A Project
            </span>
            <ArrowUpRight size={16} className="mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        {/* 4-Column Footer Grid matching design theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 text-zinc-300">
          
          {/* Col 1: Services */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-500 block">
              Capabilities
            </span>
            <ul className="text-xs space-y-2.5 font-medium text-zinc-300">
              <li><a href="#services" className="hover:text-white transition-colors">Cinematic Product Commercials</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social-First & Short-Form Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Fashion & Luxury Campaigns</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI UGC-Style Creator Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Macro CGI & Product Films</a></li>
            </ul>
          </div>

          {/* Col 2: Methodology */}
          <div className="space-y-4 sm:border-l sm:border-white/10 sm:pl-8">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-500 block">
              Methodology
            </span>
            <p className="text-xs leading-relaxed text-zinc-400 font-light">
              We don't just generate. We direct. Every pixel is intentional, every story is human, and every output is cinema-grade.
            </p>
            <button
              onClick={onOpenWhatIfStudio}
              className="text-xs font-mono uppercase text-white hover:underline flex items-center gap-1"
            >
              <span>Explore "What If" Studio</span>
              <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Col 3: Global Presence */}
          <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-500 block">
              Global Presence
            </span>
            <div className="text-xs space-y-1.5 text-zinc-300">
              <p className="font-semibold text-white">Milan / London / New York / Tokyo</p>
              <p className="text-zinc-400 font-mono text-[11px]">hello@slancio.ai</p>
              <p className="text-zinc-400 font-mono text-[11px]">press@slancio.ai</p>
            </div>
          </div>

          {/* Col 4: Agency Statement */}
          <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-500 block mb-2">
                Brand Core
              </span>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                AI is our production technology. Advertising and creativity are what we sell.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 pt-4">
              © {new Date().getFullYear()} slancio. All rights reserved.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
