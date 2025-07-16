import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
}

const SparePart = ({ number, title, imageSrc }: SparePartProps) => (
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

const Expansion = () => {
    const spareParts = [
        { number: "01", title: "cylinder head.With allo steel liners and ss piston", imageSrc: "expansion/1.png" },
        { number: "02", title: "ball valve assembly with it compnents", imageSrc: "expansion/2.png" },
        { number: "03", title: "teflon piston rings with tension rings", imageSrc: "expansion/3.png" },
        { number: "04", title: "valve block & its integral parts", imageSrc: "expansion/4.png" },
        { number: "05", title: "push pump and its intergrall parts", imageSrc: "expansion/5.png" },
        { number: "06", title: "solenoid valve with magneto coil", imageSrc: "expansion/6.png" },
        { number: "07", title: "puppet valves with its supporting accessoroes", imageSrc: "expansion/7.png" },
        { number: "08", title: "cranshaft assembly with conneting rod and beraings", imageSrc: "expansion/8.png" }
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    08.<br />
                    Expansion Engine
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="max-w-[50%]">
                       Located before the Air Separation Unit, is a vertical single acting, dry running with hydraulic valve control , bursting disc for safety, complete with Flywheel ,Pressure Gauges, Motor, Motor Pulley, VBelts, Belt Guard, Slide Rails, Inter Connecting Copper Pipes (Inlet & outlet with A.S.U) including motors & starters. This engine plays a critical role in cooling the  air by expanding it, causing a significant temperature drop to around -150°C. This chilling effect provides the low temperatures necessary for the air separation process. Expansion Engine has important spares like cylinder heads, pistons, valves, and bearings are readily available, in-stock, to ensure its efficient operation and optimize plant production. CryoCorp manufactures Expansion Engines under its own brand, in-house at our faciltiy in Vasai.
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Expansion;