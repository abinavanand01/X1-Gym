export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  image: string;
  badge?: string;
  experience?: string;
  focusAreas?: string[];
  social?: { platform: string; url: string }[];
}

export interface MembershipPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  size: 'large' | 'medium' | 'small';
}