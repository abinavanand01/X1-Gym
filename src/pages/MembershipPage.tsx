import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  ChevronDown, 
  Dumbbell, 
  Flame, 
  Clock, 
  Award 
} from 'lucide-react';
import { membershipPlans } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ComparisonFeature {
  name: string;
  category: string;
  foundation: boolean | string;
  performance: boolean | string;
  elite: boolean | string;
}

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'IPF-Calibrated Eleiko Platforms & Racks', category: 'Access', foundation: true, performance: true, elite: true },
  { name: 'Sprint Turf Track & Sled Bay Access', category: 'Access', foundation: true, performance: true, elite: true },
  { name: 'Cardiovascular Training Zone (Woodway & Concept2)', category: 'Access', foundation: true, performance: true, elite: true },
  { name: 'Finnish Dry Sauna & Contrast Showers', category: 'Recovery', foundation: false, performance: true, elite: true },
  { name: 'Dedicated Private Locker & Towel Service', category: 'Amenities', foundation: false, performance: true, elite: true },
  { name: 'Full Biomechanical Kinematic Assessment', category: 'Coaching', foundation: false, performance: true, elite: true },
  { name: 'Master Coach 1-on-1 Sessions / Month', category: 'Coaching', foundation: false, performance: '1 Session / mo', elite: '4 Sessions / mo' },
  { name: 'Quarterly InBody Body Composition Scan', category: 'Diagnostics', foundation: false, performance: 'Quarterly', elite: 'Monthly' },
  { name: 'Bespoke Macro & Nutrition Protocol', category: 'Nutrition', foundation: false, performance: false, elite: true },
  { name: 'Priority Bay Reservation & Valet Parking', category: 'Amenities', foundation: false, performance: false, elite: true },
  { name: 'Monthly Guest Workout Passes', category: 'Privileges', foundation: false, performance: '1 Pass / mo', elite: '3 Passes / mo' },
  { name: 'Complimentary Annual Freeze Days', category: 'Flexibility', foundation: '14 Days', performance: '30 Days', elite: '45 Days' },
];

const faqs = [
  {
    q: 'Are there any hidden initiation fees or annual maintenance charges?',
    a: 'Zero. At X1, our pricing is completely transparent. The rate you see is the exact rate you pay. There are no registration surcharges, locker fees, or unexpected annual facility maintenance bills.',
  },
  {
    q: 'Can I freeze or pause my membership when traveling?',
    a: 'Yes. We understand our members travel frequently. Foundation members receive 14 days, Performance members receive 30 days, and Elite members receive 45 days of complimentary freeze allowance per calendar year with simple one-click notice.',
  },
  {
    q: 'Can I switch or upgrade my tier later?',
    a: 'Seamlessly. You can upgrade or adjust your membership at any point through the front desk or member portal. Upgrades activate immediately, with prorated pricing applied automatically.',
  },
  {
    q: 'How does the complimentary movement assessment work?',
    a: 'Every new member is paired with a master coach for a 45-minute biomechanical screen. We test joint kinematics, lifting mechanics, and symmetry to ensure your program starts on an optimal physiological foundation.',
  },
  {
    q: 'Is there a trial workout or facility tour available?',
    a: 'Yes. Prospective athletes can book a private tour and experience a complimentary workout session. You can request a session via the inquiry form below.',
  },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<string>('X1 Pro');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', plan: 'X1 Pro' });

  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const magneticBtn = useMagnetic<HTMLButtonElement>(0.28);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', plan: 'X1 Pro' });
    }, 1500);
  };

  const scrollToInquiry = (planName: string) => {
    setSelectedPlan(planName);
    setFormData((prev) => ({ ...prev, plan: planName }));
    const el = document.getElementById('membership-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-near-black pt-24 sm:pt-28 md:pt-32">
      {/* ─── Hero Header ─── */}
      <section ref={heroRef} className="px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-14 md:py-20 border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
                Membership Portfolio
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-5 sm:mb-6">
              INVEST IN YOUR
              <br />
              <span className="text-wine">DISCIPLINE</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              Transparent, results-oriented membership models engineered for athletes who demand uncompromised standards. Calibrated iron, thermal recovery, and private master coaching mentorship.
            </p>

            {/* Value Badges */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                'Zero Hidden Initiation Fees',
                'Complimentary Movement Screen',
                'Flexible Freeze Privileges',
                'Full Finnish Sauna Access',
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

      {/* ─── Full Membership Plans Grid ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-[#0d0d0f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-wine-light font-mono text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
              Select Your Tier
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              TIERED FOR MASTERY
            </h2>
            <p className="text-stone-300 text-xs sm:text-base leading-relaxed">
              Every membership tier grants full access to calibrated Eleiko bays, sprint turf tracks, and towel service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {membershipPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: easeOut }}
                className={`relative rounded-sm p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white/[0.08] border-wine shadow-2xl shadow-wine/25 md:-translate-y-2'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-wine text-white text-[11px] font-mono uppercase font-bold tracking-[0.2em] px-4 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
                    <Sparkles size={11} />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-wine-light uppercase tracking-wider font-semibold">
                      Tier 0{i + 1}
                    </span>
                    {plan.highlighted && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 bg-white/10 px-2 py-0.5 rounded-xs">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-stone-400 text-xs sm:text-sm font-medium">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200 leading-snug">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            plan.highlighted ? 'bg-wine text-white' : 'bg-wine/30 text-wine-light'
                          }`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToInquiry(plan.name)}
                  className={`w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] ${
                    plan.highlighted
                      ? 'bg-wine hover:bg-wine-light text-white shadow-lg shadow-wine/30 active:scale-[0.98]'
                      : 'border border-white/20 hover:border-wine bg-white/5 hover:bg-wine text-white active:scale-[0.98]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Detailed Plan Comparison Matrix ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-white border-t border-border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black mb-3">
              COMPARE TIERS
            </h2>
            <p className="text-dark-gray text-xs sm:text-base leading-relaxed">
              Transparent side-by-side feature comparison to determine the optimal training commitment.
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto border border-border-beige rounded-sm bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border-beige bg-ivory">
                  <th className="py-4 px-4 sm:px-6 text-xs font-mono uppercase tracking-wider font-bold text-near-black w-2/5">
                    Tier Feature
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-near-black w-1/5">
                    X1 Basic
                    <span className="block text-[10px] text-dark-gray font-normal">₹2,499/mo</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-wine bg-wine/5 w-1/5">
                    X1 Pro
                    <span className="block text-[10px] text-wine/80 font-normal">₹4,999/mo</span>
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-wider font-bold text-center text-near-black w-1/5">
                    X1 Elite
                    <span className="block text-[10px] text-dark-gray font-normal">₹8,999/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-beige/70 text-xs sm:text-sm">
                {comparisonFeatures.map((feat) => (
                  <tr key={feat.name} className="hover:bg-ivory/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-near-black">
                      {feat.name}
                    </td>

                    {/* Foundation */}
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {typeof feat.foundation === 'boolean' ? (
                        feat.foundation ? (
                          <Check size={16} className="text-wine mx-auto" />
                        ) : (
                          <X size={15} className="text-dark-gray/30 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs font-semibold text-dark-gray">{feat.foundation}</span>
                      )}
                    </td>

                    {/* Performance */}
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-wine/[0.02]">
                      {typeof feat.performance === 'boolean' ? (
                        feat.performance ? (
                          <Check size={16} className="text-wine mx-auto stroke-[2.5]" />
                        ) : (
                          <X size={15} className="text-dark-gray/30 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs font-bold text-wine">{feat.performance}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {typeof feat.elite === 'boolean' ? (
                        feat.elite ? (
                          <Check size={16} className="text-wine mx-auto" />
                        ) : (
                          <X size={15} className="text-dark-gray/30 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-xs font-semibold text-near-black">{feat.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Club Inclusions / Pillars ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-ivory border-t border-border-beige">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              The X1 Standard
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black mb-3">
              EVERY PLAN INCLUDES
            </h2>
            <p className="text-dark-gray text-xs sm:text-base leading-relaxed">
              Standard-setting amenities provided to every active member of the club.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                icon: Dumbbell,
                num: '01',
                title: 'IPF Calibrated Iron',
                desc: 'Competition-grade Eleiko bars, competition plates, and custom heavy dumbbell stations up to 60kg.',
              },
              {
                icon: Flame,
                num: '02',
                title: 'Thermal Contrast Suite',
                desc: 'Finnish red-cedar dry sauna and contrast rain showers designed for accelerated parasympathetic recovery.',
              },
              {
                icon: Clock,
                num: '03',
                title: 'Unrestricted Club Hours',
                desc: 'Train on your rhythm. Early morning dawn sessions through late evening iron focus with zero session booking barriers.',
              },
              {
                icon: Award,
                num: '04',
                title: 'Master Coach Supervision',
                desc: 'Floor coaches are always actively coaching, correcting mechanics, and spotting compound barbell sets.',
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-white border border-border-beige p-5 sm:p-6 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xs bg-wine/10 text-wine border border-wine/20">
                      <col.icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-wine font-bold">{col.num}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-near-black mb-2">{col.title}</h3>
                  <p className="text-dark-gray text-xs sm:text-sm leading-relaxed font-normal">{col.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (FAQ) ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-white border-t border-border-beige">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Clarity & Policies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-near-black mb-3">
              FREQUENTLY ASKED
            </h2>
            <p className="text-dark-gray text-xs sm:text-base leading-relaxed">
              Direct answers to common questions about membership, policies, and privileges.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="border border-border-beige rounded-sm overflow-hidden bg-ivory/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-near-black hover:text-wine transition-colors min-h-[48px]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold pr-2">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-wine shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-dark-gray leading-relaxed font-normal border-t border-border-beige/60 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Join / Consultation Inquiry Section ─── */}
      <section id="membership-inquiry" className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28 bg-ivory border-t border-border-beige">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border-beige p-6 sm:p-10 md:p-14 rounded-sm shadow-md">
            <div className="max-w-2xl mb-8">
              <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
                Begin Registration
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-near-black mb-3">
                LOCK IN YOUR {selectedPlan.toUpperCase()} TIER
              </h2>
              <p className="text-dark-gray text-xs sm:text-base leading-relaxed">
                Submit your details below to schedule your orientation, movement screen, and member keycard handover.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-wine/10 border border-wine/30 rounded-xs text-center"
              >
                <div className="w-12 h-12 bg-wine text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={24} />
                </div>
                <h3 className="text-lg font-bold text-near-black mb-1">
                  Inquiry Received for {selectedPlan} Tier
                </h3>
                <p className="text-xs sm:text-sm text-dark-gray max-w-md mx-auto">
                  Our admissions director will contact you within 2 hours to confirm your induction and schedule your movement screen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                      Selected Membership Tier
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => {
                        setFormData({ ...formData, plan: e.target.value });
                        setSelectedPlan(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                    >
                      <option value="X1 Basic">X1 Basic Tier (₹2,499/mo)</option>
                      <option value="X1 Pro">X1 Pro Tier (₹4,999/mo) - Recommended</option>
                      <option value="X1 Elite">X1 Elite Tier (₹8,999/mo)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    ref={magneticBtn.ref}
                    onMouseMove={magneticBtn.onMouseMove}
                    onMouseLeave={magneticBtn.onMouseLeave}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-xs transition-colors duration-300 shadow-lg shadow-wine/25 min-h-[48px]"
                  >
                    <span>Submit Membership Application</span>
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-[11px] font-mono text-dark-gray/70 mt-2.5">
                    By submitting, you agree to our honor code and facility safety standards.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
