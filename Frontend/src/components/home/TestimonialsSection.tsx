import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "SCG",
      role: "Purchasing Executive",
      quote: "You all are doing the best!"
    },
    {
      company: "NELION",
      subtitle: "NELION EXPORTS",
      role: "Export Manager",
      quote: "We are happy with the product and quality."
    },
    {
      company: "VG",
      subtitle: "Vishnu Gases",
      role: "Owner",
      quote: "You have material available whenever we want!"
    },
    {
      company: "ABC Corp",
      role: "CTO",
      quote: "Excellent service and support."
    },
    {
      company: "XYZ Ltd",
      subtitle: "XYZ Solutions",
      role: "Operations Manager",
      quote: "Reliable products every time."
    },
    {
      company: "Tech Innovators",
      role: "CEO",
      quote: "Transformed our workflow completely."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3; // Number of cards to show at once

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;

    // Calculate new index ensuring it stays within bounds
    const maxIndex = Math.max(testimonials.length - cardsPerView, 0);
    const newIndex = Math.min(Math.max(index, 0), maxIndex);
    setCurrentIndex(newIndex);

    // Scroll to the new index
    const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
    const gap = 24; // Match your gap-6 class (1.5rem = 24px)
    containerRef.current.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-normal text-slate-600 mb-2">Client</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Testimonials</h3>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 p-0"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 p-0"
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - cardsPerView}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-hidden gap-6 scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] p-6 border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up snap-start"
              style={{
                animationDelay: `${index * 0.1}s`,
                minWidth: 'calc(33.333% - 1.5rem)' // Adjust for gap
              }}
            >
              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-800">{testimonial.company}</h4>
                {testimonial.subtitle && (
                  <p className="text-sm text-slate-500">{testimonial.subtitle}</p>
                )}
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
              <blockquote className="text-primary text-lg font-medium">
                "{testimonial.quote}"
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;