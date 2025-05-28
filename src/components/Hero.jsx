import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-700">
        Deep Cleaning, Done Right
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        We provide professional deep cleaning services for homes and businesses
        using eco-friendly products and trained staff.
      </p>
      <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
        Book a Cleaning
      </button>
    </section>
  );
};

export default Hero;
