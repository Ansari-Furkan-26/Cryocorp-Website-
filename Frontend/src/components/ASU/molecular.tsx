import { Card } from "@/components/ui/card";

interface SparePartProps {
    number: string;
    title: string;
    imageSrc?: string;
    customCss?: string;
}

const SparePart = ({ number, title, imageSrc, customCss }: SparePartProps) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border hover:shadow-md transition-shadow">
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

const Molecular = () => {
    const spareParts = [
        { number: "01", title: "NITROGEN INLET & OUTLET VALVES", imageSrc: "molecular/1.png" },
        { number: "02", title: "MOLECULAR SIEVE & ACTIVATED ALUMINA", imageSrc: "molecular/2.png" },
        { number: "03", title: "NEEDLE VALVES FOR PRESSURIZING & DE-PRESSURIZING LINES", imageSrc: "molecular/3.png" },
        { number: "04", title: "ELECTRIC HEATING ELEMENT FOR BATTERY HEATERS", imageSrc: "molecular/4.png", customCss:"rotate-[35deg]" },
        { number: "05", title: "TERMINALS FOR BATTERY HEATER", imageSrc: "molecular/5.png" },
        { number: "06", title: "TEMPERATURE INDICATOR WITH RTD THERMOCOUPLE", imageSrc: "molecular/6.png" }
    ];

    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-lg font-bold text-catalog-header mb-4">
                    06.<br />
                    Molecular Sieve Battery
                </h1>

                <div className="text-sm text-catalog-text leading-relaxed mb-6">
                    <p className="sm:max-w-[50%]">
                        Positioned after the Chilling Unit, this battery is crucial for removing remaining moisture and CO2 from the air. It consists of 2 vessels inter-connected with pipeline of Nitrogen and Air Electric Heater for regeneration, Temperature Sensor and Control panel with automatic temperature control. This assist in the removal of moisture, carbon-dioxide, traces of Carbon Monoxide and other hydrocarbons present n the process air. Each vessel of Molecular Battery isfilled with molecular sieve of 1.5/3 mm type 13-X. This is a regenerative type capacity 400m3/hr to 2000 m3/hr and 12 hour regeneration cycle... Its proper functioning is vital to prevent blockages in the Air Separation Column caused by ice or dry ice, thus maintaining purity and preventing plant stoppage. A variety of spare parts, including molecular sieves and various valves, are available.
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
                <h2 className="text-xl font-bold text-catalog-header text-[#797979]">
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

export default Molecular;