import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { programs } from '../data';
import ProgramCard from './ProgramCard';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="relative bg-[#0d0d0f] text-white py-16 sm:py-24 md:py-36 lg:py-44 overflow-hidden border-t border-white/10">
      {/* Background subtle radial ambient depth */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-wine/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine-light font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                Curated Pathways
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white">
              FIND YOUR
              <br />
              <span className="text-outline-white hover:text-white transition-colors duration-500">TRAINING</span>
            </h2>
          </div>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            Every track is periodized and calibrated for measurable biological adaptation. Select your focus and immerse yourself in the standard.
          </p>
        </motion.div>

        {/* ═══ ASYMMETRICAL EDITORIAL GRID (Req #5) ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Item 0: Flagship Hero Card spanning 2 cols on Desktop */}
          {programs[0] && (
            <ProgramCard
              key={programs[0].id}
              program={programs[0]}
              index={0}
              featured={true}
              className="lg:col-span-2"
            />
          )}

          {/* Item 1: Complementary Vertical Card */}
          {programs[1] && (
            <ProgramCard
              key={programs[1].id}
              program={programs[1]}
              index={1}
              className="lg:col-span-1"
            />
          )}

          {/* Items 2, 3, 4: Supporting 3-column row */}
          {programs[2] && (
            <ProgramCard
              key={programs[2].id}
              program={programs[2]}
              index={2}
              className="lg:col-span-1"
            />
          )}
          {programs[3] && (
            <ProgramCard
              key={programs[3].id}
              program={programs[3]}
              index={3}
              className="lg:col-span-1"
            />
          )}
          {programs[4] && (
            <ProgramCard
              key={programs[4].id}
              program={programs[4]}
              index={4}
              className="lg:col-span-1"
            />
          )}

          {/* Item 5: Private Coaching / Elite Mentorship wide card spanning all 3 cols or 2 cols */}
          {programs[5] && (
            <ProgramCard
              key={programs[5].id}
              program={programs[5]}
              index={5}
              featured={true}
              className="lg:col-span-3 md:col-span-2"
            />
          )}
        </div>
      </div>
    </section>
  );
}