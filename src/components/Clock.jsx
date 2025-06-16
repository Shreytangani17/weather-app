// src/components/Clock.jsx
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-center text-white text-xl font-semibold mt-2">
      {time.toLocaleDateString()} — {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
