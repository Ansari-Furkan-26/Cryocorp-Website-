import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';
const ASUPage: React.FC = () => {
    const { goNext, goPrev } = useNavigation();
    return (

        <div className="min-h-screen bg-white relative overflow-hidden pt-32" style={{ minHeight: '225vh' }}>


           
            {/* Main Content */}
            <main className="relative z-10 ml-64 left-20 pr-40">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-12 gap-4  min-h-[80vh]">
                        {/* Main Content Area */}
                        <div className="col-span-7">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-8">
                                <div className="text-2xl font-bold">01.</div>
                                {/* <div className="text-2xl font-bold text-gray-300">02.</div> */}
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8">
                                <h1 className="text-5xl font-bold text-black mb-2">ASU Technology</h1>
                                <h2 className="text-xl text-gray-700">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl pt-24">
                                <p className="text-gray-600 leading-relaxed">
                                    Air Separation Unit (ASU) technology is at the heart of CryoCorp's operations — a cutting-edge process
                                    where atmospheric air is compressed, cooled, and separated into its key components: oxygen, nitrogen,
                                    and argon. These gases are then purified, liquefied, or stored in gaseous form depending on industrial
                                    needs.
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
                                <div className="text-2xl font-bold text-gray-300">02.</div>
                            </div>
                            <div className="text-right ">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">PSU</div>
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
            <div className="absolute top-[1050px] left-64 -ml-60 right-0 h-[600px] z-10">
                <div className="relative h-full w-full">
                    {/* ASU OXYGEN PLANT (Filtered Image Only) */}
                    <div className="absolute top-0 left-24 w-[390px] h-72">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            {/* Image */}
                            <img
                                src="/ASU/asu1.png"
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
                    <div className="absolute top-0 left-[500px] w-[500px] h-[500px]">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu4.png"
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
                    <div className="absolute top-[300px] left-72 w-48 h-36">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu2.png"
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
                    <div className="absolute top-[250px] right-52 w-72 h-64">
                        <div className="relative w-[400px] h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu2.png"
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