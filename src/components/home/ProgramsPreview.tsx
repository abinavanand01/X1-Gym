import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { programs } from '../../data';
import ImageWithFallback from '../ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProgramsPreview() {
  // Show 3 prominent preview tracks
  const previewPrograms = programs.slice(0, 3);

  return (
    <section className="relative bg-[#0d0d0f] text-white py-14 sm:py-20 md:py-28 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine-light font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                Curated Pathways
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              TRAIN WITH
              <br />
              <span className="text-outline-white hover:text-white transition-colors duration-500">
                PURPOSE
              </span>
            </h2>
          </div>

          <p className="text-stone-300 text-xs sm:text-base max-w-md leading-relaxed">
            Six deliberate training pathways engineered around biomechanical laws to maximize your athletic output.
          </p>
        </div>

        {/* 3 Program Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {previewPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: easeOut }}
              className="group bg-white/[0.04] border border-white/10 rounded-sm overflow-hidden hover:border-wine transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <ImageWithFallback
                    src={program.image}
                    alt={`Track — ${program.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 editorial-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-xs text-[11px] font-mono text-white/90 border border-white/10">
                    Track 0{program.id}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-wine-light transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {program.description}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Link
                  to="/programs"
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-wine-light group-hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Learn Details</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div className="text-center">
          <Link
            to="/programs"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors shadow-lg min-h-[48px]"
          >
            <span>VIEW ALL PROGRAMS</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
