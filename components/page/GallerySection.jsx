"use client";

import Image from "next/image";
import React from "react";
import SectionTitle from "../layout/SectionTitle";

// Gallery Images (public folder এ রাখবে)
import gallery1 from "/images/gallery1.jpg";
import gallery2 from "/images/gallery2.jpg";
import gallery3 from "/images/gallery3.jpg";
import gallery4 from "/images/gallery4.jpg";
import gallery5 from "/images/gallery5.jpg";
import gallery6 from "/images/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
          Title="Gallery"
          description="Snapshots from our programs and activities"
        />

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
