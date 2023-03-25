import React from "react";
import { TPimages } from "../../../../assets";

const TestimonialCarousel = () => {
  return (
    <div className="w-[345px] md:w-[603px] bg-white px-5 py-8 rounded-3xl">
      <p className="text-[10px] md:text-[14px] font-medium text-[#A2A2A2] mb-4 leading-[15px] md:leading-[23px]">
        High-definition video is video of higher resolution and quality than
        standard definition. high-definition video is video of higher resolution
        and quality than standard definition. build your future with our quality
        education. The Best And Largest All-In-One Online Tutoring Platform In
        The World definition. high-definition video is video of higher
        resolution and quality than standard definition. Build Your Future With
        Our Quality Education. The Best And Largest All-In-One Online Tutoring
        Platform In The World
      </p>
      <div className="flex items-center">
        <img className="mr-[6px]" src={TPimages.user5} alt="" />
        <div>
          <span className="capitalize text-[#000000] text-[14px] font-bold">
            bella moon
          </span>
          <p className="capitalize text-[#A1A1A1] text-[12px]">
            product designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
