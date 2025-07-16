import React from "react";

const productData = [
  {
    title: "Cryogenic Storage Tanks",
    description:
      "These tanks are key components of Liquid Bottling Stations. Designed to hold cryogenic gases at extremely low temperatures such as Argon, Nitrogen, and Oxygen, they ensure safe and efficient long-term storage. These vessels are available in horizontal or vertical configurations with capacities ranging from 1 KL to 60 KL. Made with high-vacuum multi-layer insulation for minimal heat transfer, they’re manufactured per ASME/EN 13458/AD 2000 standards. With pressure ratings up to 37 Bar (g), these tanks are skid-mounted and customizable, and are a critical part of the system.",
    image: "/LBU/LBU1.png", // Adjust path as needed
  },
  {
    title: "Ambient Liquid Vapourizer",
    description:
      "These are key components to gasify the liquid from our LOX/Nitrogen storage tanks using natural convection. These fin-type aluminum vaporizers have high thermal efficiency, and come in sizes from 500 Nm³/hr to 10,000 Nm³/hr. Their design eliminates the need for electricity or fuel-based heating, supporting a clean and cost-effective mode of vaporization.",
    image: "/LBU/LBU2.png",
  },
  {
    title: "Liquid Oxygen/ Nitrogen Pumps",
    description:
      "These are a major component of the Liquid Bottling Station Plant. Their role is to pressurize the cryogenic fluid before it's vaporized and filled in gas cylinders. CRYO CORP provides high-efficiency piston-type pumps used in both cylinder filling and gas transfer operations. Available in multiple flow & pressure ratings, they are built to precise specifications and come with PLC-controlled automation.",
    image: "/LBU/LBU3.png",
  },
];

const LiquidProductsSection: React.FC = () => {
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto space-y-20">
      {productData.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-64 object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {product.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      ))}

      {/* Footer Note */}
      <div className="text-xs text-gray-600 text-center border-t pt-8">
        At Cryo Corp, we take pride in supporting liquid bottling gas plant owners with a comprehensive range of high-performance system components. Whether upgrading, expanding, or starting fresh — our tailored solutions offer long-term value. With strict quality standards like ASME and EN 13458, our team ensures reliability, efficiency, and safety — all designed to maximize performance and uptime for oxygen, nitrogen, argon, CO₂, dry air, and more.
      </div>
    </section>
  );
};

export default LiquidProductsSection;
