import React from 'react';
import { SERVICES } from '../data/services';
import { Clapperboard, Smartphone, Box, Users, Sparkles, Compass, Check, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenContact: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenContact }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clapperboard': return <Clapperboard size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Box': return <Box size={20} />;
      case 'Users': return <Users size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Compass': return <Compass size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 sm:px-12 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-3">
              // STUDIO CAPABILITIES & DELIVERABLES
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-[-0.04em]">
              Agency Capabilities.
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-2 self-start lg:self-auto"
          >
            <span>Request Custom Scope</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Services Grid (6 Core Offerings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 border border-white/10 bg-[#0D0D0D] hover:border-white/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              {/* Header with Number & Icon */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 border border-white/20 bg-black flex items-center justify-center text-white">
                  {getIcon(service.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  {service.badge && (
                    <span className="px-2 py-0.5 bg-white text-black text-[9px] font-mono uppercase font-bold tracking-widest">
                      {service.badge}
                    </span>
                  )}
                  <span className="font-mono text-zinc-400 text-xs font-bold">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  {service.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-2">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Key Deliverables:</div>
                <div className="space-y-2 text-xs text-zinc-300 font-light">
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <Check size={12} className="text-white shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Specs */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Turnaround: <strong className="text-white">{service.turnaround}</strong></span>
                <button
                  onClick={onOpenContact}
                  className="text-white font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Select</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

