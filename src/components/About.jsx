import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative">
          <a
            href="https://www.youtube.com/watch?v=mwtbEGNABWU"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <img
              src="https://extension.usu.edu/images/cleaning.png"
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

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">
            See Our Deep Cleaning Service in Action
          </h2>
          <p className="text-gray-600 mb-4">
            Experience spotless homes and offices with our expert deep cleaning
            service. We use eco-friendly products, advanced equipment, and trained
            professionals to make every corner shine.
          </p>
          <p className="text-gray-600 mb-6">
            From kitchens to bathrooms, carpets to windows, we cover it all —
            leaving your space hygienic, fresh, and inviting.
          </p>

          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6 list-disc list-inside">
            <li>Residential Cleaning</li>
            <li>Office & Commercial Spaces</li>
            <li>Carpet & Upholstery</li>
            <li>Window & Glass Cleaning</li>
            <li>Move-In / Move-Out Cleaning</li>
            <li>Post-Construction Cleanup</li>
            <li>Eco-Friendly Products</li>
            <li>Trained & Certified Staff</li>
            <li>Flexible Scheduling</li>
            <li>Affordable Packages</li>
          </ul>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book a Cleaning
          </a>
        </div>
      </div>
    </section>

  );
};

export default About;
