import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Forecast from "./components/Forecast";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WeatherChart from "./components/WeatherChart";
import WeatherTips from "./components/WeatherTips";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("Delhi");
  const [forecast, setForecast] = useState(null);
  const [yesterday, setYesterday] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=no`;
      const res = await axios.get(url);
      setForecast(res.data);
      setWeatherCondition(res.data.current.condition.text.toLowerCase());

      // Fetch yesterday's data
      const yUrl = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${getYesterdayDate()}`;
      const yRes = await axios.get(yUrl);
      setYesterday(yRes.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getYesterdayDate = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        weatherCondition={weatherCondition}
      />
      {forecast && (
        <>
          <Stats forecast={forecast} yesterday={yesterday} />
          <WeatherTips condition={weatherCondition} />
          <Forecast lat={forecast.location.lat} lon={forecast.location.lon} />
          <WeatherChart forecast={forecast.forecast.forecastday} />
        </>
      )}
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
