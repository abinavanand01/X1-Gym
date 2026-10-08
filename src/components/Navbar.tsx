import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.28);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 30;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

    // Detect active section for the indicator underline
    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(`#${sections[i]}`);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { duration: 1.2, offset: -50 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-500 py-3.5 sm:py-4 will-change-transform ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-border-beige shadow-[0_4px_25px_rgba(17,17,17,0.04)]'
            : 'bg-ivory/80 backdrop-blur-sm border-b border-border-beige/50'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl sm:text-3xl font-black tracking-tight text-near-black flex items-center gap-0.5 group focus:outline-none"
            aria-label="X1 Athletic Club Home"
          >
            <span className="text-wine group-hover:text-wine-light transition-colors">X</span>
            <span>1</span>
          </a>

          {/* Desktop nav links with active indicator */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.22em] font-semibold transition-colors duration-300 relative py-1
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-wine after:transition-all after:duration-400
                  ${
                    activeSection === link.href
                      ? 'text-near-black after:w-full'
                      : 'text-dark-gray hover:text-near-black after:w-0 hover:after:w-full'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Magnetic CTA Button */}
            <a
              ref={magneticBtn.ref}
              onMouseMove={magneticBtn.onMouseMove}
              onMouseLeave={magneticBtn.onMouseLeave}
              href="#membership"
              onClick={(e) => handleNavClick(e, '#membership')}
              className="hidden sm:inline-flex px-5 sm:px-6 py-2.5 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors duration-300 shadow-sm shadow-wine/20 active:scale-[0.98]"
            >
              Join X1
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-near-black p-2 -mr-1 focus:outline-none hover:text-wine transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean, Full-Screen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-2xl flex flex-col justify-between pt-20 pb-10 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center gap-4 sm:gap-6 my-auto w-full max-w-sm mx-auto" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: easeOut }}
                  className="w-full text-center py-2.5 sm:py-3 text-xl sm:text-2xl uppercase tracking-[0.22em] font-bold text-near-black hover:text-wine active:text-wine transition-colors min-h-[44px] flex items-center justify-center"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#membership"
                onClick={(e) => handleNavClick(e, '#membership')}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35, ease: easeOut }}
                className="mt-4 w-full py-4 text-center bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-md shadow-wine/25 active:scale-[0.98] min-h-[48px] flex items-center justify-center"
              >
                Join X1
              </motion.a>
            </nav>

            <div className="text-center pt-4 border-t border-border-beige/50">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-dark-gray/60">
                X1 Athletic Club • Chennai
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}