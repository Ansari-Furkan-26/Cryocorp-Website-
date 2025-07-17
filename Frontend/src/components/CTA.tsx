import React from 'react';
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full bg-background">
      {/* Let's Grow Together Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

        {/* Column 1 */}
        <div className="bg-white p-6 md:p-8 text-foreground h-full border-b md:border-r md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">LET'S GROW TOGETHER</h2>
          <p className="text-sm font-bold md:mb-1 leading-relaxed">
            Have questions about our industrial gas solutions, products, or services?
          </p>
          <p className="text-sm mb-4 leading-relaxed">
            We would love to hear from you and discuss.
          </p>

          <div className="mb-2 md:mb-6">
            <h3 className="font-bold md:mb-1">Reach out to us.</h3>
            <p className="text-sm leading-relaxed">
              We believe in building lasting relationships with our clients!
            </p>
          </div>

          <div className="hidden md:block mb-4">
            <h3 className="font-bold mb-1">Send Us a Message</h3>
            <p className="text-sm leading-relaxed">
              Fill out the form and we will get back to you shortly.
            </p>
            <p className="text-sm leading-relaxed">
              This requirement gets connected to our backend CRM inquiry collection system.
            </p>
          </div>

          <Button variant="outline"
            className="border-2 bg-foreground  text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
            Click here
          </Button>

          
        </div>


        {/* Column 2 */}
        <div className="bg-white p-6 md:p-8 text-foreground h-full md:col-span-2">
          <h3 className="font-bold text-xl">Get in Touch</h3>
          <p className='text-sm mb-4'>General Inquiries: Hindi and English Voice ChatBot buttons</p>

          <div className="space-y-3 text-sm">
            <div>
              <p className="font-bold mb-1 md:mb-3">Technical Help: Mr. Ashish Goyal.</p>
              <p className="break-words">
                WhatsApp For Business:{" "}
                <a
                  href="https://wa.me/917710049939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline">
                  +91 7710049939
                </a>
              </p>
              <p className="break-words">
                Mr. Ashish Goyal can also be reached via WhatsApp at{" "}
                <a
                  href="https://wa.me/919004759939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline">
                  +91 9004759939
                </a>
              </p>
              

            </div>

            <div className='space-y-2 '>
              <p><span className="font-bold">Email:</span> Dispatch or Quotation Inquiries:
                 <a href="mailto:crm@cryocorp.in" className="break-words font-bold text-blue-600 hover:underline"> crm@cryocorp.in</a>
              </p>
              <p><span className="font-bold">Sales & General Inquiries:</span> <span className="break-words">admin@cryocorp.co.in</span></p>
               <p><span className="font-bold">Technical Support:</span> <span className="break-words">ashish@cryocorp.in</span></p>
            </div>

            <div className="mt-2 md:mt-4 ">
            <h3 className=" md:mb-1 font-bold">Business Hours:</h3>
            <p className="text-sm">Monday – Saturday: 09:30 AM to 6:00 PM IST</p>
          </div>

          </div>
        </div>

        {/* Column 3 - Full Image CTA */}
        <div className="relative overflow-hidden h-full min-h-[400px] md:min-h-[500px] lg:min-h-[400px] col-span-1 lg:col-span-1">
          <div className="absolute inset-0">
            <img
              src="/images/cta-bg.png"
              alt="Industrial team meeting"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 to-blue-600/80"></div> */}
          </div>

          <div className="relative z-10 p-6 md:p-8 text-gray-100  text-center h-full flex flex-col justify-center">
            <div className="mb-4">
              <p className="md:text-sm mb-2">You can also schedule a meeting</p>
              <p className="md:text-sm mb-6">appointment at your convenience using our online calendar.</p>
            </div>

            <h3 className="text-lg font-bold mb-6">Get in touch with our team today!</h3>

            <Button className="bg-white/20 backdrop-blur-sm border-4 border-white max-w-[200px] mx-auto text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
              Book a slot
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CTA;