import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, ChevronDown, ShieldCheck, Dumbbell, Flame, Clock, Award } from 'lucide-react';
import { membershipPlans } from '../data';
import MembershipCard from './MembershipCard';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ComparisonFeature {
  name: string;
  category: string;
  basic: boolean | string;
  pro: boolean | string;
  elite: boolean | string;
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'IPF-Calibrated Eleiko Platforms & Free Weights', category: 'Access', basic: true, pro: true, elite: true },
  { name: 'Sprint Turf Track & Sled Bay Access', category: 'Access', basic: true, pro: true, elite: true },
  { name: 'Cardiovascular Training Zone (Woodway & Concept2)', category: 'Access', basic: true, pro: true, elite: true },
  { name: 'Finnish Dry Sauna & Contrast Showers', category: 'Recovery', basic: false, pro: true, elite: true },
  { name: 'Dedicated Private Locker & Towel Service', category: 'Amenities', basic: false, pro: true, elite: true },
  { name: 'Full Biomechanical Kinematic Assessment', category: 'Coaching', basic: false, pro: true, elite: true },
  { name: 'Master Coach 1-on-1 Sessions / Month', category: 'Coaching', basic: false, pro: '4 Sessions / mo', elite: 'Unlimited' },
  { name: 'Quarterly Body Composition Reviews', category: 'Diagnostics', basic: false, pro: 'Bi-Weekly', elite: 'Monthly Clinical' },
  { name: 'Bespoke Macro & Nutrition Protocol', category: 'Nutrition', basic: false, pro: true, elite: true },
  { name: 'Priority Bay Reservation & Valet Parking', category: 'Amenities', basic: false, pro: false, elite: true },
  { name: 'Monthly Guest Workout Passes', category: 'Privileges', basic: false, pro: '1 Pass / mo', elite: 'VIP Guest Key' },
  { name: 'Complimentary Annual Freeze Privileges', category: 'Flexibility', basic: '14 Days', pro: '30 Days', elite: '45 Days' },
];

const faqs = [
  {
    q: 'Are there any hidden initiation fees or annual maintenance charges?',
    a: 'Zero. At X1, our pricing is completely transparent. The rate you see is the exact rate you pay. There are no registration surcharges, locker fees, or unexpected annual facility maintenance bills.',
  },
  {
    q: 'Can I freeze or pause my membership when traveling?',
    a: 'Yes. We understand our members travel frequently. X1 Basic members receive 14 days, X1 Pro members receive 30 days, and X1 Elite members receive 45 days of complimentary freeze allowance per calendar year with simple notice.',
  },
  {
    q: 'Can I switch or upgrade my tier later?',
    a: 'Seamlessly. You can upgrade or adjust your membership at any point through the front desk. Upgrades activate immediately, with prorated pricing applied automatically.',
  },
  {
    q: 'How does the complimentary movement assessment work?',
    a: 'Every new member is paired with a master coach for a 45-minute biomechanical screen. We test joint kinematics, lifting mechanics, and symmetry to ensure your program starts on an optimal physiological foundation.',
  },
  {
    q: 'Is there a trial workout or facility tour available?',
    a: 'Yes. Prospective athletes can book a private tour and experience a complimentary workout session. Reach out via the contact section below to reserve your slot.',
  },
];

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="membership" className="relative bg-[#0d0d0f] text-white py-14 sm:py-20 md:py-36 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-wine/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-10 sm:mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-wine inline-block" />
            <span className="text-wine-light font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              Membership Tiers
            </span>
            <span className="w-6 h-[1px] bg-wine inline-block" />
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white mb-5">
            CHOOSE YOUR
            <br />
            <span className="text-outline-white hover:text-white transition-colors duration-500">LEVEL</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Transparent membership models designed for disciplined athletes. No hidden fees, no complicated lock-ins.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {['Zero Hidden Initiation Fees', 'Complimentary Movement Screen', 'Flexible Freeze Privileges'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.06] border border-white/10 rounded-xs text-xs font-mono text-stone-300"
              >
                <ShieldCheck size={13} className="text-wine-light" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* 3 Tier Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch mb-16 sm:mb-24">
          {membershipPlans.map((plan, i) => (
            <MembershipCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Side-by-Side Feature Comparison Table */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <span className="text-wine-light font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1">
              Feature Comparison Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              COMPARE MEMBERSHIP TIERS
            </h3>
          </div>

          <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-stone-400 mb-2 px-1">
            <span>Swipe matrix to compare tiers</span>
            <span className="text-wine-light font-bold">← Swipe →</span>
          </div>
          <div className="overflow-x-auto overscroll-contain touch-pan-x max-w-full border border-white/10 rounded-sm bg-white/[0.03]">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.05]">
                  <th className="py-3.5 px-4 sm:px-6 text-xs font-mono uppercase tracking-wider font-bold text-white w-2/5">
                    Plan Feature
                  </th>
                  <th className="py-3.5 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-stone-300 w-1/5">
                    X1 Basic
                    <span className="block text-[10px] text-stone-400 font-normal">₹2,499/mo</span>
                  </th>
                  <th className="py-3.5 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-wine-light bg-wine/10 w-1/5">
                    X1 Pro
                    <span className="block text-[10px] text-wine-light/90 font-normal">₹4,999/mo</span>
                  </th>
                  <th className="py-3.5 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-stone-300 w-1/5">
                    X1 Elite
                    <span className="block text-[10px] text-stone-400 font-normal">₹8,999/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
                {comparisonFeatures.map((feat) => (
                  <tr key={feat.name} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-medium text-stone-200">
                      {feat.name}
                    </td>

                    {/* Basic */}
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {typeof feat.basic === 'boolean' ? (
                        feat.basic ? (
                          <Check size={15} className="text-wine-light mx-auto" />
                        ) : (
                          <X size={14} className="text-stone-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs text-stone-400">{feat.basic}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="py-3 px-3 sm:px-4 text-center bg-wine/[0.03]">
                      {typeof feat.pro === 'boolean' ? (
                        feat.pro ? (
                          <Check size={16} className="text-wine-light mx-auto stroke-[2.5]" />
                        ) : (
                          <X size={14} className="text-stone-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs font-bold text-wine-light">{feat.pro}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="py-3 px-3 sm:px-4 text-center">
                      {typeof feat.elite === 'boolean' ? (
                        feat.elite ? (
                          <Check size={15} className="text-wine-light mx-auto" />
                        ) : (
                          <X size={14} className="text-stone-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs font-semibold text-white">{feat.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Membership FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-wine-light font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1">
              Clarity & Policies
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              FREQUENTLY ASKED
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="border border-white/10 rounded-sm overflow-hidden bg-white/[0.03] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-wine-light transition-colors min-h-[48px] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold pr-2">{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-wine-light shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: easeOut }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal border-t border-white/10 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}