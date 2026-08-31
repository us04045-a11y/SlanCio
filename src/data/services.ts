import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cinematic-commercials',
    number: '01',
    title: 'Cinematic Product Commercials',
    subtitle: 'Cinema-grade storytelling without physical location limits',
    description: 'We conceive, storyboard, and direct high-end brand commercials with photorealistic CGI, cinematic lighting, and custom sound design that rival multi-million dollar film sets.',
    channels: ['YouTube 4K', 'Connected TV / OTT', 'DOOH Billboards', 'Broadcast Cinema'],
    deliverables: ['15s / 30s / 60s Master Cuts', '4K HDR Master', 'Spatial 5.1 & Stereo Mix', 'Color Graded DaVinci Master'],
    turnaround: '5–7 Business Days',
    iconName: 'Clapperboard',
    badge: 'Flagship'
  },
  {
    id: 'social-shortform',
    number: '02',
    title: 'Social-First & Short-Form Ads',
    subtitle: 'High-retention visual hooks engineered for TikTok & Instagram',
    description: 'Stop-the-scroll advertising built specifically for vertical consumption. We test multiple visual hooks and pacing styles to maximize 3-second hold rates and click-through conversions.',
    channels: ['Instagram Reels', 'TikTok Ads', 'YouTube Shorts', 'Snapchat'],
    deliverables: ['9:16 Vertical Video Suite', '5x Dynamic Hook Variants', 'Native Text & Subtitle Overlays', 'Trend Audio Mixes'],
    turnaround: '3–5 Business Days',
    iconName: 'Smartphone'
  },
  {
    id: 'cinematic-product-films',
    number: '03',
    title: 'Cinematic Product Films & Macro CGI',
    subtitle: 'Sensory product reveals, liquid physics & micro-mechanics',
    description: 'Highlighting every texture, bevel, droplet, and component. Ideal for consumer electronics, luxury watches, cosmetics, beverages, and innovative industrial design.',
    channels: ['Website Hero Landing', 'Product Launch Keynotes', 'E-Commerce Detail Pages', 'Digital Flagships'],
    deliverables: ['Seamless 360° Loops', 'Exploded View Component Animations', 'Material Micro-Zooms', 'Transparent WebM / ProRes'],
    turnaround: '4–6 Business Days',
    iconName: 'Box'
  },
  {
    id: 'ai-ugc-performance',
    number: '04',
    title: 'AI UGC-Style Performance Ads',
    subtitle: 'Hyper-converting authentic creator aesthetics scaled globally',
    description: 'The raw, relatable trust of UGC merged with high-production polish. We generate diverse, authentic creator avatars across 20+ demographics and languages without talent agency bottlenecks.',
    channels: ['Meta Advantage+', 'TikTok Spark Ads', 'Pinterest Ads', 'YouTube Discovery'],
    deliverables: ['10–25 Multi-Demographic Variations', 'Native Voiceovers (30+ Accents)', 'Dynamic B-Roll Cutdowns', 'Rapid Iteration Packs'],
    turnaround: '48–72 Hours',
    iconName: 'Users'
  },
  {
    id: 'luxury-fashion-editorial',
    number: '05',
    title: 'Fashion & Luxury Editorial Campaigns',
    subtitle: 'Haute couture dreamscapes and architectural aesthetic films',
    description: 'We transport your collections into impossible surrealist environments—from brutalist floating monoliths to bioluminescent botanical gardens—with flawless garment drape and lighting.',
    channels: ['Vogue / Harper’s Digital', 'Milan/Paris Fashion Week Screens', 'Instagram Carousels', 'Print & High-Res Billboards'],
    deliverables: ['Director’s Cut Fashion Film', 'High-Res Still Lookbook (8K)', 'Social Teaser Clips', 'Style & Lighting Bible'],
    turnaround: '5–7 Business Days',
    iconName: 'Sparkles',
    badge: 'High Craft'
  },
  {
    id: 'creative-concepts-worldbuilding',
    number: '06',
    title: 'Creative Concepts & Campaign Architecture',
    subtitle: 'From the initial “What if” to a complete global campaign rollout',
    description: 'Full-spectrum creative agency strategy: brand positioning, narrative copywriting, visual treatment decks, moodboards, and multi-market localization strategies.',
    channels: ['Omnichannel Global Rollout', 'Investor & Retail Pitch Decks', 'Brand Guidelines', 'Global PR Toolkits'],
    deliverables: ['Comprehensive Creative Deck', 'Full Storyboard Frames', 'Visual Prompt Architecture', 'Omnichannel Deployment Blueprint'],
    turnaround: '4–5 Business Days',
    iconName: 'Compass'
  }
];

export const PRODUCTION_STEPS = [
  {
    step: '01',
    title: 'The "What If" Narrative Hook',
    category: 'Creative Concept',
    description: 'Every project begins with a transformative question. Our creative directors and copywriters craft the core concept, emotional arc, and visual script that sets your brand apart.',
    tools: 'Creative Direction • Storyboard Architecture • Scriptwriting'
  },
  {
    step: '02',
    title: 'Visual Direction & Style Bibles',
    category: 'Art Direction',
    description: 'We establish an uncompromising aesthetic language: lighting schemas, camera lenses (anamorphic, probe, cine-prime), color palettes, and custom model training to lock brand consistency.',
    tools: 'Custom LoRA Training • Style Bible • Lighting Archetypes'
  },
  {
    step: '03',
    title: 'Generative AI Motion & Camera Direction',
    category: 'AI Production Velocity',
    description: 'Using state-of-the-art diffusion motion models, 3D depth camera tracking, and physics simulations, we render shots that would be physically impossible on a traditional set.',
    tools: 'Diffusion Motion • Spatial Depth Tracking • Micro-Physics'
  },
  {
    step: '04',
    title: 'DaVinci 32-bit Grade & Spatial Sound Design',
    category: 'Mastering & Polish',
    description: 'Human finishing is where the magic locks in: bespoke color grading, typography animation, Foley sound effects, original audio compositions, and platform-specific mastering.',
    tools: 'DaVinci Resolve • 32-Bit Float Color • Spatial Foley • Sound Master'
  }
];

export const AGENCY_COMPARISON = [
  {
    feature: 'Production Velocity',
    traditional: '3 to 6 months per campaign',
    aiToolOnly: 'Instant, but erratic & unstructured',
    slancio: '4 to 7 business days from brief to master'
  },
  {
    feature: 'Creative Direction & Storytelling',
    traditional: 'Yes, but weighed down by massive overhead',
    aiToolOnly: 'None. You are left alone with prompts',
    slancio: 'Dedicated Creative Director & Art Lead on every brief'
  },
  {
    feature: 'Brand Asset & Face Consistency',
    traditional: 'Consistent, but requires expensive physical talent',
    aiToolOnly: 'Glitchy, flickering, changes every second',
    slancio: '100% brand asset lock & custom aesthetic LoRA consistency'
  },
  {
    feature: 'Production Budget & Agility',
    traditional: '$150,000 – $500,000+ per TVC',
    aiToolOnly: '$20/month subscription (unusable for tier-1 brands)',
    slancio: '70–85% more cost-effective with zero location limits'
  },
  {
    feature: 'Finishing & Sound Engineering',
    traditional: 'Separate post-production house bill',
    aiToolOnly: 'No audio or robotic synthetic music',
    slancio: 'Bespoke original soundscapes, Foley & cinema color grade'
  }
];
