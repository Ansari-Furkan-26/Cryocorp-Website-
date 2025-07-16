import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';
const ASUPage: React.FC = () => {
    const { goNext, goPrev } = useNavigation();

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-32" style={{ minHeight: '305vh' }}>


            {/* <div className="absolute z-10 top-28 left-0 px-6 pt-16 w-64">
                <div className="flex flex-col h-full">
                    <div className="space-y-2 text-xs sm:text-sm font-bold text-gray-400  mb-auto">
                        <p>01. ASU TECHNOLOGY</p>
                        <p>02. PSA TECHNOLOGY</p>
                        <p>03. LIQUID BOTTLING UNIT</p>
                        <p>04. NEXT GEN GAS SOLUTIONS</p>
                    </div>

                    <div className="relative flex-1 my-4">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-400 opacity-50" />
                    </div>

                    <div className="flex mt-auto pb-32">
                        <div className="text-gray-400 text-xs sm:text-sm space-y-1 font-semibold w-8 pt-80">
                            <p>4</p>
                            <p>83</p>
                            <p>9</p>
                        </div>


                    </div>
                </div>
            </div> */}

            {/* Main Content */}
            <main className="relative z-10 ml-64 left-20 pr-40">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-12 gap-4  min-h-[80vh]">
                        {/* Main Content Area */}
                        <div className="col-span-7">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-8">
                                <div className="text-2xl font-bold">02.</div>
                                {/* <div className="text-2xl font-bold text-gray-300">02.</div> */}
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8">
                                <h1 className="text-5xl font-bold text-black mb-2">PSA Technology </h1>
                                <h2 className="text-xl text-gray-700">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl pt-24">
                                <p className="text-gray-600 leading-relaxed">
                                    Pressure Swing Adsorption (PSA) is an advanced technology designed to generate high-purity Oxygen or Nitrogen directly on-site — safely, efficiently, and on demand. Using selective adsorbents like Zeolite, the PSA process filters compressed air by trapping unwanted gases such as nitrogen and CO₂, allowing only the desired gas to pass through. 
                                    This smart separation method ensures continuous, reliable gas production without relying on external supply chains.

                                    Choosing a PSA plant means lower operational costs, reduced dependency on high-pressure cylinders, and enhanced safety. It also supports a greener footprint by eliminating transport-related emissions. Whether you're running a hospital, a manufacturing line, or a remote facility, PSA systems deliver flexibility, control, and long-term sustainability — right where you need it.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400  text-xs sm:text-sm font-bold space-y-1 pl-4 pt-32">
                                <p>LEVEL 1</p>
                                <p>LEVEL 2</p>
                                <p>LEVEL 3</p>
                            </div>
                        </div>

                        {/* Right Side - PSU and Social Icons */}
                        <div className="col-span-5 flex flex-col justify-between">
                            {/* PSU Text */}
                            <div className="flex items-center space-x-8 mb-8 ml-80  ">
                                {/* <div className="text-2xl font-bold">01.</div> */}
                                <div className="text-2xl font-bold text-gray-300">03.</div>
                            </div>
                            <div className="text-right ">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">LIQU</div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex flex-col space-y-4 items-end">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer">
                                    <MessageCircle size={20} />
                                </div>
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                                    <Phone size={20} />
                                </div>
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                                    <User size={20} />
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex space-x-2 justify-end mt-8">
                                <div onClick={goPrev} className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                    <ChevronLeft size={20} />
                                </div>
                                <div onClick={goNext} className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                    <ChevronRight size={20} />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
            {/* Bottom-Left Background Image */}
            <div
                className="absolute top-80 left-0 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none "
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
            <div className="absolute top-2 left-2 text-white text-xs font-bold tracking-wide">LEVEL 1</div>
            {/* Industrial Plant Images Section */}
            <div className="absolute top-[999px] left-64 -ml-60 right-0 h-[800px] z-10">
                <div className="relative h-full w-full">
                    {/* ASU OXYGEN PLANT (Filtered Image Only) */}
                    <div className="absolute top-0 left-[400px] w-[336px] h-[386px]">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            {/* Image */}
                            <img
                                src="/PSA/tot.png"
                                alt="ASU Oxygen Plant"
                                className="w-full h-full object-cover"
                            />

                            {/* Blue Overlay Filter */}
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold tracking-wide">
                                ASU OXYGEN PLANT
                            </div>
                        </div>
                    </div>
                    {/* ASU NITROGEN PLANT (Top Center Large) */}
                    <div className="absolute top-[180px] left-[760px] w-[600px] h-[280px]">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/PSA/generator.png"
                                alt="ASU Nitrogen Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute top-4 right-4 text-white text-2xl font-bold tracking-wide">
                                ASU NITROGEN PLANT
                            </div>
                        </div>
                    </div>

                    {/* NEW ASU PLANT (Bottom Left Small) */}
                    <div className="absolute top-[400px] left-[190px] w-[550px] h-[300px]">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/PSA/generator.png"
                                alt="New ASU Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-2 left-2 text-white text-xl font-bold">
                                NEW ASU PLANT
                            </div>
                        </div>
                    </div>

                    {/* SECOND HAND ASU PLANT (Top Right) */}
                    <div className="absolute top-[480px] left-[760px]  w-72 h-[450px]">
                        <div className="relative w-[400px] h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/PSA/nitrogen.png"
                                alt="Second Hand ASU Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute top-2 right-2 text-white text-2xl font-bold">
                                SECOND HAND
                            </div>
                            <div className="absolute top-8 right-2 text-white text-2xl font-bold">
                                ASU PLANT
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ASUPage;