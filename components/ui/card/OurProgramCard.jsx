import Image from "next/image";
import React from "react";

function OurProgramCard({ image, title, description, date }) {
  return (
    <div className="w-92 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 border border-gray-100">
      <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>

      <p className="text-xs text-gray-500 mt-3">{date}</p>
    </div>
  );
}

export default OurProgramCard;
