import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Products', href: '#products' },
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-8 lg:px-9 pt-4 sm:pt-6">
        <nav className="pointer-events-auto relative w-full font-jakarta" aria-label="Main Navigation">
          <div className="flex items-center justify-between gap-3">
        {/* Left: Brand Pill - Solid white with soft shadow, black text */}
        <a
          href="#"
          className="bg-white text-[#0A0A0A] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#E5E5E5] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-200 hover:shadow-md hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          {/* Logo Mark: Black circle with white 'W' */}
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-jakarta font-extrabold text-[11px] sm:text-xs shadow-inner shrink-0">
            W
          </span>
          <span className="font-jakarta font-bold tracking-tight text-xs sm:text-sm md:text-base text-[#0A0A0A]">
            WrightCraft Studios
          </span>
        </a>

        {/* Center: Desktop Navigation Links - Solid white pill with soft shadow, black text, light gray hover */}
        <div className="hidden md:flex items-center bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#E5E5E5] px-2.5 py-2 rounded-full">
          <ul className="flex items-center gap-1 sm:gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-xs sm:text-sm font-jakarta font-semibold text-[#0A0A0A] hover:bg-[#F2F2F2] transition-colors duration-150 px-3.5 py-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Get In Touch Button - Solid black pill with white bold text, dark gray on hover */}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center bg-white hover:bg-[#F2F2F2] text-black font-jakarta font-bold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Get in touch
          </a>

          {/* Mobile Menu Toggle Button - Solid white */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-white text-[#0A0A0A] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#E5E5E5] p-2 sm:p-2.5 rounded-full hover:bg-[#F2F2F2] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Solid white with soft shadow */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2.5 p-4 bg-white border border-[#E5E5E5] rounded-2xl shadow-xl animate-fade-in-up">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block px-3.5 py-2 rounded-xl text-[#0A0A0A] hover:bg-[#F2F2F2] text-sm font-jakarta font-semibold transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[#E5E5E5] mt-1">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="block text-center bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-sm py-2.5 rounded-xl transition shadow-sm"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
        </nav>
      </div>
    </header>
  );
}
