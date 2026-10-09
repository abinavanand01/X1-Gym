import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ContactCTA() {
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.28);

  return (
    <section className="relative bg-white py-14 sm:py-20 md:py-28 overflow-hidden border-t border-border-beige">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        <div className="bg-ivory border border-border-beige rounded-sm p-8 sm:p-14 md:p-16 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
            <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold">
              Begin Your Journey
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-near-black mb-4">
            READY TO START?
          </h2>

          <p className="text-dark-gray text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal mb-8">
            Step into our Anna Nagar or OMR club in Chennai for a private tour, movement analysis, and consultation with our coaching staff.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <Link
              ref={magneticBtn.ref}
              onMouseMove={magneticBtn.onMouseMove}
              onMouseLeave={magneticBtn.onMouseLeave}
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-colors shadow-lg min-h-[48px]"
            >
              <span>CONTACT X1</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border border-border-beige hover:border-near-black bg-white text-near-black text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors min-h-[48px]"
            >
              Explore Memberships
            </Link>
          </div>

          <div className="pt-6 border-t border-border-beige/70 flex flex-wrap items-center justify-center gap-6 text-xs text-dark-gray font-mono">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-wine" /> Anna Nagar & OMR, Chennai
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} className="text-wine" /> +91 98400 12345
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} className="text-wine" /> concierge@x1athletic.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
