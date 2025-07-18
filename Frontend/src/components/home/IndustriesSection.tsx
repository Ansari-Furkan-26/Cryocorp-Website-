import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IndustriesAnimatedSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const industriesRef = useRef([]);
  const textRef = useRef(null);

  const industries = [
    "Healthcare",
    "Hospitals",
    "Petrochemicals",
    "Fertilizers",
    "Pharmaceuticals",
    "Biotechnology",
    "Food Processing",
    "Preservation",
    "Processing",
    "Aviation Industry",
    "Aqua & Fisheries"
  ];

  const ITEM_WIDTH = 300;
  const ITEM_HEIGHT = 120;
  const CONTAINER_HEIGHT = 300; // Reduced height to minimize space

useEffect(() => {
  const ctx = gsap.context(() => {
    const totalWidth = industries.length * ITEM_WIDTH;
    const scrollLength = totalWidth - window.innerWidth + 32;

    // Pin the section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${scrollLength}`,
      pin: true,
      scrub: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // Animate horizontal scroll
    gsap.fromTo(
      industriesRef.current,
      { x: 0 },
      {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: `+=${scrollLength}`,
          scrub: 1, // smoother animation
        }
      }
    );

    // Keep the text fixed vertically
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: `+=${scrollLength}`,
          scrub: true,
        }
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);


  // Populate industriesRef with refs for each industry item
  const addToRefs = (el) => {
    if (el && !industriesRef.current.includes(el)) {
      industriesRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen snap-start py-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden flex items-start"
      style={{ minHeight: '70vh', background: 'linear-gradient(to bottom right, #0a192f, #1e3a8a, #0f172a)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-2xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* Left Content (Pinned Text) */}
          <div ref={textRef} className="lg:col-span-2">
            <div className="sticky top-12 transition-all duration-1000">
              <h2 className="text-4xl md:text-5xl font-bold md:mb-6 leading-tight">
                Industries We Serve
              </h2>
              <p className="text-xl opacity-90 mb-6 leading-relaxed">
                With over 35 years of combined experience, we serve diverse industries
                with cutting-edge air separation technology and industrial gas solutions.
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                Our expertise spans across multiple sectors, ensuring reliable and
                efficient gas supply systems tailored to your specific needs.
              </p>
            </div>
          </div>

          {/* Right Content - Industries List */}
          <div className="lg:col-span-3 lg:pl-8">
            <div
              ref={containerRef}
              className="relative overflow-x-auto"
              style={{ height: `${CONTAINER_HEIGHT}px` }}
            >
              <div className="flex items-center" style={{ height: `${CONTAINER_HEIGHT}px` }}>
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    ref={addToRefs}
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ 
                      width: `${ITEM_WIDTH}px`,
                      height: `${ITEM_HEIGHT}px`
                    }}
                  >
                    <div className={`
                      text-3xl  md:text-4xl font-light
                      transition-all duration-1000 transform
                      hover:text-blue-300 cursor-default
                      bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
                      leading-tight tracking-tight text-center
                      whitespace-nowrap
                    `}>
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default IndustriesAnimatedSection;