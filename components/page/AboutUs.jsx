import Image from "next/image";
import React from "react";
import AboutImage from "../../public/about.jpg";
import LinkButton from "../ui/button/LinkButton";

function AboutUs() {
  return (
    <section className="py-20 bg-gray-50 rounded-">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 ">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 text-[var(--color-text)]">
           <span className="text-[var(--color-primary)]">About Jono </span>Shato Foundation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed text-[var(--color-text)]">
            Jono Shato Foundation is committed to bringing healthcare, education, 
            and essential support to underserved communities across the region. 
            Our dedicated team of volunteers and professionals work tirelessly to 
            ensure that everyone, regardless of background or income, has access 
            to quality healthcare services.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            Through medical camps, health awareness programs, vaccination drives, 
            and distribution of medicines and resources, we aim to improve overall 
            community well-being. Every initiative is designed with care, compassion, 
            and the goal of creating a healthier, happier society.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Join us in our mission to make a meaningful difference. Together, 
            we can provide support to those in need and spread awareness about 
            health, nutrition, and preventive care.
          </p>

          {/* Learn More Button */}
          <LinkButton href="/about" label="Learn More" />
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={AboutImage}
            alt="About Jono Shato Foundation"
            className="rounded-xl shadow-xl"
            width={600}
            height={450}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
