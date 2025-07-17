import React from "react";
import ASUPage from "@/components/ASU/hero";
import IndustrialDiagram from "@/components/ASU/level1";
import AirCompressorCatalog from "@/components/ASU/airCompressor";
import T from "@/components/ASU/t";
import ChillingTank from "@/components/ASU/chillingTank";
import FRP from "@/components/ASU/frp";
import DustFilter from "@/components/ASU/dustFilter";
import Molecular from "@/components/ASU/molecular";
import AirSeperation from "@/components/ASU/airSeperation";
import Expansion from "@/components/ASU/expansion";
import Oxygen from "@/components/ASU/oxygen";
import LiquidOxygen from "@/components/ASU/liquidOxygen";
import LevelThreeAccessories from "@/components/ASU/LevelThreeAccessories";

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
