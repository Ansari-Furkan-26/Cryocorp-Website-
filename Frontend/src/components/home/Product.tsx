import React from 'react';

const ProductHighlight = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img
              src="/image2.jpg"
              alt="Industrial Gas Solutions"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 space-y-6 px-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              End-to-End Industrial Gas Plant Solutions
            </h2>
            
            <p className="md:text-lg text-gray-600">
              At Cryo Corp, we deliver comprehensive solutions for industrial gas plant owners, specializing in ASU, Oxygen, Nitrogen, and Acetylene systems. We offer end-to-end services, from expert plant installation and commissioning to annual maintenance contracts, refurbishment, and upgradation.
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Installation, commissioning, and relocation for ASU, PSA & acetylene plants</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Annual maintenance contracts and emergency troubleshooting</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Refurbishment, system upgradation, operator training & safety consultancy</span>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="https://www.appsheet.com/start/aa652aa4-fbf5-4527-a453-574efcd9aa28" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Explore Our Services
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
