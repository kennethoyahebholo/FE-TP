import React from "react";

const TestimonialCarousel = ({ ...data }) => {
  return (
    <div className="w-[345px] md:w-[603px] bg-white px-5 py-8 rounded-3xl">
      <p className="text-[10px] md:text-[14px] font-medium text-[#A2A2A2] mb-4 leading-[15px] md:leading-[23px]">
        {data.comments}
      </p>
      <div className="flex items-center">
        <img className="mr-[6px]" src={data.pic} alt="" />
        <div>
          <span className="capitalize text-[#000000] text-[14px] font-bold">
            {data.client}
          </span>
          <p className="capitalize text-[#A1A1A1] text-[12px]">
            {data.profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
