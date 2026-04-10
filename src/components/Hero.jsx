import React from "react";
import bankImg from "../assets/bank.jpg"; 

const Hero = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bankImg})` }} // 👈 use here
    >
      <div className="text-center text-white bg-black/40 p-6 rounded-xl">
        <h1 className="text-5xl font-bold">
          Curated Journeys. Unforgettable Stories.
        </h1>
        <p className="mt-4 text-lg">
          Your next chapter starts here
        </p>

        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
          Explore Trips
        </button>
      </div>
    </div>
  );
};

export default Hero;