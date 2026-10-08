import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative bg-ivory py-12 sm:py-20 md:py-36 lg:py-44 overflow-hidden border-t border-border-beige">
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
                Direct Inquiry
              </span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-near-black">
              LET'S START YOUR
              <br />
              <span className="text-wine">JOURNEY</span>
            </h2>
          </div>
          <p className="text-dark-gray text-sm sm:text-base md:text-lg max-w-md leading-relaxed font-normal">
            Reach out directly to arrange a private club tour, complimentary movement analysis, or membership consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Details & Location Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6 bg-white border border-border-beige p-5 sm:p-8 rounded-sm shadow-sm">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 mt-0.5 border border-wine/20">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-near-black font-bold text-sm sm:text-base mb-0.5 sm:mb-1">X1 Flagship Club</h3>
                  <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">Anna Nagar & OMR, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 mt-0.5 border border-wine/20">
                  <Clock size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-near-black font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Operating Hours</h3>
                  <p className="text-dark-gray text-xs sm:text-sm">
                    Monday – Friday: <span className="text-near-black font-medium">5:00 AM – 10:00 PM</span>
                  </p>
                  <p className="text-dark-gray text-xs sm:text-sm">
                    Saturday – Sunday: <span className="text-near-black font-medium">6:00 AM – 9:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 mt-0.5 border border-wine/20">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-near-black font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Direct Line</h3>
                  <p className="text-dark-gray text-xs sm:text-sm font-medium">+91 98400 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 mt-0.5 border border-wine/20">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-near-black font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Concierge Email</h3>
                  <a href="mailto:hello@x1fitness.com" className="text-wine hover:text-wine-light font-medium text-xs sm:text-sm transition-colors">
                    hello@x1fitness.com
                  </a>
                </div>
              </div>
            </div>

            {/* Architectural Stylized Location Card in White/Ivory */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-white border border-border-beige rounded-sm overflow-hidden flex flex-col justify-between p-4 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-dark-gray/70">
                  Location Matrix
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-[0.1em] bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Facility Staffed Today
                </span>
              </div>

              <div className="text-center z-10 my-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-wine/10 border border-wine/30 flex items-center justify-center text-wine mb-2 shadow-sm">
                  <MapPin size={20} className="animate-bounce" />
                </div>
                <h4 className="text-near-black font-bold text-sm sm:text-base tracking-wide">X1 Athletic Club</h4>
                <p className="text-dark-gray text-[11px] sm:text-xs mt-0.5 font-mono">13.0827° N, 80.2707° E · Chennai</p>
              </div>

              <div className="flex items-center justify-between z-10 text-[10px] sm:text-[11px] font-mono text-dark-gray/70">
                <span>Valet Parking Available</span>
                <span>Private Keycard Access</span>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-border-beige p-5 sm:p-8 md:p-10 rounded-sm shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 sm:py-16 text-center space-y-4"
              >
                <CheckCircle2 size={44} className="text-wine mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold text-near-black">Inquiry Dispatched</h3>
                <p className="text-dark-gray text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out to X1. Our athletic director will contact you within 24 hours to coordinate your visit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-ivory border border-border-beige hover:border-wine text-near-black text-xs uppercase tracking-[0.2em] rounded-xs transition-colors font-semibold min-h-[44px]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-mono tracking-[0.2em] text-dark-gray font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Arjun Raman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-ivory/60 border border-border-beige focus:border-wine focus:bg-white rounded-xs text-near-black text-base sm:text-sm placeholder:text-dark-gray/40 outline-none transition-all duration-300 focus:ring-1 focus:ring-wine/30"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase font-mono tracking-[0.2em] text-dark-gray font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="arjun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-ivory/60 border border-border-beige focus:border-wine focus:bg-white rounded-xs text-near-black text-base sm:text-sm placeholder:text-dark-gray/40 outline-none transition-all duration-300 focus:ring-1 focus:ring-wine/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase font-mono tracking-[0.2em] text-dark-gray font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-ivory/60 border border-border-beige focus:border-wine focus:bg-white rounded-xs text-near-black text-base sm:text-sm placeholder:text-dark-gray/40 outline-none transition-all duration-300 focus:ring-1 focus:ring-wine/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase font-mono tracking-[0.2em] text-dark-gray font-semibold mb-2">
                    Message / Training Goals *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your fitness background and goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-ivory/60 border border-border-beige focus:border-wine focus:bg-white rounded-xs text-near-black text-base sm:text-sm placeholder:text-dark-gray/40 outline-none transition-all duration-300 focus:ring-1 focus:ring-wine/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] py-4 bg-wine hover:bg-wine-light text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-md shadow-wine/20 flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>Submit Inquiry</span>
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}