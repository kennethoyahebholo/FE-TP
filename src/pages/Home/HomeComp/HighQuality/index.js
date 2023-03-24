import React from "react";
import { Link } from "react-router-dom";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";
import { UserImgData } from "../../../../utils/userImg";

const HighQuality = () => {
  return (
    <div className="w-full h-full bg-[##F8F9FC] px-5 lg:p-10 xl:px-24 lg:py-[70px]">
      <div className="h-full bg-fuchsia-900 grid grid-cols-1 xl:grid-cols-2 justify-between">
        {/* relative px-5 md:px xl:px-32 lg:min-h-screen grid grid-cols-1
        md:grid-cols-2 bg-slate-500 */}
        {/* <div className="absolute left-[0px] top-[460px]">
          <img className="" src={TPimages.vector1} alt="" />
        </div> */}
        <div className="relative bg-slate-800 flex flex-col xl:items-start pt-[50px] pl-3 mb-16 xl:mb-0">
          {/* <div className="hidden lg:flex absolute right-[150px] top-[-100px]">
            <img className="" src={TPimages.vector3} alt="" />
          </div>
          <div className="hidden lg:flex absolute right-[-50px] bottom-[120px]">
            <img className="" src={TPimages.vector4} alt="" />
          </div> */}
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

            {/* <div className="flex gap-4 mb-5"> */}
            <Button className="capitalize mb-5" variant="full-blue">
              view courses
            </Button>
          </div>
          {/* </div> */}

          <div className="w-full">
            <div className="grid grid-cols-6 grid-rows-2 gap-5 max-w-[450px] m-auto xl:items-start xl:m-0">
              <label className="inline-flex items-center capitalize bg-white py-[14px] pl-4 rounded-lg col-span-3">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#3FA96A]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.volumeUpIcon}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-base font-bold text-[#000F24]">
                  audio classes
                </span>
                <div className="h-10"></div>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[14px] pl-4  rounded-lg col-span-2">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#F79E8E]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.antennaIcon}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-base font-bold text-[#000F24]">
                  live classes
                </span>
                <div className="h-10"></div>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[14px] pl-4 rounded-lg col-span-4">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#9269CD]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.autoPlay}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-base font-bold text-[#000F24]">
                  recorded classes
                </span>
                <div className="h-10"></div>
              </label>

              <label className="inline-flex items-center capitalize bg-white py-[14px] pl-4 rounded-lg col-span-2">
                <label className="inline-flex items-center justify-center p-[9px] bg-[#5978CF]/20 rounded mr-3">
                  <img
                    className=""
                    src={TPimages.autoPlay}
                    alt="volume-up-icon"
                  />
                </label>
                <span className="text-base font-bold text-[#000F24]">
                  50+ notes
                </span>
                <div className="h-10"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center xl:items-start xl:justify-end bg-green-900 pb-32 xl:pb-0">
          {/* <div className="absolute right-[-10px] bottom-[48px]">
            <img
              className="max-w-[50%] md:max-w-[80%] object-contain"
              src={TPimages.VectorDesign}
              alt=""
            />
          </div> */}
          <div className="relative">
            {/* <div className="absolute left-[-100px] bottom-[-100px]">
              <img
                className="max-w-[50%] md:max-w-[80%] object-contain"
                src={TPimages.backImage}
                alt=""
              />
            </div> */}
            <div className="relative w-full bg-black-100 max-w-[460px]">
              <div className="absolute right-[-100px] bottom-[-50px] z-[1]">
                <img
                  className="max-w-[250px] object-contain"
                  src={TPimages.VectorDesign}
                  alt=""
                />
              </div>
              <div className="absolute sm-left-[-90px] md:left-[-155px] bottom-[-100px]">
                <img
                  className="max-w-[80%] md:max-w-[80%] object-contain"
                  src={TPimages.backImage}
                  alt=""
                />
              </div>
              {/* <div className="absolute flex flex-col pt-2 items-center justify-center left-[-140px] top-[110px] bg-white pl-5 pr-8 rounded-lg">
                {UserImgData.length > 4 && (
                  <div className="flex items-center justify-center text-[#000F24]">
                    <p className="text-sm text-xs font-bold">
                      255k+ Enrolled Students
                    </p>
                  </div>
                )}

                <div className="flex -mt-2">
                  {UserImgData.length <= 5
                    ? UserImgData.map((item) => (
                        <img
                          key={item.id}
                          src={item.userImgUrl}
                          className="rounded-full h-8 w-8 md:h-16 lg:w-[44px] -mr-2 md:-mr-6 object-contain"
                          alt=""
                        />
                      ))
                    : UserImgData.slice(0, 5).map((item) => (
                        <img
                          key={item.id}
                          src={item.userImgUrl}
                          className="rounded-full h-8 w-8 md:h-16 lg:w-[44px] -mr-2 lg:-mr-4 object-contain"
                          alt=""
                        />
                      ))}
                </div>
              </div> */}
              <div className="z-[4]">
                <img
                  src={TPimages.backgroundBoy}
                  // className="max-w-[380px] md:max-w-full object-contain"
                  className="object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighQuality;

// max-w-[50%] md:max-w-[80%] object-contain]
