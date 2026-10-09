import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow slight delay for page components to render
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(element, { duration: 1.0, offset: -60 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 90);

      return () => clearTimeout(timer);
    } else {
      // No hash: scroll to top immediately
      window.scrollTo(0, 0);
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash]);

  return null;
}
