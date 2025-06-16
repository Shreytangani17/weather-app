import React from "react";

const CTA = () => {
  return (
    <section className="bg-indigo-600 dark:bg-indigo-800 text-white py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Want to stay ahead of the weather?</h2>
      <p className="mb-6 text-lg">Bookmark this app and check daily forecasts before heading out!</p>
      <a
        href="#"
        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
      >
        Get Weather Updates
      </a>
    </section>
  );
};

export default CTA;
