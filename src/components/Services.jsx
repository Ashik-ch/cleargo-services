import React from "react";

const services = [
  {
    title: "Home Cleaning",
    desc: "Thorough cleaning for bedrooms, kitchens, bathrooms & more.",
  },
  {
    title: "Office Cleaning",
    desc: "Keep your workplace spotless and productive.",
  },
  {
    title: "Move-In/Move-Out",
    desc: "Ensure a clean start or a fresh exit from any space.",
  },
  {
    title: "Disinfection",
    desc: "Sanitize your home or office for maximum hygiene.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold text-blue-700 mb-10">
        Our Services
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow hover:shadow-lg"
          >
            <h4 className="text-xl font-bold text-blue-600 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
