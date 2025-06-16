// components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-xl mx-auto p-6 mt-8 text-center">
      <h2 className="text-2xl font-bold mb-2">{data.location.name}, {data.location.country}</h2>
      <p className="text-4xl">{data.current.temp_c}°C</p>
      <p className="capitalize">{data.current.condition.text}</p>
      <img src={data.current.condition.icon} alt="weather-icon" className="mx-auto mt-2" />
    </div>
  );
};

export default WeatherCard;
