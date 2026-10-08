import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown, Award, Compass } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import ASSETS from '../assets/images';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

function scrollToSection(selector: string) {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (el) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.4, offset: -50 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ─── Cinematic Line-by-Line Mask Reveal ─── */
const heroLines = ['BUILD THE', 'STRONGEST', 'VERSION OF YOU.'];

const lineRevealVariants = {
  hidden: { y: '110%', rotateX: 12 },
  visible: (i: number) => ({
    y: '0%',
    rotateX: 0,
    transition: {
      delay: 0.35 + i * 0.18,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroCtaMagnetic = useMagnetic<HTMLAnchorElement>(0.25, 7);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.2,
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 1.08]);
  const yImage = useTransform(smoothProgress, [0, 1], [0, 60]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative bg-ivory pt-20 sm:pt-28 md:pt-44 pb-12 sm:pb-16 md:pb-28 overflow-hidden"
    >
      {/* Subtle Oversized Editorial Monogram Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-0 max-w-full text-[20vw] font-black text-near-black/[0.02] select-none pointer-events-none leading-none tracking-tighter overflow-hidden"
      >
        X1
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        {/* Editorial Top Headline Section */}
        <div className="max-w-5xl mb-6 sm:mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
            <span className="text-wine font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold truncate">
              The Standard of Athletic Mastery • Chennai
            </span>
          </motion.div>

          {/* ═══ CINEMATIC LINE-BY-LINE MASK REVEAL HEADING WITH OUTLINED WORD ═══ */}
          <h1 className="text-[2.15rem] xs:text-[2.4rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.96] sm:leading-[0.92] tracking-tighter text-near-black mb-5 sm:mb-8">
            {heroLines.map((line, i) => (
              <span
                key={line}
                className="block overflow-hidden"
                style={{ perspective: '600px' }}
              >
                <motion.span
                  custom={i}
                  variants={lineRevealVariants}
                  initial="hidden"
                  animate="visible"
                  className={`block will-change-transform ${
                    line === 'STRONGEST'
                      ? 'text-outline-wine hover:text-wine transition-colors duration-500'
                      : ''
                  }`}
                  style={{ transformOrigin: 'bottom left' }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="grid md:grid-cols-12 gap-5 sm:gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: easeOut }}
              className="md:col-span-8 text-dark-gray text-xs sm:text-base md:text-xl leading-relaxed max-w-2xl font-normal"
            >
              Intelligent biomechanics, calibrated competition iron, and master-level coaching. 
              Designed to forge physical resilience and unshakeable confidence — inside and outside the gym.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: easeOut }}
              className="md:col-span-4 flex flex-row items-center gap-2.5 sm:gap-3 w-full md:justify-end"
            >
              <a
                ref={heroCtaMagnetic.ref}
                onMouseMove={heroCtaMagnetic.onMouseMove}
                onMouseLeave={heroCtaMagnetic.onMouseLeave}
                href="#membership"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#membership');
                }}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 bg-wine hover:bg-wine-light text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] rounded-xs transition-all duration-300 shadow-md shadow-wine/20 active:scale-[0.98] will-change-transform min-h-[48px] text-center"
              >
                <span>Start Training</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </a>
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#programs');
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-7 py-3.5 sm:py-4 bg-white border border-border-beige hover:border-near-black text-near-black text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] rounded-xs transition-all duration-300 active:scale-[0.98] min-h-[48px] text-center"
              >
                Explore
              </a>
            </motion.div>
          </div>
        </div>

        {/* Large Cinematic Framed Photography */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.15, ease: easeOut }}
          className="relative rounded-sm bg-white border border-border-beige p-2 sm:p-3 md:p-4 shadow-[0_20px_50px_rgba(17,17,17,0.06)]"
        >
          <div className="relative aspect-[16/11] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xs bg-ivory-warm">
            <motion.div style={{ scale, y: yImage }} className="w-full h-full will-change-transform">
              <ImageWithFallback
                src={ASSETS.hero.background}
                alt="X1 Athletic Club Interior Chennai"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </motion.div>

            {/* Subtle natural bottom gradient for badge legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/35 via-transparent to-transparent pointer-events-none" />

            {/* Floating Editorial Badges */}
            <div className="absolute top-2.5 left-2.5 sm:top-6 sm:left-6 z-10 max-w-[calc(100%-20px)]">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md border border-white/60 text-near-black text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.2em] rounded-xs shadow-sm truncate">
                <Compass size={12} className="text-wine shrink-0" />
                <span className="truncate">Flagship Facility • 14,000 SQ FT</span>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-10 hidden sm:block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-near-black/80 backdrop-blur-md border border-white/10 text-ivory text-[11px] font-mono uppercase tracking-[0.2em] rounded-xs">
                <Award size={13} className="text-wine-light" />
                <span>Official Eleiko Certified Platform</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Down Scroll Anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-dark-gray/60 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.2em] text-center sm:text-left"
        >
          <span>Discipline • Progressive Overload • Longevity</span>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#philosophy');
            }}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-wine transition-colors min-h-[40px]"
          >
            <span>Scroll Down</span>
            <ChevronDown size={14} className="text-wine animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}