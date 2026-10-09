import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, type NavLink } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const magneticBtn = useMagnetic<HTMLButtonElement>(0.28);

  const scrollTo = useCallback((sectionId: string) => {
    setMobileOpen(false);
    document.body.style.overflow = '';

    // Defer slightly so browser paints the unlocked body state before executing smooth scroll
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(el, { duration: 1.1, offset: -75 });
        } else {
          const navOffset = 70;
          const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        setActiveSection(sectionId);
      }
    });
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['contact', 'workout', 'membership', 'trainers', 'programs', 'about', 'home'];
      const scrollPos = window.scrollY + 160;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open, restore immediately when closed
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

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Ensure menu closes and unlocks if viewport expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

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
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="text-2xl sm:text-3xl font-black tracking-tight text-near-black flex items-center gap-0.5 group focus:outline-none"
            aria-label="X1 Athletic Club Home"
          >
            <span className="text-wine group-hover:text-wine-light transition-colors">X</span>
            <span>1</span>
          </a>

          {/* Desktop nav links with active indicator */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.sectionId);
                  }}
                  className={`text-xs uppercase tracking-[0.22em] font-semibold transition-colors duration-300 relative py-1 cursor-pointer focus:outline-none
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-wine after:transition-all after:duration-400
                    ${
                      active
                        ? 'text-near-black after:w-full font-bold'
                        : 'text-dark-gray hover:text-near-black after:w-0 hover:after:w-full'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Magnetic Join CTA Button -> Scrolls to #membership */}
            <button
              ref={magneticBtn.ref}
              onMouseMove={magneticBtn.onMouseMove}
              onMouseLeave={magneticBtn.onMouseLeave}
              onClick={() => scrollTo('membership')}
              className="hidden sm:inline-flex px-5 sm:px-6 py-2.5 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.18em] rounded-xs transition-colors duration-300 shadow-sm shadow-wine/20 active:scale-[0.98] cursor-pointer"
            >
              Join X1
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-near-black p-2 -mr-1 focus:outline-none hover:text-wine transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
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
            exit={{ opacity: 0, y: -10, pointerEvents: 'none' }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-2xl flex flex-col justify-between pt-20 pb-10 px-6 lg:hidden overflow-y-auto overscroll-contain"
            style={{ minHeight: '100dvh' }}
          >
            <nav className="flex flex-col items-center justify-center gap-3.5 sm:gap-5 my-auto w-full max-w-sm mx-auto" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => {
                const active = activeSection === link.sectionId;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.sectionId);
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.35, ease: easeOut }}
                    className={`w-full text-center py-2.5 text-lg sm:text-xl uppercase tracking-[0.22em] font-bold transition-colors min-h-[44px] flex items-center justify-center cursor-pointer ${
                      active ? 'text-wine font-black' : 'text-near-black hover:text-wine active:text-wine'
                    }`}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                );
              })}

              <motion.button
                onClick={() => scrollTo('membership')}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35, ease: easeOut }}
                className="mt-3 w-full py-4 text-center bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-md shadow-wine/25 active:scale-[0.98] min-h-[48px] flex items-center justify-center cursor-pointer"
              >
                Join X1
              </motion.button>
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