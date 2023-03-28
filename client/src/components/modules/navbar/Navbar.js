import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import { TPFooterLogo, Menu, Button } from "../../../components";
import { TPimages } from "../../../assets";
import SideBar from "../sidebar";
import NavComp from "./NavComp";

const Navbar = ({ transparent = false }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${"bg-transparent"} lg:relative top-0 left-0 right-0 text-white z-50`}
    >
      <div className="relative w-full h-[10vh] px-3 md:px-10 xl:px-32 py-16 flex items-center justify-between z-5">
        <Link to="">
          <TPFooterLogo />
        </Link>

        <div className="items-center gap-5">
          <NavComp />
          <div className="inline-flex items-center space-x-3">
            <label
              onClick={() => {
                setShow(true);
              }}
              className="flex items-center lg:hidden"
            >
              <img src={TPimages.menuIcon} alt="" />
            </label>
          </div>
        </div>
      </div>
      <SideBar show={show} setShow={setShow} />
    </div>
  );
};

export default Navbar;
