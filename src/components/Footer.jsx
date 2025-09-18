// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-200 py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/male-janitor-cleaning-carpet-vacuum-600nw-1925465432.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white">ClearGo Services</h2>
          <p className="mt-3 text-sm text-gray-300">
            Making homes, hotels & commercial spaces shine with professional
            deep cleaning solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary-400">Home</a></li>
            <li><a href="/about" className="hover:text-primary-400">About Us</a></li>
            <li><a href="/services" className="hover:text-primary-400">Services</a></li>
            <li><a href="/contact" className="hover:text-primary-400">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm">📍 Kozhikode, Kerala</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ info@cleargo.com</p>

          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      > © 2025 ClearGo Services. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
