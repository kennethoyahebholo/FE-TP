import React from "react";
import QuestionsComp from "./QuestionsComp";
import { FaqList } from "../../../../utils/faqList";
import { TPimages } from "../../../../assets";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-full lg:min-h-screen bg-[#FFFF] py-12 px-5">
      <div className="absolute top-[130px] md:top-[240px] left-0 z-[1]">
        <img src={TPimages.QaDesign} className="w-[30%] md:w-[70%]" alt="" />
      </div>
      <div className="absolute top-[30px] md:top-[80px] right-[2px] md:right-[250px] z-[1]">
        <img
          src={TPimages.CircleDesign}
          alt=""
          className="w-[30%] md:w-[70%]"
        />
      </div>
      <div className="flex flex-col items-center mb-0 md:mb-12">
        <h4 className="text-[24px] md:text-[56px] font-black text-[#000F24] text-center z-[2]">
          Frequently Asked Questions
        </h4>
        <p className="capitalize text-[8px] md:text-[16px] leading-4 md:leading-[24px] text-[#A2A2A2] font-medium text-center max-w-[290px] md:max-w-[730px] z-[2]">
          High-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div className="w-full">
        {FaqList?.map((data) => (
          <div className="max-w-[1050px] self-center m-auto" key={data.id}>
            <QuestionsComp question={data.question} answer={data.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
