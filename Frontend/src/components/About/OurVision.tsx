import React from 'react';

const OurVision = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 py-12 gap-10 bg-white">
      {/* Left text */}
      <div className="max-w-md text-[#36695C] text-base leading-relaxed font-medium text-[28px]">
        <p>
          To be recognised as India’s foremost company, and a global provider of comprehensive, end-to-end oxygen plant
          solutions — driven by advanced manufacturing, systematic data, and strong organisational values.
        </p>
      </div>

      {/* Right section */}
      <div className="flex flex-col items-end max-w-md">
        <p className="text-[20px] text-gray-400 leading-snug mb-2">
          Our vision reflects where we’re headed — a future where 
            Indian excellence leads global innovation in oxygen
            solutions, guided by purpose, precision, and progress.
        </p>
        <h2 style={{ WebkitTextStroke: '1px #2b4d3f' }} className="text-[120px] font-bold text-[#5AA288] drop-shadow-sm leading-tight flex flex-col items-end">
          <span>Our </span><span>Vision</span>
        </h2>
      </div>
    </div>
  );
};

export default OurVision;
