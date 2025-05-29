import React from "react";
import "./services.scss";

const services = [
  {
    title: "Home Cleaning",
    desc: "Thorough cleaning for bedrooms, kitchens, bathrooms & more.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Office Cleaning",
    desc: "Keep your workplace spotless and productive.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Move-In/Move-Out",
    desc: "Ensure a clean start or a fresh exit from any space.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Disinfection",
    desc: "Sanitize your home or office for maximum hygiene.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden  hover:shadow-lg transition bg-gray-200"
            >
              <div
                className="h-48 bg-gray-200 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${
                    service.url || "https://via.placeholder.com/400x300"
                  }')`,
                }}
              ></div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
