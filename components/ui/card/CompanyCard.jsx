"use client";

import React from "react";
import Image from "next/image";

function CompanyCard({ image, name, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105">
      {/* Company Logo / Image */}
      <div className="w-24 h-24 mb-4 relative">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>

      {/* Company Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Short Description */}
      {description && <p className="text-gray-600 text-sm mt-2">{description}</p>}
    </div>
  );
}

export default CompanyCard;
