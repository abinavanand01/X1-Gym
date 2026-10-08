import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import type { MembershipPlan } from '../types';
import { useMagnetic } from '../hooks/useMagnetic';

interface Props {
  plan: MembershipPlan;
  index: number;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: easeOut },
  }),
};

function scrollToSection(selector: string) {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (el) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, offset: -40 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default function MembershipCard({ plan, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.25, 7);

  /* ─── 3D Tilt Effect ─── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 250, damping: 25, mass: 0.15 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), springConfig);

  /* Shine/glare overlay position for highlighted card */
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);
  const glareOpacity = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
      glareOpacity.set(plan.highlighted ? 0.08 : 0.04);
    },
    [mouseX, mouseY, glareOpacity, plan.highlighted],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    glareOpacity.set(0);
  }, [mouseX, mouseY, glareOpacity]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col p-6 sm:p-8 md:p-10 rounded-xs border transition-all duration-400 ${
        plan.highlighted
          ? 'bg-[#18181c] border-2 border-wine shadow-[0_20px_60px_rgba(122,41,37,0.22)] md:scale-105 z-10'
          : 'bg-[#141416] hover:bg-[#18181b] border-white/10 hover:border-wine/50 shadow-md'
      }`}
    >
      {/* Premium subtle glare overlay */}
      <motion.div
        className="absolute inset-0 rounded-xs pointer-events-none z-0"
        style={{
          opacity: glareOpacity,
          background: useTransform(
            [glareX, glareY],
            ([x, y]: number[]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          ),
        }}
      />

      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-wine text-white text-[10px] font-bold uppercase tracking-[0.25em] rounded-xs shadow-md shadow-wine/40">
          Most Popular
        </div>
      )}

      <div className="mb-8 relative z-10">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 block mb-2">
          Tier 0{index + 1}
        </span>
        <h3 className={`text-xl font-bold uppercase tracking-[0.15em] mb-4 ${
          plan.highlighted ? 'text-wine-light' : 'text-white'
        }`}>
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
            {plan.price}
          </span>
          <span className="text-stone-400 text-sm font-medium">/ month</span>
        </div>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1 relative z-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-stone-300 leading-snug font-normal">
            <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${plan.highlighted ? 'bg-wine text-white' : 'bg-wine/20 text-wine-light'}`}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        ref={plan.highlighted ? magneticBtn.ref : undefined}
        onMouseMove={plan.highlighted ? magneticBtn.onMouseMove : undefined}
        onMouseLeave={plan.highlighted ? magneticBtn.onMouseLeave : undefined}
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#contact');
        }}
        className={`group relative z-10 flex items-center justify-center gap-2 w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 ${
          plan.highlighted
            ? 'bg-wine hover:bg-wine-light text-white shadow-md shadow-wine/25 active:scale-[0.98] will-change-transform'
            : 'border border-white/15 hover:border-wine bg-white/5 hover:bg-wine text-white active:scale-[0.98]'
        }`}
      >
        <span>Get Started</span>
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
}