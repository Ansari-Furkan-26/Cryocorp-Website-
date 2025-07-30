import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { currentPage, updateCurrentPage } = useNavigation();

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Simple 4 product categories
  const productCategories = [
    { name: "ASU TECHNOLOGY", route: "asu" },
    { name: "PSA TECHNOLOGY", route: "psa" },
    { name: "LIQUID BOTTLING UNIT", route: "lbu" },
    { name: "NEXT GEN GAS SOLUTIONS", route: "next" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img
                src="/logo.png"
                alt="logo"
                className="w-32 md:w-56 md:pt-10"
              />
            </a>
          </div>

          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8 font-semibold text-lg text-[#275e64]">
              <a href="/">Home</a>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#59C6D3] transition-colors duration-200">
                  Products
                  <ChevronDown size={16} />
                </button>

                {/* Simple dropdown */}
                {isProductsOpen && (
                  <div className="absolute top-[55%] left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`/products/${category.route}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#59C6D3] transition-colors"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

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

          <div className="lg:hidden z-[9999]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#59C6D3] hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu remains the same */}
      {isMenuOpen && (
        <div className="min-h-screen z-40 bg-white">
          <div className="flex flex-col h-full px-6 pt-20">
            <nav className="flex-1">
              <div className="space-y-0">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products", hasDropdown: true },
                  { label: "Services", href: "/services" },
                  { label: "Resource Hub", href: "/resources" },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" },
                ].map((item, idx) => (
                  <div key={idx}>
                    {item.hasDropdown ? (
                      <div>
                        <div className="py-4 text-left text-lg font-medium text-[#428b93]">
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-2">
                          {productCategories.map((category, catIdx) => (
                            <a
                              key={catIdx}
                              href={`/products/${category.route}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-md text-[#428b93] hover:text-[#59C6D3] transition-colors"
                            >
                              {category.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-4 text-left text-lg font-medium text-[#428b93] hover:text-[#59C6D3] hover:bg-gray-50 hover:pl-4 transition-all duration-300 ease-in-out"
                      >
                        {item.label}
                      </a>
                    )}
                    {idx < 5 && (
                      <hr className="border-gray-200 border-t-[0.5px]" />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="pb-8">
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
