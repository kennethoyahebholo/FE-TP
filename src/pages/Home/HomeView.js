import {
  Hero,
  CompaniesLogoDisplay,
  WeAreTheBest,
  FAQ,
  ConnectWithTheWorld,
  HighQuality,
  PopularCourses,
} from "./HomeComp";

const HomeView = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CompaniesLogoDisplay />
      {/* <HighQuality /> */}
      <WeAreTheBest />
      <PopularCourses />
      <ConnectWithTheWorld />
      <FAQ />
    </div>
  );
};
export default HomeView;
