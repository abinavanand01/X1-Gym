import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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

export default function FeaturedTraining() {
  const ref = useRef<HTMLDivElement>(null);
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.25, 7);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.2,
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const yImage = useTransform(smoothProgress, [0, 1], [-25, 25]);

  return (
    <section ref={ref} className="relative bg-[#0d0d0f] text-white py-16 sm:py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="relative rounded-xs bg-[#141416] border border-white/10 p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Cinematic Large Photo (7 cols) with B&W -> Color hover interaction */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-xs aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-black/60 group">
              <motion.div style={{ scale, y: yImage }} className="w-full h-full will-change-transform">
                <ImageWithFallback
                  src={ASSETS.hero.featured}
                  alt="X1 Featured Training Arena"
                  className="w-full h-full object-cover object-center editorial-img"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 max-w-[calc(100%-24px)]">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-xs border border-white/20 shadow-sm truncate">
                  <Sparkles size={12} className="text-wine-light shrink-0" />
                  <span className="truncate">High Performance Arena</span>
                </span>
              </div>
            </div>

            {/* Editorial Feature Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6 lg:py-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
                <span className="text-wine-light font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                  Experience The Standard
                </span>
              </div>

              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-white">
                TRAIN WITH
                <br />
                <span className="text-outline-white hover:text-white transition-colors duration-500">PURPOSE</span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
                Every repetition, every interval, every recovery cycle at X1 is calibrated with unrelenting intention. 
                From the moment you step onto our floors, you are immersed in an uncompromising environment engineered to elevate your physical output.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-3 pb-3 border-y border-white/10 font-mono text-[11px] sm:text-xs">
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-1 gap-1">
                  <span className="text-stone-400 uppercase tracking-wider">Lifting Surfaces</span>
                  <span className="text-white font-semibold">Solid Oak Olympic Bay</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-1 gap-1">
                  <span className="text-stone-400 uppercase tracking-wider">Iron Spec</span>
                  <span className="text-white font-semibold">Calibrated Eleiko Competition</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-1 gap-1">
                  <span className="text-stone-400 uppercase tracking-wider">Coach-to-Athlete Ratio</span>
                  <span className="text-white font-semibold">1 : 4 Maximum</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  ref={magneticBtn.ref}
                  onMouseMove={magneticBtn.onMouseMove}
                  onMouseLeave={magneticBtn.onMouseLeave}
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#programs');
                  }}
                  className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-all duration-300 shadow-md shadow-wine/20 active:scale-[0.98] will-change-transform w-full sm:w-auto min-h-[48px]"
                >
                  <span>Discover X1 Curriculum</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}