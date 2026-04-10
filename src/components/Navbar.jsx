import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-orange-800">
      
      <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-orange-300 transition duration-300">
        Tripper
      </h1>

      <ul className="hidden md:flex gap-6 font-medium text-white">
        <li className="cursor-pointer hover:text-orange-300 transition duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:text-orange-300 transition duration-300">
          Trips
        </li>
        <li className="cursor-pointer hover:text-orange-300 transition duration-300">
          About
        </li>
        <li className="cursor-pointer hover:text-orange-300 transition duration-300">
          Contact
        </li>
      </ul>

      <button className="bg-white text-orange-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-200 transition duration-300">
        Get Callback
      </button>

    </div>
  );
};

export default Navbar;