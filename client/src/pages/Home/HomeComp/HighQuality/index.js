import React from "react";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";
import { UserImgData } from "../../../../utils/userImg";

const HighQuality = () => {
  return (
    <div className="w-full h-full bg-[#F8F9FC] lg:py-[70px]">
      <div className="relative h-full grid grid-cols-1 xl:grid-cols-2 justify-between">
        <img
          className="absolute bottom-0 right-0 w-[50px]"
          src={TPimages.corner}
          alt=""
        />
        <img
          className="absolute top-[40px] right-0 w-[50px]"
          src={TPimages.greenZig}
          alt=""
        />
        <img
          className="absolute bottom-[50px] right-[250px] w-[15px]"
          src={TPimages.pCircle}
          alt=""
        />
        <div className="relative flex flex-col xl:items-start pt-[50px] pl-3 mb-16 xl:mb-0 px-5 lg:p-10 xl:px-24">
          <div className="relative  flex items-center flex-col xl:items-start mb-4">
            <div className="relative">
              <div className="absolute hidden sm:flex left-[-50px] top-[-38px]">
                <img className="" src={TPimages.VectorCrown} alt="" />
              </div>
              <h3 className="text-[32px] md:text-[42px] font-bold leading-[38px] md:leading-[55px] text-[#000F24] text-center xl:text-start max-w-[480px] lg:max-w-[530px]">
                High quality video, audio & live classes
              </h3>
            </div>
            <p className="capitalize text-[#A2A2A2] max-w-[485px] md:max-w-[448px] mt-2 mb-7 text-base text-center xl:text-start">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <Button className="capitalize mb-5" variant="full-blue">
              view courses
            </Button>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-6 grid-rows-2 gap-3 md:gap-5 max-w-[520px] m-auto xl:items-start xl:m-0">
              <label className="inline-flex items-center capitalize bg-white py-[8px] md:py-[14px] pl-4 rounded-lg col-span-3">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#3FA96A]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.volumeUpIcon}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-[8px] md:text-lg font-bold text-[#000F24]">
                  audio classes
                </span>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[8px] md:py-[14px] pl-4  rounded-lg col-span-2">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#F79E8E]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.antennaIcon}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-[8px] md:text-lg font-bold text-[#000F24]">
                  live classes
                </span>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[8px] md:py-[14px] pl-4 rounded-lg col-span-4">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#9269CD]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.autoPlay}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-[8px] md:text-lg font-bold text-[#000F24] ">
                  recorded classes
                </span>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[8px] md:py-[14px] pl-4 rounded-lg col-span-2">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#5978CF]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.autoPlay}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-[8px] md:text-lg font-bold text-[#000F24]">
                  50+ notes
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pb-20">
          <div className="relativew-full flex justify-center pr-0 lg:pr-10">
            <div className=" bg-white z-20 -mr-[100px]  lg:-mr-[180px] max-h-[36px] lg:max-h-[66px] max-w-[210px] mt-[100px] lg:mt-[170px] py-1 px-2 lg:pl-3 lg:pr-4 rounded-[3.50685px] lg-rounded-[8px]">
              {UserImgData.length > 4 && (
                <div className="flex items-center justify-center text-[#000F24]">
                  <p className="text-[6px] lg:text-[12px] font-bold">
                    255k+ Enrolled Students
                  </p>
                </div>
              )}
              <div className="flex items-center justify-center">
                {UserImgData.length <= 5
                  ? UserImgData.map((item) => (
                      <img
                        key={item.id}
                        src={item.userImgUrl}
                        className="rounded-full h-[16px] w-[16px] lg:h-[36px] lg:w-[36px] -mr-[4px] lg:-mr-[16px] object-contain"
                        alt=""
                      />
                    ))
                  : UserImgData.slice(0, 5).map((item) => (
                      <img
                        key={item.id}
                        src={item.userImgUrl}
                        className="rounded-full h-[16px] w-[16px] lg:h-[36px] lg:w-[36px] -mr-[4px] lg:-mr-[16px] object-contain"
                        alt=""
                      />
                    ))}
              </div>
            </div>
            <img
              src={TPimages.backImage}
              className=" max-w-[170px] lg:max-w-[280px] object-contain z-20 -mr-[100px] mt-[200px] lg:mt-[330px] lg:-mr-[150px]"
              alt=""
            />
            <img
              src={TPimages.backgroundBoy}
              className=" max-w-[250px] lg:max-w-[450px] object-contain z-10"
              alt=""
            />
            <img
              className="max-w-[91px] lg:max-w-[150px] object-contain -ml-[50px] lg:-ml-[100px] mt-[200px] lg:mt-[250px]"
              src={TPimages.VectorDesign}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQuality;
