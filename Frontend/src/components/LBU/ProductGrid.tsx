import React from "react";

const categories = [
  {
    title: "Cryogenic Storage & Transfer Equipments",
    description:
      "Vacuum jacketed piping, valves, and vessels for transferring liquified gases efficiently and safely.",
  },
  {
    title: "Compression & Pumping",
    description:
      "Pump seals, bearings and related accessories to ensure leak-proof operations in extreme cryogenic conditions.",
  },
  {
    title: "Instrumentation Controls",
    description:
      "Precise instruments for monitoring key plant metrics such as pressure, temperature, and flow.",
  },
  {
    title: "Safety Equipments",
    description:
      "Burst discs, safety relief valves and other critical safety components built to high standards.",
  },
  {
    title: "Filling & Bottling",
    description:
      "Flexible pipelines and dedicated fittings for high-pressure gas transfer and cylinder filling.",
  },
  {
    title: "Vapourisation Spares",
    description:
      "Fins, tubes, and other spares that support vaporizer efficiency and reduce downtime.",
  },
];

const parts = [
  { label: "Vacuum Insulated Pipelines", image: "/LBU/pipeline.png" },
  { label: "Cryogenic Valves", image: "/LBU/valves.png" },
  { label: "Pump Seals & Bearings", image: "/LBU/pump-seals.png" },
  { label: "Pressure Gauges", image: "/LBU/gauges.png" },
  { label: "Temperature Switches", image: "/LBU/temp-switch.png" },
  { label: "Temperature Sensors", image: "/LBU/temp-sensor-1.png" },
  { label: "Temperature Sensors", image: "/LBU/temp-sensor-2.png" },
  { label: "Safety Relief Valves", image: "/LBU/relief-valves.png" },
  { label: "Bursting Discs", image: "/LBU/discs.png" },
  { label: "Cryogenic Gaskets and Seals", image: "/LBU/gaskets.png" },
  { label: "Check Valves and NRVs", image: "/LBU/nrvs.png" },
  { label: "Vaporiser Fins and Tubes", image: "/LBU/vapour-fins.png" },
];

const SparePartsGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10">
      {/* Left column - Category descriptions */}
      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-sky-800">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-700">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Right section - Grid of parts (2 columns in large view) */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {parts.map((part, index) => (
          <div
            key={index}
            className="bg-sky-100 rounded-xl p-4 flex flex-col items-center text-center shadow hover:shadow-md transition duration-300"
          >
            <img
              src={part.image}
              alt={part.label}
              className="h-24 object-contain mb-4"
            />
            <p className="text-sm font-medium text-sky-900">{part.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SparePartsGrid;
