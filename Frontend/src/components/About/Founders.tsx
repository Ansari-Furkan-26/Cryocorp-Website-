import React from "react";

const Founders = () => {
  return (
    <div className="bg-[#1A365E] relative pt-20 overflow-hidden">
        <div className="absolute">
            <img src="/about/founder-bg2.png" alt="" className="h-[800px]"/>
        </div>
        <div className="absolute bottom-0 right-0">
            <img src="/about/founder-bg.png" alt="" className="h-[800px]"/>
        </div>
      <div className="min-h-[1800px] text-white flex flex-col items-center">
        <div className="w-1/2">
          <div className="flex flex-col ">
            <div className="text-[60px] font-semibold">Meet</div>
            <div className="text-[60px] font-semibold">The Founders</div>
          </div>
        </div>
        <div className="flex mt-40 p-5">
          <div className="w-1/2 relative">
            <img
              src="/about/founder1.png"
              alt=""
              className="absolute top-[-150px] h-[500px] z-1"
            />
            <div className="absolute bottom-[-290px] left-[70px] text-center">
              <img src="/about/quote2.png" alt="" className="relative z-2" />
              <div className="absolute top-5 text-black p-10 text-[14px] italic z-3">"Leading CryoCorp, I want to be your trusted partner, providing end-to-end solutions that keep your plants running efficiently. My focus is on understanding exact needs of the clients, eliminating plant downtime and boosting profits by delivering reliable products and responsive technical support.”</div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-[32px] font-semibold">Ashish Goyal</div>
            <div className="text-[20px] mb-4">Managing Director</div>
            <div className="w-[80%] opacity-70">
              Leads the company with over 28 years of experience in the
              industrial gas sector. A graduate in Engineering from Mumbai
              University's Shah and Anchor Kutchi College of Engineering, he
              also holds a Post Graduate Diploma in Export-Import Management
              from NMIMS University, Mumbai. His strong techncial foundation
              supports his experience in providing end-to-end solutions to
              clients for industrial gas machinery. He is known as the go-to
              person for end-to-end solutions, driving our vision to be a global
              leader in Gas engineering. His leadership ensures we deliver
              high-quality, reliable, and customized solutions worldwide,
              embodying our core values.
            </div>
          </div>
        </div>

        <div className="flex mt-80 p-5">
          
          <div className="w-1/2 items-end">
            <div className="text-[32px] font-semibold ml-[500px]">Dr. Jaya Goyal</div>
            <div className="text-[20px] mb-4 ml-[500px]">Managing Partner</div>
            <div className="w-[80%] opacity-70 ml-[100px]">
              Leads the company with over 28 years of experience in the
              industrial gas sector. A graduate in Engineering from Mumbai
              University's Shah and Anchor Kutchi College of Engineering, he
              also holds a Post Graduate Diploma in Export-Import Management
              from NMIMS University, Mumbai. His strong techncial foundation
              supports his experience in providing end-to-end solutions to
              clients for industrial gas machinery. He is known as the go-to
              person for end-to-end solutions, driving our vision to be a global
              leader in Gas engineering. His leadership ensures we deliver
              high-quality, reliable, and customized solutions worldwide,
              embodying our core values.
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src="/about/founder2.png"
              alt=""
              className="absolute top-[-150px] right-[200px] h-[500px]"
            />
            <div className="absolute bottom-[-370px] left-[-150px] text-center">
              <img src="/about/quote1.png" alt="" className="relative" />
              <div className="absolute top-5 text-black p-10 text-[14px] italic">"Leading CryoCorp, I want to be your trusted partner, providing end-to-end solutions that keep your plants running efficiently. My focus is on understanding exact needs of the clients, eliminating plant downtime and boosting profits by delivering reliable products and responsive technical support.”</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
