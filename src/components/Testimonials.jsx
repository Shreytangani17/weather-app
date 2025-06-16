import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-purple-100 py-16 text-center text-gray-900">
      <h2 className="text-4xl font-bold mb-8">Loved by Developers</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <p className="italic mb-2">
            “Super easy to integrate and looks awesome in all my weather projects!”
          </p>
          <h4 className="font-semibold">– Alex, Frontend Dev</h4>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic mb-2">“Great icon set. No bloat. Straight to the point.”</p>
          <h4 className="font-semibold">– Priya, Web Designer</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
