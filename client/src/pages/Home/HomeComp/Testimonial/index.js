import React from "react";
import { TestimonialData } from "../../../../utils/TestimonialData";
import TestimonialCarousel from "./TestimonialCarousel";
import "./styles.css";
const Testimonial = ({ testimonialRef }) => {
  return (
    <div
      ref={testimonialRef}
      className="relative flex flex-col w-full h-full bg-[#F8F9FC] pb-8"
    >
      <div className="flex flex-col items-center pt-12 px-5 md:px-20 xl:px-32 mb-8 md:mb-11">
        <h4 className="text-[24px] md:text-[56px] font-black text-[#000F24] text-center z-[2] capitalize">
          what our clients are saying
        </h4>
        <p className="capitalize text-[8px] md:text-lg leading-4 md:leading-[20px] text-[#A2A2A2] font-medium text-center max-w-[280px] md:max-w-[710px] z-[2]">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div className="grid grid-flow-col gap-4 overflow-x-scroll hide-scrollbar px-4">
        {TestimonialData?.map((data) => (
          <TestimonialCarousel key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
