import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  // Staggered viewport entrance animation
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

  const scrollToProcess = (e) => {
    e.preventDefault();
    const processEl = document.querySelector('#process');
    if (processEl) {
      processEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-6 text-[#0A0A0A]"
      aria-label="About WrightCraft Studios"
    >
      {/* CENTERED SECTION HEADER */}
      <div
        className={`w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-3.5 sm:gap-4 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Pill Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5E5E5] bg-white text-[#4A4A4A] font-jakarta font-bold text-xs uppercase tracking-[0.2em] shadow-sm">
          <span>ABOUT US</span>
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-[800] font-jakarta text-[#0A0A0A] leading-[1.1] tracking-[-0.035em]">
          Why businesses choose WrightCraft
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] sm:text-[17px] font-dm text-[#666666] leading-relaxed max-w-[60ch]">
          A small studio that starts from real problems and builds software people actually want to use.
        </p>
      </div>

      {/* BENTO GRID IN LIGHT NEUTRAL PANEL */}
      <div className="mt-12 sm:mt-16 bg-[#F7F7F7] border border-[#E5E5E5] rounded-[32px] p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-4 lg:gap-4 w-full">
          
          {/* CELL 1: Top-left portrait photo card */}
          <div
            style={{ transitionDelay: '80ms' }}
            className={`md:col-span-1 lg:col-span-4 bg-[#F2F2F2] relative rounded-[24px] overflow-hidden border border-[#E5E5E5] flex flex-col justify-end p-6 sm:p-7 min-h-[340px] md:min-h-[380px] lg:min-h-[420px] group transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Image with fallback placeholder */}
            <img
              src="/src/assets/about-founder-1.jpg"
              alt="Founder & Product"
              className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Soft dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 text-white">
              <span className="font-jakarta font-bold text-xs uppercase tracking-[0.2em] text-white/80 block mb-1">
                Founder & Product
              </span>
              <h3 className="font-jakarta font-[800] text-xl sm:text-2xl text-white tracking-tight">
                Founder Name One
              </h3>
            </div>
          </div>

          {/* CELL 2: Top-middle landscape photo card */}
          <div
            style={{ transitionDelay: '160ms' }}
            className={`md:col-span-1 lg:col-span-5 bg-[#F2F2F2] relative rounded-[24px] overflow-hidden border border-[#E5E5E5] flex flex-col justify-end p-6 sm:p-7 min-h-[340px] md:min-h-[380px] lg:min-h-[420px] group transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Image with fallback placeholder */}
            <img
              src="/src/assets/about-founder-2.jpg"
              alt="Founder & Engineering"
              className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Soft dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 text-white">
              <span className="font-jakarta font-bold text-xs uppercase tracking-[0.2em] text-white/80 block mb-1">
                Founder & Engineering
              </span>
              <h3 className="font-jakarta font-[800] text-xl sm:text-2xl text-white tracking-tight">
                Founder Name Two
              </h3>
            </div>
          </div>

          {/* CELL 3: Top-right small stat card */}
          <div
            style={{ transitionDelay: '240ms' }}
            className={`md:col-span-1 lg:col-span-3 bg-white rounded-[24px] p-7 sm:p-8 border border-[#E5E5E5] flex flex-col justify-between min-h-[200px] md:min-h-[380px] lg:min-h-[420px] shadow-sm transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A]" />
            <div>
              <span className="font-jakarta font-[800] text-5xl sm:text-6xl xl:text-7xl text-[#0A0A0A] tracking-tight block">
                2026
              </span>
              <span className="font-jakarta font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#666666] block mt-2">
                Studio founded
              </span>
            </div>
          </div>

          {/* CELL 4: Bottom-left wider text card */}
          <div
            style={{ transitionDelay: '320ms' }}
            className={`md:col-span-1 lg:col-span-7 bg-white rounded-[24px] p-7 sm:p-8 md:p-9 border border-[#E5E5E5] flex flex-col justify-between gap-6 shadow-sm min-h-[220px] transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-dm font-normal text-[15px] sm:text-[16px] text-[#333333] leading-relaxed max-w-[44ch]">
              Handcrafted software, built with care from the first sketch to the last detail.
            </p>
            <a
              href="#process"
              onClick={scrollToProcess}
              className="h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-xs sm:text-sm inline-flex items-center gap-3 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99] shadow-sm w-fit"
            >
              <span>See our process</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 shadow-sm shrink-0">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* CELL 5: Bottom-right text card with inline photo accent */}
          <div
            style={{ transitionDelay: '400ms' }}
            className={`md:col-span-2 lg:col-span-5 bg-white rounded-[24px] p-7 sm:p-8 md:p-9 border border-[#E5E5E5] flex flex-col justify-between gap-6 shadow-sm min-h-[220px] transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-11 h-11 rounded-full overflow-hidden bg-[#F2F2F2] border border-[#E5E5E5] shrink-0 relative">
              <img
                src="/src/assets/about-founder-1.jpg"
                alt="Studio craft accent"
                className="w-full h-full object-cover select-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="font-dm font-normal text-[15px] sm:text-[16px] text-[#333333] leading-relaxed max-w-[40ch]">
              We turn everyday frustrations into tools people are glad to use, for businesses and individuals alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
