export type CampaignCategory = 
  | 'all'
  | 'commercial'
  | 'luxury-fashion'
  | 'social-ugc'
  | 'product-film'
  | 'surrealist-3d';

export interface Campaign {
  id: string;
  title: string;
  client: string;
  clientIndustry: string;
  category: CampaignCategory;
  tagline: string;
  whatIfQuestion: string;
  image: string;
  aspectRatio: string;
  duration: string;
  channels: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  brief: string;
  artDirection: {
    aesthetic: string;
    lighting: string;
    cinematography: string;
    colorPalette: string[];
    audioVibe: string;
  };
  narrativeBreakdown: {
    act1: string;
    act2: string;
    act3: string;
  };
  promptArchitecture: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  channels: string[];
  deliverables: string[];
  turnaround: string;
  iconName: string;
  badge?: string;
}

export interface WhatIfPreset {
  id: string;
  industry: string;
  brandType: string;
  question: string;
  aesthetic: string;
  objective: string;
  sampleConcept: string;
}

export interface GeneratedPitch {
  brandName: string;
  whatIfHook: string;
  bigIdea: string;
  creativeDirection: {
    visualAesthetic: string;
    lightingAndOptics: string;
    cinematicPalette: string[];
    soundDesignMood: string;
  };
  storyboardActs: {
    act: string;
    timing: string;
    visualDescription: string;
    voiceoverOrCopy: string;
  }[];
  channelStrategy: {
    platform: string;
    format: string;
    hookMechanism: string;
  }[];
  aiProductionFeasibility: {
    turnaroundEstimate: string;
    renderFidelity: string;
    traditionalBudgetSavings: string;
  };
}
