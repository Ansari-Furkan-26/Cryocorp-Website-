import React from 'react';
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full bg-background ">
      {/* Let's Grow Together Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

        {/* Column 1 */}
        <div className="bg-white p-8 text-foreground h-full">
          <h2 className="text-2xl font-bold mb-6">LET'S GROW TOGETHER</h2>
          <p className="text-sm mb-4 leading-relaxed">
            Have questions about our industrial gas solutions, products, or services?
          </p>
          <p className="text-sm mb-4 leading-relaxed">
            We would love to hear from you and discuss.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Reach out to us.</h3>
            <p className="text-sm leading-relaxed">
              We believe in building lasting relationships with our clients!
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Send Us a Message</h3>
            <p className="text-sm leading-relaxed">
              Fill out the form and we will get back to you shortly.
            </p>
            <p className="text-sm leading-relaxed">
              This requirement gets connected to our backend CRM inquiry collection system.
            </p>
          </div>

          <Button
            variant="outline"
            className="border-2 border-foreground text-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Click here
          </Button>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Business Hours:</h3>
            <p className="text-sm">Monday – Saturday: 09:30 AM to 6:00 PM IST</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-white p-8 text-foreground h-full">
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <p>General Inquiries: Hindi and English Voice ChatBot buttons</p>

            <div>
              <p className="font-medium">Technical Help: Mr. Ashish Goyal.</p>
              <p>WhatsApp For Business: +91 7710049939,</p>
              <p>Mr. Ashish Goyal can also be reached via WhatsApp at +91 9004759939</p>
            </div>

            <div>
              <p><span className="font-medium">Email:</span> Dispatch or Quotation Inquiries: crm@cryocorp.in</p>
            </div>

            <div>
              <p><span className="font-medium">Sales & General Inquiries:</span> admin@cryocorp.co.in</p>
            </div>

            <div>
              <p><span className="font-medium">Technical Support:</span> ashish@cryocorp.in</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Full Image CTA */}
        <div className="relative overflow-hidden h-full min-h-[600px]">
          <div className="absolute inset-0">
            <img
              src="/images/cta-bg.png"
              alt="Industrial team meeting"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 to-blue-600/80"></div> */}
          </div>

          <div className="relative z-10 p-8 text-white text-center h-full flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-sm mb-2">You can also schedule a meeting</p>
              <p className="text-sm mb-6">appointment at your convenience using our online calendar.</p>
            </div>

            <h3 className="text-lg font-semibold mb-6">Get in touch with our team today!</h3>

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
