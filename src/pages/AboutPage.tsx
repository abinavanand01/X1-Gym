import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Award, Compass, Sparkles, Dumbbell } from 'lucide-react';
import ASSETS from '../assets/images';
import ImageWithFallback from '../components/ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

const arenaStats = [
  { value: '12,000', label: 'Square Feet', description: 'Dedicated athletic performance arena' },
  { value: '100%', label: 'IPF Calibrated', description: 'Competition bars & steel plates' },
  { value: '30m', label: 'Turf Sprint Track', description: 'Indoor acceleration & sled bay' },
  { value: '24/7', label: 'Member Access', description: 'Unrestricted keycard floor entry' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-near-black pt-24 sm:pt-28 md:pt-32">
      {/* ─── Hero Header ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16 md:py-24 border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
                The X1 Story & Ethos
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-6">
              THE ARCHITECTURE
              <br />
              <span className="text-wine">OF MASTERY</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              X1 was built as an antidote to crowded, commercial fitness clubs. We engineered an athletic sanctuary where intentional biomechanics, calibrated competition iron, and human empathy meet.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'Founded in Chennai',
                'IPF / IWF Standard Facility',
                'Master Coach Mentorship',
                'Private Athletic Arena',
              ].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-white border border-border-beige rounded-xs text-xs font-mono font-medium text-near-black shadow-xs"
                >
                  <ShieldCheck size={13} className="text-wine shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Story & Training Philosophy ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-32 bg-white border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual editorial image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-ivory border border-border-beige p-3 sm:p-4 rounded-sm shadow-md">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xs bg-ivory-warm">
                  <ImageWithFallback
                    src={ASSETS.hero.philosophy}
                    alt="X1 Training Ethos — Focused Athlete"
                    className="w-full h-full object-cover object-center editorial-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs">
                      Discipline Over Motivation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Narrative text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div>
                <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
                  Our Origin & Vision
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black">
                  NOT JUST A GYM.
                  <br />
                  A STANDARD OF LIVING.
                </h2>
              </div>

              <div className="space-y-4 text-dark-gray text-sm sm:text-base leading-relaxed">
                <p>
                  Most gym environments are designed for passive consumption: rows of generic cardio machines, low-grade iron, and zero individual accountability. We wanted something unapologetically better.
                </p>
                <p>
                  X1 was conceived as an athletic proving ground. We imported world-standard Eleiko competition barbells, calibrated steel plates, custom heavy dumbbell suites, and 30-meter indoor sprint turf tracks.
                </p>
                <p>
                  Here, training is treated as an art and an engineering problem. Every rep is scrutinized for kinematic efficiency, joint safety, and optimal neurological drive.
                </p>
              </div>

              <div className="pt-4 border-t border-border-beige grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-wine block">
                    100%
                  </span>
                  <span className="text-xs text-dark-gray font-mono uppercase tracking-wider">
                    IPF Specification
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-wine block">
                    Zero
                  </span>
                  <span className="text-xs text-dark-gray font-mono uppercase tracking-wider">
                    Hidden Fees
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-wine block">
                    1:1
                  </span>
                  <span className="text-xs text-dark-gray font-mono uppercase tracking-wider">
                    Coach Mentorship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Brand Values ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-32 bg-ivory border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black mb-3">
              THE FOUR PILLARS OF X1
            </h2>
            <p className="text-dark-gray text-xs sm:text-base leading-relaxed">
              Every decision we make — from equipment acquisitions to training split architecture — is governed by four core tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
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
                title: 'Holistic Physiological Recovery',
                desc: 'Growth happens during recovery. Our thermal suite (Finnish dry cedar sauna, cold contrast immersion, and dedicated recovery lounge) ensures your nervous system resets between high-output sessions.',
                icon: Sparkles,
              },
              {
                num: '04',
                title: 'Ego-Free Community',
                desc: 'Whether you are a competitive national-level powerlifter or a busy professional reclaiming physical vitality, every member at X1 shares the same commitment to relentless self-improvement.',
                icon: Award,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-border-beige p-6 sm:p-8 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-lg font-black text-wine">{pillar.num}</span>
                    <div className="p-2 bg-ivory rounded-xs border border-border-beige text-wine">
                      <pillar.icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-near-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-dark-gray text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Facility Standards & Statistics ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-[#0d0d0f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-wine-light font-mono text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
              Facility Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              THE ARENA BY THE NUMBERS
            </h2>
            <p className="text-stone-300 text-xs sm:text-base leading-relaxed">
              Every square foot is engineered for peak athletic focus and unhindered movement.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {arenaStats.map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.04] border border-white/10 p-5 sm:p-7 rounded-sm text-center"
              >
                <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                  {item.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-wine-light font-semibold mb-1">
                  {item.label}
                </div>
                <p className="text-stone-400 text-xs leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Navigation CTAs ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-white border-t border-border-beige">
        <div className="max-w-4xl mx-auto text-center bg-ivory border border-border-beige p-8 sm:p-14 rounded-sm">
          <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            Continue Exploring
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-near-black mb-4">
            READY TO EXPERIENCE X1?
          </h2>
          <p className="text-dark-gray text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Learn more about our training tracks, meet our coaching staff, or explore membership options.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/programs"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors shadow-md min-h-[48px] inline-flex items-center gap-2"
            >
              <span>View Training Programs</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/trainers"
              className="px-6 sm:px-8 py-3.5 sm:py-4 border border-border-beige hover:border-near-black bg-white text-near-black text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors min-h-[48px] inline-flex items-center gap-2"
            >
              <span>Meet The Trainers</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
