import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ASSETS from '../../assets/images';
import ImageWithFallback from '../ImageWithFallback';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function AboutPreview() {
  return (
    <section className="relative bg-ivory py-14 sm:py-20 md:py-28 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-border-beige p-3 sm:p-4 rounded-sm shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden rounded-xs bg-ivory-warm">
                <ImageWithFallback
                  src={ASSETS.hero.philosophy}
                  alt="X1 Training Philosophy — Focused Athlete"
                  className="w-full h-full object-cover object-center editorial-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/10 text-white text-[11px] font-mono uppercase tracking-wider">
                  The X1 Standard
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2.5">
                <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
                <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                  About X1
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black">
                DISCOVER THE X1
                <br />
                <span className="text-wine">PHILOSOPHY</span>
              </h2>
            </div>

            <p className="text-dark-gray text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              X1 was built as an antidote to crowded, commercial fitness clubs. We engineered an athletic sanctuary where intentional biomechanics, calibrated competition iron, and human empathy meet.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2 border-y border-border-beige text-xs sm:text-sm">
              <div>
                <span className="font-mono text-wine font-bold block mb-0.5">IPF SPECIFICATION</span>
                <span className="text-dark-gray text-xs">Calibrated Eleiko competition bars and steel plates</span>
              </div>
              <div>
                <span className="font-mono text-wine font-bold block mb-0.5">PRIVATE ARENA</span>
                <span className="text-dark-gray text-xs">Dedicated sprint turf tracks and thermal contrast suites</span>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors shadow-md min-h-[46px]"
              >
                <span>EXPLORE ABOUT</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
