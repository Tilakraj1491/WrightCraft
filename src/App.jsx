import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import textureBg from './assets/Texture.jpeg';

/**
 * Remaining target sections for smooth-scrolling anchors.
 * Monochrome theme: white, neutral grays, and near-black.
 * Subsequent sections will be added one by one.
 */
const SECTIONS = [
  { id: 'contact', title: 'Contact / Get in Touch', subtitle: 'Let’s talk about your next project or problem to solve' },
];

export default function App() {
  return (
    <div className="bg-white text-[#0A0A0A] font-dm selection:bg-[#0A0A0A] selection:text-white min-h-screen">
      {/* 
        Hero section:
        Background is pure black with full-height image.
        Does NOT have the texture background.
      */}
      <Hero />

      {/* 
        All sections other than Hero:
        Covered by texture.jpeg as the continuous background.
      */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundRepeat: 'repeat',
        }}
      >
        {/* What We Do Section */}
        <WhatWeDo />

        {/* Products Section */}
        <Products />

        {/* Process Section */}
        <Process />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Remaining Placeholder Sections for smooth scroll links */}
        <div className="w-full max-w-[1640px] mx-auto px-3 sm:px-4 md:px-6 space-y-4 py-16">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-6 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#E5E5E5] text-center transition-colors duration-200 shadow-sm"
            >
              <div className="max-w-md mx-auto">
                <span className="text-xs uppercase tracking-widest font-jakarta font-bold text-[#4A4A4A]">
                  Upcoming Section
                </span>
                <h3 className="text-lg sm:text-xl font-jakarta font-bold text-[#0A0A0A] mt-1">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm font-dm text-[#4A4A4A] mt-1">
                  {section.subtitle}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Minimal footer */}
        <footer className="w-full py-8 text-center text-xs text-[#4A4A4A] border-t border-[#E5E5E5] bg-white/40 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} WrightCraft Studios. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
