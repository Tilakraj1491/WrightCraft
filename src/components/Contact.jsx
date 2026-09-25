import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4 fill-none stroke-currentColor stroke-[2]" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const [hasEntered, setHasEntered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

          {/* Three Contact Rows */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-6">
            {/* Email */}
            <a
              href="mailto:hello@wrightcraftstudios.com"
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
                  hello@wrightcraftstudios.com
                </span>
              </div>
            </a>

            {/* Phone (placeholder) */}
            <div className="flex items-center gap-4 text-[#0A0A0A]">
              <div className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4 text-[#0A0A0A]" />
              </div>
              <div>
                <span className="block text-[11px] font-jakarta font-bold text-[#888888] uppercase tracking-wider">
                  Phone
                </span>
                <span className="font-dm text-base sm:text-lg font-medium text-[#0A0A0A]">
                  +1 (000) 000-0000
                </span>
              </div>
            </div>

            {/* Address (placeholder) */}
            <div className="flex items-center gap-4 text-[#0A0A0A]">
              <div className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4 text-[#0A0A0A]" />
              </div>
              <div>
                <span className="block text-[11px] font-jakarta font-bold text-[#888888] uppercase tracking-wider">
                  Address
                </span>
                <span className="font-dm text-base sm:text-lg font-medium text-[#0A0A0A]">
                  Remote-first studio
                </span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 sm:mt-12 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={`Visit our ${social.name}`}
                className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] flex items-center justify-center transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form (~55% width on desktop) */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white border border-[#E5E5E5] rounded-[20px] p-6 sm:p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center shadow-md">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-jakarta font-[800] text-[#0A0A0A]">
                  Thank you!
                </h3>
                <p className="text-sm sm:text-base font-dm text-[#666666] max-w-sm">
                  Your message has been sent. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#E5E5E5] text-xs font-jakarta font-bold hover:bg-[#F5F5F5] transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors"
                    />
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
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors"
                    />
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
                    placeholder="Tell us about your project or what you need help with..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none font-dm text-sm sm:text-base text-[#0A0A0A] placeholder:text-[#A3A3A3] transition-colors resize-y"
                  />
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
