import { Card } from "@/components/ui/card";
import layerImage from '/public/Layer.png';

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

const Oxygen = () => {
    const spareParts = [
        { number: "01", title: "cylindeer valves", imageSrc: "oxygen/1.png" },
        { number: "02", title: "s.s.spindles", imageSrc: "oxygen/2.png" },
        { number: "03", title: "brass bull nose & nuts", imageSrc: "oxygen/3.png" },
        { number: "04", title: "spindle keys", imageSrc: "oxygen/4.png" },
        { number: "05", title: "copper tubes for pig tail connection", imageSrc: "oxygen/5.png", customCss:"rotate-[-90deg]" },
        { number: "06", title: "manifold valves", imageSrc: "oxygen/6.png" },
        { number: "07", title: "pressure gauges", imageSrc: "oxygen/7.png" },
        { number: "08", title: "safety valves", imageSrc: "oxygen/8.png", customCss:"rotate-[90deg]" }
    ];

    return (
        <div className="relative w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    10.<br />
                    Oxygen and Nitrogen Manifold
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                       This component serves as the final stage in the plant process where gaseous oxygen is filled into cylinders. It is essential for the controlled and safe transfer of high-pressure oxygen to cylinders, with spares like valves and gauges ensuring operational reliability. CryoCorp manufactures Oxygen, Nitrogen and Hyrdogen Manifolds under its own brand, in-house at our faciltiy in Vasai. 
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
            <div
                className="absolute top-100 left-0 w-[1800px] h-[1800px] bg-no-repeat bg-contain pointer-events-none opacity-40 rotate-90"
                style={{
                    backgroundImage: `url(${layerImage})`
                }}
            />
        </div>
    );
};

export default Oxygen;