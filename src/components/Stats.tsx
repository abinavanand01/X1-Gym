import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !numberRef.current) return;
    
    let startTimestamp: number | null = null;
    const duration = 1600;
    const node = numberRef.current;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easedProgress * value);

      node.textContent = current.toLocaleString();

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        node.textContent = value.toLocaleString();
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <div ref={containerRef} className="inline-flex items-baseline justify-center">
      <span
        ref={numberRef}
        style={{ fontVariantNumeric: 'tabular-nums' }}
        className="text-near-black tracking-tight inline-block min-w-[1.2ch] will-change-contents"
      >
        0
      </span>
      {suffix && <span className="text-wine ml-0.5">{suffix}</span>}
    </div>
  );
}

const statsData = [
  { value: 500, suffix: '+', label: 'Active Athletes' },
  { value: 14, label: 'Master Faculty' },
  { value: 20, suffix: '+', label: 'Weekly Masterclasses' },
  { value: 7, label: 'Days Open / 24/7' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-white py-14 sm:py-20 md:py-32 border-y border-border-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: easeOut }}
              className="text-center relative group"
            >
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-3 leading-none tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
              </div>
              <div className="text-dark-gray text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium font-mono group-hover:text-near-black transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}