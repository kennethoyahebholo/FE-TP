import React from "react";
import {
  Hero,
  CompaniesLogoDisplay,
  WeAreTheBest,
  FAQ,
  ConnectWithTheWorld,
  HighQuality,
  PopularCourses,
  Testimonial,
} from "./HomeComp";

const HomeView = ({
  homeRef,
  aboutUsRef,
  coursesRef,
  testimonialRef,
  communityRef,
  faqRef,
}) => {
  return (
    <div className="overflow-hidden">
      <Hero homeRef={homeRef} />
      <CompaniesLogoDisplay />
      <HighQuality />
      <WeAreTheBest aboutUsRef={aboutUsRef} />
      <PopularCourses coursesRef={coursesRef} />
      <Testimonial testimonialRef={testimonialRef} />
      <ConnectWithTheWorld communityRef={communityRef} />
      <FAQ faqRef={faqRef} />
    </div>
  );
};
export default HomeView;
