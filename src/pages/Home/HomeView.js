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

const HomeView = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CompaniesLogoDisplay />
      {/* <HighQuality /> */}
      <WeAreTheBest />
      <PopularCourses />
      <Testimonial />
      <ConnectWithTheWorld />
      <FAQ />
    </div>
  );
};
export default HomeView;
