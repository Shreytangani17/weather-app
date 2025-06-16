import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const Hero = ({ city, setCity, fetchWeather, weatherCondition }) => {
  // Determine background image based on weatherCondition
  const getBackgroundImage = () => {
    const condition = weatherCondition?.toLowerCase() || "";

    if (condition.includes("rain")) return "/src/images/photo1.jpg";
    if (condition.includes("snow")) return "/src/images/photo2.jpg";
    if (condition.includes("cloud")) return "/src/images/photo3.jpg";
    if (condition.includes("sun") || condition.includes("clear")) return "/src/images/photo4.jpg";
    return "/src/images/photo5.jpg";
  };

  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white transition-all duration-500"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <p className="text-sm mb-6">Get real-time & 8-day forecasts</p>
        <div className="flex items-center border bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 text-black"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2"
          >
            <FaSearchLocation />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
