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
        <div className="flex gap-5">
          <div className="md:col-6 rounded-full h-96 ">
            <img className="rounded-lg h-96 " src="https://img-cdn.publive.online/fit-in/1200x675/local-samosal/media/media_files/OuTGQtFoAbp2DCD9sfPe.png" alt="" />
          </div>
          <div className="md:col-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden  hover:shadow-lg transition bg-gray-200"
                >
                  <div
                    className="h-48 bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${service.url || "https://via.placeholder.com/400x300"
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
        </div>
      </div>


      <div className="untree_co-section count-numbers py-5 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <span data-number="9313">0</span>
                </div>
                <span className="caption text-gray-700 text-lg">No. of Travels</span>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <span data-number="8492">0</span>
                </div>
                <span className="caption text-gray-700 text-lg">No. of Clients</span>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <span data-number="100">0</span>
                </div>
                <span className="caption text-gray-700 text-lg">No. of Employees</span>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="counter-wrap text-center">
                <div className="counter text-5xl font-bold text-blue-600 mb-2">
                  <span data-number="120">0</span>
                </div>
                <span className="caption text-gray-700 text-lg">No. of Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Services;
