import React from "react";
import ASUPage from "@/components/products/hero";
import IndustrialDiagram from "@/components/products/level1";
import AirCompressorCatalog from "@/components/products/airCompressor";

const Products: React.FC = () => {
    return (
        <>
            <ASUPage />
            <IndustrialDiagram />
            <AirCompressorCatalog />
        </>
    );
};

export default Products;
