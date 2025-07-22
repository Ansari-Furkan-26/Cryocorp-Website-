import React from "react";

const WhoAreYou: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-20 font-sans text-[#1A365E] mt-20 md:mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
      
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Buttons Section */}
          <div className="flex flex-col gap-4 col-span-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">WHO ARE YOU?</h2>
            <button onClick={() => window.open('/quiz/NewPlant.html', '_blank')} className="bg-[#0A2A45] text-white py-4 px-6 rounded-lg text-center text-sm font-semibold hover:bg-opacity-90 transition">
              CONFUSED ABOUT WHICH GAS PLANT TO PICK FOR YOUR BUSINESS
            </button>
            <button className="bg-[#0A2A45] text-white py-4 px-6 rounded-lg text-center text-sm font-semibold hover:bg-opacity-90 transition">
              <a href="#quiz">ALREADY OWNS A GAS PLANT</a>
            </button>
          </div>

          {/* Image 1 Placeholder */}
          <div className="w-full h-[300px] overflow-hidden bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-sm">
            {/* Replace with actual image */}
            <img src="/about/quiz1.jpg" alt="" className=""/>
          </div>

          {/* Image 2 Placeholder */}
          <div className="w-full h-[300px] overflow-hidden bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-sm">
            {/* Replace with actual image */}
            <img src="/about/first.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreYou;
