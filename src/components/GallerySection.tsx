import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { galleryImages } from '../data';
import ImageWithFallback from './ImageWithFallback';
import { Maximize2 } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 768 && window.matchMedia('(pointer: fine)').matches);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.2,
  });

  const yParallax = useTransform(smoothProgress, [0, 1], [30, -30]);

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 row-span-2 md:col-span-2 md:row-span-2';
      case 'medium':
        return 'col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                The Architecture of Iron
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              THE X1
              <br />
              <span className="text-outline-wine hover:text-wine transition-colors duration-500">ENVIRONMENT</span>
            </h2>
          </div>
          <p className="text-dark-gray text-xs sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            A cathedral of physical performance. Calibrated steel, custom matte finish Eleiko racks, and recovery suites crafted without compromise.
          </p>
        </motion.div>

        {/* Dynamic Editorial Grid with parallax on desktop & natural scroll on mobile */}
        <motion.div
          style={{ y: isDesktop ? yParallax : 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px] sm:auto-rows-[240px] md:auto-rows-[270px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: easeOut }}
              className={`${getSizeClass(img.size)} group relative overflow-hidden rounded-xs border border-border-beige bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xs bg-ivory-warm">
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover editorial-img"
                />
                
                {/* Natural Color Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/55 via-transparent to-transparent opacity-45 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Overlay Badge & Caption */}
                <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                  <div className="flex justify-end">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-near-black border border-white/60 shadow-sm">
                      <Maximize2 size={12} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-wine-light font-semibold block mb-0.5">
                      Zone 0{i + 1}
                    </span>
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wide">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}