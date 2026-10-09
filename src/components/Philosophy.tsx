import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import ASSETS from '../assets/images';

const easeOut = [0.22, 1, 0.36, 1] as const;

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

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
      <span id="philosophy" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Image side - White framed editorial photo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: easeOut }}
            className="lg:col-span-5 relative group"
          >
            <div className="bg-white border border-border-beige p-2.5 sm:p-3.5 md:p-4 rounded-sm shadow-[0_12px_40px_rgba(17,17,17,0.04)]">
              <div className="relative aspect-[4/3] xs:aspect-[1/1] sm:aspect-[3/4] overflow-hidden rounded-xs bg-ivory-warm">
                <ImageWithFallback
                  src={ASSETS.hero.philosophy}
                  alt="The X1 Training Philosophy - Focused athlete"
                  className="w-full h-full object-cover object-center editorial-img"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 z-20">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.25em] text-near-black bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs border border-white/60 shadow-sm inline-block truncate max-w-full font-semibold">
                    Discipline • Intensity • Purpose
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pl-6"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                The X1 Method
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] sm:leading-[1.02] tracking-tight text-near-black">
              Training isn't just about looking strong.
              <br />
              <span className="text-wine">It's about becoming stronger.</span>
            </h2>

            <p className="text-dark-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              At X1, we believe that genuine physical transformation is engineered through discipline, 
              calculated progressive overload, and intelligent biomechanics. Every workout is curated 
              to strip away noise, ignite drive, and build resilience that transcends the gym floor.
            </p>

            <p className="text-dark-gray/80 text-sm md:text-base leading-relaxed max-w-xl">
              We do not offer generic templates or superficial fitness trends. Our methodology synthesizes 
              sports science, Olympic barbell standards, and personalized recovery protocols into 
              a sustainable training system tailored to your individual anatomy.
            </p>

            {/* Editorial highlights list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-near-black font-medium">
                <div className="w-5 h-5 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Zero guesswork programming</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-near-black font-medium">
                <div className="w-5 h-5 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Calibrated competition gear</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-near-black font-medium">
                <div className="w-5 h-5 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>1-on-1 kinematic assessment</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-near-black font-medium">
                <div className="w-5 h-5 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Infrared recovery protocol</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#programs');
                }}
                className="group inline-flex items-center gap-3 text-near-black hover:text-wine text-xs uppercase tracking-[0.25em] font-bold transition-colors duration-300"
              >
                <span>Explore the programs</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-wine" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}