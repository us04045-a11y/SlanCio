import { WhatIfPreset, GeneratedPitch } from '../types';

export const WHAT_IF_PRESETS: WhatIfPreset[] = [
  {
    id: 'luxury-watch',
    industry: 'Haute Horlogerie',
    brandType: 'Ultra-Luxury Timepiece',
    question: 'What if time wasn’t measured on Earth, but extracted directly from deep-space nebulae?',
    aesthetic: 'Obsidian Noir × Stardust Golden Rim Lighting',
    objective: 'Brand Halo Film & 3D Anamorphic Billboard',
    sampleConcept: 'A celestial tourbillon floats weightlessly in zero gravity as micro-meteorites condense into titanium bezels.'
  },
  {
    id: 'electric-hypercar',
    industry: 'Automotive & Clean Tech',
    brandType: 'Electric Supercar',
    question: 'What if a hypercar cut through a rain-soaked Tokyo in 2049 in one continuous unbroken camera sweep?',
    aesthetic: 'Cyber-Noir Tokyo Rain × Aerodynamic Carbon Fiber',
    objective: 'High-Impact YouTube Cinema & Global Launch Anthem',
    sampleConcept: 'Midnight in Shinjuku with holographic rain reflecting off obsidian paint before a supersonic light acceleration.'
  },
  {
    id: 'biotech-skincare',
    industry: 'Beauty & Skincare',
    brandType: 'DTC Biotech Hydration Serum',
    question: 'What if 1 drop of cellular serum could restore an entire frozen glacier into a blooming botanical oasis?',
    aesthetic: 'Ethereal Glacial Dew × Micro Cellular Luminescence',
    objective: 'High-Converting TikTok & Instagram Reels Campaign',
    sampleConcept: 'Micro-macro zoom into a frozen skin crystal as iridescent water droplets thaw into vibrant botanical dew.'
  },
  {
    id: 'botanical-spirits',
    industry: 'Beverage & Luxury Spirits',
    brandType: 'Artisanal Alpine Gin',
    question: 'What if the mist of the Swiss Alps was harvested by hand and poured directly into crystalline smoked glass?',
    aesthetic: 'Nordic Mist × Amber Prism Refractions',
    objective: 'Instagram Feed Commercial & Digital Flagship Hero',
    sampleConcept: 'Whispering mountain pines, morning condensation gathering on wild juniper berries, flowing into liquid crystal.'
  },
  {
    id: 'smart-audio',
    industry: 'Consumer Electronics',
    brandType: 'Spatial Audio Headphones',
    question: 'What if soundwaves became visible ribbons of colored light that reshape the architecture of the city as you walk?',
    aesthetic: 'Kinetic Neon Soundscapes × Matte Minimalist Industrial',
    objective: 'Fast-Paced TikTok UGC & YouTube Pre-roll',
    sampleConcept: 'The moment ANC engages, chaotic urban traffic dissolves into synchronized musical light frequencies.'
  },
  {
    id: 'cyber-streetwear',
    industry: 'Fashion & Streetwear',
    brandType: 'Avant-Garde Technical Outerwear',
    question: 'What if outerwear adapted its geometric weave in real-time based on atmospheric humidity and heartbeat?',
    aesthetic: 'Brutalist Monolith × Liquid Chrome Reactive Fabric',
    objective: 'Lookbook Motion Film & Meta Performance Ads',
    sampleConcept: 'Model stepping through heavy torrential rain as waterproof micro-scales ripple and illuminate in ultraviolet.'
  }
];

export function generateLocalPitch(
  brandName: string,
  industry: string,
  whatIfCustom: string,
  objective: string,
  aesthetic: string
): GeneratedPitch {
  const cleanBrand = brandName.trim() || 'Your Brand';
  const cleanHook = whatIfCustom.trim() || `What if ${cleanBrand} shattered every visual convention in the ${industry} category?`;

  return {
    brandName: cleanBrand,
    whatIfHook: cleanHook,
    bigIdea: `An uncompromising campaign titled "${cleanBrand}: The Kinetic Frontier", flipping conventional ${industry.toLowerCase()} advertising by staging impossible physical physics with cinematic photorealism.`,
    creativeDirection: {
      visualAesthetic: aesthetic || 'Cinematic High-Contrast Editorial × Photorealistic Specular Polish',
      lightingAndOptics: '35mm anamorphic prime lens, subtle streak flares, 4:3 / 9:16 dynamic framing, soft directional key with volumetric atmospheric haze.',
      cinematicPalette: ['#0A0B0F', '#F59E0B', '#3B82F6', '#E2E8F0', '#1E293B'],
      soundDesignMood: 'Deep subsonic sub-bass swells, bespoke textural Foley clicks, rising cinematic orchestral chords with crisp spatial panning.'
    },
    storyboardActs: [
      {
        act: 'Act 1: The Disruption (0.0s – 3.2s)',
        timing: 'First 3 Seconds — Extreme High-Retention Hook',
        visualDescription: `Hyper-macro slow-motion opening. An impossible visual anomaly occurs directly in front of the lens featuring ${cleanBrand}'s core hero element in sharp focus.`,
        voiceoverOrCopy: `On-screen dynamic typographic hit: "What if you stopped settling for expected?"`
      },
      {
        act: 'Act 2: The Acceleration (3.2s – 11.5s)',
        timing: 'Middle Sequence — Sensory Engagement & Feature Showcase',
        visualDescription: `Continuous camera motion sweeps around the product. Fluid dynamics, light refraction, and material textures react dynamically to gravity-defying environments.`,
        voiceoverOrCopy: `Narrative voiceover / sound beat: "Engineered beyond boundaries. Built for the unrepeatable."`
      },
      {
        act: 'Act 3: The Payoff (11.5s – 15.0s)',
        timing: 'Climax & Brand Lock — Call to Action',
        visualDescription: `Final explosive visual lock. The camera pulls back to reveal the complete product silhouette crowned by golden rim lighting and the slancio cinematic brand sting.`,
        voiceoverOrCopy: `${cleanBrand}. What if is where we begin.`
      }
    ],
    channelStrategy: [
      {
        platform: 'Instagram Reels & TikTok (9:16)',
        format: '15s & 20s High-Retention Cutdowns',
        hookMechanism: 'First frame kinetic motion with 0.8s pattern interrupt'
      },
      {
        platform: 'YouTube 4K & Connected TV (16:9)',
        format: '30s & 45s Brand Anthem / Hero Commercial',
        hookMechanism: 'Cinematic widescreen soundscape and immersive visual depth'
      },
      {
        platform: 'Meta Advantage+ / Paid Social (4:5 & 1:1)',
        format: '5x Hook-Varied Performance Ads',
        hookMechanism: 'A/B tested headline overlays and dynamic product zoom ins'
      }
    ],
    aiProductionFeasibility: {
      turnaroundEstimate: '4 to 6 Business Days',
      renderFidelity: '8K Master / 4K UHD 60fps Broadcast Ready',
      traditionalBudgetSavings: 'Est. 78% reduction vs physical studio shoot'
    }
  };
}
