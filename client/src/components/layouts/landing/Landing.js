import React from "react";
import { useLocation } from "react-router-dom";

import { Footer, Navbar } from "../../modules";

const Landing = ({ children, footer = true, handleClick }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative w-full min-h-screen">
      {pathname === "/" ? (
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar handleClick={handleClick} transparent />
        </div>
      ) : (
        <Navbar handleClick={handleClick} />
      )}

      <div className={`${pathname === "/" ? "pt-0" : "pt-[10vh]"} lg:pt-0`}>
        {children}
        {footer && <Footer />}
      </div>
    </div>
  );
};

export default Landing;
