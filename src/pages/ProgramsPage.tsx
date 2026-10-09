import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Dumbbell, Target, Users, Zap, Compass } from 'lucide-react';
import { programs } from '../data';
import ImageWithFallback from '../components/ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ProgramDetail {
  id: number;
  focus: string;
  audience: string;
  movements: string[];
  sessionDuration: string;
}

const programDetailsMap: Record<number, ProgramDetail> = {
  1: {
    id: 1,
    focus: 'Maximal Neural Drive & Barbell Kinematics',
    audience: 'Powerlifters, athletes, and trainees seeking foundational strength',
    movements: ['Competition Squat', 'Bench Press', 'Deadlift', 'Overhead Press', 'Heavy Barbell Rows'],
    sessionDuration: '60–75 Minutes',
  },
  2: {
    id: 2,
    focus: 'Mechanical Tension & Muscular Architecture',
    audience: 'Physique athletes and lifters focused on aesthetic muscle growth',
    movements: ['Incline DB Press', 'Chest-Supported Row', 'Romanian Deadlift', 'Cable Lateral Raises', 'Arm Density Circuits'],
    sessionDuration: '55–70 Minutes',
  },
  3: {
    id: 3,
    focus: 'Multi-Planar Velocity & Sled Acceleration',
    audience: 'Field sport athletes, hybrid competitors, and tactical athletes',
    movements: ['Turf Sled Sprint', 'Trap Bar Jumps', 'Rotational Med Ball Slams', 'Deceleration Cut Drills'],
    sessionDuration: '50–60 Minutes',
  },
  4: {
    id: 4,
    focus: 'Metabolic Buffering & Aerobic Capacity',
    audience: 'Combat athletes, endurance enthusiasts, and engine builders',
    movements: ['Woodway Sprints', 'Concept2 Ergometer Intervals', 'Echo Bike Watts', 'Kettlebell Density Circuits'],
    sessionDuration: '45–55 Minutes',
  },
  5: {
    id: 5,
    focus: 'End-Range Joint Strength & Tissue Longevity',
    audience: 'Desk-bound professionals, athletes with mobility deficits, recovery days',
    movements: ['FRC Hip PAILs/RAILs', 'Thoracic Spine Openers', 'Jefferson Curls', 'Controlled Articular Rotations'],
    sessionDuration: '45–60 Minutes',
  },
  6: {
    id: 6,
    focus: '1-on-1 Kinematic Mentorship & Periodization',
    audience: 'Dedicated individuals seeking bespoke programming and master coach guidance',
    movements: ['Custom movement protocol based on 45-min biomechanical assessment'],
    sessionDuration: '60 Minutes',
  },
};

export default function ProgramsPage() {
  const [filter, setFilter] = useState<'all' | 'strength' | 'cardio' | 'longevity'>('all');

  const filteredPrograms = programs.filter((p) => {
    if (filter === 'strength') return p.id === 1 || p.id === 2;
    if (filter === 'cardio') return p.id === 3 || p.id === 4;
    if (filter === 'longevity') return p.id === 5 || p.id === 6;
    return true;
  });

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
                Curated Training Pathways
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-6">
              TRAIN WITH
              <br />
              <span className="text-wine">PURPOSE</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              Six deliberate training tracks engineered around biomechanical laws. Whether your goal is raw compound strength, dense hypertrophy, or multi-planar athletic conditioning.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Pathways (6)' },
                { key: 'strength', label: 'Strength & Muscle' },
                { key: 'cardio', label: 'Performance & Engine' },
                { key: 'longevity', label: 'Mobility & Private' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`px-4 py-2 rounded-xs text-xs font-mono font-bold uppercase tracking-wider transition-colors min-h-[38px] cursor-pointer ${
                    filter === tab.key
                      ? 'bg-wine text-white shadow-sm'
                      : 'bg-white border border-border-beige text-dark-gray hover:text-near-black hover:border-near-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Complete Programs Roster ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {filteredPrograms.map((program, idx) => {
            const detail = programDetailsMap[program.id] || {
              focus: 'Athletic Excellence',
              audience: 'All Athletes',
              movements: ['Compound Foundations'],
              sessionDuration: '60 Min',
            };

            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="bg-white border border-border-beige rounded-sm p-6 sm:p-10 md:p-12 shadow-sm"
              >
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center`}>
                  {/* Visual Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-xs overflow-hidden bg-ivory-warm border border-border-beige shadow-xs">
                      <ImageWithFallback
                        src={program.image}
                        alt={`X1 Training Track — ${program.title}`}
                        className="w-full h-full object-cover object-center editorial-img"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-near-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xs border border-white/10 text-white font-mono text-xs uppercase tracking-widest">
                        Track 0{program.id}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-xs flex justify-between items-center">
                        <span className="uppercase tracking-wider text-wine-light font-bold">
                          {detail.sessionDuration}
                        </span>
                        <span className="text-white/80 text-[11px]">Calibrated Protocol</span>
                      </div>
                    </div>
                  </div>

                  {/* Informational Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1">
                        Pathway 0{program.id}
                      </span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black">
                        {program.title}
                      </h2>
                    </div>

                    <p className="text-dark-gray text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                      {program.description}
                    </p>

                    <div className="space-y-3 pt-2 border-t border-border-beige text-xs sm:text-sm">
                      <div className="flex items-start gap-2.5">
                        <Target size={15} className="text-wine shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-mono uppercase text-near-black tracking-wider text-[11px] block">
                            Training Focus
                          </span>
                          <span className="text-dark-gray">{detail.focus}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Users size={15} className="text-wine shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-mono uppercase text-near-black tracking-wider text-[11px] block">
                            Ideal Candidate
                          </span>
                          <span className="text-dark-gray">{detail.audience}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Dumbbell size={15} className="text-wine shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold font-mono uppercase text-near-black tracking-wider text-[11px] block mb-1">
                            Cornerstone Movements
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {detail.movements.map((move) => (
                              <span
                                key={move}
                                className="px-2.5 py-1 bg-ivory rounded-xs border border-border-beige text-xs font-mono text-near-black"
                              >
                                {move}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to="/contact"
                        className="px-6 py-3.5 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors inline-flex items-center gap-2 min-h-[44px]"
                      >
                        <span>Inquire About {program.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/membership"
                        className="px-6 py-3.5 border border-border-beige hover:border-near-black bg-ivory text-near-black text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors min-h-[44px]"
                      >
                        Explore Membership Tiers
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
