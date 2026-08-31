import { Campaign } from '../types';
import { CampaignAssets } from './assets';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'aura-chronometer',
    title: 'AURA — Celestial Chronometer',
    client: 'AURA Horlogerie Genève',
    clientIndustry: 'Haute Horlogerie & Luxury',
    category: 'luxury-fashion',
    tagline: 'Time Born from Stardust',
    whatIfQuestion: 'What if time wasn’t measured on Earth, but extracted directly from deep-space nebulae?',
    image: CampaignAssets.watch,
    aspectRatio: '16:9 & 9:16 Anamorphic',
    duration: '45s Hero Film + 6x 15s Cutdowns',
    channels: ['YouTube Cinema 4K', 'Instagram Reels', 'Times Square 3D Billboard', 'Global Boutiques'],
    metrics: [
      { label: 'Turnaround', value: '4 Days' },
      { label: 'Traditional Cost Saved', value: '84%' },
      { label: 'Engagement Rate', value: '14.8%' },
      { label: 'View Through Rate', value: '72%' }
    ],
    brief: 'AURA needed a global launch campaign for their $120,000 celestial tourbillon. Traditional CGI would require 4 months and $350k. Slancio conceptualized a cosmic journey where micro-meteorites condense into the titanium bezel.',
    artDirection: {
      aesthetic: 'Obsidian Noir × Nebula Stardust Elegance',
      lighting: 'Golden hour rim lighting with deep space falloff',
      cinematography: 'Micro-macro probe lens flying through tourbillon gears',
      colorPalette: ['#0A0B10', '#F59E0B', '#D97706', '#9CA3AF', '#FFFFFF'],
      audioVibe: 'Cinematic orchestral crescendo with deep bass sub-pulses and mechanical ticking'
    },
    narrativeBreakdown: {
      act1: 'Extreme macro: floating obsidian dust in zero gravity. A single golden spark ignites.',
      act2: 'The camera spirals through an impossible clockwork mechanism bathed in amber starlight.',
      act3: 'Rapid pull-back reveals the timepiece floating serenely against a deep solar eclipse.'
    },
    promptArchitecture: [
      'Custom LoRA trained on Swiss watchmaker mechanical schematics',
      'Deforum multi-pass depth camera path through 3D zero-G environment',
      'DaVinci Resolve 32-bit floating point color grade and anamorphic flare polish'
    ],
    featured: true
  },
  {
    id: 'kronos-hypercar',
    title: 'KRONOS ZERO-1 — Electric Hypercar',
    client: 'Kronos Automotive Group',
    clientIndustry: 'Automotive & Clean Tech',
    category: 'commercial',
    tagline: 'Velocity in Pure Neon',
    whatIfQuestion: 'What if a hypercar cut through a rain-soaked Tokyo in 2049 without permitting a single physical street closure?',
    image: CampaignAssets.car,
    aspectRatio: '16:9 Cinema Scope & 4:5 Feed',
    duration: '60s Anthem + 3x 10s Social Bumpers',
    channels: ['Global Television', 'YouTube Pre-roll', 'TikTok Ads', 'Formula E Sponsorship'],
    metrics: [
      { label: 'Production Time', value: '5 Days' },
      { label: 'Location Permits Needed', value: 'Zero' },
      { label: 'Organic Shares', value: '2.4M+' },
      { label: 'Pre-Orders Driven', value: '1,200+' }
    ],
    brief: 'Kronos wanted to reveal their stealth electric hypercar with a high-octane night pursuit aesthetic. We built a hyper-realistic virtual Tokyo with wet asphalt reflections, holographic billboards, and supersonic speed dynamics.',
    artDirection: {
      aesthetic: 'Cyber-Noir Tokyo Rain × Aerodynamic Carbon Fiber',
      lighting: 'High-contrast neon reflections (cyan, magenta, amber) on liquid lacquer',
      cinematography: 'Chase drone camera with high-speed panning and low-angle wheel tracking',
      colorPalette: ['#050811', '#06B6D4', '#EC4899', '#3B82F6', '#E2E8F0'],
      audioVibe: 'Electrified synth-wave drive with roaring silent acceleration and rain ambiance'
    },
    narrativeBreakdown: {
      act1: 'Midnight in Shinjuku. Rain droplets hover in slow-motion as headlights pierce the fog.',
      act2: 'The vehicle surges down an illuminated overpass, lights refracting in wet asphalt.',
      act3: 'Aerodynamic spoilers shift; vehicle vanishes into a sonic boom of light.'
    },
    promptArchitecture: [
      '3D mesh camera projection blended with generative temporal diffusion',
      'Multi-angle synthetic car model consistency engine',
      'Realistic water droplet physics and surface friction pass'
    ],
    featured: true
  },
  {
    id: 'etheral-fragrance',
    title: 'ÉTHÉRAL N°9 — Haute Parfumerie',
    client: 'Maison de Fleur Paris',
    clientIndustry: 'Luxury Beauty & Fragrance',
    category: 'luxury-fashion',
    tagline: 'Liquid Gold in Perpetual Bloom',
    whatIfQuestion: 'What if fragrance wasn’t just smelled, but visualized as crystalline liquid gold blooming inside porcelain petals?',
    image: CampaignAssets.perfume,
    aspectRatio: '9:16 Vertical & 1:1 Square',
    duration: '30s Brand Film + 12x Micro-Stories',
    channels: ['Instagram Reels', 'TikTok Luxury Feed', 'Sephora Global Digital Displays'],
    metrics: [
      { label: 'ROAS Lift', value: '3.4x' },
      { label: 'Production Cost', value: '1/6th of Live Shoot' },
      { label: 'Brand Recall', value: '+42%' },
      { label: 'CTR', value: '4.9%' }
    ],
    brief: 'A legendary French perfume house sought to modernize their image for Gen-Z and millennial luxury buyers without losing heritage elegance. Slancio combined delicate organic physics with haute joaillerie lighting.',
    artDirection: {
      aesthetic: 'Ethereal Botanical Surrealism × Golden Hour Luminescence',
      lighting: 'Soft volumetric morning glow filtering through morning mist and crystal prisms',
      cinematography: 'Phantom Flex 4K slow motion (1000fps simulation) fluid dynamics',
      colorPalette: ['#1C1917', '#FDE047', '#FEF08A', '#E7E5E4', '#FCD34D'],
      audioVibe: 'Delicate harp arpeggios layered with warm ambient breath and crystal chimes'
    },
    narrativeBreakdown: {
      act1: 'A solitary porcelain bud trembles in morning stillness. A golden droplet falls.',
      act2: 'Upon impact, liquid amber ripples outward, transforming into blooming glass petals.',
      act3: 'The bottle emerges from the golden floral vortex, crowned with dewdrops.'
    },
    promptArchitecture: [
      'Subsurface scattering fluid simulation model pipeline',
      'Photorealistic glass refraction and caustics post-processing',
      'Consistent product bottle asset lock with variable dreamscape backgrounds'
    ],
    featured: true
  },
  {
    id: 'solaris-runner',
    title: 'SOLARIS X-ZERO — Kinetic Sportswear',
    client: 'AeroTech Performance Wear',
    clientIndustry: 'DTC Sportswear & Footwear',
    category: 'product-film',
    tagline: 'Defy the Surface',
    whatIfQuestion: 'What if running felt like rupturing through the sound barrier with neon gravitational threads?',
    image: CampaignAssets.sneaker,
    aspectRatio: '9:16 Reels/TikTok & 16:9 YouTube',
    duration: '20s Kinetic Ad + 5x Hook Variations',
    channels: ['TikTok Ads', 'Instagram Stories', 'Meta Advantage+', 'Twitch Pre-roll'],
    metrics: [
      { label: 'CTR Improvement', value: '+68%' },
      { label: 'Hook Retention (3s)', value: '78%' },
      { label: 'Creative Iterations', value: '18 Variations' },
      { label: 'CPA Reduction', value: '-35%' }
    ],
    brief: 'AeroTech needed a hyper-energetic digital campaign for their new nitrogen-infused sole sneaker. Slancio designed a visual explosion of neon citrus particles, liquid chrome weaves, and zero-gravity impact cushions.',
    artDirection: {
      aesthetic: 'High-Voltage Kinetic Streetwear × Zero-Gravity Studio',
      lighting: 'Neon citrus & ultraviolet strobe flashes with matte carbon backdrop',
      cinematography: 'Hyper-speed 360-degree rotational whip pans and freeze-frame cuts',
      colorPalette: ['#0B0F19', '#F97316', '#FBBF24', '#06B6D4', '#F3F4F6'],
      audioVibe: 'Heavy bass trap beat synced with sonic whooshes and kinetic pneumatic clicks'
    },
    narrativeBreakdown: {
      act1: 'High-speed footstrike hits liquid chrome; time snaps into extreme freeze frame.',
      act2: 'The shoe deconstructs mid-air: nitrogen foam cells expand with glowing citrus light.',
      act3: 'Instant snap-back to full speed as the runner bursts through a neon soundwave.'
    },
    promptArchitecture: [
      'Custom particle physics and cloth simulation generative workflow',
      'Beat-synced dynamic frame rate modulation (24fps to 120fps ramping)',
      'A/B tested visual hook variants for social ad performance optimization'
    ],
    featured: false
  },
  {
    id: 'atelier-vortex',
    title: 'ATELIER VORTEX — Haute Couture',
    client: 'Vortex Milano',
    clientIndustry: 'High Fashion & Runway',
    category: 'luxury-fashion',
    tagline: 'Architectural Fluidity',
    whatIfQuestion: 'What if desert brutalist architecture dissolved and re-wove itself into flowing metallic silk garments?',
    image: CampaignAssets.fashion,
    aspectRatio: '4:5 Editorial & 16:9 Fashion Film',
    duration: '90s Director’s Cut + Lookbook',
    channels: ['Vogue Digital', 'Milan Fashion Week Screenings', 'Instagram Carousel'],
    metrics: [
      { label: 'Editorial Features', value: '14 Outlets' },
      { label: 'Production Timeline', value: '6 Days' },
      { label: 'Catering/Crew Cost', value: '$0' },
      { label: 'Global Reach', value: '4.8M Impressions' }
    ],
    brief: 'Vortex Milano needed an ambitious visual lookbook that would normally require flying a 30-person crew to the Atacama Desert. Slancio directed an avant-garde film with sculptural architecture and impossible fabric physics.',
    artDirection: {
      aesthetic: 'Brutalist Monolith × Liquid Metallic Silk',
      lighting: 'Low golden hour sun casting 50-foot architectural geometry shadows',
      cinematography: 'Slow, majestic tracking shots with cinematic anamorphic lens distortion',
      colorPalette: ['#18181B', '#D97706', '#E4E4E7', '#78716C', '#F59E0B'],
      audioVibe: 'Minimalist ambient drone with avant-garde cello and whispering desert wind'
    },
    narrativeBreakdown: {
      act1: 'A colossal brutalist structure rises from ochre sand beneath a golden sun.',
      act2: 'The stone softens into shimmering molten bronze fabric draped across an ethereal model.',
      act3: 'The model walks forward as the horizon shifts between solid sculpture and flowing silk.'
    },
    promptArchitecture: [
      'Haute couture fabric draping simulation with realistic micro-weave texture',
      'Architectural lighting match to golden hour sun angles',
      'Face and silhouette consistency across 24 editorial wardrobe changes'
    ],
    featured: false
  }
];
