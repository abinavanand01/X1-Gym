import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

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

/* ─── Line-by-line mask reveal for CTA heading ─── */
const ctaLines = ['READY TO BECOME', 'X1?'];

const lineReveal = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: '0%',
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-36 lg:py-44 overflow-hidden bg-white border-t border-border-beige">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center bg-ivory border border-border-beige rounded-sm p-6 sm:p-10 md:p-16 lg:p-20 shadow-[0_15px_45px_rgba(17,17,17,0.03)]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-wine inline-block" />
            <span className="text-wine font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              The Next Evolution
            </span>
            <span className="w-8 h-[1px] bg-wine inline-block" />
          </motion.div>

          {/* ═══ Cinematic mask reveal for CTA heading ═══ */}
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tighter text-near-black mb-6 sm:mb-8">
            {ctaLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={lineReveal}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className={`block will-change-transform ${
                    line === 'X1?' ? 'text-outline-wine hover:text-wine transition-colors duration-500' : ''
                  }`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
            className="text-dark-gray text-sm sm:text-base md:text-xl max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed font-normal"
          >
            Your next level starts with your next session. Step into the arena and experience what purposeful, scientifically engineered training can unlock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.8, delay: 0.65, ease: easeOut }}
            className="flex justify-center"
          >
            {/* Magnetic CTA button */}
            <a
              ref={magneticBtn.ref}
              onMouseMove={magneticBtn.onMouseMove}
              onMouseLeave={magneticBtn.onMouseLeave}
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#membership');
              }}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 sm:py-5 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors duration-300 shadow-xl shadow-wine/25 active:scale-[0.98]"
            >
              <span>Start Your Journey</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}