import React from "react";
import ASUPage from "@/components/products/hero";
import IndustrialDiagram from "@/components/products/level1";
import AirCompressorCatalog from "@/components/products/airCompressor";
import T from "@/components/products/t";
import ChillingTank from "@/components/products/chillingTank";
import FRP from "@/components/products/frp";
import DustFilter from "@/components/products/dustFilter";
import Molecular from "@/components/products/molecular";
import AirSeperation from "@/components/products/airSeperation";
import Expansion from "@/components/products/expansion";
import Oxygen from "@/components/products/oxygen";
import LiquidOxygen from "@/components/products/liquidOxygen";
import LevelThreeAccessories from "@/components/products/LevelThreeAccessories";

const Products: React.FC = () => {
    return (
        <>
            <ASUPage />
            <IndustrialDiagram />
            <AirCompressorCatalog />
            <T/>
            <ChillingTank/>
            <FRP/>
            <DustFilter/>
            <Molecular/>
            <AirSeperation/>
            <Expansion/>
            <LiquidOxygen/>
            <Oxygen/>
            <LevelThreeAccessories/>
        </>
    );
};

export default Products;
