import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex pt-20 ">
            {/* Left Column - Main Content */}
            <div className="flex-[3] px-12">
                <div className="mb-8 pt-24">
                    <p className="text-gray-500 text-sm mb-2">Services & Projects</p>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
                    <p className="text-gray-600 leading-relaxed text-xl w-[700px]">
                        We deliver turnkey solutions that keep your industrial gas operations running smoothly—whether relocating entire plants, commissioning precision PSA systems, or bottling ultra-cold gases with unmatched safety and efficiency. 
                        Trusted globally, our expert teams combine innovation, compliance, and seamless execution to power your growth without interruption.
                    </p>
                </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex-[1] w-full bg-gray-50 p-8 border-l border-gray-200">
                <div className="space-y-6">
                    
                    <div className="space-y-3 pt-48">
                        {[
                            "01. TURN-KEY PROJECTS FOR PLANT RELOCATION",
                            "02. ERECTING & COMMISSIONING FOR PSA PLANTS",
                            "03. LIQUID BOTTTLING COMMMISSIONING",
                        ].map((item) => (
                            <div key={item} className="flex items-center justify-between py-2 border-b border-gray-100 ">
                                <span className="text-sm font-medium text-gray-500">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default Hero;
