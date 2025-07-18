
import HeroSection from "@/components/home/HeroSection";
import Benefits from "@/components/home/Benefits";
import AchievementsSection from "@/components/home/AchievementsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import VideoHero from "@/components/home/Video";
import Bento from "@/components/home/Bento";
import CTA from "@/Components/CTA";
import AppSheetEmbed from "@/components/home/Product";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoHero />
      <Benefits />
      <AchievementsSection />
      <IndustriesSection />
      <Bento />
      <AppSheetEmbed />
      <TestimonialsSection />
      <ContactSection />
      <CTA />
    </div>
  );
};

export default Index;
