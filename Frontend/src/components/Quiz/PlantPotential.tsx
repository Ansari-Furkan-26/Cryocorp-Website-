import React from "react";

const PlantPotential = () => {
  return (
    <div className="bg-white px-6 py-12 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        DISCOVER YOUR <span className="text-red-600">TRUE PLANT POTENTIAL</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Knowing how your plant is currently performing and what steps you
            can take to optimize it can be a game-changer. This quick diagnostic
            tool helps you assess where you stand and how to enhance uptime,
            purity, and cost-efficiency. Find out today with our fast and free
            assessment too.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            TAKE THE QUIZ
          </button>
        </div>

        {/* Right Section - Images */}
       <div className="lg:w-full grid grid-cols-2 gap-4 max-h-[400px] overflow-hidden">
  {/* Left image - tall image */}
  <div className="overflow-hidden h-[500px] bg-gray-300">
    <img src="/about/first.jpg" alt="Main Plant" className="object-cover w-full h-full" />
  </div>

  {/* Right stacked images */}
  <div className="grid grid-rows-2 gap-4 h-full">
    <div className="overflow-hidden mt-[-20px] h-full">
      <img src="/about/second.jpg" alt="Engineer Operating Tank" className="object-cover w-full h-[90%]" />
    </div>
    <div className="overflow-hidden mt-[-40px] h-full bg-gray-300">
      <img src="/about/third.jpg" alt="Engineer in Industrial Area" className="object-cover w-full h-[90%]" />
    </div>
  </div>
</div>


      </div>

      {/* Bottom Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Optimize */}
        <div>
          <div className="text-3xl mb-4">
            <span role="img" aria-label="gear">⚙️</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">OPTIMIZE</h3>
          <p className="text-sm text-gray-600">
            Pinpoint Bottlenecks And Fine-Tune Operations For Maximum Efficiency.
          </p>
        </div>

        {/* Improve */}
        <div>
          <div className="text-3xl mb-4">
            <span role="img" aria-label="chart">📈</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">IMPROVE</h3>
          <p className="text-sm text-gray-600">
            Identify Quick Wins And Long-Term Upgrades For Better Performance.
          </p>
        </div>

        {/* Monitor */}
        <div>
          <div className="text-3xl mb-4">
            <span role="img" aria-label="monitor">📊</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">MONITOR</h3>
          <p className="text-sm text-gray-600">
            Unlock Real-Time Insights To Proactively Manage Purity And Power Use.
          </p>
        </div>

        {/* Scale */}
        <div>
          <div className="text-3xl mb-4">
            <span role="img" aria-label="scale">🏗️</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">SCALE</h3>
          <p className="text-sm text-gray-600">
            Plan Confidently For Plant Expansion Or Capacity Upgrades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantPotential;
