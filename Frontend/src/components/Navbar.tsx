import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/"><img src="/logo.png" alt="" className='w-56 pt-10' /></a>

          </div>

          <nav className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-8 text-[#59C6D3]">
              <a href="/products" className=" transition-colors duration-200">Products</a>
              <a href="/services" className=" transition-colors duration-200">Services</a>
              <a href="/Resources" className="transition-colors duration-200">Resource Hub</a>
              <a href="/blog" className=" transition-colors duration-200">Blog</a>
              <a href="/about" className=" transition-colors duration-200">About</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <button
              className="bg-[#59C6D3] hover:bg-secondary text-sm rounded-3xl text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 z-50 relative"
            >
              Take Your Plant Efficiency Test!
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-white hover:text-emerald-400 px-3 py-2 transition-colors duration-200">Home</a>

            <a href="/products" className="block text-white hover:text-emerald-400 px-3 py-2 transition-colors duration-200">Products</a>
            <a href="/Services" className="block text-white hover:text-emerald-400 px-3 py-2 transition-colors duration-200">Services</a>
            <a href="/Resources" className="block text-white hover:text-emerald-400 px-3 py-2 transition-colors duration-200">Resource Hub</a>
            <a href="#About" className="block text-white hover:text-emerald-400 px-3 py-2 transition-colors duration-200">About</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;