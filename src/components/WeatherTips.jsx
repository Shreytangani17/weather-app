// src/components/WeatherTips.jsx
import React from "react";

const WeatherTips = ({ condition }) => {
  const tips = {
    rain: "Carry an umbrella ☂️ and wear waterproof shoes.",
    snow: "Dress warmly and drive carefully.",
    clear: "Perfect day for outdoor activities!",
    clouds: "Cloudy skies ahead—might need a jacket.",
    default: "Stay safe and stay hydrated!"
  };

  return (
    <div className="bg-blue-200 p-9 rounded mt-6 text-center">
      <h3 className="text-lg font-semibold">Today's Weather Tip</h3>
      <p className="text-sm mt-2">{tips[condition] || tips.default}</p>
    </div>
  );
};

export default WeatherTips;
