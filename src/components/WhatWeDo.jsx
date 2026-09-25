import React, { useState, useEffect, useRef } from 'react';
import { Boxes, Globe, Workflow, LifeBuoy, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Software Products',
    icon: Boxes,
    description: 'Focused products designed around problems people face every day.',
    href: '#products',
  },
  {
    id: 2,
    title: 'Websites',
    icon: Globe,
    description: 'Clear, fast websites for businesses that want a stronger online presence.',
    href: '#services',
  },
  {
    id: 3,
    title: 'Automation',
    icon: Workflow,
    description: 'Simple automation that takes repetitive work off your plate.',
    href: '#services',
  },
  {
    id: 4,
    title: 'Ongoing Support',
    icon: LifeBuoy,
    description: 'We ship, then stay close, fixing and improving as you grow.',
    href: '#process',
  },
];

export default function WhatWeDo() {
  const [activeId, setActiveId] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="relative w-full min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0 overflow-hidden bg-transparent text-[#0A0A0A] select-none scroll-mt-4"
      aria-label="What We Do"
    >
      {/* 
        BACKGROUND: Faint blueprint line grid (#EDEDED)
        Evenly spaced horizontal and vertical lines crossing the whole section
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#EDEDED" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1640px] mx-auto py-4 sm:py-6 lg:py-8">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-12 xl:gap-14">
          
          {/* 
            LEFT ZONE: Title Card (~34% width on desktop)
            Vertically centered against the grid
          */}
          <div
            className={`w-full lg:w-[35%] xl:w-[34%] flex flex-col justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-white border border-[#E5E5E5] rounded-[28px] p-7 sm:p-9 md:p-10 xl:p-11 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
              {/* Technical Node Indicator on Title Card (Right center) */}
              <div
                className="hidden lg:block absolute -right-[7px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-white shadow-sm"
                aria-hidden="true"
              />

              <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] font-[800] font-jakarta text-[#0A0A0A] leading-[1.08] tracking-[-0.03em]">
                What Do You Need? <br />
                We Can Build It.
              </h2>
              <p className="mt-5 sm:mt-6 text-[clamp(15px,1.8vh,17px)] font-dm font-normal text-[#333333] leading-relaxed">
                WrightCraft Studios is a small team that turns everyday frustrations into useful software. We build products of our own, and we help businesses get online and work smarter.
              </p>
            </div>
          </div>

          {/* 
            CONNECTOR FLOW LINES (Desktop only)
            Thin gray lines (#D9D9D9, 1px) running from title card to the 2x2 grid
            with 6px nodes at junctions like a clean technical diagram
          */}
          <div
            className={`hidden lg:block absolute left-[35%] xl:left-[34%] right-[60%] top-0 bottom-0 pointer-events-none transition-opacity duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Horizontal line from title card center into the grid midpoint */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D9D9D9" strokeWidth="1" />
              {/* Junction node */}
              <circle cx="50%" cy="50%" r="3" fill="#D9D9D9" />
              {/* Vertical distributor line connecting top and bottom rows */}
              <line x1="100%" y1="25%" x2="100%" y2="75%" stroke="#D9D9D9" strokeWidth="1" />
              {/* Junction nodes at row branches */}
              <circle cx="100%" cy="25%" r="3" fill="#D9D9D9" />
              <circle cx="100%" cy="75%" r="3" fill="#D9D9D9" />
            </svg>
          </div>

          {/* 
            RIGHT ZONE: 2x2 Grid of Four Service Cards (~60% width on desktop)
          */}
          <div className="w-full lg:w-[61%] xl:w-[62%] relative">
            
            {/* Grid Connectors (Desktop only) - Thin flow lines between cards with 6px nodes */}
            <div
              className={`hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-1000 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            >
              <svg className="w-full h-full overflow-visible">
                {/* Horizontal flow line between top and bottom rows */}
                <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="#D9D9D9" strokeWidth="1" strokeDasharray="4 4" />
                {/* Vertical flow line between left and right columns */}
                <line x1="50%" y1="5%" x2="50%" y2="95%" stroke="#D9D9D9" strokeWidth="1" strokeDasharray="4 4" />
                {/* Center intersection node */}
                <circle cx="50%" cy="50%" r="3" fill="#D9D9D9" />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full relative z-10">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeId === service.id;
                const delayMs = 80 + index * 90;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveId(service.id)}
                    onFocus={() => setActiveId(service.id)}
                    tabIndex={0}
                    style={{ transitionDelay: `${delayMs}ms` }}
                    className={`rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col justify-between cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-black transition-all duration-250 ease-out select-none ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    } ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white border border-[#0A0A0A] shadow-[0_16px_36px_rgba(0,0,0,0.22)] -translate-y-1'
                        : 'bg-white text-[#0A0A0A] border border-[#E5E5E5] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Icon Tile: Rounded square at top left */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-250 ${
                          isActive ? 'bg-white text-[#0A0A0A]' : 'bg-[#F2F2F2] text-[#0A0A0A]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </div>

                      {/* Card Title: Plus Jakarta Sans weight 800, ~24px */}
                      <h3
                        className={`mt-5 sm:mt-6 text-[clamp(1.25rem,2.2vh,1.5rem)] font-[800] font-jakarta tracking-tight leading-tight transition-colors duration-250 ${
                          isActive ? 'text-white' : 'text-[#0A0A0A]'
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description: DM Sans weight 500, ~16px */}
                      <p
                        className={`mt-2 text-[15px] sm:text-[16px] font-dm font-medium leading-relaxed transition-colors duration-250 ${
                          isActive ? 'text-white/90' : 'text-[#4A4A4A]'
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link: Bold with small arrow that shifts right on hover */}
                    <div className="mt-6 sm:mt-7 pt-2">
                      <a
                        href={service.href}
                        onClick={(e) => scrollTo(e, service.href)}
                        className={`inline-flex items-center gap-1.5 font-jakarta font-bold text-sm sm:text-base group/link transition-colors duration-250 ${
                          isActive ? 'text-white' : 'text-[#0A0A0A]'
                        }`}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-200 group-hover:translate-x-1.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
