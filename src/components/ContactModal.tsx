import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrief?: string;
  initialBrand?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialBrief = '',
  initialBrand = ''
}) => {
  const [brand, setBrand] = useState(initialBrand);
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('Standard (4–7 Days)');
  const [service, setService] = useState('Cinematic Product Commercial');
  const [brief, setBrief] = useState(initialBrief);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialBrand) setBrand(initialBrand);
    if (initialBrief) setBrief(initialBrief);
  }, [initialBrand, initialBrief]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0D0D0D] border border-white/20 shadow-2xl overflow-hidden my-8 text-zinc-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-lg tracking-tight uppercase">SLANCIO</span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">// PROJECT INTAKE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Brief Received by SLANCIO
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
                Our Creative Director and AI Production Lead will review your brand brief and deliver a custom treatment deck & proposal within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  Commission an AI-Powered Commercial
                </h3>
                <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  Global turnaround: 4 to 7 business days from brief approval to 8K/4K masters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Brand / Company</label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. AURA Genève"
                    className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="director@brand.com"
                    className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Campaign Category</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans"
                  >
                    <option>Cinematic Product Commercial</option>
                    <option>Social-First & Short-Form Ads (TikTok/Reels)</option>
                    <option>Fashion & Luxury Visual Campaign</option>
                    <option>Cinematic Product Film & Macro CGI</option>
                    <option>AI UGC-Style Creator Pack</option>
                    <option>Full Omnichannel Campaign Rollout</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Target Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white font-sans"
                  >
                    <option>Standard (4–7 Days)</option>
                    <option>Expedited Sprint (48–72 Hours)</option>
                    <option>Next Month Launch</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Campaign Brief / "What If" Concept</label>
                <textarea
                  rows={4}
                  required
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Describe your product, the key message, target channels, or the 'What If' question you want to explore..."
                  className="w-full px-4 py-2.5 bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-white resize-none font-sans"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-white shrink-0" />
                  <span>100% NDA & Commercial IP Ownership</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Campaign Brief</span>
                  <Send size={13} />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
