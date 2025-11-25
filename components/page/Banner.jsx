import React from "react";

function Banner() {
  return (
    <div
      className="
    relative
    w-full 
    lg:h-[600px] 
    h-[400px] 
    bg-[url('/bannerTwo.jpeg')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    flex 
    items-center 
    justify-center
    rounded-2xl
    overflow-hidden
    my-4
  "
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[rgba(240, 233, 233, 0.2)]"></div>

      <div className="relative text-center text-white px-4">
        <p className="text-lg md:text-xl mb-2 font-medium drop-shadow-md text-white">
          Together for a Healthier Community
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-tight text-white">
          <span className="text-[var(--color-primary)]">Jono Shastho</span>{" "}
          Foundation
        </h1>
        <p className="mt-4 text-md md:text-lg drop-shadow-md text-white">
          Providing medical care, education & support to those in need
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Join Now
          </button>
          <button className="px-6 py-3 bg-[var(--color-primary)] hover:bg-teal-600 rounded-lg font-semibold transition">
            Join as Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
