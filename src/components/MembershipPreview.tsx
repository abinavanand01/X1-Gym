import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { membershipPlans } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function MembershipPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.28);

  return (
    <section
      id="membership-preview"
      className="relative bg-[#0d0d0f] text-white py-14 sm:py-20 md:py-32 lg:py-40 overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-wine/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
            <span className="text-wine-light font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
              Membership
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-white mb-4 sm:mb-5">
            FIND THE PLAN THAT
            <br />
            <span className="text-outline-white hover:text-white transition-colors duration-500">
              FITS YOUR GOALS
            </span>
          </h2>

          <p className="text-stone-300 text-xs sm:text-base md:text-lg leading-relaxed font-normal">
            Transparent models engineered for disciplined athletes. No hidden fees, no complicated lock-ins.
          </p>
        </motion.div>

        {/* 3 Compact Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-14">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: easeOut }}
              className={`relative p-5 sm:p-6 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                plan.highlighted
                  ? 'bg-white/[0.07] border-wine shadow-lg shadow-wine/20'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wine text-white text-[10px] font-mono uppercase font-bold tracking-[0.2em] px-3 py-0.5 rounded-xs flex items-center gap-1 shadow-sm">
                  <Sparkles size={10} />
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <span className="text-xs font-mono text-wine-light font-semibold uppercase tracking-wider">
                    Tier 0{i + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-stone-400 text-xs font-medium">{plan.period}</span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {plan.description}
                </p>

                {/* Show top 2 highlights */}
                <ul className="space-y-2 mb-4">
                  {plan.features.slice(0, 2).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-stone-200 leading-snug"
                    >
                      <div
                        className={`rounded-full p-0.5 shrink-0 ${
                          plan.highlighted ? 'bg-wine text-white' : 'bg-wine/30 text-wine-light'
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 text-center">
                <Link
                  to="/membership"
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-wine-light hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Plan Details</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Centered [ VIEW MEMBERSHIP PLANS ] Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.7, ease: easeOut }}
          className="text-center"
        >
          <Link
            ref={magneticBtn.ref}
            onMouseMove={magneticBtn.onMouseMove}
            onMouseLeave={magneticBtn.onMouseLeave}
            to="/membership"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-wine hover:bg-wine-light text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-xl shadow-wine/30 active:scale-[0.98] min-h-[48px]"
          >
            <span>VIEW MEMBERSHIP PLANS</span>
            <ArrowRight size={16} />
          </Link>
          <p className="mt-3 text-[11px] sm:text-xs text-stone-400 font-mono uppercase tracking-wider">
            All memberships include full facility access & complimentary movement screen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
