import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SECTIONS_LINKS = [
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const STUDIO_LINKS = [
  { name: 'Contact', href: '#contact' },
];

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
];

const FOOTER_SOCIALS = [
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

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="w-full bg-[#0A0A0A] text-white pt-16 sm:pt-24 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-16"
      aria-label="Site Footer"
    >
      <div className="max-w-[1640px] mx-auto w-full flex flex-col">
        {/* TOP AREA: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col gap-3 pr-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center font-jakarta font-extrabold text-xs shadow-sm shrink-0">
                W
              </span>
              <span className="font-jakarta font-bold text-base sm:text-lg text-white tracking-tight">
                WrightCraft Studios
              </span>
            </div>
            <p className="font-dm text-sm sm:text-base text-[#888888] max-w-sm mt-1 leading-relaxed">
              Handcrafted software products, websites, and intelligent automation built for real problems.
            </p>
          </div>

          {/* Sections Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-3">
            <span className="font-jakarta font-bold text-xs uppercase tracking-[0.2em] text-[#888888]">
              SECTIONS
            </span>
            <ul className="flex flex-col gap-2.5 mt-1">
              {SECTIONS_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="font-dm text-sm text-[#D4D4D4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-3">
            <span className="font-jakarta font-bold text-xs uppercase tracking-[0.2em] text-[#888888]">
              STUDIO
            </span>
            <ul className="flex flex-col gap-2.5 mt-1">
              {STUDIO_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => link.href.startsWith('#') && scrollTo(e, link.href)}
                    className="font-dm text-sm text-[#D4D4D4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-3">
            <span className="font-jakarta font-bold text-xs uppercase tracking-[0.2em] text-[#888888]">
              LEGAL
            </span>
            <ul className="flex flex-col gap-2.5 mt-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-dm text-sm text-[#D4D4D4] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* THIN DIVIDER & SOCIAL ICONS */}
        <div className="w-full pt-8 pb-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name}`}
                className="group w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="w-[16px] h-[16px] text-white/70 group-hover:text-[#0A0A0A] transition-colors duration-200"
                />
              </a>
            ))}
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#888888] font-jakarta font-semibold hidden sm:inline">
            CONNECT WITH US
          </span>
        </div>

        {/* HUGE WORDMARK */}
        <div className="w-full my-6 sm:my-10 select-none overflow-hidden">
          <h2 className="text-[clamp(3.2rem,13vw,9.5rem)] font-[800] font-jakarta text-white tracking-[-0.04em] leading-none whitespace-nowrap text-left">
            WrightCraft
          </h2>
        </div>

        {/* SLIM FOOTER BOTTOM ROW */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-[#888888]">
          <p>© 2026 WrightCraft Studios. All rights reserved.</p>
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-jakarta font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-2 py-1 -mx-2 -my-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
