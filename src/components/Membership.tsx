import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { membershipPlans } from '../data';
import MembershipCard from './MembershipCard';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Membership() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="membership" className="relative bg-[#0d0d0f] text-white py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-white/10">
      {/* Background subtle radial ambient depth */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-wine/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-wine inline-block" />
            <span className="text-wine-light font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              Membership Tiers
            </span>
            <span className="w-6 h-[1px] bg-wine inline-block" />
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white mb-6">
            CHOOSE YOUR
            <br />
            <span className="text-outline-white hover:text-white transition-colors duration-500">LEVEL</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Transparent membership models designed for disciplined athletes. No hidden fees, no complicated lock-ins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {membershipPlans.map((plan, i) => (
            <MembershipCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}