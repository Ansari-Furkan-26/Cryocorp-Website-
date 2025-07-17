import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
}

const SparePart = ({ number, title, imageSrc }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow">
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

const DustFilter = () => {
    const spareParts = [
        { number: "01", title: "ACTIVATED CARBON FILTER", imageSrc: "dustFilter/1.png" },
        { number: "02", title: "DUST FILTER", imageSrc: "dustFilter/2.png" },
        { number: "03", title: "ACTIVATED CARBON", imageSrc: "dustFilter/3.png" },
        { number: "04", title: "COMPLETE ASSEMBLY OF DUST & ACTIVATED CARBON FILTER", imageSrc: "dustFilter/4.png" }
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    05.<br />
                    DUST FILTER AND OIL ABSORBER
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                        Situated in the process after the chiiling tank, these units remove dust, oil, and other contaminants from the compressed cool air.  Acticated Carbon oil absorber filter is  made of M.S. capsule shape vessel with activated filter carbon with 2 Nos. sand filters inside. This equipment assists absorption of Hydro carbons in the process air. The Dust Ceramic Filter: -This equipment is made of M.S and in cylindrical in shape. It consists of micro-ceramic filters to avoid entry of dust to the MSB . This purification step is critical for protecting downstream equipment and ensuring the air entering the separation process is clean. Spare parts, including filter elements and carbon, are available. 
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

export default DustFilter;