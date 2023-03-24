import React from "react";
import { TPimages } from "../../../../assets";

const CoursesComp = ({ ...data }) => {
  return (
    <div className="bg-white w-full md:max-w-[480px] px-3 pt-3 pb-7 rounded-2xl">
      <img className="w-full object-contain" src={data.thumbnail} alt="" />
      <div className="flex justify-between items-center my-3">
        <label className="bg-[#1E5DCE]/20 text-[#1E5DCE] text-[12px] py-[2px] px-4 rounded-2xl font-bold">
          {data.category}
        </label>
        <label className="flex justify-between items-center text-[#A1A1A1] text-[12px] font-bold font-ClashDisplay">
          <label className="flex justify-between items-center mr-2">
            {data.ratings}k
            <img src={TPimages.star} alt="" />
          </label>
          ({data.views}k+)
        </label>
      </div>
      <h4 className="text-[#000F24] text-2xl font-semibold max-w-[260px] leading-[20px] mb-3">
        {data.title}
      </h4>
      <div className="flex justify-between items-center mb-7">
        <div className="flex justify-between items-center">
          <img src={TPimages.schedule} alt="" className="mr-2" />
          <span className="text-[#A1A1A1] text-base font-medium">
            {data.duration}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <img src={TPimages.menuBook} alt="" className="mr-2" />
          <span className="text-[#A1A1A1] text-base font-medium">
            {data.numberOfLessons} lessons
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img className="mr-2" src={data.instructorPicture} alt="" />
          <span className="text-[#000000] text-base font-bold">
            {data.instructor}
          </span>
        </div>
        <h6 className="text-[#004DB3] font-semibold">${data.amount}</h6>
      </div>
    </div>
  );
};

export default CoursesComp;
