"use client";

import React from "react";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { title, image, excerpt, publishedDate } = blog;

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition p-4 cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-semibold cursor-pointer hover:text-[var(--color-primary)]">
          {title}
        </h2>

        <p className="text-gray-600 text-sm">{excerpt}</p>

        <p className="text-gray-400 text-xs mt-2">
          Published on {publishedDate}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
