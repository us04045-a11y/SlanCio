import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophyWhatIf } from './components/PhilosophyWhatIf';
import { WorkShowcase } from './components/WorkShowcase';
import { WhatIfStudio } from './components/WhatIfStudio';
import { ServicesGrid } from './components/ServicesGrid';
import { ProductionPipeline } from './components/ProductionPipeline';
import { ComparisonSection } from './components/ComparisonSection';
import { Footer } from './components/Footer';
import { CampaignModal } from './components/CampaignModal';
import { ContactModal } from './components/ContactModal';
import { Campaign } from './types';

export default function App() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactBrief, setContactBrief] = useState('');
  const [contactBrand, setContactBrand] = useState('');

  const handleOpenContact = (brief = '', brand = '') => {
    setContactBrief(brief);
    setContactBrand(brand);
    setIsContactOpen(true);
  };

  const handleBriefFromCampaign = (campaignTitle: string) => {
    handleOpenContact(
      `We want to commission an AI commercial with the aesthetic and storytelling level of the "${campaignTitle}" campaign.`,
      ''
    );
  };

  const handlePreFillInquiry = (briefText: string, brandName: string) => {
    handleOpenContact(briefText, brandName);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-white selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-20">
        <div className="w-[1px] h-full bg-white/5" />
        <div className="w-[1px] h-full bg-white/5 hidden sm:block" />
        <div className="w-[1px] h-full bg-white/5 hidden md:block" />
        <div className="w-[1px] h-full bg-white/5" />
      </div>

      {/* Main Navigation Header */}
      <Header
        onOpenWhatIfStudio={() => scrollToSection('what-if-generator')}
        onOpenContact={() => handleOpenContact()}
      />

      <main className="relative z-10">
        {/* 1. Hero Showcase with Bold Typography & Reel Stage */}
        <Hero
          onSelectCampaign={(campaign) => setSelectedCampaign(campaign)}
          onOpenWhatIfStudio={() => scrollToSection('what-if-generator')}
          onOpenContact={() => handleOpenContact()}
        />

        {/* 2. Philosophy & Core "What If" Thesis */}
        <PhilosophyWhatIf
          onOpenWhatIfStudio={() => scrollToSection('what-if-generator')}
        />

        {/* 3. Selected Campaigns & Case Studies */}
        <WorkShowcase
          onSelectCampaign={(campaign) => setSelectedCampaign(campaign)}
        />

        {/* 4. Interactive "What If" Studio & Concept Pitch Generator */}
        <WhatIfStudio
          onPreFillInquiry={handlePreFillInquiry}
        />

        {/* 5. Capabilities & Production Formats */}
        <ServicesGrid
          onOpenContact={() => handleOpenContact()}
        />

        {/* 6. Production Pipeline & AI Direction Framework */}
        <ProductionPipeline
          onOpenWhatIfStudio={() => scrollToSection('what-if-generator')}
        />

        {/* 7. Competitive Differentiation Matrix */}
        <ComparisonSection />
      </main>

      {/* 8. Bold Typography Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenWhatIfStudio={() => scrollToSection('what-if-generator')}
      />

      {/* Case Study / Treatment Deck Modal */}
      <CampaignModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        onBriefCampaign={handleBriefFromCampaign}
      />

      {/* Project Brief / Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialBrief={contactBrief}
        initialBrand={contactBrand}
      />
    </div>
  );
}
