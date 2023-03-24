import {
  Hero,
  CompaniesLogoDisplay,
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
      <PopularCourses />
      <ConnectWithTheWorld />
      <FAQ />
    </div>
  );
};
export default HomeView;
