"use client";

import React from "react";
import { font } from "./font/font";

const Hero = () => {
  const slide = {
    image: "/ferrari.jpg",
    heading: "Discover the hidden history of your car",
    text: "Order a detailed report to protect yourself from bad purchases sell with confidence and ensure your vehicle’s safety",
  };

  return (
    <div className={`${font.className} relative w-full h-[500px] md:h-[560px] overflow-hidden`}>
      <img
        src={slide.image}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
        <div className="flex flex-col w-[70%]">
          <h1 className="text-white md:mt-12 max-w-xl text-2xl md:text-4xl font-bold">
            {slide.heading}
          </h1>
          <p className="text-white max-w-xl text-sm md:text-xl mt-4">
            {slide.text}
          </p>
          <div className="relative mt-4 w-full max-w-xl">
            <input
                type="text"
                placeholder="Enter Registration Number"
                className="bg-white w-full p-4 pr-28 rounded-md outline-none"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
                Get Report
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
