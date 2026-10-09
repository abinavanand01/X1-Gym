import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Membership',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const magneticBtn = useMagnetic<HTMLButtonElement>(0.28);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'General Membership',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ivory text-near-black pt-24 sm:pt-28 md:pt-32">
      {/* ─── Hero Header ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16 md:py-24 border-b border-border-beige">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-wine inline-block" />
              <span className="text-wine font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold">
                Direct Communications
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-near-black mb-6">
              LET'S START YOUR
              <br />
              <span className="text-wine">JOURNEY</span>
            </h1>

            <p className="text-dark-gray text-sm sm:text-base md:text-xl leading-relaxed font-normal mb-8 max-w-2xl">
              Arrange a private facility tour, schedule your complimentary biomechanical assessment, or speak directly with our admissions director.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'Immediate 2-Hour Response Time',
                'Complimentary Movement Screen',
                'Valet Parking Available',
                'Private Induction Suite',
              ].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-white border border-border-beige rounded-xs text-xs font-mono font-medium text-near-black shadow-xs"
                >
                  <ShieldCheck size={13} className="text-wine shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Complete Contact Information & Form ─── */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Contact Details Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {/* Facility Locations */}
              <div className="bg-white border border-border-beige p-6 sm:p-8 rounded-sm shadow-xs space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 border border-wine/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-near-black mb-1">
                      X1 Flagship Club
                    </h3>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                      Plot 14, 2nd Avenue, Anna Nagar East, Chennai — 600102
                    </p>
                    <p className="text-dark-gray/80 text-xs mt-1">
                      Secondary Performance Bay: OMR Expressway, Perungudi, Chennai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-border-beige">
                  <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 border border-wine/20">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-near-black mb-1">
                      Operating Hours
                    </h3>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                      <strong className="text-near-black font-semibold">Monday – Saturday:</strong> 5:30 AM – 10:30 PM
                    </p>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                      <strong className="text-near-black font-semibold">Sunday:</strong> 6:00 AM – 8:00 PM
                    </p>
                    <span className="text-[11px] font-mono text-wine mt-1 block">
                      * 24/7 keycard access for X1 Pro & Elite tiers
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-border-beige">
                  <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 border border-wine/20">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-near-black mb-1">
                      Direct Telephones
                    </h3>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                      Admissions: <a href="tel:+919840012345" className="font-mono text-near-black hover:text-wine font-medium">+91 98400 12345</a>
                    </p>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                      Desk: <a href="tel:+919840054321" className="font-mono text-near-black hover:text-wine font-medium">+91 98400 54321</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-border-beige">
                  <div className="p-2.5 rounded-xs bg-wine/10 text-wine shrink-0 border border-wine/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-near-black mb-1">
                      Electronic Desks
                    </h3>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed font-mono">
                      concierge@x1athletic.com
                    </p>
                    <p className="text-dark-gray text-xs sm:text-sm leading-relaxed font-mono">
                      coaching@x1athletic.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-5 sm:p-6 bg-ivory border border-border-beige rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-near-black font-bold block mb-3">
                  Connect on Social
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {['Instagram', 'YouTube', 'Strava', 'LinkedIn'].map((net) => (
                    <span
                      key={net}
                      className="px-3.5 py-1.5 bg-white border border-border-beige text-xs font-mono font-medium text-dark-gray hover:text-wine hover:border-wine transition-colors rounded-xs cursor-pointer"
                    >
                      {net}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Complete Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-border-beige p-6 sm:p-10 md:p-12 rounded-sm shadow-md">
              <div className="mb-8">
                <span className="text-wine font-mono text-xs uppercase tracking-[0.25em] font-semibold block mb-1">
                  Inquiry Portal
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-near-black mb-2">
                  SEND A DIRECT MESSAGE
                </h2>
                <p className="text-dark-gray text-xs sm:text-sm leading-relaxed">
                  Fill in your information and our concierge team will respond within two hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-wine/10 border border-wine/30 rounded-xs text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-wine text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-near-black">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-gray max-w-md mx-auto">
                    Thank you, {formData.name || 'Athlete'}. Our team has received your message and will contact you via phone and email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                        Topic of Inquiry
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors"
                      >
                        <option value="General Membership">General Membership Induction</option>
                        <option value="Facility Tour">Private Facility Tour</option>
                        <option value="Private Coaching">Master Coach 1-on-1 Mentorship</option>
                        <option value="Movement Screen">Complimentary Movement Screen</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-near-black font-semibold mb-1.5">
                      Your Message or Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current training background, goals, or preferred appointment time..."
                      className="w-full px-4 py-3 bg-ivory border border-border-beige rounded-xs text-sm text-near-black focus:outline-none focus:border-wine transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      ref={magneticBtn.ref}
                      onMouseMove={magneticBtn.onMouseMove}
                      onMouseLeave={magneticBtn.onMouseLeave}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-4 bg-wine hover:bg-wine-light text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-xs transition-colors duration-300 shadow-lg shadow-wine/25 min-h-[48px] cursor-pointer"
                    >
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </button>
                    <p className="text-[11px] font-mono text-dark-gray/70 mt-2.5">
                      We respect your privacy. No spam or unsolicited marketing communications.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
