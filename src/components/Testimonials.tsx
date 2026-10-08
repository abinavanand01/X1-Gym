import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-8 sm:mb-14 md:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                Member Testimonials
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              BUILT BY THE
              <br />
              <span className="text-wine">COMMUNITY</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border-beige bg-white hover:border-wine hover:bg-wine text-near-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border-beige bg-white hover:border-wine hover:bg-wine text-near-black hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Testimonials Grid with White Cards against Ivory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: easeOut }}
              className={`relative flex flex-col justify-between rounded-sm p-6 sm:p-8 transition-all duration-300 border ${
                activeIndex === i
                  ? 'bg-white border-wine shadow-[0_10px_35px_rgba(122,41,37,0.08)]'
                  : 'bg-white/80 hover:bg-white border-border-beige hover:border-wine/30 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} size={14} className="fill-wine text-wine" />
                    ))}
                  </div>
                  <Quote size={20} className="text-wine/30" />
                </div>

                <blockquote className="text-dark-gray text-sm md:text-base leading-relaxed mb-8 italic font-normal">
                  "{testimonial.text}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-border-beige">
                <div className="text-near-black font-bold text-base tracking-wide">
                  {testimonial.author}
                </div>
                {testimonial.role && (
                  <div className="text-wine text-xs uppercase tracking-[0.15em] font-mono font-medium mt-1">
                    {testimonial.role}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}