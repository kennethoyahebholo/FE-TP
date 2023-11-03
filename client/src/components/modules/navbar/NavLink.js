import React from "react";

const NavLink = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="pb-px px-1 text-base cursor-pointer text-white hover:text-[#e2d046]"
    >
      {children}
    </div>
  );
};

export default NavLink;
