import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Program } from '../types';
import ImageWithFallback from './ImageWithFallback';

interface Props {
  program: Program;
  index: number;
  featured?: boolean;
  className?: string;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: easeOut },
  }),
};

function scrollToSection(selector: string) {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (el) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, offset: -40 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default function ProgramCard({ program, index, featured = false, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  /* ─── 3D Tilt Effect ─── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 250, damping: 25, mass: 0.15 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col bg-[#141416] hover:bg-[#18181b] border border-white/10 hover:border-wine/60 rounded-xs overflow-hidden transition-all duration-400 shadow-lg hover:shadow-2xl hover:shadow-black/40 ${
        featured ? 'md:grid md:grid-cols-12 md:items-stretch' : ''
      } ${className}`}
    >
      {/* Program Portrait Header */}
      <div
        className={`relative overflow-hidden bg-black/40 ${
          featured ? 'md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-full' : 'aspect-[16/11]'
        }`}
      >
        <ImageWithFallback
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover editorial-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent pointer-events-none" />

        {/* Editorial program number */}
        <div className="absolute top-3.5 left-4 sm:top-4 sm:left-5 text-white/90 font-mono text-xs tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10">
          TRACK 0{program.id}
        </div>

        {/* Small badge */}
        <div className="absolute top-3.5 right-4 sm:top-4 sm:right-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-wine/80 text-white rounded-xs backdrop-blur-sm border border-wine/40">
            {featured ? 'Flagship Track' : 'Curriculum'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div
        className={`p-5 sm:p-6 md:p-8 flex flex-col justify-between bg-[#141416] ${
          featured ? 'md:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-wine-light transition-colors duration-300">
              {program.title}
            </h3>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-wine group-hover:border-wine flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight
                size={15}
                className="text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              />
            </div>
          </div>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
            {program.description}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10">
          <a
            href="#membership"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#membership');
            }}
            className="inline-flex items-center gap-2 text-wine-light hover:text-white text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group-hover:translate-x-1"
          >
            <span>Learn More & Enroll</span>
            <span className="text-sm font-sans">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}