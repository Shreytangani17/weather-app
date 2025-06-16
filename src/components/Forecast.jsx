import React, { useEffect, useState } from "react";
import axios from "axios";

const Forecast = ({ lat, lon }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };

    if (lat && lon) {
      fetchForecast();
    }
  }, [lat, lon]);

  if (!data) return null;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Hourly Forecast */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Hourly Forecast (Next 12 Hours)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
        {data.hourly.slice(0, 12).map((hour, idx) => (
          <div key={idx} className="p-3 border rounded bg-blue-50 shadow">
            <p className="font-semibold">
              {new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-blue-600">{hour.temp}°C</p>
            <p className="text-gray-600">{hour.weather[0].main}</p>
          </div>
        ))}
      </div>

      {/* 8-Day Forecast */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800">8-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {data.daily.slice(0, 8).map((day, idx) => (
          <div key={idx} className="p-4 border rounded flex flex-col items-center bg-white shadow-md">
            <p className="font-semibold">{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <div className="flex gap-4 mt-2">
              <p className="text-blue-600">🌡 {day.temp.day}°C</p>
              <p className="text-purple-600">🌙 {day.temp.night}°C</p>
            </div>
            <p className="mt-2 text-gray-700">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
