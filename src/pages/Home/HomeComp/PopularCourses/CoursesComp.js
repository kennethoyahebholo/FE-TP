import React from "react";
import { TPimages } from "../../../../assets";

const CoursesComp = ({ ...data }) => {
  return (
    <div className="bg-white max-w-[194px] lg:max-w-[480px] px-3 pt-3 pb-7 rounded-2xl">
      <img className="w-full object-contain" src={data.thumbnail} alt="" />
      <div className="flex justify-between items-center my-3">
        <label className="bg-[#1E5DCE]/20 text-[#1E5DCE] text-[4px] lg:text-[12px] py-[2px] px-2 lg:px-4 rounded-2xl font-bold">
          {data.category}
        </label>
        <label className="flex justify-between items-center text-[#A1A1A1] text-[4px] lg:text-[12px] font-bold font-ClashDisplay">
          <label className="flex justify-between items-center mr-2">
            {data.ratings}k
            <img
              src={TPimages.star}
              className="max-w-[4px] lg:max-w-[14px]"
              alt=""
            />
          </label>
          ({data.views}k+)
        </label>
      </div>
      <h4 className="text-[#000F24] text-[8px] lg:text-[19px] font-semibold max-w-[140px] lg:max-w-[300px] leading-[10px] lg:leading-[23px] mb-[6px] lg:mb-3">
        {data.title}
      </h4>
      <div className="flex justify-between items-center mb-4 lg:mb-7">
        <div className="flex justify-between items-center">
          <img
            src={TPimages.schedule}
            alt=""
            className="mr-1 lg:mr-2 max-w-[7px] lg:max-w-[20px]"
          />
          <span className="text-[#A1A1A1] text-[4px] lg:text-[16px] font-medium">
            {data.duration}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <img
            src={TPimages.menuBook}
            alt=""
            className="mr-1 lg:mr-2 max-w-[8px] lg:max-w-[22px]"
          />
          <span className="text-[#A1A1A1] text-[4px] lg:text-[16px] font-medium">
            {data.numberOfLessons} lessons
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img
            className="mr-2 max-w-[16px] lg:max-w-[40px] object-contain"
            src={data.instructorPicture}
            alt=""
          />
          <span className="text-[#000000] text-[6px] lg:text-base font-bold">
            {data.instructor}
          </span>
        </div>
        <h6 className="text-[#004DB3] font-semibold text-[8px] lg:text-[20px]">
          ${data.amount}
        </h6>
      </div>
    </div>
  );
};

export default CoursesComp;
