"use client";

import React from "react";
import ImageOne from "../../public/blog.jpg";
import ImageTwo from "../../public/blog.jpg";
import ImageThree from "../../public/blog.jpg";
import ImageFour from "../../public/blog.jpg";
import ImageFive from "../../public/blog.jpg";
import ImageSix from "../../public/blog.jpg";
import ImageSeven from "../../public/blog.jpg";
import ImageEight from "../../public/blog.jpg";
import SectionTitle from "../layout/SectionTitle";
import BlogCard from "../ui/card/BlogCard";

const blogs = [
  {
    title: "Free Health Camp in Rural Areas",
    image: ImageOne,
    excerpt:
      "We organized a free health camp to provide medical checkups and medicines to underserved communities.",
    publishedDate: "March 10, 2025",
  },
  {
    title: "Blood Donation Drive Success",
    image: ImageTwo,
    excerpt:
      "Our voluntary blood donation drive helped collect life-saving blood for patients in critical need.",
    publishedDate: "April 5, 2025",
  },
  {
    title: "Health Awareness Program",
    image: ImageThree,
    excerpt:
      "We conducted programs to educate communities on hygiene and disease prevention.",
    publishedDate: "April 15, 2025",
  },
  {
    title: "Medical Aid Support",
    image: ImageFour,
    excerpt:
      "Providing essential medicines and financial support to patients in need.",
    publishedDate: "May 1, 2025",
  },
  {
    title: "Educational Outreach",
    image: ImageFive,
    excerpt:
      "Our team conducted sessions in schools to promote education and awareness.",
    publishedDate: "May 10, 2025",
  },
  {
    title: "Nutrition Program",
    image: ImageSix,
    excerpt:
      "We helped children and families with proper nutrition and food distribution.",
    publishedDate: "May 20, 2025",
  },
  {
    title: "Community Hygiene Initiative",
    image: ImageSeven,
    excerpt:
      "Started programs to improve sanitation and clean water access in villages.",
    publishedDate: "June 5, 2025",
  },
  {
    title: "Emergency Response Team",
    image: ImageEight,
    excerpt:
      "Rapid response to emergencies and disasters with medical and logistical support.",
    publishedDate: "June 15, 2025",
  },
];

function BlogItems() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="  px-4">
        <SectionTitle
        Title="Our Latest Blogs"
        description="Read about the impact we are making in communities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogItems;
