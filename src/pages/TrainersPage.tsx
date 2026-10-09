import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { trainers } from '../data';
import ImageWithFallback from '../components/ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function TrainersPage() {
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
                Master Coaching Pedigree
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-6">
              MEET THE
              <br />
              <span className="text-wine">COACHES</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              Our trainers are seasoned practitioners, national-level competitors, and movement biomechanists. They do not count reps passively; they engineer your athletic transformation.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'National-Level Athletic Pedigree',
                'Biomechanical Kinematic Specialists',
                'Zero Commercial Gimmicks',
                'Individualized Progression Tracking',
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

      {/* ─── Complete Trainers Grid ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {trainers.map((coach, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="bg-white border border-border-beige rounded-sm p-6 sm:p-10 md:p-12 shadow-sm"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Coach Portrait */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[3/4] rounded-xs overflow-hidden bg-ivory-warm border border-border-beige shadow-xs">
                      <ImageWithFallback
                        src={coach.image}
                        alt={`X1 Coach — ${coach.name}`}
                        className="w-full h-full object-cover object-top editorial-img"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      {coach.badge && (
                        <div className="absolute top-3 left-3 bg-wine text-white text-[10px] font-mono uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-xs shadow-sm">
                          {coach.badge}
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs font-mono uppercase tracking-wider text-wine-light font-bold block">
                          {coach.experience}
                        </span>
                        <span className="text-sm font-bold">{coach.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coach Details & Bio */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1">
                        {coach.specialty}
                      </span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black">
                        {coach.name}
                      </h2>
                    </div>

                    <p className="text-dark-gray text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                      {coach.bio}
                    </p>

                    {coach.focusAreas && (
                      <div className="pt-3 border-t border-border-beige">
                        <span className="text-xs font-mono uppercase tracking-wider text-near-black font-bold block mb-2">
                          Core Specializations
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {coach.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1 bg-ivory rounded-xs border border-border-beige text-xs font-mono text-near-black"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to="/contact"
                        className="px-6 py-3.5 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors inline-flex items-center gap-2 min-h-[44px]"
                      >
                        <span>Inquire Coaching with {coach.name.split(' ')[0]}</span>
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/workout"
                        className="px-6 py-3.5 border border-border-beige hover:border-near-black bg-ivory text-near-black text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors min-h-[44px]"
                      >
                        View 5-Day Workout Plan
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
