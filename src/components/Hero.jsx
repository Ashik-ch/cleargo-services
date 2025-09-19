import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/assets/images/hero4.jpg",
  "/assets/images/hero5.jpg",
  "/assets/images/hero6.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${process.env.PUBLIC_URL}/assets/images/banner5.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-cyan-700/40 to-teal-600/40"></div>

      <div className="container mx-auto relative z-10 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent tracking-[10px]">
              ClearGo
            </span>{" "}
            <span className="block mt-2 text-white drop-shadow-lg tracking-[10px]"> Services </span>
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl text-gray-200 font-medium typed-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Because <span className="text-yellow-300 font-bold tracking-[6px] typed-words">Clean Matters...<span className="blinking-cursor">|</span></span>
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center lg:justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#services"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Slider */}
        <div className="flex-1 relative max-w-lg h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl">
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={`${process.env.PUBLIC_URL}${src}`}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
