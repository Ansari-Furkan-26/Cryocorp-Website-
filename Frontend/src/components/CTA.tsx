import React from 'react';
import { Button } from "@/components/ui/button";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

function CTA() {
  return (
    <div className="w-full bg-background sm:pl-6 md:pl-20">
      {/* Let's Grow Together Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

        {/* Column 1 */}
        <div className="bg-white p-6 md:p-0 text-foreground h-full border-b md:border-r md:col-span-2">
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
            <h3 className="font-bold mb-1">Leave Us a Message</h3>
            <p className="text-sm leading-relaxed">
              Fill out the form and we will get back to you within 24 hours.
            </p>
          </div>

          <Button variant="outline"
            className="border-2 bg-foreground  text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfW25lcHJaqzTeg97xtwD1a0QWDNvg0o3RfDWFetrnbd0GFSA/viewform" target='_blank'>Click here</a>
          </Button>

          
        </div>


        {/* Column 2 */}
        <div className="bg-white p-6 md:p-8 text-foreground h-full md:col-span-2 rounded-xl shadow-sm">
      <h3 className="font-bold text-2xl mb-4">Get in Touch</h3>

      <div className="space-y-4 text-sm">
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-base font-medium">General Inquiries 24x7:</p>
          <a
            className="flex items-center gap-1 text-blue-700 px-3 py-1 border border-gray-300 hover:text-blue-900 hover:bg-gray-100 rounded-full"
            href="https://agentivehub.com/chat/49559140-605e-458a-ab98-0708f11ddb21"
            target="_blank"
          >
            <FaRobot /> GPT
          </a>
          <a
            className="flex items-center gap-1 text-green-700 px-3 py-1 border border-gray-300 hover:text-green-900 hover:bg-gray-100 rounded-full"
            href="https://api.whatsapp.com/send?phone=917710089939"
            target="_blank"
          >
            <FaWhatsapp /> WhatsApp Chat
          </a>
        </div>

        <div>
          <p className="font-bold mb-2">Technical Help: Mr. Ashish Goyal</p>
          <p className="break-words">
            WhatsApp For Business:&nbsp;
            <a
              href="https://wa.me/917710049939"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              +91 7710089939
            </a>
          </p>
        </div>

        <div className="space-y-1">
          <p>
            <span className="font-bold">Sales & General Inquiries:</span>{" "}
            <a
              href="mailto:admin@cryocorp.co.in"
              className="text-blue-700 hover:underline"
            >
              admin@cryocorp.co.in
            </a>
          </p>
          <p>
            <span className="font-bold">Dispatch or Quotation Inquiries:</span>{" "}
            <a
              href="mailto:crm@cryocorp.in"
              className="text-blue-700 hover:underline"
            >
              crm@cryocorp.in
            </a>
          </p>
        </div>

        <div className="pt-2">
          <div className="flex items-start gap-2">
            <MdPhone className="mt-1 text-blue-600" />
            <div>
              <h4 className="font-bold">Call Us:</h4>
              <p className="text-sm">+91 9004759939, +91 7738069949</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-3">
            <MdAccessTime className="mt-1 text-blue-600" />
            <div>
              <h4 className="font-bold">Business Hours:</h4>
              <p className="text-sm">Monday – Saturday: 09:30 AM to 6:00 PM IST</p>
            </div>
          </div>
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