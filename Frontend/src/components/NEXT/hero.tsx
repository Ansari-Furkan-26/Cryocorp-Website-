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
                                <div className="text-2xl font-bold">04.</div>
                                {/* <div className="text-2xl font-bold text-gray-300">02.</div> */}
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8">
                                <h1 className="text-5xl font-bold text-black mb-2">NEXT GEN GAS</h1>
                                <h1 className="text-5xl font-bold text-black mb-2">SOLUTIONS</h1>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl pt-24">
                                <p className="text-gray-600 leading-relaxed">
                                    Products in this category are aspiratinal products that we are fully equipped of supplying to our clients when the interest is received. 
                                    These products will be supplied in collaboration with our partners like Summits Hygronics and others.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400  text-xs sm:text-sm font-bold space-y-1 pl-4 pt-64">
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
                                <div className="text-2xl font-bold text-gray-300">01.</div>
                            </div>
                            <div className="text-right ">
                                <div className="text-6xl font-bold text-gray-200 tracking-wider pb-60">ASU</div>
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