import React, { useEffect, useState } from "react";
import "./hero.scss";

const images = [
  "/assets/images/hero1.jpg",
  "/assets/images/glassgo.jpg",
  "/assets/images/upholsterygo.jpg",
];


const Hero = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000); // change every 1 second
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="hero bg-gray-500 py-28 mb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-7/12 text-center">
            <div className="intro-wrap relative z-10">
              <h1 className="mb-2 text-5xl text-white">
                <span className="block">ClearGo Services</span>
              </h1>
              <span className="typed-words text-white">Because Clean Matters...<span class="blinking-cursor">|</span></span>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="slides relative mx-auto max-w-xl h-[608px] rounded-full overflow-hidden shadow-2xl">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`header${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${current === index ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
