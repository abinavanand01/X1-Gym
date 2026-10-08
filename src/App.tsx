import { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import FeaturedTraining from './components/FeaturedTraining';
import Benefits from './components/Benefits';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import GallerySection from './components/GallerySection';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Ultra-smooth buttery Lenis configuration with tuned lerp inertia
    const lenis = new Lenis({
      lerp: 0.08, // Liquid inertia for the "butter melting" glide feel
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95, // Smooth, non-jarring mouse wheel ticks
      touchMultiplier: 1.25,
      infinite: false,
      autoResize: true,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-near-black font-sans selection:bg-wine selection:text-ivory">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Programs />
        <FeaturedTraining />
        <Benefits />
        <Trainers />
        <Membership />
        <GallerySection />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;