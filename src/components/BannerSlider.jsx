import React, { useEffect, useState } from "react";
import bali from "../assets/bali.jpg";
import bali2 from "../assets/bali2.jpg";
import bali3 from "../assets/bali3.jpg";

const BannerSlider = () => {
  const slides = [
    {
      title: "Bali Adventure",
      price: "₹24,999",
      image: bali,
    },
    {
      title: "Dubai Escape",
      price: "₹30,999",
      image: bali2,
    },
    {
      title: "Thailand Trip",
      price: "₹19,999",
      image: bali3,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              
              <h1 className="text-3xl md:text-5xl font-bold">
                {slide.title}
              </h1>

              <p className="mt-3 text-xl md:text-2xl text-orange-400 font-semibold">
                {slide.price}
              </p>

              <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white transition">
                Book Now
              </button>

            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BannerSlider;