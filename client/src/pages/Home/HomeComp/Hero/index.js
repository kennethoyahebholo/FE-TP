import React from "react";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";
import { UserImgData } from "../../../../utils/userImg";

const Hero = ({ homeRef }) => {
  return (
    <div
      ref={homeRef}
      className="w-full h-full bg-[#004db3]"
      style={{ backgroundImage: `url('${TPimages.heroBackground}')` }}
    >
      <div
        className="relative px-5 md:px-20 xl:px-32 pt-[130px] lg:pt-[100px] lg:h-screen grid grid-cols-1
        md:grid-cols-2 items-end justify-between"
      >
        <div className="absolute left-[0px] top-[460px]">
          <img className="" src={TPimages.vector1} alt="" />
        </div>
        <div
          data-aos="fade-right"
          className="pb-[40px] lg:pb-[130px] relative  flex flex-col items-center md:items-start"
        >
          <div className="hidden lg:flex absolute left-[35px] top-[-110px]">
            <img className="" src={TPimages.vector2} alt="" />
          </div>
          <div className="hidden lg:flex absolute right-[150px] top-[-100px]">
            <img className="" src={TPimages.vector3} alt="" />
          </div>
          <div className="hidden lg:flex absolute right-[-50px] bottom-[120px]">
            <img className="" src={TPimages.vector4} alt="" />
          </div>
          <div className="">
            <h3 className="text-[32px] md:text-[50px] font-bold leading-[38px] md:leading-[55px] text-white text-center md:text-start max-w-[400px] lg:max-w-[600px]">
              Grow your skills to advance your career path
            </h3>
          </div>

          <p className="capitalize text-white max-w-[300px] md:max-w-[378px] mt-2 mb-7 text-[8px] md:text-lg text-center md:text-start">
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>

          <div className="flex gap-4 mb-5">
            <Button icon variant="not-full">
              Get Started Now
            </Button>
            <Button className="">Enroll Now</Button>
          </div>

          <div className="flex mb-5 md:mb-0 items-center">
            {UserImgData.length <= 5
              ? UserImgData.map((item) => (
                  <img
                    key={item.id}
                    src={item.userImgUrl}
                    className="rounded-full h-8 w-8 md:h-16 lg:w-16 -mr-2 md:-mr-6 object-contain"
                    alt=""
                  />
                ))
              : UserImgData.slice(0, 5).map((item) => (
                  <img
                    key={item.id}
                    src={item.userImgUrl}
                    className="rounded-full h-8 w-8 md:h-16 lg:w-16 -mr-2 lg:-mr-6 object-contain"
                    alt=""
                  />
                ))}
            {UserImgData.length > 4 && (
              <div className="flex flex-col items-center ml-3 lg:ml-8 text-white leading-[14px] lg:leading-4">
                <h4 className="text-2x font-bold">255k+</h4>
                <p className="text-sm">Previews</p>
              </div>
            )}
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="flex md:hidden absolute right-[30px] top-[-125px]">
            <img className="" src={TPimages.vector5} alt="" />
          </div>
          <img
            src={TPimages.youngWomanVector}
            className="max-w-[380px] md:max-w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
