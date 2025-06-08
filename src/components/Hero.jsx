import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero bg-gray-500 py-28 mb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-7/12">
            <div className="intro-wrap relative z-10">
              <h1 className="mb-5 text-5xl text-white">
                <span className="block">Let's Enjoy Your</span> Trip In{" "}
                <span className="typed-words"></span>
              </h1>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="slides relative mx-auto max-w-xl h-[608px] rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://busybucket.in/wp-content/uploads/2022/06/deep-home-cleaning-1.jpg"
                alt="header1"
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
              />
              <img
                src="https://busybucket.in/wp-content/uploads/2022/06/deep-home-cleaning-1.jpg"
                alt="header2"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
              />
              <img
                src="https://busybucket.in/wp-content/uploads/2022/06/deep-home-cleaning-1.jpg"
                alt="header3"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
              />
              <img
                src="https://busybucket.in/wp-content/uploads/2022/06/deep-home-cleaning-1.jpg"
                alt="header4"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
              />
              <img
                src="https://img-cdn.publive.online/fit-in/1200x675/local-samosal/media/media_files/OuTGQtFoAbp2DCD9sfPe.png"
                alt="header5"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
