import { Card } from "@/components/ui/card";

const SpareCard = ({ imageSrc, number }: { imageSrc?: string, number: string }) => (
    <Card className="p-4 bg-[#EDEDED] border-catalog-card-border h-64 flex items-center justify-center relative">
        <div className="absolute top-0 left-2">0{number}.</div>
        {imageSrc ? (
            <img
                src={imageSrc}
                alt="Spare part"
                className="max-h-full max-w-full object-contain p-4"
            />
        ) : (
            <div className="text-gray-400 text-xs text-center">Image Placeholder</div>
        )}
    </Card>
);

const TitleCard = ({ titles, number }: { titles: string[], number: string[] }) => (
    <Card className="p-4 bg-white border-catalog-card-border h-64 flex items-end justify-start">
        <div className="text-sm text-catalog-text space-y-1 uppercase tracking-wide">
            {titles.map((title, index) => (
                <p key={index}>
                    <span className="font-semibold">
                        {number[index]}
                    </span>{" "}
                    {title}
                </p>
            ))}
        </div>
    </Card>
);

const LevelThreeAccessories = () => {
    return (
        <div className="w-full bg-background px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-12 mt-20">
            {/* Header */}
            <div className="w-full flex justify-center mb-10">
            <div className="mb-10 w-[50%] pl-4 border-l-[2px] border-gray-400 flex flex-col justify-between gap-20">
                <p className="text-sm opacity-70 text-catalog-text leading-relaxed max-w-[90%]">
                    At Cryo Corp, we offer a wide selection of essential accessories and ancillary components
                    for ASUs and Liquid Bottling Plants for Oxygen, Nitrogen, Argon, and Acetylene gases.
                    We supply everything from industrial cylinders, cylinder valves, and valve guards to advanced
                    on-line analysers, cooling towers, electrical panels, and portable cryogenic tanks.
                    Our products are designed to enhance plant safety, efficiency, and reliability,
                    ensuring seamless operations for your facility.
                </p>
                <h1 className="text-lg font-bold text-catalog-header mb-4 opacity-70">LEVEL 3</h1>
            </div>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {/* Row 1 */}
                <SpareCard imageSrc="/level3/1.png" number={"1"}/>
                <SpareCard imageSrc="/level3/2.png" number={"2"}/>
                <TitleCard titles={["INDUSTRIAL CYLINDERS", "VALVE GUARD", "CYLINDER VALVES"]} number={["01.", "02.","03."]}/>
                <SpareCard imageSrc="/level3/3.png" number={"3"}/>

                {/* Row 2 */}
                <SpareCard imageSrc="/level3/4.png" number={"4"}/>
                <TitleCard titles={["ON-LINE ANALYSERS", "CYLINDER TESTING", "COOLING TOWERS"]} number={["04.", "05.","06."]}/>
                <SpareCard imageSrc="/level3/5.png" number={"5"} />
                <SpareCard imageSrc="/level3/6.png" number={"6"} />

                {/* Row 3 */}
                <TitleCard titles={["ELECTRICAL PANEL", "PORTA CRYO", "LIQUID OXYGEN & NITROGEN TANKS"]} number={["07.", "08.","09."]}/>
                <SpareCard imageSrc="/level3/8.png" number={"7"} />
                <SpareCard imageSrc="/level3/7.png" number={"8"} />
                <SpareCard imageSrc="/level3/9.png" number={"9"} />
            </div>
        </div>
    );
};

export default LevelThreeAccessories;
