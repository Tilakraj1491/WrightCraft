import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Circular "Get in touch" wheel badge:
 * Updated with inverted colors for high contrast and visual harmony
 * against the black hero background / full-height photo.
 * - Solid white circle (#FFFFFF)
 * - Rotating "GET IN TOUCH • GET IN TOUCH •" SVG text in black (#0A0A0A)
 * - Black arrow in center (#0A0A0A)
 * - 8px crisp outer ring and soft shadow
 */
export default function CircularBadge() {
  const handleClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      aria-label="Get in touch - Scroll to contact section"
      className="group block relative rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.05]"
      style={{
        width: 'var(--badge-size, clamp(96px, 14vh, 132px))',
        height: 'var(--badge-size, clamp(96px, 14vh, 132px))',
      }}
    >
      {/* 
        Inverted Style:
        Solid white circular body with 8px crisp ring and deep soft shadow
      */}
      <div className="w-full h-full rounded-full border-[8px] border-white/90 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden box-border">
        
        {/* Continuous rotating text around the perimeter in near-black */}
        <div className="absolute inset-0 pointer-events-none animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            aria-hidden="true"
          >
            <path
              id="wheelCirclePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
            <text className="text-[7.4px] font-jakarta font-bold tracking-[0.24em] fill-[#0A0A0A] uppercase">
              <textPath href="#wheelCirclePath" startOffset="0%">
                GET IN TOUCH • GET IN TOUCH •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Black Arrow */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none">
          <ArrowUpRight className="text-[#0A0A0A] stroke-[2.6] w-[clamp(22px,3.2vh,30px)] h-[clamp(22px,3.2vh,30px)] transition-transform duration-300 group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

      </div>
    </a>
  );
}
