import MarginSection from "@/components/layout/Margin";
import AboutUs from "@/components/page/AboutUs";
import Banner from "@/components/page/Banner";
import BlogItems from "@/components/page/BlogItems";
import CompanyItems from "@/components/page/CompanyItems";
import OurPrograms from "@/components/page/OurProgram";
import OurProgramItems from "@/components/page/OurProgramItems";
import OurTeamSection from "@/components/page/OurTeamSection";
import SuccessStoriesSlider from "@/components/page/SuccessStoriesSlider";
import BarsLoader from "@/components/ui/BarsLoader";
import Image from "next/image";

export default function Home() {
  return (
   <MarginSection>
    <BarsLoader />
    <Banner />
    <AboutUs />
    <OurPrograms />
    <OurProgramItems />
    <SuccessStoriesSlider />
    <OurTeamSection />
    <CompanyItems />
    <BlogItems />
   </MarginSection>
  );
}
