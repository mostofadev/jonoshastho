"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function OurTeamCard({ image, name, role, bio, social }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105">
      {/* Member Image */}
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm mb-3">{role}</p>

      {/* Short Bio */}
      {bio && <p className="text-gray-600 text-sm">{bio}</p>}

      {/* Social Links */}
      {social && (
        <div className="flex gap-3 mt-4">
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-blue-600 hover:text-blue-800 transition" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-700 hover:text-blue-900 transition" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-blue-600 transition" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default OurTeamCard;
