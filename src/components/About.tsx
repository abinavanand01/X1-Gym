import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ShieldCheck, Target, Award, Dumbbell, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import ASSETS from '../assets/images';

const easeOut = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    num: '01',
    title: 'Biomechanics Before Load',
    desc: 'We never sacrifice structural integrity for ego weight. Every athlete is taught to earn range of motion, control tempo, and establish joint stability before loading compound movements.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Calibrated Precision',
    desc: 'Our iron is calibrated to IPF / IWF competition tolerances. When you lift 100kg at X1, it is exactly 100kg. Reliable stimulus breeds predictable, repeatable athletic adaptation.',
    icon: Dumbbell,
  },
  {
    num: '03',
    title: 'Holistic Recovery',
    desc: 'Growth happens during recovery. Our thermal suite (Finnish dry cedar sauna, cold contrast immersion, and dedicated recovery lounge) ensures your nervous system resets between high-output sessions.',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Ego-Free Community',
    desc: 'Whether you are a competitive national-level powerlifter or a busy professional reclaiming physical vitality, every member at X1 shares the same commitment to relentless self-improvement.',
    icon: Award,
  },
];

const arenaStats = [
  { value: '12,000', label: 'Square Feet', desc: 'Dedicated athletic performance arena' },
  { value: '100%', label: 'IPF Calibrated', desc: 'Competition bars & steel plates' },
  { value: '30m', label: 'Turf Sprint Track', desc: 'Indoor acceleration & sled bay' },
  { value: '24/7', label: 'Member Access', desc: 'Unrestricted keycard floor entry' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative bg-ivory py-14 sm:py-20 md:py-36 overflow-hidden border-t border-border-beige">
      <span id="philosophy" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header & Origin Grid */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Visual Editorial Image */}
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
                  alt="The X1 Training Philosophy — Focused athlete"
                  className="w-full h-full object-cover object-center editorial-img"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.25em] text-near-black bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs border border-white/60 shadow-sm inline-block truncate max-w-full font-semibold">
                    Discipline • Intensity • Purpose
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
            className="lg:col-span-7 space-y-5 sm:space-y-7 lg:pl-4"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                About X1 • The Philosophy
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-[1.04] tracking-tight text-near-black">
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
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Zero guesswork programming',
                'Calibrated competition gear',
                '1-on-1 kinematic assessment',
                'Infrared recovery protocol',
              ].map((highlight) => (
                <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm text-near-black font-medium">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* The Four Pillars of X1 */}
        <div className="pt-12 sm:pt-16 border-t border-border-beige mb-14 sm:mb-20">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-near-black mb-2">
              THE FOUR PILLARS OF X1
            </h3>
            <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
              Every decision we make — from equipment acquisitions to training split architecture — is governed by four core tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-border-beige p-5 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-base font-black text-wine">{pillar.num}</span>
                    <div className="p-2 bg-ivory rounded-xs border border-border-beige text-wine">
                      <pillar.icon size={16} />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight text-near-black mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-dark-gray text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Arena Specifications */}
        <div className="bg-[#0d0d0f] text-white p-6 sm:p-10 md:p-12 rounded-sm border border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-wine-light font-mono text-xs uppercase tracking-[0.28em] font-semibold block mb-1">
              Facility Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              THE ARENA BY THE NUMBERS
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {arenaStats.map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.04] border border-white/10 p-4 sm:p-6 rounded-xs"
              >
                <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  {item.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-wine-light font-semibold mb-1">
                  {item.label}
                </div>
                <p className="text-stone-400 text-xs hidden sm:block">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
