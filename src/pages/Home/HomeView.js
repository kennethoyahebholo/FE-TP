import {
  Hero,
  CompaniesLogoDisplay,
  FAQ,
  ConnectWithTheWorld,
} from "./HomeComp";

const HomeView = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CompaniesLogoDisplay />
      <ConnectWithTheWorld />
      <FAQ />
    </div>
  );
};
export default HomeView;
