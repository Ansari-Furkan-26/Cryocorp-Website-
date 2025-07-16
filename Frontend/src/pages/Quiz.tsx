import React from "react";
import HeroSection from "@/components/Quiz/HeroSection";
import GasIndustryQuiz from "@/components/Quiz/GasIndustryQuiz";
import PlantSelector from "@/components/Quiz/PlantSelector.jsx";
import ASUQuizPromo from "@/components/Quiz/ASUQuizPromo";
import PSASystemQuiz from "@/components/Quiz/PSASystemQuiz";
import CryogenicQuizPromo from "@/components/Quiz/CryogenicQuizPromo";

const Quiz: React.FC = () => {
  return (
    <>
      <HeroSection />
      <GasIndustryQuiz />
      <PlantSelector />
      <ASUQuizPromo />
      <PSASystemQuiz />
      <CryogenicQuizPromo />
    </>
  );
};

export default Quiz;
