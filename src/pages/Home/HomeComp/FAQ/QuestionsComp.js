import React, { useState } from "react";
import { TPAddIcon, TPMinusIcon } from "../../../../components";

const QuestionsComp = ({ question, answer }) => {
  const [isShowQuestion, setIsShowQuestion] = useState(false);
  return (
    <div
      onClick={() => setIsShowQuestion(!isShowQuestion)}
      className="flex flex-col py-6 border-b border-[#EAEAEA]"
    >
      <div className="flex items-center justify-between mb-2">
        <h4
          className={`text-[14px] md:text-[24px] max-w-[300px] md:max-w-full font-semibold ${
            isShowQuestion ? "text-[#004DB3]" : "text-[#000F24]"
          }`}
        >
          {question}
        </h4>
        {isShowQuestion ? (
          <TPMinusIcon className="cursor-pointer w-[6px] md:w-[14px]" />
        ) : (
          <TPAddIcon className="cursor-pointer w-[6px] md:w-[14px]" />
        )}
      </div>
      {isShowQuestion && (
        <p className="text-[8px] md:text-lg leading-4 md:leading-[24px] text-[#A2A2A2] max-w-[1010px] font-medium">
          {answer}
        </p>
      )}
    </div>
  );
};

export default QuestionsComp;
