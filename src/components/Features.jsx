import React from "react";

const features = [
  { title: "Current Weather", desc: "Real-time weather data in over 200,000 cities." },
  { title: "5-Day Forecast", desc: "Plan ahead with our extended forecasts." },
  { title: "Weather Maps", desc: "Visualize weather patterns with global maps." },
  { title: "Air Pollution", desc: "Track air quality in real-time." },
];

const Features = () => (
  <section id="features" className="py-20 bg-white text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-800">Weather Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
      {features.map((f, i) => (
        <a key={i} href="https://openweathermap.org/api" target="_blank" rel="noreferrer">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-blue-700">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Features;
