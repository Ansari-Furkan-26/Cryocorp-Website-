import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
    customCss?:string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow z-10">
        <div className="space-y-6 z-10">
            <div>
            <div className="text-sm font-medium text-catalog-number md:text-xl md:font-bold text-[#BDBDBD]">
                {number}.
            </div>
            <div className="text-sm font-medium text-catalog-text uppercase tracking-wide md:text-xl md:font-bold text-[#BDBDBD] max-w-[90%]">
                {title}
            </div>
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

const FRP = () => {
    const spareParts = [
        { number: "01", title: "PVC FILLS", imageSrc: "frp/1.png", customCss:"mt-24" },
        { number: "02", title: "SPRINKER FOR COCLING TANK", imageSrc: "frp/2.png" },
        { number: "03", title: "COOLING TOWER TANK", imageSrc: "frp/3.png" },
        { number: "04", title: "COOLING TOWER MOTOR", imageSrc: "frp/4.png" },
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    04.<br />
                    FRP COOLING TOWER
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                       This component is part of the plant's cooling system, helping to cool water used to lower the temperature of process air. Efficient cooling is vital for the performance of earlier stages like the Cascade Cooler. Essential spares like fills, sprinklers, and fans are available.
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
                            customCss={part.customCss}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FRP;