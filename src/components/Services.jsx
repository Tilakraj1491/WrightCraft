import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'Website Design',
    description: 'New websites designed around your business and your customers.',
  },
  {
    number: '02',
    title: 'Website Redesign',
    description: 'Refreshing outdated sites with a faster, clearer, modern design.',
  },
  {
    number: '03',
    title: 'Landing Pages',
    description: 'Focused single pages built to convert, for campaigns or launches.',
  },
  {
    number: '04',
    title: 'Workflow Automation',
    description: 'Automating repetitive day-to-day tasks so your team can focus elsewhere.',
  },
  {
    number: '05',
    title: 'Integrations',
    description: 'Connecting your existing tools so data moves automatically between them.',
  },
  {
    number: '06',
    title: 'Reporting & Dashboards',
    description: 'Automated reports and dashboards that keep you informed without manual work.',
  },
];

export default function Services() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  // Staggered one-time entrance animation when section enters viewport
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

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to compute seamless connected grid dividers across mobile (1 col), tablet (2 cols), and desktop (3 cols)
  const getGridDividerClasses = (index) => {
    const isLastMobile = index === SERVICES.length - 1;
    const isRightTablet = index % 2 === 0;
    const isBottomTablet = index < 4;
    const isRightDesktop = index % 3 !== 2;
    const isBottomDesktop = index < 3;

    return [
      // Mobile (1 column)
      !isLastMobile ? 'border-b border-[#E5E5E5]' : 'border-b-0',
      'border-r-0',

      // Tablet (2 columns)
      isBottomTablet ? 'md:border-b md:border-[#E5E5E5]' : 'md:border-b-0',
      isRightTablet ? 'md:border-r md:border-[#E5E5E5]' : 'md:border-r-0',

      // Desktop (3 columns)
      isBottomDesktop ? 'lg:border-b lg:border-[#E5E5E5]' : 'lg:border-b-0',
      isRightDesktop ? 'lg:border-r lg:border-[#E5E5E5]' : 'lg:border-r-0',
    ].join(' ');
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-6 text-[#0A0A0A]"
      aria-label="Services"
    >
      {/* SECTION HEADER */}
      <div
        className={`w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 pb-12 lg:pb-16 border-b border-[#E5E5E5] transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Left Column (about 55% width on desktop) */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <span className="font-jakarta font-bold text-xs uppercase tracking-[0.24em] text-[#4A4A4A] mb-3">
            HOW WE CAN HELP YOU
          </span>
          <h2 className="font-jakarta font-[800] text-[clamp(2.2rem,5vw,3.6rem)] text-[#0A0A0A] leading-[1.08] tracking-[-0.035em]">
            Services We Offer
          </h2>
        </div>

        {/* Right Column (about 40% width on desktop, top-aligned) */}
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-6 lg:pt-1">
          <p className="font-dm font-normal text-[16px] sm:text-[17px] text-[#333333] leading-relaxed max-w-[38ch]">
            We help businesses get online and work smarter, and build software products that solve everyday problems.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-sm sm:text-base inline-flex items-center gap-3.5 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99] shadow-sm w-fit"
          >
            <span>Let's talk</span>
            <div className="w-7 h-7 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 shadow-sm shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>
      </div>

      {/* CONNECTED SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {SERVICES.map((item, idx) => (
          <div
            key={item.number}
            style={{
              transitionDelay: `${80 + idx * 80}ms`,
            }}
            className={`p-8 sm:p-10 flex flex-col justify-start gap-3.5 transition-all duration-600 ease-out motion-reduce:transition-none motion-reduce:transform-none ${getGridDividerClasses(
              idx
            )} ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="font-jakarta font-bold text-xs sm:text-sm text-[#888888] tracking-widest select-none">
              {item.number}
            </span>
            <h3 className="font-jakarta font-[700] text-[18px] sm:text-[20px] text-[#0A0A0A] leading-snug">
              {item.title}
            </h3>
            <p className="font-dm font-normal text-[14px] sm:text-[15px] text-[#666666] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
