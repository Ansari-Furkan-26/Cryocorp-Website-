import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ShoppingCart,
  ArrowUpRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Main Footer */}
      <footer className="bg-blue-50 px-6 pt-6 pb-6 mb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Logo and Let's Talk */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold text-gray-800">CRYOCORP</span>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Got a project in mind?</p>
                <h3 className="text-3xl font-light text-gray-800 mb-2">Let's Talk</h3>
                <div className=" items-center text-teal-500 text-sm">
                  <span className="mr-2">All Rights Reserved &copy; Cryo Corp O2 LLP</span>
                  <div className="flex gap-4 text-teal-500">
                  <a href="privacy-policy"><p>Privacy Policy</p></a>
                  <a href="disclaimer"><p>Disclaimer</p></a>
                </div>
                </div>
                
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Address</h4>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Unit no. 10, Swasth Chamber, S. G. Barve</p>
                <p>Marg, Off Sion-Trombay Road, Chembur,</p>
                <p>Mumbai, India - 400089</p>
              </div>

              <div className="flex space-x-4 mt-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <Instagram size={16} className="text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <Facebook size={16} className="text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <Linkedin size={16} className="text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <Twitter size={16} className="text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <ShoppingCart size={16} className="text-gray-600" />
                </div>
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Subscribe</h4>
              <p className="text-gray-600 text-sm mb-4">
                To get notified about our new solutions!
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="bg-gray-400 text-white px-4 py-2 rounded-r-lg hover:bg-gray-500 transition-colors">
                  GO
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-gray-200 mt-6">
            <nav className="flex flex-wrap gap-8 text-sm pt-4">
              <a href="#" className="text-teal-500 hover:text-teal-600 transition-colors">Products</a>
              <a href="#" className="text-teal-500 hover:text-teal-600 transition-colors">Services</a>
              <a href="#" className="text-teal-500 hover:text-teal-600 transition-colors">Resource Hub</a>
              <a href="#" className="text-teal-500 hover:text-teal-600 transition-colors">About Us</a>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;