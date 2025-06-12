import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-sky-700 shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          ClearGo Services<span className="text-sky-600">.</span>
        </a>
        <nav className="hidden lg:flex space-x-8 items-center">
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <a href="/about" className="hover:text-yellow-400">
            About
          </a>
          <div className="relative group">
            <button className="hover:text-yellow-400"> <a href="/services" className="block py-2 hover:text-yellow-400">
              Services            </a> </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-20">
              <a href="/residential" className="block px-4 py-2 hover:bg-gray-100">
                Residential Cleaning
              </a>
              <a href="/residential" className="block px-4 py-2 hover:bg-gray-100">
                Window & Glass Cleaning              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Carpet & Upholstery
              </a>
              {/* <div className="relative group">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Office & Commercial Spaces                </button>
                <div className="absolute left-full top-0 mt-0 w-48 bg-white text-blue-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Carpet & Upholstery
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <a href="/contact" className="hover:text-yellow-400">
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center px-3 py-2 border rounded text-sky-700 border-sky-700 hover:text-yellow-400 hover:border-yellow-400"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-sky-700 text-white px-4 pb-4 space-y-2">
          <a href="/" className="block py-2 hover:text-yellow-400">
            Home
          </a>
          <a href="/elements" className="block py-2 hover:text-yellow-400">
            Elements
          </a>
          <a href="#" className="block py-2 hover:text-yellow-400">
            Menu One
          </a>
          <a href="#" className="block py-2 hover:text-yellow-400">
            Menu Two
          </a>
          <a href="#" className="block py-2 hover:text-yellow-400">
            Menu Three
          </a>
          <a href="/about" className="block py-2 hover:text-yellow-400">
            About
          </a>
          <a href="/contact" className="block py-2 hover:text-yellow-400">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
