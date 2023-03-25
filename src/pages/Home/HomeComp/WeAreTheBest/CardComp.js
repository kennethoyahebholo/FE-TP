import React from "react";

const CardComp = ({ ...data }) => {
  return (
    <div className="max-w-[194px] md:max-w-[307px] bg-white p-5 rounded-lg">
      <img
        className={`${data.bg} p-2 md:p-3 rounded mb-2 md:mb-[20px] w-[30px] md:w-[50px] `}
        src={data.IconUrl}
        alt=""
      />
      <p className="capitalize text-[12px] mb-[4px]">{data.title}</p>
      <p className="capitalize text-[8px] md:text-[12px] font-medium text-[#A1A1A1] leading-[20px] md:leading-[24px] max-w-full md:max-w-[250px]">
        {data.details}
      </p>
    </div>
  );
};

export default CardComp;
