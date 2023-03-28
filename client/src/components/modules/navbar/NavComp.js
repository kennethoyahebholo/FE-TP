import React from "react";
import { Button } from "../../widgets";
import NavLink from "./NavLink";

const NavComp = ({ className, linkClass }) => {
  return (
    <div className={className || "hidden lg:inline-flex items-center gap-5"}>
      <div className={linkClass || "space-x-3"}>
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
  );
};

export default NavComp;
