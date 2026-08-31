import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Menu, X, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  onOpenWhatIfStudio: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatIfStudio, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Global Agency Bureau Bar */}
      <div className="w-full bg-[#070707] border-b border-white/10 text-[10px] uppercase tracking-[0.25em] text-zinc-400 py-2 px-6 sm:px-12 hidden md:flex items-center justify-between z-50">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            GLOBAL AI ADVERTISING STUDIO
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-zinc-400">
            PHILOSOPHY: <span className="text-white font-medium">“WHAT IF IS WHERE WE BEGIN.”</span>
          </span>
          <button 
            onClick={() => setAudioMuted(!audioMuted)}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title={audioMuted ? "Ambience Sound Off" : "Ambience Sound On"}
          >
            {audioMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-white" />}
            <span className="text-[9px] uppercase tracking-widest">{audioMuted ? 'Muted' : 'Live Audio'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
            : 'bg-[#0A0A0A] py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white group-hover:opacity-80 transition-opacity uppercase font-display">
              SLANCIO
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-zinc-400 font-mono -mt-0.5">
              CREATIVE AI STUDIO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-300">
            <a href="#work" className="hover:text-white transition-opacity">Work</a>
            <a href="#philosophy" className="hover:text-white transition-opacity">Philosophy</a>
            <a href="#services" className="hover:text-white transition-opacity">Capabilities</a>
            <a href="#pipeline" className="hover:text-white transition-opacity">Production Lab</a>
            <a href="#comparison" className="hover:text-white transition-opacity">Why Slancio</a>
            <a 
              href="#what-if-studio" 
              onClick={(e) => {
                e.preventDefault();
                onOpenWhatIfStudio();
              }}
              className="flex items-center gap-1.5 text-white hover:opacity-70 transition-opacity border-b border-white/40 pb-0.5"
            >
              <Sparkles size={11} />
              <span>"What If" Studio</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenWhatIfStudio}
              className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white px-4 py-2 border border-white/15 hover:border-white/40 transition-all"
            >
              Pitch Generator
            </button>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-all duration-200"
            >
              <span>Start A Project</span>
              <ArrowUpRight size={13} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white border border-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-6 pt-4 pb-8 mt-3 space-y-5">
            <div className="flex flex-col space-y-4 text-xs uppercase tracking-widest font-medium text-zinc-300">
              <a 
                href="#work" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Selected Work
              </a>
              <a 
                href="#philosophy" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                The "What If" Philosophy
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Capabilities & Formats
              </a>
              <a 
                href="#pipeline" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Production Lab
              </a>
              <a 
                href="#what-if-studio" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatIfStudio();
                }}
                className="py-2 text-white border-b border-white/20 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} />
                  "What If" Pitch Generator
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-center font-bold text-black bg-white text-xs uppercase tracking-widest"
              >
                Start A Project
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

