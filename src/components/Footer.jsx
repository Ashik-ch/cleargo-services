import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 text-gray-600">
      © {new Date().getFullYear()} ClearGo Services. All rights reserved.
    </footer>
  );
};

export default Footer;
