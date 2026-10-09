import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trainers } from '../../data';
import ImageWithFallback from '../ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function TrainersPreview() {
  // Show first 3 coaches as a preview
  const previewTrainers = trainers.slice(0, 3);

  return (
    <section className="relative bg-ivory py-14 sm:py-20 md:py-28 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                Master Roster
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black">
              MEET THE
              <br />
              <span className="text-wine">COACHES</span>
            </h2>
          </div>

          <p className="text-dark-gray text-xs sm:text-base max-w-md leading-relaxed font-normal">
            Seasoned practitioners, national-level powerlifters, and movement biomechanists dedicated to your progression.
          </p>
        </div>

        {/* 3 Trainer Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {previewTrainers.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: easeOut }}
              className="group bg-white border border-border-beige rounded-sm overflow-hidden hover:border-wine transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory-warm">
                  <ImageWithFallback
                    src={coach.image}
                    alt={`Coach — ${coach.name}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 editorial-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent pointer-events-none" />

                  {coach.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-wine text-white text-[10px] font-mono uppercase tracking-[0.18em] font-bold px-2.5 py-0.5 rounded-xs">
                      {coach.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-wine-light font-bold block">
                      {coach.experience}
                    </span>
                    <h3 className="text-lg font-bold">{coach.name}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-wine font-mono text-xs font-semibold block mb-1">
                    {coach.specialty}
                  </span>
                  <p className="text-dark-gray text-xs leading-relaxed line-clamp-2">
                    {coach.bio}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <Link
                  to="/trainers"
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-wine hover:text-near-black transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Full Profile</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet All Trainers CTA */}
        <div className="text-center">
          <Link
            to="/trainers"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors shadow-md min-h-[48px]"
          >
            <span>MEET THE TRAINERS</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
