import React from "react";
import { FaCloudSun, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black-200 shadow-md py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
        <FaCloudSun className="text-yellow-400" />
        WeatherApp
      </div>

      <ul className="hidden md:flex space-x-6 text-white font-medium">
        <li>
          <a href="#features" className="hover:text-indigo-600">Features</a>
        </li>
        <li>
          <a href="#forecast" className="hover:text-indigo-600">Forecast</a>
        </li>
        <li>
          <a href="#cta" className="hover:text-indigo-600">Subscribe</a>
        </li>
      </ul>

      <div className="flex items-center gap-4 text-white">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
