import React, { useEffect, useRef, useState, useCallback } from 'react';

const IndustriesSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [hasCompletedScroll, setHasCompletedScroll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const scrollOffsetRef = useRef(0);

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

  const ITEM_HEIGHT = 120;
  const CONTAINER_HEIGHT = 400;
  const MAX_SCROLL = (industries.length * ITEM_HEIGHT) - CONTAINER_HEIGHT;

  // Update the ref whenever scrollOffset changes
  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (!isScrollLocked) return;

    const direction = e.deltaY > 0 ? 1 : -1;

    // Prevent scrolling beyond boundaries
    if (
      (direction > 0 && scrollOffsetRef.current >= MAX_SCROLL) ||
      (direction < 0 && scrollOffsetRef.current <= 0)
    ) {
      setIsScrollLocked(false);
      return;
    }

    if (isAnimating.current) return;

    e.preventDefault();

    isAnimating.current = true;

    const scrollStep = ITEM_HEIGHT;

    setScrollOffset(prev => {
      let newOffset;
      if (direction > 0) {
        newOffset = Math.min(prev + scrollStep, MAX_SCROLL);
        if (newOffset >= MAX_SCROLL) {
          setHasCompletedScroll(true);
        }
      } else {
        newOffset = Math.max(prev - scrollStep, 0);
        if (newOffset < MAX_SCROLL) {
          setHasCompletedScroll(false);
        }
      }
      return newOffset;
    });

    // Release animation lock after the transition
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  }, [isScrollLocked, MAX_SCROLL]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const isFullyVisible = (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.8
          );

          if (isFullyVisible) {
            setIsScrollLocked(true);
            setHasCompletedScroll(false);
          } else {
            setIsScrollLocked(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 0.9, 1],
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isScrollLocked && !hasCompletedScroll) {
      document.addEventListener('wheel', handleScroll, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isScrollLocked, hasCompletedScroll, handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen snap-start py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-1000 `}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Industries We Serve
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                With over 35 years of combined experience, we serve diverse industries
                with cutting-edge air separation technology and industrial gas solutions.
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Our expertise spans across multiple sectors, ensuring reliable and
                efficient gas supply systems tailored to your specific needs.
              </p>


            </div>
          </div>

          {/* Right Content - Industries List */}
          <div className="lg:col-span-3 lg:pl-16">
            <div
              className="relative overflow-hidden"
              style={{ height: `${CONTAINER_HEIGHT}px` }}
            >
              <div
                className="transition-transform duration-500 ease-out"
                style={{
                  transform: `translateY(-${scrollOffset}px)`,
                  height: `${industries.length * ITEM_HEIGHT}px`
                }}
              >
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center"
                    style={{ height: `${ITEM_HEIGHT}px` }}
                  >
                    <div className={`
                      text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light
                      transition-all duration-1000 transform
                      
                      hover:text-blue-300 cursor-default
                      bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent
                      leading-tight tracking-tight
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default IndustriesSection; 