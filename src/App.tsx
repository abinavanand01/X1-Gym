import { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Workout from './components/Workout';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Detect touch / mobile devices — DO NOT hijack touch events on mobile
    // Native vertical touch scrolling is preserved completely unhindered
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024);

    if (isTouchDevice) {
      (window as any).lenis = null;
      return;
    }

    let lenis: Lenis | null = new Lenis({
      lerp: 0.08, // Buttery glide for desktop mouse wheel
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 0, // Never intercept touch gestures
      infinite: false,
      autoResize: true,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      if (lenis) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
          (window as any).lenis = null;
        }
      } else if (lenis) {
        lenis.resize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (lenis) {
        lenis.destroy();
      }
      (window as any).lenis = undefined;
    };
  }, []);

  // Handle initial hash jump on load or hash change
  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            const lenis = (window as any).lenis;
            if (lenis) {
              lenis.scrollTo(el, { duration: 1.1, offset: -75 });
            } else {
              const top = el.getBoundingClientRect().top + window.scrollY - 75;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-ivory text-near-black font-sans selection:bg-wine selection:text-ivory flex flex-col justify-between">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        {/* 1. HOME / HERO */}
        <Hero />

        {/* 2. ABOUT X1 */}
        <About />

        {/* 3. PROGRAMS */}
        <Programs />

        {/* 4. TRAINERS */}
        <Trainers />

        {/* 5. MEMBERSHIP */}
        <Membership />

        {/* 6. WORKOUT */}
        <Workout />

        {/* 7. CONTACT */}
        <Contact />
      </main>
      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;