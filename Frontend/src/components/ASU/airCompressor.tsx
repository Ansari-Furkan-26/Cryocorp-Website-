import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
    customCss?:string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow">
        <div className="space-y-0">
            <div className="text-sm font-medium text-catalog-number md:text-xl md:font-bold text-[#BDBDBD]">
                {number}.
            </div>
            <div className="text-sm font-medium text-catalog-text uppercase tracking-wide md:text-xl md:font-bold text-[#BDBDBD] max-w-[90%]">
                {title}
            </div>
            <div className={`h-64 bg-[#EDEDED] rounded-md flex items-center justify-center `}>
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

const AirCompressorCatalog = () => {
    const spareParts = [
        { number: "01", title: "SUCTION FILTER", imageSrc: "AirCompressor/suctionFilter.png", customCss:"" },
        { number: "02", title: "SUCTION & DISCHARGE VALVE", imageSrc: "AirCompressor/suction.png",customCss:"h-[200px] object-cover pr-10" },
        { number: "03", title: "GASKETS", imageSrc: "AirCompressor/gaskets.png",customCss:"" },
        { number: "04", title: "TUBE BUNDLES", imageSrc: "AirCompressor/tube.png",customCss:"rotate-45" },
        { number: "05", title: "DRAIN VALVE", imageSrc: "AirCompressor/drain.png",customCss:"" },
        { number: "06", title: "PISTON RINGS", imageSrc: "AirCompressor/piston.png",customCss:"" },
        { number: "07", title: "GLAND PACKING", imageSrc: "AirCompressor/gland.png",customCss:"" },
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-32">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    01.<br />
                    AIR COMPRESSOR (KIRLOSKAR / INGERSOLL RAND / Booster Compressor)
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                        As the first primary source, the air compressor draws in and compresses atmospheric air to the
                        required pressure for the entire process. Its reliable operation is fundamental to the plant's production
                        cycle and overall performance. A wide range of spare parts are available for various makes, including
                        filters, gaskets, valves, and piston components. We deal in various brands of compressors:
                    </p>
                </div>

                <div className="text-sm text-catalog-text space-y-1 sm:max-w-[50%]">
                    <p>
                        <span className="font-medium">A.</span> Kirloskar LKG Khapha Compressor: 2HA2TB, 4HA4RI5, 4HA4T8, 4HA4Q, 4HP4Q, 4HB4RI5.
                    </p>
                    <p>
                        <span className="font-medium">B.</span> IR Compressor: 10"x6"x4.75"x2.375"x7"HE4, 12"x7"x4.5"x4"x7"HE4LUB, 16"x10"x6.5"x6"x8"HE4LUB,
                        A54180, A54225, A54245, A54270, A54300.
                    </p>
                </div>
            </div>

            {/* Spares Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-catalog-header text-[#797979]">
                    SPARES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default AirCompressorCatalog;