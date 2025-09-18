import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-sky-800 shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ClearGo Services<span className="text-sky-600">.</span>
        </Link>
        <nav className="hidden lg:flex space-x-8 items-center">
          <NavLink to="/" className="hover:text-yellow-400"> Home </NavLink>
          <NavLink to="/about" className="hover:text-yellow-400">
            About
          </NavLink>
          <div className="relative group">
            <span className="hover:text-yellow-400 cursor-pointer">Services</span>
            <div className="absolute left-0 mt-2 w-56 bg-white text-sky-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-20">
              <NavLink to="/residential" className="block px-4 py-2 hover:bg-gray-100">
                Residential Cleaning
              </NavLink>
              <NavLink to="/window-cleaning" className="block px-4 py-2 hover:bg-gray-100">
                Window & Glass Cleaning </NavLink>
              <NavLink to="/carpet-upholstery" className="block px-4 py-2 hover:bg-gray-100"> Carpet & Upholstery </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="hover:text-yellow-400"> Contact Us </NavLink>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-sky-700 text-white px-4 pb-4 space-y-2">
          <NavLink to="/" className="block py-2 hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/about" className="block py-2 hover:text-yellow-400">
            About
          </NavLink>
          <NavLink to="/residential" className="block py-2 hover:text-yellow-400">
            Residential Cleaning
          </NavLink>
          <NavLink to="/window-cleaning" className="block py-2 hover:text-yellow-400">
            Window & Glass Cleaning
          </NavLink>
          <NavLink to="/carpet-upholstery" className="block py-2 hover:text-yellow-400">
            Carpet & Upholstery
          </NavLink>
          <NavLink to="/contact" className="block py-2 hover:text-yellow-400">
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
