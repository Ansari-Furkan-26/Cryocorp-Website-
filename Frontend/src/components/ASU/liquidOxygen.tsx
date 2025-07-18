import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
    customCss?:string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow z-10">
        <div className="space-y-3">
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
                        className={`h-full w-full object-contain ${customCss}`}
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

const LiquidOxygen = () => {
    const spareParts = [
        { number: "01", title: "s.s.liner", imageSrc: "liquidOxygen/1.png" },
        { number: "02", title: "s.s.piston", imageSrc: "liquidOxygen/2.png" },
        { number: "03", title: "brass gland nut & cylinder head nut", imageSrc: "liquidOxygen/3.png" },
        { number: "04", title: "piston rings with guide", imageSrc: "liquidOxygen/4.png" },
        { number: "05", title: "non-return valves", imageSrc: "liquidOxygen/5.png" },
        { number: "06", title: "gland packing", imageSrc: "liquidOxygen/6.png" },
        { number: "07", title: "oil wiper rings", imageSrc: "liquidOxygen/7.png" },
        { number: "08", title: "coldend assembly", imageSrc: "liquidOxygen/8.png" },
        { number: "09", title: "cross head", imageSrc: "liquidOxygen/9.png", customCss:"mt-24" },
        { number: "10", title: "connecting rod with crank shaft", imageSrc: "liquidOxygen/10.png" },
        { number: "11", title: "crank shaft", imageSrc: "liquidOxygen/11.png" }
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    09.<br />
                    Liquid Oxygen Pump & Liquid Nitrogen Pump
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                       These pumps are typically the final stage within the Air Separation Unit, responsible for transferring liquid oxygen or nitrogen from storage. The Liquid Oxygen Pump, for instance, pumps liquid oxygen for gasification and filling into cylinders at high pressure. Liquid Oxygen Horizontal single acting pump with Piston, Pump Piston Ring, Safety Devices, Non-return Valves ,Motor with pulley , V-Belts, Belt Guard, Inter Connecting pipes with A.S.U suitable for filling oxygen / Nitrogen. CryoCorp manufactures Liquid Oxygen Pumps and Liquid Nitrogen Pumps under its own brand, in-house at our faciltiy in Vasai. Various spare parts of the pumps such as liners, pistons, rings, valves, and seals, are readily available in-stock to maintain pump's performance.
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
            <div className="space-y-6">
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
                            customCss={part?.customCss}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiquidOxygen;