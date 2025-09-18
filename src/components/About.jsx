import React from "react";
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const About = () => {

  const services = [
    "Residential Cleaning",
    "Office & Commercial Spaces",
    "Carpet & Upholstery",
    "Window & Glass Cleaning",
    "Move-In / Move-Out Cleaning",
    "Post-Construction Cleanup",
    "Eco-Friendly Products",
    "Trained & Certified Staff",
    "Flexible Scheduling",
    "Affordable Packages",
  ];
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 bg-white">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ads.jpg`}
            alt="ads"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            Experience spotless homes and offices with our expert deep cleaning
            service. We use eco-friendly products, advanced equipment, and trained
            professionals to make every corner shine.
          </p>
          <p className="text-gray-600 mb-6">
            From kitchens to bathrooms, carpets to windows, we cover it all —
            leaving your space hygienic, fresh, and inviting.
          </p>

          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6 list-inside justify-items-start">
            {services.map((service, index) => (
              <li key={index} className="flex items-start">
                <i className="fa-solid fa-broom text-blue-600 mr-2 mt-1"></i>
                {service}
              </li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="https://wa.me/918089982218?text=Hello%20ClearGo%20Services%2C%20I%20would%20like%20to%20book%20a%20cleaning%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // animate only once
              transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
            >
              <i className="fab fa-whatsapp mr-2"></i> Book your Slotss
            </motion.a>
          </div>
        </div>
      </div>
      <div className="untree_co-section count-numbers py-5 mt-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mx-4">
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <CountUp start={0} end={10} duration={3} suffix="+" enableScrollSpy scrollSpyOnce>
                    {({ countUpRef }) => (
                      <span ref={countUpRef} className="text-5xl text-blue-600" />
                    )}
                  </CountUp>
                </div>
                <span className="caption text-gray-700 text-lg">No. of Services</span>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <CountUp start={0} end={95} duration={3} suffix="+" enableScrollSpy scrollSpyOnce>
                    {({ countUpRef }) => (
                      <span ref={countUpRef} className="text-5xl text-blue-600" />
                    )}
                  </CountUp>                </div>
                <span className="caption text-gray-700 text-lg">No. of Clients</span>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <CountUp start={0} end={50} duration={3} suffix="+" enableScrollSpy scrollSpyOnce>
                    {({ countUpRef }) => (
                      <span ref={countUpRef} className="text-5xl text-blue-600" />
                    )}
                  </CountUp>                </div>
                <span className="caption text-gray-700 text-lg">No. of Employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

  );
};

export default About;
