import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Understand the problem',
    label: '[ WHERE IT STARTS ]',
    tags: ['Discovery calls', 'Problem framing', 'Research'],
    description: 'We start by listening: to the problem, the people affected by it, and what a good solution needs to do.',
  },
  {
    number: '02',
    title: 'Design',
    label: '[ FROM IDEA TO IDENTITY ]',
    tags: ['Wireframes', 'UI Design', 'Prototyping'],
    description: 'We shape the solution: how it looks, how it works, and how it should feel to use.',
  },
  {
    number: '03',
    title: 'Build',
    label: '[ WHERE THE MAGIC CLICKS ]',
    tags: ['Frontend', 'Backend', 'Integrations'],
    description: 'We build it for real: solid, tested, and ready to hold up in everyday use.',
  },
  {
    number: '04',
    title: 'Ship and support',
    label: '[ SHIPPED TOGETHER ]',
    tags: ['Launch', 'Monitoring', 'Ongoing support'],
    description: 'We launch it, then stay close: fixing, refining, and supporting you as you grow.',
  },
];

export default function Process() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  // Simple one-time fade-up entrance when section comes into viewport
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

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-6 text-[#0A0A0A]"
      aria-label="Process"
    >
      {/* Top Label */}
      <div className="flex items-center gap-2.5 mb-10 sm:mb-14">
        <span className="w-2 h-2 rounded-full bg-[#0A0A0A] shrink-0" />
        <span className="text-xs uppercase tracking-[0.24em] font-jakarta font-bold text-[#4A4A4A]">
          OUR PROCESS
        </span>
      </div>

      {/* Vertical List of 4 Plain Static Steps */}
      <div className="w-full flex flex-col">
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            style={{
              transitionDelay: `${idx * 100}ms`,
            }}
            className={`w-full flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12 py-12 lg:py-16 border-t border-[#E5E5E5] transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Left Column (about 60% on desktop) */}
            <div className="w-full lg:w-[58%] flex flex-col">
              {/* Number and Title on the same line */}
              <div className="flex items-baseline gap-3.5 sm:gap-5">
                <span className="font-jakarta font-[800] text-[#B0B0B0] select-none text-[clamp(2rem,4vw,3.2rem)] leading-none shrink-0">
                  {step.number}
                </span>
                <h3 className="font-jakarta font-[800] text-[#0A0A0A] tracking-[-0.035em] text-[clamp(2rem,4vw,3.2rem)] leading-[1.08]">
                  {step.title}
                </h3>
              </div>

              {/* Bracketed Label & Pill Tags below */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <span className="font-jakarta font-bold text-xs sm:text-sm tracking-[0.2em] text-[#666666] uppercase">
                  {step.label}
                </span>
                <div className="flex flex-wrap gap-2.5 pt-0.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-[#0A0A0A] text-[#0A0A0A] font-jakarta font-bold text-xs shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (about 40% on desktop, top-aligned with number/title, right-aligned) */}
            <div className="w-full lg:w-[40%] flex lg:justify-end lg:pt-2">
              <p className="font-dm font-normal text-[17px] sm:text-[18px] text-[#333333] leading-relaxed max-w-[42ch]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
