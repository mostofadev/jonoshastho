import Image from "next/image";
import React from "react";

function SuccessStoryCard({ image, name, story }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
      {/* Image */}
      <div className=" rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{name}</h3>

      {/* Story */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">{story}</p>
    </div>
  );
}

export default SuccessStoryCard;
