import React from "react";

const CardComp = ({ ...data }) => {
  return (
    <div className="max-w-[307px] bg-white p-5 rounded-lg">
      <img
        className={`${data.bg} p-3 rounded mb-[20px]`}
        src={data.IconUrl}
        alt=""
      />
      <h5 className="capitalize">{data.title}</h5>
      <p className="capitalize text-[12px] font-medium text-[#A1A1A1] leading-[24px] max-w-[250px]">
        {data.details}
      </p>
    </div>
  );
};

export default CardComp;
