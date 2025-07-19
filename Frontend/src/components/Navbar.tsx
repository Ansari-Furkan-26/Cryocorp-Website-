import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/"><img src="/logo.png" alt="logo" className="w-32 md:w-56 md:pt-10" /></a>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-lg text-[#428b93]">
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/services">Services</a>
              <a href="/Resources">Resource Hub</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <a href="/quiz">
              <button className="bg-[#59C6D3] hover:bg-secondary text-sm rounded-3xl text-primary-foreground px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Take Your Plant Efficiency Test!
              </button>
            </a>
          </div>

          <div className="md:hidden z-[999]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#59C6D3] hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white h-screen flex flex-col justify-center items-center space-y-6 text-[#222]">
          {["Home", "Products", "Services", "Resource Hub", "About"].map((label, idx) => {
            const href = label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s/g, "")}`;
            return (
              <a
                key={idx}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl  py-2 px-4 font-medium hover:text-[#59C6D3] transition-colors"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
