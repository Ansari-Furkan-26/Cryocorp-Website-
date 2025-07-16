import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    { company: "SCG", role: "Purchasing Executive", quote: "You all are doing the best!", img: "testimonial1" },
    { company: "NELION", subtitle: "NELION EXPORTS", role: "Export Manager", quote: "We are happy with the product and quality.", img: "testimonial2" },
    { company: "VG", subtitle: "Vishnu Gases", role: "Owner", quote: "You have material available whenever we want!", img: "testimonial3" },
    { company: "ABC Corp", role: "CTO", quote: "Excellent service and support.", img: "testimonial4" },
    { company: "XYZ Ltd", subtitle: "XYZ Solutions", role: "Operations Manager", quote: "Reliable products every time.", img: "testimonial5" },
    { company: "Tech Innovators", role: "CEO", quote: "Transformed our workflow completely.", img: "testimonial6" },
    { company: "GreenTech", role: "Sustainability Lead", quote: "Eco-friendly solutions that work.", img: "testimonial7" },
    { company: "BlueWave", subtitle: "BlueWave Inc", role: "Sales Director", quote: "Impressed by the delivery speed.", img: "testimonial8" },
    { company: "RedStone", role: "Operations Head", quote: "Quality beyond expectations.", img: "testimonial9" },
    { company: "SilverPeak", subtitle: "SilverPeak Co", role: "Marketing Manager", quote: "Great customer engagement tools.", img: "testimonial10" },
    { company: "GoldLine", role: "Finance Officer", quote: "Cost-effective and efficient.", img: "testimonial11" },
    { company: "PurpleSky", subtitle: "PurpleSky Ltd", role: "Product Manager", quote: "Innovative products every time.", img: "testimonial12" },
    { company: "OrangeBloom", role: "HR Manager", quote: "Excellent team support.", img: "testimonial13" },
    { company: "IndigoWave", subtitle: "IndigoWave Group", role: "Founder", quote: "Always available when needed.", img: "testimonial14" },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const maxIndex = Math.max(testimonials.length - cardsPerView, 0);
    const newIndex = Math.min(Math.max(index, 0), maxIndex);
    setCurrentIndex(newIndex);
    const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    containerRef.current.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="mx-auto">
        <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 ">Client</h1>
        <h3 className="text-3xl font-bold text-[#5FC9D8]  mb-8">Testimonials</h3>
        </div>
        <div className="flex justify-end mb-6 gap-2">
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
        <div
          ref={containerRef}
          className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] p-4 border border-gray-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <img
                  src={`/Testimonial/${testimonial.img}.png`}
                  alt={`${testimonial.company} logo`}
                  className="h-16 w-auto mb-2"
                />
                {testimonial.subtitle && (
                  <p className="text-sm text-gray-500 ">{testimonial.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 ">{testimonial.role}</p>
              </div>
              <blockquote className="text-[#5FC9D8]  text-base font-medium">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;