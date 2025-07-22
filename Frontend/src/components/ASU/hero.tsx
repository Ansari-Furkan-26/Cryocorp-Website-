import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';

const ASUPage: React.FC = () => {
    const { goNext, goPrev } = useNavigation();
    return (

        <div className="sm:min-h-[225vh] bg-white relative  mb-10 pt-6 lg:pt-8">

            {/* Main Content */}
            <main className="relative z-10 sm:ml-64 left-0 sm:pr-40 lg:ml-64 lg:left-20 lg:pr-40 ml-0 pr-4">
                <div className="container mx-auto px-4 py-12 lg:py-12 py-6">
                    <div className="grid grid-cols-12 gap-4 sm:min-h-[80vh] lg:grid-cols-12 grid-cols-1">
                        {/* Main Content Area */}
                        <div className="col-span-8 lg:col-span-7 col-span-1 sm:pl-6 sm:border-l-2 border-[#5b88c9]">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-5 lg:mb-8 mb-4">
                                <div className="text-2xl font-bold lg:text-2xl text-lg">01.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8 lg:mb-8 mb-4">
                                <h1 className="text-5xl font-bold text-black mb-2 lg:text-5xl text-3xl">ASU Technology</h1>
                                <h2 className="text-xl text-gray-700 lg:text-xl text-lg">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="w-full pt-24 lg:pt-24 pt-8">
                                <p className="text-gray-600 leading-relaxed lg:text-base text-sm">
                                    Air Separation Unit (ASU) technology is at the heart of CryoCorp's operations — a cutting-edge process
                                    where atmospheric air is compressed, cooled, and separated into its key components: oxygen, nitrogen,
                                    and argon. These gases are then purified, liquefied, or stored in gaseous form depending on industrial
                                    needs.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400 hidden sm:block text-xs sm:text-sm font-bold space-y-1 pl-4 lg:pt-32 pt-16">
                                <a className="sm:block" href="#level-1">LEVEL 1</a>
                                <a className="sm:block" href="#level-2">LEVEL 2</a>
                                <a className="sm:block" href="#level-3">LEVEL 3</a>
                                {/* <p>LEVEL 1</p>
                                <p>LEVEL 2</p>
                                <p>LEVEL 3</p> */}
                            </div>
                        </div>

                        {/* Right Side - PSU and Social Icons */}
                        <div className="col-span-5 flex flex-col gap-5 lg:col-span-5 lg:flex col-span-1 hidden">
                            {/* PSU Text */}
                            <div className="flex items-center ml-80">
                                <div className="text-2xl font-bold text-gray-300">02.</div>
                            </div>
                            <div className="text-right">
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

                        {/* Mobile Navigation */}
                        <div className="lg:hidden flex justify-center space-x-2 col-span-4">
                            <div onClick={goPrev} className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <ChevronLeft size={18} />
                            </div>
                            <div onClick={goNext} className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                                <ChevronRight size={18} />
                            </div>
                        </div>

                    </div>

                </div>

            </main>

            {/* Bottom-Left Background Image */}
            <div
                className="absolute top-80 left-0 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none lg:block hidden"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
            <div className="absolute top-2 left-2 text-white text-xs font-bold tracking-wide">LEVEL 1</div>

            {/* Industrial Plant Images Section */}
            <div id="level-1" className="absolute top-[1000px] left-0 ml-60 right-0 h-[600px] z-10 lg:block hidden">
                <p className="font-bold">LEVEL 1</p>
                <div className="relative sm:h-full w-full">
                    {/* ASU OXYGEN PLANT (Filtered Image Only) */}
                    <div className="absolute top-0  w-[390px] h-72">
                        <div className="relative w-full h-full overflow-hidden shadow-lg">
                            {/* Image */}
                            <img
                                src="/ASU/ASU.jpg"
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
                    <div className="absolute top-0 left-[420px] w-[380px] h-[380px]">
                        <div className="relative w-full h-full overflow-hidden shadow-lg">
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
                    <div className="absolute top-[300px] left-[180px] w-52 h-36">
                        <div className="relative w-full h-full overflow-hidden shadow-lg">
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
                    <div className="absolute top-[250px] right-[210px] w-64 h-64">
                        <div className="relative w-[300px] h-full overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu3.png"
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

            {/* Mobile Plant Images Section */}
            <div className="lg:hidden block px-4">
                <div className="space-y-6">
                    {/* ASU OXYGEN PLANT */}
                    <div className="w-full h-48">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/ASU.jpg"
                                alt="ASU Oxygen Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold tracking-wide">
                                ASU OXYGEN PLANT
                            </div>
                        </div>
                    </div>

                    {/* ASU NITROGEN PLANT */}
                    <div className="w-full h-48">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu4.png"
                                alt="ASU Nitrogen Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold tracking-wide">
                                ASU NITROGEN PLANT
                            </div>
                        </div>
                    </div>

                    {/* NEW ASU PLANT */}
                    <div className="w-full h-48">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu2.png"
                                alt="New ASU Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                                NEW ASU PLANT
                            </div>
                        </div>
                    </div>

                    {/* SECOND HAND ASU PLANT */}
                    <div className="w-full h-48">
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/ASU/asu3.png"
                                alt="Second Hand ASU Plant"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-300/40" />
                            <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                                SECOND HAND ASU PLANT
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ASUPage;