import React from "react";
import OurTeamCard from "../ui/card/OurTeamCard";
import SectionTitle from "../layout/SectionTitle";
import Image from '../../public/team.jpeg'
// Team data
const teamMembers = [
  {
    name: "Dr. Rahim Uddin",
    role: "Founder & Head Doctor",
    image: Image,
    bio: "Leading health initiatives and community programs.",
    social: {
      linkedin: "https://linkedin.com/rahim",
      facebook: "https://facebook.com/rahim",
      twitter: "https://twitter.com/rahim",
    },
  },
  {
    name: "Ayesha Begum",
    role: "Volunteer Coordinator",
    image: Image,
    bio: "Organizes volunteers and field programs efficiently.",
    social: {
      linkedin: "https://linkedin.com/ayesha",
      facebook: "https://facebook.com/ayesha",
    },
  },
  {
    name: "Karim Ali",
    role: "Community Health Officer",
    image: Image,
    bio: "Works directly with communities to provide medical aid.",
  },
  {
    name: "Dr. Rahim Uddin",
    role: "Founder & Head Doctor",
    image: Image,
    bio: "Leading health initiatives and community programs.",
    social: {
      linkedin: "https://linkedin.com/rahim",
      facebook: "https://facebook.com/rahim",
      twitter: "https://twitter.com/rahim",
    },
  },
  {
    name: "Ayesha Begum",
    role: "Volunteer Coordinator",
    image: Image,
    bio: "Organizes volunteers and field programs efficiently.",
    social: {
      linkedin: "https://linkedin.com/ayesha",
      facebook: "https://facebook.com/ayesha",
    },
  },
  {
    name: "Karim Ali",
    role: "Community Health Officer",
    image:Image,
    bio: "Works directly with communities to provide medical aid.",
  },

  {
    name: "Dr. Rahim Uddin",
    role: "Founder & Head Doctor",
    image: Image,
    bio: "Leading health initiatives and community programs.",
    social: {
      linkedin: "https://linkedin.com/rahim",
      facebook: "https://facebook.com/rahim",
      twitter: "https://twitter.com/rahim",
    },
  },
  {
    name: "Ayesha Begum",
    role: "Volunteer Coordinator",
    image:Image,
    bio: "Organizes volunteers and field programs efficiently.",
    social: {
      linkedin: "https://linkedin.com/ayesha",
      facebook: "https://facebook.com/ayesha",
    },
  },
  
];

function OurTeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" px-4">
        {/* Section Title */}
        <SectionTitle
          Title="Our Team"
          description="Meet the people making a difference"
        />

        {/* Team Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <OurTeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
