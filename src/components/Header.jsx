import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700"> ClearGo Services </h1>
        <nav className="space-x-4">
          <a href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a href="#why-us" className="text-gray-600 hover:text-blue-600">
            Why Us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </nav>{" "}
      </header>
    </div>
  );
};

export default Header;
