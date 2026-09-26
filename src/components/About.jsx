import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import StoryImg from "/src/assets/about-founder-1.jpeg";

export default function About() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  // One-time entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeClass = (delay = 0) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
      hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-6 text-[#0A0A0A]"
      aria-label="About WrightCraft Studios"
    >
      {/* TOP AREA — Label / Headline / CTA + Paragraph */}
      <div
        className={`w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 pb-10 sm:pb-14 ${fadeClass()}`}
      >
        {/* Left (~55%) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          <span className="font-jakarta font-bold text-xs uppercase tracking-[0.24em] text-[#4A4A4A] mb-3">
            ABOUT US
          </span>
          <h2 className="font-jakarta font-[800] text-[clamp(2rem,4.5vw,3.4rem)] text-[#0A0A0A] leading-[1.1] tracking-[-0.035em]">
            Software Built with Care,<br className="hidden sm:block" /> Not Guesswork.
          </h2>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="mt-6 h-[48px] sm:h-[52px] px-6 sm:px-7 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-sm sm:text-base inline-flex items-center gap-3.5 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99] shadow-sm w-fit"
          >
            <span>Get Started</span>
            <div className="w-7 h-7 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 shadow-sm shrink-0">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* Right (~40%) — paragraph, top-aligned with headline */}
        <div className="w-full lg:w-[40%] lg:pt-[calc(clamp(2rem,4.5vw,3.4rem)*1.1+2.25rem)]">
          <p className="font-dm font-normal text-[16px] sm:text-[17px] text-[#333333] leading-relaxed max-w-[46ch]">
            We help businesses and people turn everyday frustrations into software that actually works for them. Every product and project starts with understanding the problem first, not the technology.
          </p>
        </div>
      </div>

      {/* BOTTOM TWO-COLUMN GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-3 sm:gap-4 items-stretch">

        {/* LEFT — Large story photo card */}
        <div
          className={`relative rounded-[28px] overflow-hidden bg-[#F2F2F2] min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-end group hover:-translate-y-1 hover:shadow-xl transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none ${fadeClass()}`}
          style={{ transitionDelay: hasEntered ? '80ms' : '0ms' }}
        >
          {/* Photo with gray fallback */}
          <img
            src={StoryImg}
            alt="WrightCraft Studios team at work"
            className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            onError={(e) => {
              // Try fallback to about-founder-1.jpg, then hide
              if (e.currentTarget.src.indexOf('about-story') !== -1) {
                e.currentTarget.src = FALLBACK_PHOTO;
              } else {
                e.currentTarget.style.display = 'none';
              }
            }}
          />

          {/* Bottom-third dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Overlaid text */}
          <div className="relative z-10 p-7 sm:p-9">
            <h3 className="font-jakarta font-[800] text-[22px] sm:text-[26px] text-white tracking-tight leading-snug">
              Our Story
            </h3>
            <p className="mt-2 font-dm text-[14px] sm:text-[15px] text-white/80 leading-relaxed max-w-[52ch]">
              WrightCraft Studios started with a simple idea: build the tools we wished existed. What began as side projects turned into a studio that helps other businesses solve their own everyday problems.
            </p>
          </div>
        </div>

        {/* RIGHT — Two stacked cards */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Mission card — light neutral gray */}
          <div
            className={`flex-1 rounded-[24px] bg-[#F2F2F2] p-8 sm:p-9 flex flex-col justify-between ${fadeClass()}`}
            style={{ transitionDelay: hasEntered ? '160ms' : '0ms' }}
          >
            <div>
              <h3 className="font-jakarta font-[800] text-[20px] sm:text-[22px] text-[#0A0A0A] tracking-tight leading-snug">
                Our Mission
              </h3>
              <p className="mt-3 font-dm text-[15px] sm:text-[16px] text-[#333333] leading-relaxed">
                To build focused software that solves real problems, for businesses and everyday people alike.
              </p>
            </div>
            {/* Decorative dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#CCCCCC] mt-6" />
          </div>

          {/* Vision card — solid black */}
          <div
            className={`flex-1 rounded-[24px] bg-[#0A0A0A] p-8 sm:p-9 flex flex-col justify-between ${fadeClass()}`}
            style={{ transitionDelay: hasEntered ? '240ms' : '0ms' }}
          >
            <div>
              <h3 className="font-jakarta font-[800] text-[20px] sm:text-[22px] text-white tracking-tight leading-snug">
                Our Vision
              </h3>
              <p className="mt-3 font-dm text-[15px] sm:text-[16px] text-[#CCCCCC] leading-relaxed">
                To be the studio people turn to when they want software that actually understands their problem.
              </p>
            </div>
            {/* Decorative dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-white/30 mt-6" />
          </div>

        </div>
      </div>
    </section>
  );
}
