import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin horizontal scroll-linked progress bar at the very top of the page.
 * Uses wine accent color and spring physics for butter-smooth tracking.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.15,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #7A2925 0%, #94342F 50%, #7A2925 100%)',
      }}
    />
  );
}
