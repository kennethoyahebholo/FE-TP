import React from "react";
import { TestimonialData } from "../../../../utils/TestimonialData";
import TestimonialCarousel from "./TestimonialCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 2.3,
    swipeToSlide: true,
    className: "center",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-[#F8F9FC] pb-8">
      <div className="flex flex-col items-center pt-12 px-5 md:px-20 xl:px-32 mb-8 md:mb-11">
        <h4 className="text-[24px] md:text-[56px] font-black text-[#000F24] text-center z-[2] capitalize">
          what our clients are saying
        </h4>
        <p className="capitalize text-[8px] md:text-[16px] leading-4 md:leading-[20px] text-[#A2A2A2] font-medium text-center max-w-[280px] md:max-w-[710px] z-[2]">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <Slider {...settings}>
        {TestimonialData?.map((data) => (
          <TestimonialCarousel key={data.id} {...data} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
