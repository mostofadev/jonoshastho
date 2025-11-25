import React from "react";
import CompanyCard from "../ui/card/CompanyCard";
import SectionTitle from "../layout/SectionTitle";
import Image from "../../public/com.png"
// Example Company Data
const companies = [
  {
    name: "HealthCare Global",
    image: Image,
    description: "Leading healthcare solutions provider in Bangladesh.",
  },
  {
    name: "EduAid Foundation",
    image: Image,
    description: "Supporting education programs for underserved children.",
  },
  {
    name: "CleanWater NGO",
    image: Image,
    description: "Providing clean water facilities to rural communities.",
  },
  {
    name: "FoodRelief Network",
    image: Image,
    description: "Helping distribute food to people in need nationwide.",
  },
];

function CompanyItems() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4">
        {/* Section Title */}
        <SectionTitle
          Title="Our Other Companies"
          description="Organizations and partners working alongside Jono Shato Foundation"
        />

        {/* Company Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyItems;
