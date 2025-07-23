import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen sm:min-h-[600px] bg-gray-50 flex flex-col lg:flex-row pt-16 px-6 lg:px-0 lg:border-b-[0.5px] border-[#1A365E]">
            {/* Left Column - Main Content */}
            <div className="lg:flex-[3] w-full lg:px-12">
                <div className="mb-8 pt-12 lg:pt-24">
                    <p className="text-gray-500 text-sm sm:text-xl font-bold opacity-45">Services & Projects</p>
                    <h1 className="text-3xl sm:text-7xl font-bold text-gray-900 mb-6">Projects</h1>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg lg:text-xl max-w-full lg:max-w-[700px]">
                        We deliver turnkey solutions that keep your industrial gas operations running smoothly—whether relocating entire plants, commissioning precision PSA systems, or bottling ultra-cold gases with unmatched safety and efficiency. 
                        Trusted globally, our expert teams combine innovation, compliance, and seamless execution to power your growth without interruption.
                    </p>
                </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="lg:flex-[1] w-full bg-gray-50 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l-[0.5px] border-[#1A365E]">
                <div className="space-y-6">
                    <div className="space-y-3 pt-8 lg:pt-48">
                        {[
                            "01. TURN-KEY PROJECTS FOR PLANT RELOCATION",
                            "02. ERECTING & COMMISSIONING FOR PSA PLANTS",
                            "03. LIQUID BOTTTLING COMMMISSIONING",
                        ].map((item, idx) => (
                            <div key={item} className="flex items-center justify-between  ">
                                <span className="text-sm font-bold text-gray-500"><a href={`#${item}`}>{item}</a></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
