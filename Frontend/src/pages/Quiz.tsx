import React from "react";
import PlantPotential from "@/components/Quiz/PlantPotential";
import GasIndustryQuiz from "@/components/Quiz/GasIndustryQuiz";
import PlantSelector from "@/components/Quiz/PlantSelector.jsx";
import ASUQuizPromo from "@/components/Quiz/ASUQuizPromo";
import PSASystemQuiz from "@/components/Quiz/PSASystemQuiz";
import CryogenicQuizPromo from "@/components/Quiz/CryogenicQuizPromo";
import Footer from "@/components/Footer";
const Quiz: React.FC = () => {
  return (
    <>
      <PlantPotential />
      <GasIndustryQuiz />
      <PlantSelector />
      <ASUQuizPromo />
      <PSASystemQuiz />
      <CryogenicQuizPromo />
      <Footer/>
    </>
  );
};

export default Quiz;
