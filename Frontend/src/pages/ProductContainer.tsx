// src/pages/ProductsContainer.tsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavigationProvider } from '../contexts/NavigationContext';
import Products from './ASU';
import Products2 from './PSA';
import Products3 from './LBU';
import Products4 from './NEXT';
import { useNavigation } from '../contexts/NavigationContext';
import { PageTransition } from '../components/PageTransition'; // Add this import

import CTA from "@/components/CTA";

const ProductsContainerInner = () => {
    const { currentPage } = useNavigation();

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-32" style={{ minHeight: '15700px' }}>
            {/* Common Sidebar */}
            <div className="absolute z-10 top-28 left-0 px-6 pt-60 w-64">
                <div className="flex flex-col h-full">
                    {/* Top Left List */}
                    <div className="space-y-2 text-xs sm:text-sm font-bold text-gray-400  mb-auto">
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
                        <div className="text-gray-400 text-xs sm:text-sm space-y-1 font-semibold w-8 pt-80">
                            <p>4</p>
                            <p>83</p>
                            <p>9</p>
                        </div>


                    </div>
                </div>
            </div>

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
        <NavigationProvider>
            <ProductsContainerInner />
            <CTA />
        </NavigationProvider>
    );
};

export default ProductsContainer;