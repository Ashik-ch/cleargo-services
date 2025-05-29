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
              src="https://m24fms.in/wp-content/uploads/2024/05/thumbnail_0005_Banner.jpg"
              alt="Tour Video"
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
            Take a look at Tour Video
          </h2>
          <p className="text-gray-600 mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-gray-600 mb-6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6 list-disc list-inside">
            <li>Outdoor recreation activities</li>
            <li>Airlines</li>
            <li>Car Rentals</li>
            <li>Cruise Lines</li>
            <li>Hotels</li>
            <li>Railways</li>
            <li>Travel Insurance</li>
            <li>Package Tours</li>
            <li>Insurance</li>
            <li>Guide Books</li>
          </ul>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
