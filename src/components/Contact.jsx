import React, { useState, useEffect, useRef } from 'react';
import { Mail, Check } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wrightcraft.studio/?hl=en',
    icon: faInstagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wrightcraft-studios-2b6b6a437/',
    icon: faLinkedin,
  },
];

export default function Contact() {
  const [hasEntered, setHasEntered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submittedAttempt, setSubmittedAttempt] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const sectionRef = useRef(null);

  // Fade up animation when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const errors = {
    name: !formData.name.trim() ? 'Name is required.' : '',
    email: !formData.email.trim()
      ? 'Email is required.'
      : !isValidEmail(formData.email)
      ? 'Please enter a valid email address.'
      : '',
    message: !formData.message.trim() ? 'Message is required.' : '',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedAttempt(true);
    setSubmitError('');

    if (errors.name || errors.email || errors.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xppwydrg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setSubmittedAttempt(false);
        // Re-enable after a short delay so they could send another message
        setTimeout(() => setIsSubmitting(false), 1500);
      } else {
        setSubmitError(
          'Something went wrong. Please try again, or email us directly at wrightcraftstudios@gmail.com.'
        );
        setIsSubmitting(false);
      }
    } catch {
      setSubmitError(
        'Something went wrong. Please try again, or email us directly at wrightcraftstudios@gmail.com.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-6 text-[#0A0A0A]"
      aria-label="Contact WrightCraft Studios"
    >
      <div
        className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* LEFT COLUMN: Headline, Contact details, Social links (~45% width on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-jakarta font-bold text-xs uppercase tracking-[0.24em] text-[#4A4A4A] mb-3">
            REACH OUT
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-[800] font-jakarta text-[#0A0A0A] leading-[1.08] tracking-[-0.035em]">
            Get in touch
          </h2>

          {/* Contact Email Row */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-6">
            <a
              href="mailto:wrightcraftstudios@gmail.com"
              className="flex items-center gap-4 group text-[#0A0A0A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-xl p-1 -m-1"
            >
              <div className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] group-hover:border-[#0A0A0A] flex items-center justify-center shrink-0 shadow-sm transition-colors">
                <Mail className="w-4 h-4 text-[#0A0A0A]" />
              </div>
              <div>
                <span className="block text-[11px] font-jakarta font-bold text-[#888888] uppercase tracking-wider">
                  Email
                </span>
                <span className="font-dm text-base sm:text-lg font-medium text-[#0A0A0A] group-hover:underline">
                  wrightcraftstudios@gmail.com
                </span>
              </div>
            </a>
          </div>

          {/* Social Icons (Instagram & Facebook) */}
          <div className="mt-8 sm:mt-10 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name}`}
                className="group w-10 h-10 rounded-full bg-white border border-[#E5E5E5] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] flex items-center justify-center transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="w-[17px] h-[17px] text-[#0A0A0A] group-hover:text-white transition-colors duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form (~55% width on desktop) */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white border border-[#E5E5E5] rounded-[20px] p-6 sm:p-8 md:p-10 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              {/* Two side-by-side fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Your Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-name"
                    className="font-jakarta font-bold text-xs uppercase tracking-[0.18em] text-[#4A4A4A] block mb-2"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3.5 rounded-xl border outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors ${
                      (touched.name || submittedAttempt) && errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]'
                    }`}
                  />
                  {(touched.name || submittedAttempt) && errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 font-dm">{errors.name}</p>
                  )}
                </div>

                {/* Your Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contact-email"
                    className="font-jakarta font-bold text-xs uppercase tracking-[0.18em] text-[#4A4A4A] block mb-2"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors ${
                      (touched.email || submittedAttempt) && errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]'
                    }`}
                  />
                  {(touched.email || submittedAttempt) && errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 font-dm">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <label
                  htmlFor="contact-message"
                  className="font-jakarta font-bold text-xs uppercase tracking-[0.18em] text-[#4A4A4A] block mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project or what you need help with..."
                  className={`w-full px-4 py-3.5 rounded-xl border outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors resize-y ${
                    (touched.message || submittedAttempt) && errors.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A]'
                  }`}
                />
                {(touched.message || submittedAttempt) && errors.message && (
                  <p className="text-red-500 text-xs mt-1.5 font-dm">{errors.message}</p>
                )}
              </div>

              {/* Success Message Banner */}
              {submitted && (
                <div className="flex items-center gap-2 text-xs font-jakarta font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
                  <Check className="w-4 h-4 stroke-[2.5] text-emerald-700 shrink-0" />
                  <span>Thanks! Your message has been sent.</span>
                </div>
              )}

              {/* Network / Server Error Banner */}
              {submitError && (
                <p className="text-red-500 text-xs font-dm leading-relaxed">{submitError}</p>
              )}

              {/* Send Message Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-[#0A0A0A] hover:bg-[#262626] disabled:opacity-60 disabled:cursor-not-allowed text-white font-jakarta font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
