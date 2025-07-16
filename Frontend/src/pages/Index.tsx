
import HeroSection from "@/components/home/HeroSection";
import Benefits from "@/components/home/Benefits";
import AchievementsSection from "@/components/home/AchievementsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import VideoHero from "@/components/home/Video";
import Bento from "@/Components/home/Bento";
import CTA from "@/Components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoHero />
      <Benefits />
      <AchievementsSection />
      <div className="lg:snap-y lg:snap-mandatory overflow-y-scroll h-screen">
      <IndustriesSection />
      </div>
      <Bento />
      <TestimonialsSection />
      <ContactSection />
      <CTA />
    </div>
  );
};

export default Index;
