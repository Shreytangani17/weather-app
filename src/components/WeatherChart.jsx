// src/components/WeatherChart.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const WeatherChart = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  const data = forecast.map(day => ({
    date: day.date,
    temp: day.day.avgtemp_c,
    max: day.day.maxtemp_c,
    min: day.day.mintemp_c
  }));

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">3-Day Temperature Forecast</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" name="Avg Temp" />
          <Line type="monotone" dataKey="max" stroke="#82ca9d" name="Max Temp" />
          <Line type="monotone" dataKey="min" stroke="#ff7300" name="Min Temp" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
