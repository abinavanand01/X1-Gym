import { useRef, useCallback } from 'react';

/**
 * Magnetic hover effect hook — elements subtly follow the cursor on hover.
 * Produces a premium, alive-feeling interaction on buttons and cards.
 *
 * Usage:
 *   const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.35);
 *   <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} />
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.25, maxDistance = 7) {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      // Disable on touch devices or if reduced motion is preferred
      if (
        typeof window === 'undefined' ||
        !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const rawX = (e.clientX - rect.left - rect.width / 2) * strength;
      const rawY = (e.clientY - rect.top - rect.height / 2) * strength;

      // Clamp movement smoothly between -maxDistance and +maxDistance (4-8px)
      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, rawX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, rawY));

      ref.current.style.transform = `translate(${clampedX.toFixed(2)}px, ${clampedY.toFixed(2)}px)`;
      ref.current.style.transition = 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)';
    },
    [strength, maxDistance],
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
    ref.current.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

export default useMagnetic;
