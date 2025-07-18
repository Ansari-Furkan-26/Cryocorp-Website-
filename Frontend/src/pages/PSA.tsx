import React from "react";
import AsuTechnologyPanel from "@/components/PSA/hero";
import { useNavigation } from "@/contexts/NavigationContext";

const Products: React.FC = () => {
    const { updateCurrentPage } = useNavigation();
    return (
        <div className="">
        <div className="hidden sm:block absolute z-10 top-20 left-0 px-6 pt-[12px] w-64">
                <div className="flex flex-col h-full">
                    {/* Top Left List */}
                    <div className="hidden sm:block space-y-2 text-xs sm:text-sm font-bold text-gray-400  mb-[216px]">
                        <a className="block cursor-pointer" onClick={() => {updateCurrentPage(1)}}>01. ASU TECHNOLOGY</a>
                        <a className="block cursor-pointer" onClick={() => {updateCurrentPage(2)}}>02. PSA TECHNOLOGY</a>
                        <a className="block cursor-pointer" onClick={() => {updateCurrentPage(3)}}>03. LIQUID BOTTLING UNIT</a>
                        <a className="block cursor-pointer" onClick={() => {updateCurrentPage(4)}}>04. NEXT GEN GAS SOLUTIONS</a>
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
                        </div>


                    </div>
                </div>
            </div>
            <AsuTechnologyPanel />
        </div>
    );
};

export default Products;
