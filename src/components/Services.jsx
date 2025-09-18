import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Cleaning",
    desc: "Professional cleaning services for your entire home, tailored to your needs.",
    url: "/assets/images/residential.jpg",
  },
  {
    title: "Office & Commercial Spaces",
    desc: "Maintain a spotless and productive environment in your office or commercial space.",
    url: "/assets/images/commercial.jpg",
  },
  {
    title: "Carpet & Upholstery",
    desc: "Deep cleaning and stain removal for carpets and upholstered furniture.",
    url: "/assets/images/upholstery.jpg",
  },
  {
    title: "Window & Glass Cleaning",
    desc: "Crystal-clear window and glass cleaning services for residential and commercial spaces.",
    url: "/assets/images/glass.jpg",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    desc: "Detailed cleaning to prepare your space for new occupants or fresh beginnings.",
    url: "/assets/images/move-in.jpg",
  },
  {
    title: "Post-Construction Cleanup",
    desc: "Comprehensive cleaning services after construction or renovation projects.",
    url: "/assets/images/postconstruction.jpg",
  },
];

const Services = () => {
  return (
    <section>
      <div id="services" className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 text-blue-700">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional cleaning solutions to make your spaces
              shine. From deep cleaning, home and office cleaning, sofa and
              upholstery care, to water tank and interlock cleaning — ClearGo
              Services ensures every corner is spotless and hygienic. Serving
              Kozhikode and Northern Kerala with trusted quality.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            <div className="w-full lg:w-1/2">
              <a
                href="https://youtu.be/oySJFZjTFh8?si=89uVlpJNqh7326IQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/commercial.jpg`}
                  alt="Deep Cleaning Video"
                  className="rounded-2xl shadow-lg"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:scale-110 transition transform">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col bg-gray-200 border rounded-lg overflow-hidden hover:shadow-lg transition"
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.7,       // slower & smoother
                      ease: "easeOut"      // smooth easing
                    }}
                  >
                    <div
                      className="h-48 bg-cover bg-center rounded-lg"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + service.url})`,
                      }}
                    ></div>
                    <div className="p-4 text-left">
                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
