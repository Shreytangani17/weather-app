import React from "react";
import { FaSun, FaCloudRain, FaWind, FaSnowflake } from "react-icons/fa";

const Facts = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Interesting Weather Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="p-4 rounded shadow bg-blue-50 dark:bg-gray-700">
            <FaSun size={30} className="mx-auto mb-2 text-yellow-500" />
            <p>Sunlight can reach 80 meters under clear water.</p>
          </div>
          <div className="p-4 rounded shadow bg-blue-50 dark:bg-gray-700">
            <FaCloudRain size={30} className="mx-auto mb-2 text-blue-500" />
            <p>Raindrops can fall at over 20 mph.</p>
          </div>
          <div className="p-4 rounded shadow bg-blue-50 dark:bg-gray-700">
            <FaWind size={30} className="mx-auto mb-2 text-green-500" />
            <p>The fastest wind speed ever recorded was 254 mph.</p>
          </div>
          <div className="p-4 rounded shadow bg-blue-50 dark:bg-gray-700">
            <FaSnowflake size={30} className="mx-auto mb-2 text-cyan-500" />
            <p>No two snowflakes are exactly alike.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
