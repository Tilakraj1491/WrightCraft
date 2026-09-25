import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import textureBg from './assets/Texture.jpeg';

export default function App() {
  return (
    <div
      id="top"
      className="bg-white text-[#0A0A0A] font-dm selection:bg-[#0A0A0A] selection:text-white min-h-screen"
    >
      {/* 
        Hero section:
        Background is pure black with full-height image.
        Does NOT have the texture background.
      */}
      <Hero />

      {/* 
        All sections between Hero and Footer:
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

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Full-bleed near-black Footer */}
      <Footer />
    </div>
  );
}
