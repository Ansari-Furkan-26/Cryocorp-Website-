import React from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import layerImage from '/public/Layer.png';
import { useNavigation } from '../../contexts/NavigationContext';
const ASUPage: React.FC = () => {
    const { goNext, goPrev } = useNavigation();
    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-22" style={{ minHeight: '145vh' }}>

            {/* Main Content */}
            <main className="relative z-10 ml-64 left-20 pr-40">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-12 gap-4  min-h-[80vh]">
                        {/* Main Content Area */}
                        <div className="col-span-7">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-8">
                                <div className="text-2xl font-bold">03.</div>
                                {/* <div className="text-2xl font-bold text-gray-300">02.</div> */}
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8">
                                <h1 className="text-5xl font-bold text-black mb-2">LIQUID BOTTLING </h1>
                                <h1 className="text-5xl font-bold text-black mb-2">UNIT</h1>
                            </div>

                            {/* Description */}
                            <div className="max-w-6xl pt-24">
                                <p className="text-gray-600 leading-relaxed">
                                    Industrial gases like Oxygen, Nitrogen, Argon, and Carbon Dioxide are frequently transported in their liquid form from large production facilities.
                                    This liquid is stored in large cryogenic tanks for subsequent distribution. 
                                    A Liquid Refilling Bottling System is essential for transferring these bulk liquid gases from the storage tanks into smaller cylinders, which are then distributed to end-users like hospitals or industrial sites. Keeping up with industry demand, companies like Cryo Corp provide the necessary machinery and equipment for this crucial step in the liquid gas supply chain.

                                    A complete Liquid Refilling Bottling Plant offered by Cryo Corp includes major components such as Cryogenic Storage Tanks for various liquid gases like Liquid Oxygen, Liquid Nitrogen, Liquid Argon, Liquid CO2 and other gases which can hold up to 40 KL. The system also incorporates Ambient Liquid Vapourizers to convert the liquid gas back into a gaseous state when needed, handling flow rates from 30 to 2,500 Nm³/hr. Furthermore, it includes Liquid Pumps designed specifically for transferring Oxygen, Nitrogen, Argon, or Carbon Dioxide liquids, with capacities ranging up to 400 cu.m/hr. Cryo Corp also offers complete service support, including the erection and commissioning of these bottling units at the client's location.`
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400  text-xs sm:text-sm font-bold space-y-1 pl-4 pt-16">
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
                                <div className="text-2xl font-bold text-gray-300">04.</div>
                            </div>
                            <div className="text-right ">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">NEXT</div>
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
                                <div onClick={goNext} className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center  hover:bg-gray-100 transition-colors cursor-pointer">
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
        </div>
    );
};

export default ASUPage;