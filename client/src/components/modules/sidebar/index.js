import React from "react";
import NavComp from "../navbar/NavComp";

const SideBar = ({ show, setShow }) => {
  return (
    <div
      className={`fixed md:hidden ${
        show ? "right-0" : "right-[-250px]"
      } top-0 bg-slate-400 w-[220px] h-[100vh] flex justify-end px-4 py-[52px] transition-all duration-500 drop-shadow-lg`}
    >
      <div>
        <label
          onClick={() => {
            setShow(false);
          }}
          className="flex justify-end mb-10"
        >
          X
        </label>
        <NavComp
          className="flex flex-col"
          linkClass="grid gap-6 text-end mb-10"
        />
      </div>
    </div>
  );
};

export default SideBar;
