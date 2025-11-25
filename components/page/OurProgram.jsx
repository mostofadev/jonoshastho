"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "@/components/layout/SectionTitle";
import OurProgramCard from "../ui/card/OurProgramCard";

// ✅ IMPORT IMAGES
import program1 from "../../public/ourp.jpeg";
import program2 from "../../public/ourp.jpeg";
import program3 from "../../public/ourp.jpeg";
import program4 from "../../public/ourp.jpeg";

const programs = [
  {
    title: "Free Health Camp",
    description: "Providing medical checkups to underserved communities.",
    image: program1,
    date: "January 10, 2025",
  },
  {
    title: "Blood Donation Drive",
    description: "Organizing voluntary blood donation events nationwide.",
    image: program2,
    date: "December 22, 2024",
  },
  {
    title: "Health Awareness Program",
    description: "Raising awareness on hygiene & disease prevention.",
    image: program3,
    date: "November 05, 2024",
  },
  {
    title: "Medical Aid Support",
    description: "Helping patients get necessary treatments & medicines.",
    image: program4,
    date: "October 15, 2024",
  },
  {
    title: "Blood Donation Drive",
    description: "Organizing voluntary blood donation events nationwide.",
    image: program2,
    date: "December 22, 2024",
  },
  {
    title: "Health Awareness Program",
    description: "Raising awareness on hygiene & disease prevention.",
    image: program3,
    date: "November 05, 2024",
  },
  {
    title: "Medical Aid Support",
    description: "Helping patients get necessary treatments & medicines.",
    image: program4,
    date: "October 15, 2024",
  },
  {
    title: "Blood Donation Drive",
    description: "Organizing voluntary blood donation events nationwide.",
    image: program2,
    date: "December 22, 2024",
  },
  {
    title: "Health Awareness Program",
    description: "Raising awareness on hygiene & disease prevention.",
    image: program3,
    date: "November 05, 2024",
  },
  {
    title: "Medical Aid Support",
    description: "Helping patients get necessary treatments & medicines.",
    image: program4,
    date: "October 15, 2024",
  },
];

const OurPrograms = () => {
  return (
    <section className="py-12 ">
      <div className=" px-4">
        
        <SectionTitle
          Title="Our Programs"
          description="We are working to improve community health & well-being."
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="mt-10"
        >
          {programs.map((item, index) => (
            <SwiperSlide key={index}>
              <OurProgramCard
                image={item.image}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPrograms;
