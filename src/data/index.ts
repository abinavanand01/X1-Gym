import type { Program, Trainer, MembershipPlan, Testimonial, GalleryImage } from '../types';
import ASSETS from '../assets/images';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#philosophy' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

export const programs: Program[] = [
  {
    id: 1,
    title: 'Strength',
    description: 'Build raw strength and power through progressive overload, calibrated iron, and compound lifts.',
    image: ASSETS.programs.strength,
  },
  {
    id: 2,
    title: 'Hypertrophy',
    description: 'Structured training designed for maximum muscle growth, biomechanical efficiency, and aesthetic development.',
    image: ASSETS.programs.hypertrophy,
  },
  {
    id: 3,
    title: 'Performance',
    description: 'Improve acceleration, multi-planar speed, agility, and explosive athletic conditioning on our turf track.',
    image: ASSETS.programs.performance,
  },
  {
    id: 4,
    title: 'Conditioning',
    description: 'Build an unbreakable engine and cardiovascular resilience with metabolic intervals and high-intensity circuits.',
    image: ASSETS.programs.conditioning,
  },
  {
    id: 5,
    title: 'Mobility',
    description: 'Move better and recover faster. Targeted joint kinematics, functional range conditioning, and tissue release.',
    image: ASSETS.programs.mobility,
  },
  {
    id: 6,
    title: 'Personal Training',
    description: 'One-on-one private mentorship with master coaches, tailored biomechanics, and personalized progression tracking.',
    image: ASSETS.programs.personalTraining,
  },
];

export const trainers: Trainer[] = [
  {
    name: 'Arjun Rao',
    specialty: 'Head Coach • Strength & Conditioning',
    bio: 'Former national-level powerlifter with over a decade of elite athletic coaching pedigree. Arjun specializes in barbell kinematics, neuromuscular adaptation, and forging indestructible strength through calculated progressive overload.',
    image: ASSETS.trainers.arjun,
    badge: 'Master Coach',
    experience: '12+ Years Elite Pedigree',
    focusAreas: ['Barbell Kinematics', 'Maximal Strength', 'Athletic Longevity'],
  },
  {
    name: 'Maya Sharma',
    specialty: 'Mobility & Joint Longevity',
    bio: 'Certified functional movement specialist and former movement artist. Maya guides members toward fluid multi-planar freedom, injury mitigation, and bulletproof joint mechanics that keep you performing at peak capacity.',
    image: ASSETS.trainers.maya,
    badge: 'Mobility Lead',
    experience: '9+ Years Movement Science',
    focusAreas: ['Kinematic Freedom', 'Functional Range', 'Structural Balance'],
  },
  {
    name: 'Daniel James',
    specialty: 'Hypertrophy & Biomechanics',
    bio: 'Pioneer in evidence-based hypertrophy programming. Daniel combines millimeter-precise biomechanical execution with strategic nutritional periodization to build sculpted, powerful physiques built to endure.',
    image: ASSETS.trainers.daniel,
    badge: 'Physique Specialist',
    experience: '10+ Years Body Architecture',
    focusAreas: ['Hypertrophy Science', 'Mechanical Tension', 'Metabolic Precision'],
  },
  {
    name: 'Ananya Krishnan',
    specialty: 'Metabolic & Functional Capacity',
    bio: 'Renowned high-performance conditioning specialist. Ananya is passionate about forging unstoppable cardiovascular engines and functional work capacity through intentional, scientifically sequenced intervals.',
    image: ASSETS.trainers.ananya,
    badge: 'Engine Architect',
    experience: '8+ Years Performance',
    focusAreas: ['Work Capacity', 'Hybrid Conditioning', 'Athletic Speed'],
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    name: 'X1 Basic',
    price: '₹2,499',
    features: [
      'Full access during staffed training hours',
      'Access to daily structured group sessions',
      'Luxury locker rooms and amenities',
      'Initial biometric assessment & goal mapping',
      'X1 Training companion mobile app',
    ],
  },
  {
    name: 'X1 Pro',
    price: '₹4,999',
    features: [
      'Unlimited 24/7 training facility access',
      'All high-performance group classes included',
      '4 dedicated 1-on-1 coaching sessions per month',
      'Personalized nutrition planning & macros',
      'Bi-weekly DEXA body composition reviews',
      'Priority booking for training bays',
    ],
    highlighted: true,
  },
  {
    name: 'X1 Elite',
    price: '₹8,999',
    features: [
      'VIP all-access 24/7 keycard with guest privileges',
      'Unlimited personal coaching with Master Trainers',
      'Customized metabolic & periodized program design',
      'Full clinical nutrition & supplement protocol',
      'Recovery lounge access (Infrared Sauna & Cold Plunge)',
      'Complimentary laundry & private luxury locker',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    text: 'X1 completely redefined how I view training. The coaches treat every session like an architectural project — calculated, intentional, and fiercely motivating.',
    author: 'Rahul',
    role: 'Member since 2024',
  },
  {
    text: 'I finally found a space where serious training meets understated luxury. No gimmicks, no chaos — just world-class equipment and coaches who genuinely demand your best.',
    author: 'Priya',
    role: 'Member since 2023',
  },
  {
    text: 'The coaching calibre here is unmatched in Chennai. In six months of structured programming, I broke strength plateaus that had held me back for three years.',
    author: 'Vikram',
    role: 'Strength Athlete',
  },
  {
    text: 'From the atmosphere to the recovery lounge and precise coaching cues, everything at X1 is calibrated for individuals who value excellence.',
    author: 'Sara',
    role: 'Wellness Coach',
  },
];

export const galleryImages: GalleryImage[] = ASSETS.gallery.map(item => ({
  src: item.src,
  alt: item.alt,
  size: item.size,
}));

export const benefits = [
  {
    number: '01',
    title: 'Expert Coaching',
    description: 'Every member trains under elite certified coaches who bring competitive sports pedigree and rigorous scientific methodologies to every rep.',
  },
  {
    number: '02',
    title: 'Personalized Programs',
    description: 'No generic routines or cookie-cutter splits. Your protocol is engineered specifically around your biomechanics, recovery capacity, and goals.',
  },
  {
    number: '03',
    title: 'Premium Equipment',
    description: 'Experience custom-machined Eleiko barbells, calibrated competition plates, curved motorless treadmills, and premium bio-mechanical selectorized systems.',
  },
  {
    number: '04',
    title: 'Community & Accountability',
    description: 'Surround yourself with disciplined, ambitious individuals who share your hunger for personal growth and push each other toward greatness every single day.',
  },
];