"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import SectionTitle from "../layout/SectionTitle";

const successStories = [
  {
    title: "Free Health Camp Success",
    text: "Rahim received free treatment and medical guidance. His life improved significantly thanks to our programs.",
    name: "Rahim Uddin",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Blood Donation Drive Impact",
    text: "Ayesha benefitted from our blood donation event and her father got critical support during emergency.",
    name: "Ayesha Begum",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Community Health Awareness",
    text: "Karim attended our hygiene and disease prevention session and adopted a healthier lifestyle.",
    name: "Karim Ali",
    job: "Bangladesh",
    stars: 4,
  },
   {
    title: "Free Health Camp Success",
    text: "Rahim received free treatment and medical guidance. His life improved significantly thanks to our programs.",
    name: "Rahim Uddin",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Blood Donation Drive Impact",
    text: "Ayesha benefitted from our blood donation event and her father got critical support during emergency.",
    name: "Ayesha Begum",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Community Health Awareness",
    text: "Karim attended our hygiene and disease prevention session and adopted a healthier lifestyle.",
    name: "Karim Ali",
    job: "Bangladesh",
    stars: 4,
  },

   {
    title: "Free Health Camp Success",
    text: "Rahim received free treatment and medical guidance. His life improved significantly thanks to our programs.",
    name: "Rahim Uddin",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Blood Donation Drive Impact",
    text: "Ayesha benefitted from our blood donation event and her father got critical support during emergency.",
    name: "Ayesha Begum",
    job: "Bangladesh",
    stars: 5,
  },
  {
    title: "Community Health Awareness",
    text: "Karim attended our hygiene and disease prevention session and adopted a healthier lifestyle.",
    name: "Karim Ali",
    job: "Bangladesh",
    stars: 4,
  },

];

const SuccessStorySlider = () => {
  return (
    <section className="py-12">
      <div className=" px-4">
        {/* Section Title */}
        <SectionTitle
          Title="Success Stories"
          description="Real people. Real impact. Real change."
        />

        <div className="mt-10 relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {story.title}
                  </h2>

                  {/* Text */}
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {story.text}
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                    {Array(story.stars)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>

                  {/* Name & Job */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {story.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{story.job}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySlider;
