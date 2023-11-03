import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeView from "./HomeView";
import { Landing } from "../../components";

export const HomeContainer = () => {
  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  const home = useRef(null);
  const aboutUs = useRef(null);
  const courses = useRef(null);
  const testimonial = useRef(null);
  const community = useRef(null);
  const faq = useRef(null);

  const executeScrollToHome = () => scrollToRef(home);
  const executeScrollToAboutUs = () => scrollToRef(aboutUs);
  const executeScrollToCourses = () => scrollToRef(courses);
  const executeScrollToTestimonial = () => scrollToRef(testimonial);
  const executeScrollToCommunity = () => scrollToRef(community);
  const executeScrollToFaq = () => scrollToRef(faq);

  const handleClick = (tabName) => {
    switch (tabName) {
      case "Home":
        return executeScrollToHome();
      case "About Us":
        return executeScrollToAboutUs();
      case "Courses":
        return executeScrollToCourses();
      case "Testimonial":
        return executeScrollToTestimonial();
      case "Community":
        return executeScrollToCommunity();
      case "FAQ":
        return executeScrollToFaq();
      default:
        // Handle the case when tabName doesn't match any of the cases
        break;
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the window
    });
  }, []);

  return (
    <Landing handleClick={handleClick}>
      <HomeView
        homeRef={home}
        aboutUsRef={aboutUs}
        coursesRef={courses}
        testimonialRef={testimonial}
        communityRef={community}
        faqRef={faq}
      />
    </Landing>
  );
};
