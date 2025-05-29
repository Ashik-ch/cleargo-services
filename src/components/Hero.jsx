import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-20 text-center px-10"
      style={{
        backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/10/Cleaning-Backgrounds-Desktop.jpg')",
      }}
    >
      <div className="w-48 justify-self-end  bg-opacity-70 p-8 rounded">
        <h2 className="text-4xl font-bold text-blue-700">
          ClearGo Cleaning Services
        </h2>
        <h4 className="text-2xl mt-4 text-gray-600 max-w-xl mx-auto">
          Where Clean Matters
        </h4>
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
          Book a Cleaning
        </button>
      </div>
    </section>

  );
};

export default Hero;
