import { Card } from "@/components/ui/card";
import layerImage from '/public/Layer.png';

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
}

const SparePart = ({ number, title, imageSrc }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow z-10">
        <div className="space-y-3 z-10">
            <div className="text-sm font-medium text-catalog-number">
                {number}.
            </div>
            <div className="text-sm font-medium text-catalog-text uppercase tracking-wide">
                {title}
            </div>
            <div className="h-64 bg-[#EDEDED] rounded-md flex items-center justify-center">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="max-h-full max-w-full object-contain"
                    />
                ) : (
                    <div className="text-gray-400 text-xs text-center">
                        Image placeholder
                    </div>
                )}
            </div>
        </div>
    </Card>
);

const ChillingTank = () => {
    const spareParts = [
        { number: "01", title: "FREON COMPRESSOR", imageSrc: "chilling/1.png" },
        { number: "02", title: "EXPANSION VALVE", imageSrc: "chilling/2.png" },
        { number: "03", title: "CHILLING UNIT FILTER", imageSrc: "chilling/3.png" },
        { number: "04", title: "TEMPERATURE INCATOR", imageSrc: "chilling/4.png" },
        { number: "06", title: "CONDENSER", imageSrc: "chilling/5.png" },
    ];

    return (
        <div className="relative w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8 z-1">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    03.<br />
                    CHILLING TANK & CHILLING UNIT
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                        Working in conjunction with a chilling tank, Freon gases industrial Refrigerant type chilling unit with Thermostatic Cooling water Tank and Air coil for cooling cools the water to a low temperature (6-10°C). This chilled water then cools the compressed air, causing moisture and CO2 to condense and be separated. It is an important stage for initial moisture and CO2 removal, contributing to overall air purity before finer purification.This equipment will improve the efficiency of the Molecular Sieve Battery and longevity of the Molecular Sieves. Spares such as compressor parts, valves, and thermostats are available.

                    </p>
                </div>

                <div className="text-sm text-catalog-text space-y-1 max-w-[50%]">
                    {/* <p>
                        <span className="font-medium">A.</span> Kirloskar LKG Khapha Compressor: 2HA2TB, 4HA4RI5, 4HA4T8, 4HA4Q, 4HP4Q, 4HB4RI5.
                    </p>
                    <p>
                        <span className="font-medium">B.</span> IR Compressor: 10"x6"x4.75"x2.375"x7"HE4, 12"x7"x4.5"x4"x7"HE4LUB, 16"x10"x6.5"x6"x8"HE4LUB,
                        A54180, A54225, A54245, A54270, A54300.
                    </p> */}
                </div>
            </div>

            {/* Spares Section */}
            <div className="space-y-6 z-1">
                <h2 className="text-xl font-bold text-catalog-header">
                    SPARES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {spareParts.map((part) => (
                        <SparePart
                            key={part.number}
                            number={part.number}
                            title={part.title}
                            imageSrc={part.imageSrc}
                        />
                    ))}
                </div>
            </div>
            <div
                className="absolute top-[-200px] left-[-100px] w-[2500px] h-[2500px] bg-no-repeat bg-contain pointer-events-none z-0 opacity-40"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
        </div>
    );
};

export default ChillingTank;