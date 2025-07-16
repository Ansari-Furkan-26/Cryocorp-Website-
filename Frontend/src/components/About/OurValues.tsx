import React from 'react';

const values = [
  {
    title: 'Make It Happen',
    description:
      'We proactively take responsibility and collaborate to solve challenges and deliver agreed outcomes.',
    icon: '/about/icon1.png', 
  },
  {
    title: 'Win-Win for All',
    description:
      'Acting responsibly, prioritizing every stakeholder for collaborative value and fair treatment.',
    icon: '/about/icon2.png',
  },
  {
    title: 'Expert & Inclusive',
    description:
      'We leverage collective expertise through open communication and teamwork, striving to be experts in our domains.',
    icon: '/about/icon3.png',
  },
  {
    title: 'Integrity',
    description:
      'Our most valued behaviour means upholding ethical standards, safeguarding assets, and being transparent and trustworthy in all dealings.',
    icon: '/about/icon4.png',
  },
];

const OurValues = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left Section */}
        <div className="self-center">
          <h2 className="text-6xl font-bold text-[#5FC9D8] leading-tight mb-4">Our <br /> Values</h2>
          <p className="text-[#3C8089] text-base max-w-md">
            At CryoCorp, we value the core principles that drive every solution we build and every relationship we nurture.
          </p>
        </div>

        {/* Right Section: Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-[#E5E5E5] rounded-xl p-6 flex flex-col justify-between hover:bg-[#385d68] transition duration-300 h-[300px]"
            >
              {/* Icon */}
              <div className="text-3xl text-[#47C6E6] mb-4 group-hover:text-white">
                <img src={item.icon} alt="" />
              </div>

              {/* Description */}
              <div>
              <p className="text-sm text-gray-700 group-hover:text-white mb-1">
                {item.description}
              </p>

              {/* Title */}
              <h4 className="text-base font-semibold text-gray-900 group-hover:text-white border-t-2 border-[#47C6E6] pt-2 group-hover:border-white">
                {item.title}
              </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
