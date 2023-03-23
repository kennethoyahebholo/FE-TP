import React from "react";
import QuestionsComp from "./QuestionsComp";
import { FaqList } from "../../../../utils/faqList";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full lg:min-h-screen bg-[#FFFF] py-12 px-3">
      <div className="">
        <div className="flex flex-col items-center mb-12">
          <h4 className="text-[42px] font-black text-[#000F24] text-center">
            Frequently Asked Questions
          </h4>
          <p className="capitalize text-base text-[#A2A2A2] font-medium text-center max-w-[530px]">
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className="w-full">
          {FaqList?.map((data) => (
            <div className="max-w-[770px] self-center m-auto" key={data.id}>
              <QuestionsComp question={data.question} answer={data.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
