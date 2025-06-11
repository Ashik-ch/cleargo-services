import React from "react";
import "./services.scss";

const services = [
  {
    title: "Residential Cleaning",
    desc: "Professional cleaning services for your entire home, tailored to your needs.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Office & Commercial Spaces",
    desc: "Maintain a spotless and productive environment in your office or commercial space.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Carpet & Upholstery",
    desc: "Deep cleaning and stain removal for carpets and upholstered furniture.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Window & Glass Cleaning",
    desc: "Crystal-clear window and glass cleaning services for residential and commercial spaces.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    desc: "Detailed cleaning to prepare your space for new occupants or fresh beginnings.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
  {
    title: "Post-Construction Cleanup",
    desc: "Comprehensive cleaning services after construction or renovation projects.",
    url: "https://mycleannshine.com.au/wp-content/uploads/2025/02/Carpet-Steam-Cleaning.jpg",
  },
];

const Services = () => {
  return (
    <section>
      <div id="services" className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-3">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional cleaning solutions to make your spaces shine. From deep cleaning, home and office cleaning, sofa and upholstery care, to water tank and interlock cleaning — ClearGo Services ensures every corner is spotless and hygienic. Serving Kozhikode and Northern Kerala with trusted quality.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="md:col-6 content-center">
              <img src="/assets/images/ads.jpg" alt="ads" className="rounded-lg h-100" />
            </div>

            <div className="md:col-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className=" flex border rounded-lg overflow-hidden  hover:shadow-lg transition bg-gray-200"
                  >
                    <div
                      className="h-48 bg-gray-200 bg-cover bg-center w-full rounded-lg m-4"
                      style={{
                        backgroundImage: `url('${service.url || "https://via.placeholder.com/400x300"
                          }')`,
                      }}
                    ></div>
                    <div className="p-2 text-left">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Services;
