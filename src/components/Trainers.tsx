import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { trainers } from '../data';
import ImageWithFallback from './ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

function scrollToContact(coachName: string) {
  const el = document.querySelector('#contact') as HTMLElement | null;
  if (el) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, offset: -40 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Pre-fill or focus message input if found
  setTimeout(() => {
    const textarea = document.getElementById('message') as HTMLTextAreaElement | null;
    if (textarea && !textarea.value) {
      textarea.value = `I am interested in private coaching with ${coachName}.`;
      textarea.focus();
    }
  }, 700);
}

export default function Trainers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const activeTrainer = trainers[activeIndex];
  // The other 3 coaches are shown below
  const supportingTrainers = trainers
    .map((t, idx) => ({ ...t, originalIndex: idx }))
    .filter((_, idx) => idx !== activeIndex);

  return (
    <section id="trainers" className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header with generous editorial spacing */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                Coaching Pedigree
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              THE MASTERS OF
              <br />
              <span className="text-outline-wine hover:text-wine transition-colors duration-500">PERFORMANCE</span>
            </h2>
          </div>

          <p className="text-dark-gray text-xs sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            Every X1 coach is an accomplished athlete and certified kinematic specialist. We do not hire generic instructors — we curate mentors who hold you to world-class standards.
          </p>
        </motion.div>

        {/* FEATURED COACH: Asymmetric Magazine Editorial Layout */}
        <div className="bg-white border border-border-beige rounded-sm shadow-[0_12px_40px_rgba(17,17,17,0.03)] p-4 sm:p-6 md:p-12 lg:p-14 mb-8 sm:mb-14">
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            {/* LEFT: Large featured trainer portrait */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] xs:aspect-[1/1] sm:aspect-[3/4] overflow-hidden rounded-xs bg-ivory-warm border border-border-beige/80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTrainer.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.65, ease: easeOut }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={activeTrainer.image}
                      alt={`Master Coach ${activeTrainer.name} - ${activeTrainer.specialty}`}
                      className="w-full h-full object-cover object-top editorial-img"
                      loading="eager"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle natural bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge inside portrait */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white/95 backdrop-blur-md text-near-black text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.2em] rounded-xs border border-white/40 shadow-sm truncate">
                    <Award size={12} className="text-wine shrink-0" />
                    <span className="truncate">{activeTrainer.badge || 'X1 Master Coach'}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-ivory/90 bg-near-black/70 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-xs shrink-0">
                    {String(activeIndex + 1).padStart(2, '0')} / 04
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Editorial Bio & Interaction */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrainer.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-wine" />
                      <span className="text-wine font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
                        {activeTrainer.specialty}
                      </span>
                    </div>

                    <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-near-black">
                      {activeTrainer.name}
                    </h3>

                    {activeTrainer.experience && (
                      <p className="text-dark-gray/70 text-xs font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em]">
                        {activeTrainer.experience}
                      </p>
                    )}
                  </div>

                  <p className="text-dark-gray text-sm sm:text-base md:text-lg leading-relaxed font-normal pt-1 sm:pt-2">
                    {activeTrainer.bio}
                  </p>

                  {/* Focus Areas pills */}
                  {activeTrainer.focusAreas && (
                    <div className="pt-1 sm:pt-2">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-dark-gray/80 block mb-2 sm:mb-3">
                        Core Methodologies
                      </span>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {activeTrainer.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-ivory text-near-black border border-border-beige text-[11px] sm:text-xs font-medium tracking-wide rounded-xs"
                          >
                            <CheckCircle2 size={12} className="text-wine shrink-0" />
                            <span>{area}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action row with smooth interaction */}
                  <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-border-beige">
                    <button
                      onClick={() => scrollToContact(activeTrainer.name)}
                      className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-all duration-300 shadow-md shadow-wine/20 active:scale-[0.98] w-full sm:w-auto min-h-[48px]"
                    >
                      <span>Book Consultation With {activeTrainer.name.split(' ')[0]}</span>
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToContact(activeTrainer.name);
                      }}
                      className="inline-flex items-center justify-center gap-2 text-near-black hover:text-wine text-xs uppercase tracking-[0.18em] font-semibold py-3 sm:py-4 px-4 transition-colors min-h-[44px]"
                    >
                      <span>View Training Bay</span>
                      <ArrowUpRight size={14} className="text-wine" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* BELOW: 3 Smaller Supporting Trainer Portraits - Stacks vertically on mobile */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 border-b border-border-beige">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-dark-gray font-medium flex items-center gap-2">
              <Sparkles size={13} className="text-wine shrink-0" />
              <span>Supporting Master Faculty</span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-dark-gray/60 hidden sm:inline-block">
              Total Roster: 04 Coaches
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {supportingTrainers.map((trainer) => (
              <motion.div
                key={trainer.name}
                onClick={() => setActiveIndex(trainer.originalIndex)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group cursor-pointer bg-white border border-border-beige hover:border-wine/70 rounded-sm p-3.5 sm:p-4 transition-all duration-300 shadow-[0_4px_15px_rgba(17,17,17,0.02)] hover:shadow-lg hover:shadow-black/5"
              >
                {/* Image portrait with natural colors */}
                <div className="relative aspect-[4/3] xs:aspect-[1/1] sm:aspect-[3/4] overflow-hidden rounded-xs bg-ivory-warm mb-3.5 sm:mb-4">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top editorial-img"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/35 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-2 py-1 bg-white/95 text-near-black text-[10px] font-mono uppercase tracking-widest rounded-xs shadow-sm font-semibold">
                      Select
                    </span>
                  </div>
                </div>

                {/* Details Below */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div>
                    <span className="text-wine font-mono text-[11px] uppercase tracking-[0.18em] font-semibold block mb-1">
                      {trainer.specialty}
                    </span>
                    <h4 className="text-xl font-bold tracking-tight text-near-black group-hover:text-wine transition-colors duration-300">
                      {trainer.name}
                    </h4>
                  </div>

                  {/* Small smooth arrow */}
                  <div className="w-8 h-8 rounded-full bg-ivory border border-border-beige group-hover:bg-wine group-hover:border-wine flex items-center justify-center text-near-black group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}