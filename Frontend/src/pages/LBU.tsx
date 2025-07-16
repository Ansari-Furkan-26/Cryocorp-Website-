import React from "react";
import AsuTechnologyPanel from "@/components/LBU/hero";
import LiquidProductsSection from "@/components/LBU/LiquidProductsSection";
import ProductGrid from "@/components/LBU/ProductGrid";

const Products: React.FC = () => {
    return (
        <>
            <AsuTechnologyPanel />
            <LiquidProductsSection />
            <ProductGrid />
        </>
    );
};

export default Products;
