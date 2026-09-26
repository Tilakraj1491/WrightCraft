import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProductImg1 from "/src/assets/product-1.jpg";
import ProductImg2 from "/src/assets/product-2.jpg"
import ProductImg3 from "/src/assets/product-3.jpg";

/**
 * EDITABLE PRODUCT CONTENT ARRAY
 * Edit name, description, status, image path, or link href here.
 */
const PRODUCTS = [
  {
    id: 1,
    name: 'Tally',
    description: 'Simple invoicing and expense tracking for freelancers and small businesses — no accountant required.',
    status: 'Live',
    image: ProductImg1,
    href: '#contact',
  },
  {
    id: 2,
    name: 'Roundtable',
    description: 'A lightweight scheduling tool that finds meeting times across your team without the back-and-forth.',
    status: 'In progress',
    image: ProductImg2,
    href: '#contact',
  },
  {
    id: 3,
    name: 'Nudge',
    description: 'A habit and task reminder app that adapts its nudges to how you actually respond to them.',
    status: 'Coming soon',
    image: ProductImg3,
    href: '#contact',
  },
];

/**
 * Extended slides array with clones on both ends for infinite loop:
 * Index 0: Product 2 (clone)
 * Index 1: Product 3 (clone)
 * Index 2: Product 1 (real, initial index)
 * Index 3: Product 2 (real)
 * Index 4: Product 3 (real)
 * Index 5: Product 1 (clone)
 * Index 6: Product 2 (clone)
 */
const SLIDES = [
  { ...PRODUCTS[1], slideKey: 'clone-0-prod2' },
  { ...PRODUCTS[2], slideKey: 'clone-1-prod3' },
  { ...PRODUCTS[0], slideKey: 'real-2-prod1' },
  { ...PRODUCTS[1], slideKey: 'real-3-prod2' },
  { ...PRODUCTS[2], slideKey: 'real-4-prod3' },
  { ...PRODUCTS[0], slideKey: 'clone-5-prod1' },
  { ...PRODUCTS[1], slideKey: 'clone-6-prod2' },
];

const INITIAL_SLIDE_INDEX = 2; // Corresponds to Product 1

export default function Products() {
  const [slideIndex, setSlideIndex] = useState(INITIAL_SLIDE_INDEX);
  const [withTransition, setWithTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalProducts = PRODUCTS.length;
  // Calculate which product is currently active based on slideIndex
  const activeProductIndex = ((slideIndex - 2) % totalProducts + totalProducts) % totalProducts;
  const currentProduct = PRODUCTS[activeProductIndex];

  // Next slide handler
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setWithTransition(true);
    setSlideIndex((prev) => prev + 1);
  }, [isAnimating]);

  // Previous slide handler
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setWithTransition(true);
    setSlideIndex((prev) => prev - 1);
  }, [isAnimating]);

  // Handle Stepper Dot click
  const handleDotClick = useCallback(
    (targetProductIdx) => {
      if (isAnimating || targetProductIdx === activeProductIndex) return;

      const diff = targetProductIdx - activeProductIndex;
      setIsAnimating(true);
      setWithTransition(true);
      setSlideIndex((prev) => prev + diff);
    },
    [isAnimating, activeProductIndex]
  );

  // Handle wrap-around jumps invisibly after the 500ms transition finishes
  useEffect(() => {
    if (!withTransition) return;

    let resetTimer;
    if (slideIndex === 5) {
      // Reached clone of Product 1 at index 5 -> smoothly animates, then jumps to real Product 1 at index 2
      resetTimer = setTimeout(() => {
        setWithTransition(false);
        setSlideIndex(2);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWithTransition(true);
            setIsAnimating(false);
          });
        });
      }, 500);
    } else if (slideIndex === 1) {
      // Reached clone of Product 3 at index 1 -> smoothly animates, then jumps to real Product 3 at index 4
      resetTimer = setTimeout(() => {
        setWithTransition(false);
        setSlideIndex(4);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWithTransition(true);
            setIsAnimating(false);
          });
        });
      }, 500);
    } else {
      // Normal transition within real bounds (2, 3, 4)
      resetTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }

    return () => {
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [slideIndex, withTransition]);

  // IntersectionObserver for entrance animation
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

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || isAnimating) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isAnimating]);

  // Touch handlers
  const handleTouchStart = (e) => {
    if (isAnimating) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isAnimating) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const scrollToHref = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative w-full min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0 overflow-hidden bg-transparent text-[#0A0A0A] select-none scroll-mt-4"
      aria-label="Products"
    >
      <div className="relative z-10 w-full max-w-[1640px] mx-auto py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-8 xl:gap-12">
          
          {/* 
            LEFT ZONE (~42% width on desktop)
            Holds the vertical stepper and the product information group
          */}
          <div className="w-full lg:w-[42%] flex items-center shrink-0">
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 w-full">
              
              {/* Vertical Stepper (Desktop only) */}
              <div
                className={`hidden lg:flex flex-col items-center justify-between h-[200px] sm:h-[240px] relative shrink-0 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                aria-label="Product navigation stepper"
              >
                {/* Thin vertical guide line */}
                <div className="absolute top-3 bottom-3 w-[1px] bg-[#E5E5E5] left-1/2 -translate-x-1/2 pointer-events-none" />

                {PRODUCTS.map((prod, index) => {
                  const isActive = activeProductIndex === index;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => handleDotClick(index)}
                      disabled={isAnimating}
                      aria-label={`Go to ${prod.name}`}
                      aria-current={isActive ? 'true' : 'false'}
                      className={`relative z-10 transition-all duration-300 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                        isActive
                          ? 'w-8 h-8 rounded-full bg-[#0A0A0A] text-white font-jakarta font-bold text-xs shadow-md scale-105'
                          : 'w-3 h-3 rounded-full bg-[#D4D4D4] hover:bg-[#888888] hover:scale-125'
                      }`}
                    >
                      {isActive && <span>{index + 1}</span>}
                    </button>
                  );
                })}
              </div>

              {/* Product Information Group with cross-fade transition */}
              <div
                className={`flex-1 min-w-0 transition-all duration-700 ease-out delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Section Tag */}
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0A0A0A] shrink-0" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] font-jakarta font-bold text-[#4A4A4A]">
                    Products
                  </span>
                </div>

                {/* Animated Text Content Box (Keyed to currentProduct.id for smooth 350ms cross-fade) */}
                <div key={currentProduct.id} className="animate-fade-in-up">
                  {/* Product Name: Large Plus Jakarta Sans 800 */}
                  <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-[800] font-jakarta text-[#0A0A0A] leading-[1.05] tracking-[-0.035em]">
                    {currentProduct.name}
                  </h2>

                  {/* Status Chip */}
                  <div className="mt-3 sm:mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#0A0A0A] text-xs font-jakarta font-bold text-[#0A0A0A] tracking-wide uppercase">
                      {currentProduct.status === 'Live' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] inline-block mr-1.5 animate-pulse" />
                      )}
                      {currentProduct.status}
                    </span>
                  </div>

                  {/* Description: DM Sans, weight 500, ~18px, #333, max 44ch */}
                  <p className="mt-3.5 sm:mt-4 text-[clamp(16px,2vh,18px)] text-[#333333] font-dm font-medium leading-relaxed max-w-[44ch]">
                    {currentProduct.description}
                  </p>

                  {/* Button: Solid black pill button */}
                  <div className="mt-5 sm:mt-6">
                    <a
                      href={currentProduct.href}
                      onClick={(e) => scrollToHref(e, currentProduct.href)}
                      className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-full bg-[#0A0A0A] hover:bg-[#262626] text-white font-jakarta font-bold text-sm sm:text-base inline-flex items-center gap-3.5 shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-[0.99]"
                    >
                      <span>Learn more</span>
                      <div className="w-8 h-8 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1.5 shadow-sm shrink-0">
                        <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 
            RIGHT ZONE: THE SLIDER (~58% width on desktop)
            - Contained to its own zone: overflow-hidden ensures no card can ever overlap the left text column.
            - Continuous infinite loop: wraps smoothly in both directions without dead ends.
          */}
          <div
            className={`w-full lg:w-[58%] flex flex-col justify-center relative min-w-0 overflow-hidden py-2 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              '--card-w': 'clamp(280px, 25vw, 420px)',
              '--card-gap': 'clamp(20px, 2vw, 28px)',
              '--card-step': 'calc(var(--card-w) + var(--card-gap))',
            }}
          >
            {/* Slider Viewport: Strictly clips any leftward movement to stay inside this zone */}
            <div
              className="relative w-full overflow-hidden py-4 sm:py-6"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slider Track with 500ms smooth transform and infinite loop repositions */}
              <div
                className="flex items-center"
                style={{
                  gap: 'var(--card-gap)',
                  transform: `translateX(calc(-1 * ${slideIndex} * var(--card-step)))`,
                  transition: withTransition
                    ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
                }}
              >
                {SLIDES.map((prod, index) => {
                  const isActive = index === slideIndex;

                  return (
                    <div
                      key={prod.slideKey}
                      onClick={() => {
                        if (isAnimating) return;
                        if (index > slideIndex) nextSlide();
                        else if (index < slideIndex) prevSlide();
                      }}
                      className={`relative shrink-0 rounded-[28px] overflow-hidden origin-center select-none ${
                        isActive
                          ? 'w-[clamp(280px,25vw,420px)] h-[clamp(380px,50vh,540px)] scale-100 opacity-100 shadow-[0_18px_44px_rgba(0,0,0,0.18)] border border-[#E5E5E5] z-10'
                          : 'w-[clamp(280px,25vw,420px)] h-[clamp(380px,50vh,540px)] scale-[0.84] opacity-55 hover:opacity-85 shadow-md cursor-pointer z-0 border border-[#E5E5E5]'
                      }`}
                      style={{
                        transition: withTransition
                          ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease'
                          : 'none',
                      }}
                    >
                      {/* Dark neutral placeholder background (#1A1A1A) */}
                      <div className="w-full h-full bg-[#1A1A1A] relative flex flex-col justify-between p-6 sm:p-7 text-white">
                        
                        {/* Actual Image if available */}
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />

                        {/* Top Chip / Product Number */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="bg-white/90 backdrop-blur-md text-[#0A0A0A] font-jakarta font-bold text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                            0{prod.id}
                          </span>
                          <span className="text-white/60 font-jakarta font-bold text-xs uppercase tracking-widest">
                            {prod.status}
                          </span>
                        </div>

                        {/* Bottom Info Overlay */}
                        <div className="relative z-10">
                          <span className="text-xs uppercase tracking-widest font-jakarta font-bold text-white/70 block mb-1">
                            Featured Product
                          </span>
                          <h3 className="text-xl sm:text-2xl font-[800] font-jakarta text-white tracking-tight">
                            {prod.name}
                          </h3>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 
              Slider Controls:
              Previous and Next round arrow buttons placed at bottom right of the zone
              Infinite loop: no dead ends, disabled only while mid-animation
            */}
            <div className="flex items-center justify-between sm:justify-end gap-3 mt-4 pt-2">
              
              {/* Mobile / Tablet Horizontal Dots Indicator */}
              <div className="flex lg:hidden items-center gap-2" aria-label="Mobile pagination dots">
                {PRODUCTS.map((prod, index) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => handleDotClick(index)}
                    disabled={isAnimating}
                    aria-label={`Go to ${prod.name}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeProductIndex === index
                        ? 'w-6 h-2 bg-[#0A0A0A]'
                        : 'w-2 h-2 bg-[#D4D4D4] hover:bg-[#888888]'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={isAnimating}
                  aria-label="Previous product"
                  className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] text-[#0A0A0A] flex items-center justify-center shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black hover:bg-[#F5F5F5] hover:shadow hover:scale-105 active:scale-95 disabled:pointer-events-none"
                >
                  <ArrowLeft className="w-5 h-5 stroke-[2]" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={isAnimating}
                  aria-label="Next product"
                  className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] text-[#0A0A0A] flex items-center justify-center shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black hover:bg-[#F5F5F5] hover:shadow hover:scale-105 active:scale-95 disabled:pointer-events-none"
                >
                  <ArrowRight className="w-5 h-5 stroke-[2]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
