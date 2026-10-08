/**
 * Centralized Asset Registry for X1 Fitness
 * 
 * To replace any placeholder or sample images with your actual gym photography,
 * simply update the file paths or URLs in this configuration.
 */

export const ASSETS = {
  hero: {
    background: '/images/hero/hero-bg.jpg',
    philosophy: '/images/hero/philosophy.jpg',
    featured: '/images/hero/featured-training.jpg',
  },
  programs: {
    strength: '/images/programs/strength.jpg',
    hypertrophy: '/images/programs/hypertrophy.jpg',
    performance: '/images/programs/performance.jpg',
    conditioning: '/images/programs/conditioning.jpg',
    mobility: '/images/programs/mobility.jpg',
    personalTraining: '/images/programs/personal-training.jpg',
  },
  trainers: {
    arjun: '/images/trainers/arjun-portrait.jpg',
    maya: '/images/trainers/maya-portrait.jpg',
    daniel: '/images/trainers/daniel-portrait.jpg',
    ananya: '/images/trainers/ananya-portrait.jpg',
  },
  gallery: [
    { src: '/images/gallery/gallery-1.jpg', alt: 'Main gym floor with custom racks', size: 'large' as const, label: 'Main Floor' },
    { src: '/images/gallery/gallery-2.jpg', alt: 'Free weights and dumbbell collection', size: 'small' as const, label: 'Free Weights' },
    { src: '/images/gallery/gallery-3.jpg', alt: 'Olympic lifting platform', size: 'small' as const, label: 'Olympic Zone' },
    { src: '/images/gallery/gallery-4.jpg', alt: 'Cardio conditioning arena', size: 'medium' as const, label: 'Cardio Suite' },
    { src: '/images/gallery/gallery-5.jpg', alt: 'Athletic sprint turf and sleds', size: 'large' as const, label: 'Turf Track' },
    { src: '/images/gallery/gallery-6.jpg', alt: 'Recovery and mobility lounge', size: 'small' as const, label: 'Recovery Bay' },
    { src: '/images/gallery/gallery-7.jpg', alt: 'Small group athletic training session', size: 'medium' as const, label: 'Group Studio' },
    { src: '/images/gallery/gallery-8.jpg', alt: 'Precision plate-loaded machinery', size: 'small' as const, label: 'Precision Iron' },
  ],
  equipment: {
    equipment1: '/images/equipment/equipment-1.jpg',
    equipment2: '/images/equipment/equipment-2.jpg',
  },
} as const;

export default ASSETS;
