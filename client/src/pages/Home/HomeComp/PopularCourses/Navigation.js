import React from "react";

const Navigation = ({ initialCategory, handleClick, isCategory }) => {
  return (
    <div className="flex flex-wrap item-center justify-center text-[8px] md:text-base gap-2 md:gap-16 mb-8 lg:mb-12">
      {initialCategory.map((data) => (
        <label
          key={data.id}
          onClick={() => handleClick(data.category)}
          className={`${
            isCategory === data.category
              ? "bg-white text-[#004DB3]"
              : "text-[#A1A1A1]"
          } p-[10px] font-bold cursor-pointer rounded  hover:bg-white hover:text-[#004DB3] duration-300`}
        >
          {data.category}
        </label>
      ))}
    </div>
  );
};

export default Navigation;
