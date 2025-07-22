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

const ProductsContainerInner = () => {
  const { currentPage } = useNavigation();

  return (
    <div
      className={`bg-white relative overflow-x-hidden pt-16 lg:pt-16 xl:pt-16 sm:pt-32 transition-all duration-300`}
    >
      <AnimatePresence mode="wait">
        {currentPage === 1 && (
          <PageTransition key="page-1" pageIndex={1}>
            <Products />
          </PageTransition>
        )}
        {currentPage === 2 && (
          <PageTransition key="page-2" pageIndex={2}>
            <Products2 />
          </PageTransition>
        )}
        {currentPage === 3 && (
          <PageTransition key="page-3" pageIndex={3}>
            <Products3 />
          </PageTransition>
        )}
        {currentPage === 4 && (
          <PageTransition key="page-4" pageIndex={4}>
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
