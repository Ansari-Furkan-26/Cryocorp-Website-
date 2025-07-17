import React from "react";

const Founders = () => {
  return (
    <div className="bg-[#1A365E] relative pt-20 overflow-hidden">
        <div className="absolute md:block md:h-[800px] w-[600px]">
            <img src="/about/founder-bg2.png" alt="" className="h-full w-full opacity-60"/>
        </div>
        <div className="absolute bottom-0 right-0 md:block md:h-[800px] w-[600px] ">
            <img src="/about/founder-bg.png" alt="" className="h-full w-full opacity-60"/>
        </div>
      <div className="min-h-[1800px] md:min-h-[1800px] min-h-auto text-white flex flex-col items-center px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col text-center md:text-left">
            <div className="text-[40px] md:text-[60px] font-semibold">Meet</div>
            <div className="text-[40px] md:text-[60px] font-semibold">The Founders</div>
          </div>
        </div>
        
        {/* First Founder - Ashish Goyal */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-40 p-5 w-full">
          <div className="w-full md:w-1/2 relative flex justify-center md:block">
            <img
              src="/about/founder1.png"
              alt=""
              className="md:absolute md:top-[-150px] h-[250px] md:h-[500px] z-1 relative top-0"
            />
            <div className="hidden md:block md:absolute md:bottom-[-290px] md:left-[70px] text-center mt-4 md:mt-0 relative bottom-0 left-0">
              <img src="/about/quote2.png" alt="" className="relative z-2 mx-auto md:mx-0" />
              <div className="md:absolute md:top-5 text-black p-4 md:p-10 text-[12px] md:text-[14px] italic z-3 relative top-0 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none mt-2 md:mt-0">
                "Leading CryoCorp, I want to be your trusted partner, providing end-to-end solutions that keep your plants running efficiently. My focus is on understanding exact needs of the clients, eliminating plant downtime and boosting profits by delivering reliable products and responsive technical support."
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="text-[24px] md:text-[32px] font-semibold text-center md:text-left">Ashish Goyal</div>
            <div className="text-[16px] md:text-[20px] mb-4 text-center md:text-left">Managing Director</div>
            <div className="w-full md:w-[80%] opacity-70 text-center md:text-left px-4 md:px-0">
              Leads the company with over 28 years of experience in the
              industrial gas sector. A graduate in Engineering from Mumbai
              University's Shah and Anchor Kutchi College of Engineering, he
              also holds a Post Graduate Diploma in Export-Import Management
              from NMIMS University, Mumbai. His strong technical foundation
              supports his experience in providing end-to-end solutions to
              clients for industrial gas machinery. He is known as the go-to
              person for end-to-end solutions, driving our vision to be a global
              leader in Gas engineering. His leadership ensures we deliver
              high-quality, reliable, and customized solutions worldwide,
              embodying our core values.
            </div>
          </div>
        </div>

        {/* Second Founder - Dr. Jaya Goyal */}
        <div className="flex flex-col-reverse md:flex-row mt-20 md:mt-80 p-5 w-full">
          <div className="w-full md:w-1/2 items-end mt-8 md:mt-0">
            <div className="text-[24px] md:text-[32px] font-semibold text-center md:text-left md:ml-[500px]">Dr. Jaya Goyal</div>
            <div className="text-[16px] md:text-[20px] mb-4 text-center md:text-left md:ml-[500px]">Managing Partner</div>
            <div className="w-full md:w-[80%] opacity-70 text-center md:text-left px-4 md:px-0 md:ml-[100px]">
              Leads the company with over 28 years of experience in the
              industrial gas sector. A graduate in Engineering from Mumbai
              University's Shah and Anchor Kutchi College of Engineering, he
              also holds a Post Graduate Diploma in Export-Import Management
              from NMIMS University, Mumbai. His strong technical foundation
              supports his experience in providing end-to-end solutions to
              clients for industrial gas machinery. He is known as the go-to
              person for end-to-end solutions, driving our vision to be a global
              leader in Gas engineering. His leadership ensures we deliver
              high-quality, reliable, and customized solutions worldwide,
              embodying our core values.
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center md:block">
            <img
              src="/about/founder2.png"
              alt=""
              className="md:absolute md:top-[-150px] md:right-[200px] h-[300px] md:h-[500px] relative top-0 right-0"
            />
            <div className="hidden md:block md:absolute md:bottom-[-370px] md:left-[-150px] text-center mt-4 md:mt-0 relative bottom-0 left-0">
              <img src="/about/quote1.png" alt="" className="relative mx-auto md:mx-0" />
              <div className="md:absolute md:top-5 text-black p-4 md:p-10 text-[12px] md:text-[14px] italic relative top-0 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none mt-2 md:mt-0">
                "Leading CryoCorp, I want to be your trusted partner, providing end-to-end solutions that keep your plants running efficiently. My focus is on understanding exact needs of the clients, eliminating plant downtime and boosting profits by delivering reliable products and responsive technical support."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;