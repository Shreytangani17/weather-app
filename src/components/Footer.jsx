import React from "react";

const Footer = () => (
  <footer id="footer" className="bg-gray-900 text-gray-300 py-10 text-center">
    <p>© 2025 OpenWeather Lite</p>
    <div className="text-sm mt-2">
      <a href="https://openweathermap.org/privacy-policy" target="_blank" className="hover:underline">Privacy</a> ·
      <a href="https://openweathermap.org/terms" target="_blank" className="hover:underline">Terms</a> ·
      <a href="#cta" className="hover:underline">Contact</a>
    </div>
  </footer>
);

export default Footer;