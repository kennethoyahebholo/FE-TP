import React from "react";
import { Link } from "react-router-dom";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";
import CardComp from "./CardComp";
import { QualitiesData } from "../../../../utils/qualities";

const WeAreTheBest = () => {
  return (
    <div className="relative w-full h-full bg-[#F8F9FC]  px-5 md:px-20 xl:px-27 py-[70px]">
      <img
        src={TPimages.vectorBest1}
        alt=""
        className="absolute right-[400px] top-[28px]"
      />
      <img
        src={TPimages.vectorBest2}
        alt=""
        className="absolute left-[2px] bottom-[80px] md:left-[30px] md:bottom-[180px]"
      />
      <img
        src={TPimages.vectorBest3}
        alt=""
        className="absolute right-[2px] bottom-[80px] md:right-[30px] md:bottom-[50px]"
      />
      <div className="h-full grid grid-cols-1 xl:grid-cols-2 gap-10 justify-between items-center">
        <div className="flex flex-col xl:items-start mb-5">
          <div className="flex items-center flex-col xl:items-start mb-4">
            <h3 className="capitalize text-[24px] md:text-[42px] font-bold leading-[38px] md:leading-[55px] text-[#000F24] text-center xl:text-start max-w-[450px] lg:max-w-[530px]">
              this is why we are best from others
            </h3>

            <p className="capitalize text-[#A2A2A2] max-w-[320px] lg:max-w-[448px] mt-2 mb-7 text-[8px] md:text-lg text-center xl:text-start leading-4 md:leading-[25px]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <div className="max-w-[590px] md:max-w-[600px]">
              <img src={TPimages.boyOnPc} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-6 self-center m-auto">
          {QualitiesData.map((data) => (
            <CardComp key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeAreTheBest;
