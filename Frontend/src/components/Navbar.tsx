import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/"><img src="/logo.png" alt="logo" className="w-32 md:w-56 md:pt-10" /></a>
          </div>

          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8 font-semibold text-lg text-[#275e64]">
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/services">Services</a>
              <a href="/Resources">Resource Hub</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </div>
          </nav>

          <div className="hidden lg:block">
            <a href="/quiz">
              <button className="bg-[#59C6D3] hover:bg-secondary text-sm rounded-3xl text-primary-foreground px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Take Your Plant Efficiency Test!
              </button>
            </a>
          </div>

          <div className="lg:hidden z-[999]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#59C6D3] hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with white background overlay */}
      {isMenuOpen && (
        <div className="min-h-screen z-40 bg-white">
          {/* Mobile menu container */}
          <div className="flex flex-col h-full px-6 pt-20">
            {/* Navigation Links */}
            <nav className="flex-1">
              <div className="space-y-0">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products" },
                  { label: "Services", href: "/services" },
                  { label: "Resource Hub", href: "/resources" },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-4 text-left text-lg font-medium text-[#428b93] hover:text-[#59C6D3] hover:bg-gray-50 hover:pl-4 transition-all duration-300 ease-in-out"
                    >
                      {item.label}
                    </a>
                    {/* Divider line between nav items */}
                    {idx < 5 && (
                      <hr className="border-gray-200 border-t-[0.5px]" />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Bottom section with quiz button */}
            <div className="pb-8">
              {/* Final divider before button */}
              <hr className="border-gray-300 border-t-[1px] mb-6" />
              
              <a href="/quiz-form" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#59C6D3] hover:bg-[#4bb5c2] text-white text-base rounded-3xl px-6 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  Take Your Plant Efficiency Test!
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
