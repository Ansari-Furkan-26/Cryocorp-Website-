// src/pages/ProductsContainer.tsx
import React from "react";
import { AnimatePresence } from "framer-motion";
import { NavigationProvider } from "../contexts/NavigationContext";
import Products from "./ASU";
import Products2 from "./PSA";
import Products3 from "./LBU";
import Products4 from "./NEXT";
import { useNavigation } from "../contexts/NavigationContext";
import { PageTransition } from "../components/PageTransition";
import CTA from "@/components/CTA";

// Define heights for each page
const pageHeights = {
  1: { mobile: "h-[36500px]", desktop: "md:h-[16000px]" }, // ASU - longest page
  2: { mobile: "h-[2000px]", desktop: "md:h-[2100px]" }, // PSA - shorter page
  3: { mobile: "h-[7700px]", desktop: "md:h-[3900px]" }, // LBU - medium page
  4: { mobile: "h-[5100px]", desktop: "md:h-[3300px]" }, // NEXT - medium page
};

const ProductsContainerInner = () => {
  const { currentPage } = useNavigation();

  // Get current page height
  const currentHeight = pageHeights[currentPage as keyof typeof pageHeights];
  const heightClasses = `${currentHeight.mobile} ${currentHeight.desktop}`;

  return (
    <div
      className={`${heightClasses} bg-white relative overflow-hidden pt-16 sm:pt-32 transition-all duration-300`}
    >
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <PageTransition pageIndex={1}>
            <Products />
          </PageTransition>
        )}
        {currentPage === 2 && (
          <PageTransition pageIndex={2}>
            <Products2 />
          </PageTransition>
        )}
        {currentPage === 3 && (
          <PageTransition pageIndex={3}>
            <Products3 />
          </PageTransition>
        )}
        {currentPage === 4 && (
          <PageTransition pageIndex={4}>
            <Products4 />
          </PageTransition>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductsContainer = () => {
  return (
    <>
      <NavigationProvider>
        <ProductsContainerInner />
      </NavigationProvider>
      <CTA />
      {/* Add Footer component here if you have one */}
      {/* <Footer /> */}
    </>
  );
};

export default ProductsContainer;
