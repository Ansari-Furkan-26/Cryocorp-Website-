import React, { useState } from "react";
import { MessageCircle, Phone, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigation } from '../../contexts/NavigationContext';

const FlipCard = ({ 
    imageSrc, 
    title, 
    subtitle, 
    detailCard, 
    className = "",
    imageClassName = ""
}: { 
    imageSrc: string;
    title: string;
    subtitle?: string;
    detailCard: any;
    className?: string;
    imageClassName?: string;
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    return (
        <div 
            className={`relative ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: '1000px' }}
        >
            <div 
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front Card */}
                <div 
                    className="absolute inset-0"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="relative w-full h-full overflow-hidden shadow-lg rounded-lg">
                        <img
                            src={imageSrc}
                            alt={title}
                            className={`w-full h-full object-cover ${imageClassName}`}
                        />
                        <div className="absolute inset-0 bg-blue-900/50" />
                        <div className="absolute z-10 bottom-4 left-4 text-white text-lg font-bold tracking-wide">
                            {title}
                            {subtitle && <div className="text-sm">{subtitle}</div>}
                        </div>
                    </div>
                </div>
                
                {/* Back Card */}
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="relative w-full h-full bg-[#1A365E] text-white p-4 overflow-y-auto rounded-lg">
                        <div className="space-y-3">
                            <div className="border-b border-blue-300 pb-2">
                                <h3 className="font-bold text-sm">{detailCard.title}</h3>
                                <p className="text-xs text-blue-200 mt-1">{detailCard.subtitle}</p>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="font-semibold text-xs text-blue-200">Technical Overview:</h4>
                                <ul className="text-xs space-y-1">
                                    {detailCard.technicalSpecs.map((spec, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-300 mr-2">•</span>
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="font-semibold text-xs text-blue-200">Key Features:</h4>
                                <ul className="text-xs space-y-1">
                                    {detailCard.keyFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-300 mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-3">
                                <p className="text-xs text-blue-100">{detailCard.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ASUPage = () => {
    const { goNext, goPrev } = useNavigation();
    // Detail cards data
    const detailCards = {
        tot: {
            title: "TOT SERIES OXYGEN PLANT",
            subtitle: "ONSITE COMPACT OXYGEN GENERATOR",
            technicalSpecs: [
                "Oxygen Flow: 18 lpm (≈3 'D' cylinders/day)",
                "Oxygen Purity: 93±3%",
                "Oxygen Pressure: 4.5 bar g",
                "Dimensions: 1230mm x 1490mm x 2000mm",
                "Weight: 500kg",
                "Certifications: ISO 13485-1, NFPA 99(21), CE"
            ],
            keyFeatures: [
                "Reliable PSA tech with high-purity output (93±3%)",
                "Automated operation with energy-saving displays",
                "Compact, mobile, and space-efficient design",
                "Zero CO₂ emissions, zero transport footprint",
                "No explosive materials or storage risks",
                "Cuts operating and logistics costs—no waste"
            ],
            description: "The TOT Series by Summits Pyronics Pvt. Ltd. offers a compact, plug-and-play PSA oxygen generation system tailored for small hospitals, clinics, wellness centers, veterinary care, and O₂ consumption needs. Trusted choice for dependable on-site medical oxygen supply."
        },
        oxylife: {
            title: "OXYGEN GENERATOR - OXYLIFE",
            subtitle: "MEDICAL GRADE OXYGEN SOLUTION",
            technicalSpecs: [
                "Flow Rate: Up to 1250 LPM",
                "Purity: 93±3%",
                "Pressure: Up to 5 bar g",
                "Performance: Tested at -10°C ambient",
                "Compliant with medical pressure requirements"
            ],
            keyFeatures: [
                "Plug-and-play system with fast ROI",
                "Advanced PLC controls and energy economizer",
                "Uniform gas flow over 2core for maximum efficiency",
                "Built-in alarms for air quality monitoring",
                "Stainless steel interconnecting piping",
                "Complies with WHO-ISO 7137-3, HTM 02-01, and NFPA 99C"
            ],
            description: "A compact, PSA-based oxygen plant delivering up to 1250 LPM at 93±3% purity. Designed for hospitals, clinics, and industrial needs. Built for dependability and energy efficiency, the OxyLife system ensures reliable 24×7 oxygen generation with low environmental impact."
        },
        nitropak: {
            title: "NITROPAK - NITROGEN GENERATOR PLANT",
            subtitle: "HIGH-PURITY NITROGEN SOLUTION",
            technicalSpecs: [
                "Core Tech: Pressure Swing Adsorption (PSA)",
                "Purity Control: On-demand, high-purity nitrogen",
                "Pre-Treatment: Integrated Air Compressor & Filtration",
                "Proven: Surge and Storage Tanks for peak demand buffering"
            ],
            keyFeatures: [
                "Proven PSA-based NitroPAK for consistent output",
                "Automated air-intake ensures long PSA life and optimal performance",
                "Built-in surge and storage tanks for reliable pressures and flow",
                "Eliminates cylinder-rental, delivery fees, and nitrogen loss",
                "Faster ROI, lower CapEx & OpEx",
                "Total control over operational parameters and cost"
            ],
            description: "A high-efficiency, on-site nitrogen solution powered by advanced PSA technology. NitroPAK delivers dependable performance, ensuring high availability. Built for reducing dependency on external supply chains and driving down long-term costs."
        },
        maps: {
            title: "MAPS SERIES - NITROGEN GENERATOR",
            subtitle: "INDUSTRIAL NITROGEN SOLUTION",
            technicalSpecs: [
                "Nitrogen Purity: 99.5%",
                "Output Pressure: 5 bar",
                "Models Available:",
                "• N-Flow: 15 lpm (0.9 m³/hr)",
                "• Compressor: 2 HP / 1.5 kW",
                "• Pressure: 7 bar g",
                "• Size: 350 x 650 x 800 mm",
                "• N-Flow: 30 lpm (1.8 m³/hr)",
                "• Compressor: 3 HP / 2.2 kW"
            ],
            keyFeatures: [
                "99.5% food-grade nitrogen with stable purity",
                "Compact footprint, designed for plug-and-play next to your packing line",
                "Fully automatic with auto cut-off when idle",
                "PSA technology with molecular sieve beds",
                "Fastest ROI vs. cylinder dependency—low CapEx & OpEx",
                "Minimal maintenance, maximum uptime"
            ],
            description: "Tested method to extend shelf-life and preserve freshness in products like snacks, meats, coffee, beverages, and edible oils. Designed for on-floor integration with food packaging machines, MAP units ensure purity, freshness, and extended shelf life."
        }
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-32" style={{ minHeight: '305vh' }}>
            {/* Main Content */}
            <main className="relative z-10 ml-64 left-20 pr-40">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-12 gap-4 min-h-[80vh]">
                        {/* Main Content Area */}
                        <div className="col-span-7">
                            {/* Section Numbers */}
                            <div className="flex items-center space-x-8 mb-8">
                                <div className="text-2xl font-bold">02.</div>
                            </div>

                            {/* Main Heading */}
                            <div className="mb-8">
                                <h1 className="text-5xl font-bold text-black mb-2">PSA Technology </h1>
                                <h2 className="text-xl text-gray-700">Gas Production & Distributions</h2>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl pt-24">
                                <p className="text-gray-600 leading-relaxed">
                                    Pressure Swing Adsorption (PSA) is an advanced technology designed to generate high-purity Oxygen or Nitrogen directly on-site — safely, efficiently, and on demand. Using selective adsorbents like Zeolite, the PSA process filters compressed air by trapping unwanted gases such as nitrogen and CO₂, allowing only the desired gas to pass through. 
                                    This smart separation method ensures continuous, reliable gas production without relying on external supply chains.

                                    Choosing a PSA plant means lower operational costs, reduced dependency on high-pressure cylinders, and enhanced safety. It also supports a greener footprint by eliminating transport-related emissions. Whether you're running a hospital, a manufacturing line, or a remote facility, PSA systems deliver flexibility, control, and long-term sustainability — right where you need it.
                                </p>
                            </div>

                            {/* Level Tags */}
                            <div className="text-gray-400 text-xs sm:text-sm font-bold space-y-1 pl-4 pt-32">
                                <p>LEVEL 1</p>
                                <p>LEVEL 2</p>
                                <p>LEVEL 3</p>
                            </div>
                        </div>

                        {/* Right Side - PSU and Social Icons */}
                        <div className="col-span-5 flex flex-col justify-between">
                            {/* PSU Text */}
                            <div className="flex items-center space-x-8 mb-8 ml-80">
                                <div className="text-2xl font-bold text-gray-300">03.</div>
                            </div>
                            <div className="text-right">
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
                className="absolute top-80 left-0 w-[800px] h-[800px] bg-no-repeat bg-contain pointer-events-none"
                style={{
                    backgroundImage: `url('/Layer.png')`
                }}
            />
            <div className="absolute top-2 left-2 text-white text-xs font-bold tracking-wide">LEVEL 1</div>
            
            {/* Industrial Plant Images Section with Flip Animation */}
            <div className="absolute top-[999px] left-64 -ml-60 right-0 h-[800px] z-10">
                <div className="relative h-full w-full">
                    {/* TOT SERIES OXYGEN PLANT */}
                    <FlipCard
                        imageSrc="/PSA/tot.png"
                        title="TOT SERIES OXYGEN"
                        subtitle="PLANT- ONSITE COMPACT OXYGEN GENERATOR"
                        detailCard={detailCards.tot}
                        className="absolute top-0 left-[460px] w-[280px] h-[400px] z-20"
                    />

                    {/* OXYGEN GENERATOR - OXYLIFE */}
                    <FlipCard
                        imageSrc="/PSA/generator.png"
                        title="OXYGEN GENERATOR-"
                        subtitle="OXYLIFE"
                        detailCard={detailCards.oxylife}
                        className="absolute top-[-200px] left-[800px] w-[400px] h-[280px] z-20"
                    />

                    {/* NITROPAK - NITROGEN GENERATOR PLANT */}
                    <FlipCard
                        imageSrc="/PSA/generator.png"
                        title="NitroPAK-"
                        subtitle="NITROGEN GENERATOR PLANT"
                        detailCard={detailCards.nitropak}
                        className="absolute left-[290px] top-[-250px] w-[450px] h-[250px] z-20"
                    />

                    {/* MAPS SERIES - NITROGEN GENERATOR */}
                    <FlipCard
                        imageSrc="/PSA/nitrogen.png"
                        title="MAPS SERIES-"
                        subtitle="NITROGEN GENERATOR"
                        detailCard={detailCards.maps}
                        className="absolute top-[-410px] right-[-770px] w-[350px] h-[350px] z-20"
                    />
                </div>
            </div>
        </div>
    );
};

export default ASUPage;