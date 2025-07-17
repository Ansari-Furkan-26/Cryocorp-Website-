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
        <div className="">
        <div className="hidden sm:block absolute z-10 top-28 left-0 px-6 pt-[18px] w-64">
                <div className="flex flex-col h-full">
                    {/* Top Left List */}
                    <div className="hidden sm:block space-y-2 text-xs sm:text-sm font-bold text-gray-400  mb-auto">
                        <p>01. ASU TECHNOLOGY</p>
                        <p>02. PSA TECHNOLOGY</p>
                        <p>03. LIQUID BOTTLING UNIT</p>
                        <p>04. NEXT GEN GAS SOLUTIONS</p>
                    </div>

                    {/* Vertical Line Container */}
                    <div className="relative flex-1 my-4">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-400 opacity-50" />
                    </div>

                    {/* Bottom Section */}
                    <div className="flex mt-auto pb-32">
                        {/* Numbers */}
                        <div className="text-gray-400 hidden sm:block text-xs sm:text-sm space-y-1 font-semibold w-8 pt-80">
                            <p>4</p>
                            <p>83</p>
                            <p>9</p>
                        </div>


                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Products;
