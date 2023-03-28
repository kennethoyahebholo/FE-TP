import React from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import { TPFooterLogo, Menu, Button } from "../../../components";
import { TPimages } from "../../../assets";
import SideBar from "../sidebar";

const Navbar = ({ transparent = false }) => {
  return (
    <div
      className={`${"bg-transparent"} lg:relative top-0 left-0 right-0 text-white z-50`}
    >
      <div className="relative w-full h-[10vh] px-3 md:px-10 xl:px-32 py-16 flex items-center justify-between z-5">
        <Link to="">
          <TPFooterLogo />
        </Link>

        <div className="items-center gap-5">
          <div className="hidden lg:inline-flex items-center gap-5">
            <div className="space-x-3">
              <NavLink to="">Home</NavLink>
              <NavLink to="">About Us</NavLink>
              <NavLink to="#">Courses</NavLink>
              <NavLink to="">Testimonial</NavLink>
              <NavLink to="">Community</NavLink>
            </div>
            <div>
              <Button className="">Enroll Now</Button>
            </div>
          </div>
          <div className="inline-flex items-center space-x-3">
            <div className="flex items-center lg:hidden">
              {/* <Menu toggle={() => {}} /> */}
              <img src={TPimages.menuIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Navbar;
