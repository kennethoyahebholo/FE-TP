import { Hero, CompaniesLogoDisplay, FAQ } from "./HomeComp";

const HomeView = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CompaniesLogoDisplay />
      <FAQ />
    </div>
  );
};
export default HomeView;
