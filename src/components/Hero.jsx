import React from 'react';
import { ArrowRight, Boxes, Workflow } from 'lucide-react';
import CircularBadge from './CircularBadge';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full bg-[#000000] text-white min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] lg:overflow-hidden select-none relative box-border"
      style={{
        '--badge-size': 'clamp(96px, 14vh, 132px)',
      }}
      aria-label="Hero"
    >
      {/* 
        FULL-HEIGHT HERO IMAGE CONTAINER
        - Preserves existing left, top, right margin/padding (inset-3 sm:inset-3.5 md:inset-4) and 32px rounded corners
        - Extends downward to fill the section vertically
        - Deep gradient overlay ensures pristine contrast for white foreground text
      */}
      <div className="absolute inset-3 sm:inset-3.5 md:inset-4 rounded-[32px] overflow-hidden bg-[#111111] shadow-[0_16px_48px_rgba(0,0,0,0.6)] border border-white/10">
        {/* Living Zoom Photo */}
        <img
          src={heroBg}
          alt="Person walking along a golden-hour path through sunlit hills"
          className="w-full h-full object-cover object-[center_50%] select-none animate-subtle-zoom will-change-transform"
          loading="eager"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Multi-stage dark gradient overlays for maximum legibility and cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
        
        {/* Top subtle gradient for solid white navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 
        HERO CONTENT CONTAINER (sitting on top of the full-height image)
        - Top: Navigation Spacer (Navbar is fixed at the root level)
        - Lower: Two columns (Left: White text block, Right: Wheel badge + 2 Clean White Cards)
      */}
      <div className="relative z-10 w-full max-w-[1640px] mx-auto h-full min-h-[100dvh] lg:h-[100dvh] p-6 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between pointer-events-none">
        
        {/* TOP: Navigation Spacer */}
        <div className="w-full h-11 sm:h-12 pointer-events-none" />

        {/* 
          LOWER ZONE:
          - Left Column (~50% width): White headline block, description, white-based button
          - Right Column (~50% width): Circular wheel badge + Two clean white-background cards side by side
        */}
        <div className="w-full mt-auto pt-8 sm:pt-10 lg:pt-0">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-end">
            
            {/* 
              LEFT COLUMN: White Text Content sitting directly over the full-height image
            */}
            <div className="w-full lg:w-1/2 flex flex-col justify-end pr-0 lg:pr-6 xl:pr-8 pointer-events-auto animate-fade-in-up animation-delay-100">
              <div>
                {/* Studio Label with White Dot */}
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-white shrink-0 shadow-sm" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-jakarta font-bold text-white/80">
                    Software Studio
                  </span>
                </div>

                {/* Big, Bold Headline in pure white with hand-drawn wavy white underline stroke */}
                <h1 className="text-[clamp(2.7rem,min(8.2vh,5vw),5.4rem)] font-[800] font-jakarta text-white leading-[1.05] tracking-[-0.035em] drop-shadow-md">
                  Software Built <br />
                  for{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span>Real Problems</span>
                    {/* Hand-drawn style white underline stroke */}
                    <svg
                      className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-white pointer-events-none overflow-visible"
                      viewBox="0 0 240 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 8.5C48 3.5 94 10.5 148 6C186 2.5 216 7.5 238 6"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                {/* Description: DM Sans, weight 500, pure white/85, max 44ch */}
                <p className="mt-3 sm:mt-4 text-[clamp(16px,2.1vh,20px)] text-white/85 font-dm font-medium leading-relaxed max-w-[44ch] drop-shadow-sm">
                  WrightCraft Studios builds software products, websites, and automation that solve everyday problems.
                </p>

                {/* Button: White-based style (white background, black text, white border, with white icon) */}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => scrollTo('products')}
                    className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-full bg-white hover:bg-gray-100 text-[#0A0A0A] border-2 border-white font-jakarta font-bold text-sm sm:text-base inline-flex items-center gap-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.99]"
                  >
                    <span>See what we build</span>
                    <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1.5 shadow-sm shrink-0">
                      <ArrowRight className="w-4 h-4 stroke-[2.4] text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 
              RIGHT COLUMN:
              - Upper/Middle: Inverted White Wheel Badge with high contrast against the dark background
              - Bottom: Two clean white-background cards side by side (Products & Services)
            */}
            <div className="w-full lg:w-1/2 flex flex-col justify-end pointer-events-auto animate-fade-in-up animation-delay-200">
              
              {/* Wheel Badge: Floating gracefully above the cards */}
              <div className="flex justify-end mb-4 sm:mb-5">
                <CircularBadge />
              </div>

              {/* Two Clean White-Background Cards (No Photos) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                
                {/* Clean White Card 01: Products */}
                <div className="rounded-[28px] bg-white text-[#0A0A0A] p-5 sm:p-6 lg:p-6 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,0,0,0.25)] border border-white hover:-translate-y-1.5 transition-all duration-300 group">
                  {/* Top: Icon Tile & Label Tag */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#F5F5F5] border border-[#EAEAEA] flex items-center justify-center text-[#0A0A0A] shadow-inner group-hover:scale-105 transition-transform">
                        <Boxes className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-jakarta font-bold text-[#666666] tracking-wider uppercase bg-[#F5F5F5] px-3 py-1 rounded-full border border-[#EAEAEA]">
                        01 / Focus
                      </span>
                    </div>

                    {/* Middle: Title & Description */}
                    <h2 className="text-[clamp(1.4rem,2.8vh,1.85rem)] font-[800] font-jakarta text-[#0A0A0A] tracking-tight leading-tight mt-4 sm:mt-5">
                      Products
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm font-dm font-medium text-[#555555] leading-relaxed">
                      Software products built around problems people face every day.
                    </p>
                  </div>

                  {/* Bottom: More Button */}
                  <div className="mt-5 pt-1">
                    <button
                      type="button"
                      onClick={() => scrollTo('products')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white text-xs sm:text-sm font-jakarta font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm group/btn"
                    >
                      <span>More</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Clean White Card 02: Services */}
                <div className="rounded-[28px] bg-white text-[#0A0A0A] p-5 sm:p-6 lg:p-6 flex flex-col justify-between shadow-[0_16px_36px_rgba(0,0,0,0.25)] border border-white hover:-translate-y-1.5 transition-all duration-300 group">
                  {/* Top: Icon Tile & Label Tag */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#F5F5F5] border border-[#EAEAEA] flex items-center justify-center text-[#0A0A0A] shadow-inner group-hover:scale-105 transition-transform">
                        <Workflow className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-jakarta font-bold text-[#666666] tracking-wider uppercase bg-[#F5F5F5] px-3 py-1 rounded-full border border-[#EAEAEA]">
                        02 / Studio
                      </span>
                    </div>

                    {/* Middle: Title & Description */}
                    <h2 className="text-[clamp(1.4rem,2.8vh,1.85rem)] font-[800] font-jakarta text-[#0A0A0A] tracking-tight leading-tight mt-4 sm:mt-5">
                      Services
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm font-dm font-medium text-[#555555] leading-relaxed">
                      Websites and automation for businesses that want to work smarter.
                    </p>
                  </div>

                  {/* Bottom: More Button */}
                  <div className="mt-5 pt-1">
                    <button
                      type="button"
                      onClick={() => scrollTo('services')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white text-xs sm:text-sm font-jakarta font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm group/btn"
                    >
                      <span>More</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
