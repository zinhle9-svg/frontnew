import React from "react";
import cover from "../image/cover page.webp";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF1F2] to-[#FDF6F0] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5A2A2A] mb-4">
            Welcome to{" "}
            <span className="text-[#E88DA6]">Zee’s Store</span>
          </h1>

          <p className="text-[#7A4A4A] text-lg mb-8 leading-relaxed">
            Discover stylish, high-quality products curated just for you.
            From electronics to fashion and home essentials, shopping has
            never felt this beautiful.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-[#E88DA6] text-white px-7 py-3 rounded-2xl font-semibold hover:bg-[#D97992] transition shadow-md">
              Shop Now
            </button>

            <button className="border-2 border-[#E8B4C3] text-[#5A2A2A] px-7 py-3 rounded-2xl font-semibold hover:bg-[#FBE4EA] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={cover}
            alt="Welcome"
            className="w-full max-w-lg rounded-3xl shadow-xl border border-[#F3C6D3]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
