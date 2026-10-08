import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { benefits } from '../data';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                The X1 Standard
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              BUILT FOR
              <br />
              <span className="text-wine">YOUR SUCCESS</span>
            </h2>
          </div>

          <p className="text-dark-gray text-xs sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            We engineered an environment where elite standards and human empathy meet. Every detail is structured so you never plateau.
          </p>
        </motion.div>

        {/* Editorial Horizontal List with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-12 lg:gap-y-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: easeOut }}
              className="group relative pt-5 sm:pt-6 border-t border-border-beige hover:border-wine transition-colors duration-400"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-wine font-mono text-lg sm:text-xl md:text-2xl font-bold tracking-tight pt-1">
                  {benefit.number}
                </span>

                <div className="space-y-2 sm:space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-near-black group-hover:text-wine transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-gray text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}