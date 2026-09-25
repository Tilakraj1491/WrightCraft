import React from 'react';
import { ArrowUp } from 'lucide-react';

const SECTIONS_LINKS = [
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const STUDIO_LINKS = [
  { name: 'Careers', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#contact' },
];

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
];

const FOOTER_SOCIALS = [
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
                aria-label={`Visit our ${social.name}`}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {social.icon}
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
