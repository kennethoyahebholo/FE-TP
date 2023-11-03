import React from "react";
import { Button } from "../../widgets";
import NavLink from "./NavLink";

const NavComp = ({ className, linkClass, handleClick }) => {
  const appLinks = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Courses",
    },
    {
      id: 4,
      name: "Testimonial",
    },
    {
      id: 5,
      name: "Community",
    },
    {
      id: 6,
      name: "FAQ",
    },
  ];

  return (
    <div className={className || "hidden lg:inline-flex items-center gap-5"}>
      <div className={linkClass || "space-x-3 flex"}>
        {appLinks?.map((list) => (
          <NavLink key={list?.id} onClick={() => handleClick(list?.name)}>
            {list?.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Button className="">Enroll Now</Button>
      </div>
    </div>
  );
};

export default NavComp;
