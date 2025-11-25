import React from "react";
import SectionTitle from "../layout/SectionTitle";
import { FaHeartbeat, FaHandsHelping, FaSchool, FaTint, FaLeaf, FaUsers } from "react-icons/fa";

const programs = [
  {
    icon: <FaHeartbeat size={40} />,
    title: "Free Medical Camps",
    desc: "Providing essential healthcare, checkups, and medicines to underserved communities.",
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: "Emergency Relief",
    desc: "Supporting families with food, water, and essentials during natural disasters.",
  },
  {
    icon: <FaSchool size={40} />,
    title: "Child Education Support",
    desc: "Helping disadvantaged children access education, books, and scholarships.",
  },
  {
    icon: <FaTint size={40} />,
    title: "Blood Donation Network",
    desc: "Connecting donors to save lives during urgent medical needs.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Health Awareness",
    desc: "Training communities on hygiene, nutrition, disease prevention & wellness.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Volunteer Development",
    desc: "Empowering youth to serve humanity through training and social programs.",
  },
];

function OurProgramItems() {
  return (
    <section className="py-12 bg-gray-50">
      <div className=" px-4">
        <SectionTitle
          Title="What We Do"
          description="Enhancing community health and education."
        />

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-[var(--color-primary)] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProgramItems;
