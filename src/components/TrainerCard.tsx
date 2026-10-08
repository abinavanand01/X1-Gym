import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Trainer } from '../types';
import ImageWithFallback from './ImageWithFallback';

interface Props {
  trainer: Trainer;
  index: number;
}

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: easeOut },
  }),
};

export default function TrainerCard({ trainer, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex flex-col bg-white border border-border-beige hover:border-wine/40 rounded-sm overflow-hidden transition-all duration-400 shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-warm">
        <ImageWithFallback
          src={trainer.image}
          alt={`Coach ${trainer.name} - ${trainer.specialty}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-wine text-xs uppercase tracking-[0.25em] font-semibold mb-2 block font-mono">
            {trainer.specialty}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-near-black group-hover:text-wine transition-colors duration-300 mb-3">
            {trainer.name}
          </h3>
          <p className="text-dark-gray text-sm leading-relaxed">
            {trainer.bio}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border-beige flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-dark-gray/60">
          <span>X1 Faculty</span>
          <span className="text-wine font-semibold">Certified</span>
        </div>
      </div>
    </motion.div>
  );
}