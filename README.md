# 🌦️ Weather Forecast App – Complete Project Overview

This project is a **modern, visually appealing Weather Forecast Web App** built using **React**, **Vite**, **Tailwind CSS**, and the **WeatherAPI**. It dynamically displays current weather conditions, hourly forecasts, and 8-day outlooks, complete with background images that change based on weather conditions.

---

## 🎯 Purpose of the Project

The goal of this project is to:
- Provide users with accurate weather forecasts in an attractive interface
- Demonstrate frontend development skills using React & Tailwind CSS
- Integrate third-party APIs (WeatherAPI)
- Show interactive features like search, live forecast, and weather-based visuals

---

## 🌟 Key Features

| Feature | Description |
|--------|-------------|
| 🔍 City Search | Users can search any city to get real-time weather |
| 🕐 Hourly Forecast | View temperature & condition for the next 12 hours |
| 📅 8-Day Forecast | Daily temperature trends for a full week |
| 🌄 Dynamic Background | Background image changes based on weather (sunny, rainy, snowy, etc.) |
| 📊 Stats & Charts | Weather stats and simple visualizations (optional) |
| 📱 Responsive Design | Works on mobile, tablet, and desktop |
| 🌙 Optional Dark Mode | Easily extendable for dark/light theme support |
| 🧭 Location Support (Upcoming) | Auto-detect weather based on your location |

---

## 🛠️ Tech Stack Used

| Tech | Role |
|------|------|
| **React** | Frontend framework |
| **Vite** | Fast dev/build tool |
| **Tailwind CSS** | Modern styling utility |
| **WeatherAPI** | Weather data provider |
| **Axios** | HTTP requests |
| **Framer Motion** | Animations (optional) |
| **Chart.js** | Weather chart integration (optional) |

---

## 📁 Folder Structure

weather-forecast-app/
├── public/
│ ├── assets/
│ │ ├── sunny.jpg
│ │ ├── rainy.jpg
│ │ ├── snow.jpg
│ └── favicon.png
├── src/
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── Forecast.jsx
│ │ ├── Navbar.jsx
│ │ ├── CTA.jsx
│ │ ├── Footer.jsx
│ │ └── Stats.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── index.html
├── tailwind.config.js
└── PROJECT_OVERVIEW.md


## 🚀 How It Works

1. **App loads** with a search box and dynamic background.
2. On search, it calls the WeatherAPI and retrieves:
   - Current weather data
   - Hourly forecast (next 12 hours)
   - Daily forecast (next 8 days)
3. Based on the result:
   - Background image updates automatically
   - All data is rendered in responsive cards
   - Forecast is shown in a grid
4. Stats and optional charts are displayed at the bottom
5. Navbar, CTA, and Footer complete the user experience

---

## 🔑 API Integration

- You must create a `.env` file in your root directory:
```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
Sample API call:


https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=cityname&days=3&aqi=no&alerts=no
🧪 Testing the App
To test and run locally:


git clone https://github.com/your-username/weather-forecast-app
cd weather-forecast-app
npm install
npm run dev
