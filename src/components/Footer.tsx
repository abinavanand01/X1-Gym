import { navLinks } from '../data';

function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href) as HTMLElement | null;
  if (el) {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, offset: -50 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#EBE7DF] border-t border-border-beige pt-14 sm:pt-20 pb-10 sm:pb-12 text-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3.5 sm:space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="text-3xl font-black tracking-tight text-near-black inline-block group"
            >
              <span className="text-wine group-hover:text-wine-light transition-colors">X</span>1
            </a>
            <p className="text-wine text-xs uppercase tracking-[0.25em] font-semibold font-mono">
              Train Hard. Live Strong.
            </p>
            <p className="text-dark-gray text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
              A sanctuary for physical mastery and athletic transformation in Chennai, Tamil Nadu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-near-black text-xs uppercase tracking-[0.25em] mb-4 sm:mb-5 font-bold font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="inline-block py-0.5 text-dark-gray hover:text-wine text-sm transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="text-near-black text-xs uppercase tracking-[0.25em] mb-4 sm:mb-5 font-bold font-mono">
              Network
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {['Instagram', 'YouTube', 'Strava', 'LinkedIn'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="inline-block py-0.5 text-dark-gray hover:text-wine text-sm transition-colors duration-300 font-medium"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-near-black text-xs uppercase tracking-[0.25em] mb-4 sm:mb-5 font-bold font-mono">
              Standards
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {['Privacy Policy', 'Terms of Facility Use', 'Member Honor Code'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block py-0.5 text-dark-gray hover:text-wine text-sm transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="border-t border-border-beige pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3 sm:gap-4">
          <p className="text-dark-gray/70 text-xs font-mono">
            © 2026 X1 Athletic Club. All rights reserved.
          </p>
          <p className="text-dark-gray/60 text-[11px] uppercase tracking-[0.25em] font-mono">
            Forged with Discipline
          </p>
        </div>
      </div>
    </footer>
  );
}