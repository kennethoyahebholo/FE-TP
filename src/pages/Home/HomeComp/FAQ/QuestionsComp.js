import React, { useState } from "react";
import { TPAddIcon, TPMinusIcon } from "../../../../components";

const QuestionsComp = ({ question, answer }) => {
  const [isShowQuestion, setIsShowQuestion] = useState(false);
  return (
    <div className="flex flex-col py-6 border-b border-[#EAEAEA]">
      <div className="flex items-center justify-between mb-2">
        <h4
          className={`text-[24px] max-w-[300px] md:max-w-full font-semibold ${
            isShowQuestion ? "text-[#004DB3]" : "text-[#000F24]"
          }`}
        >
          {question}
        </h4>
        {isShowQuestion ? (
          <TPMinusIcon
            className="cursor-pointer"
            onClick={() => setIsShowQuestion(!isShowQuestion)}
          />
        ) : (
          <TPAddIcon
            className="cursor-pointer"
            onClick={() => setIsShowQuestion(!isShowQuestion)}
          />
        )}
      </div>
      {isShowQuestion && (
        <p className="text-base text-[#A2A2A2] font-medium">{answer}</p>
      )}
    </div>
  );
};

export default QuestionsComp;
