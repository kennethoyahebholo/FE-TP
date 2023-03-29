import React from "react";
import { TPimages } from "../../../../assets";
import {
  TPZoomLogo,
  TPStripeLogo,
  TPDropboxLogo,
  TPMondayLogo,
} from "../../../../components/icons";

const CompaniesLogoDisplay = () => {
  return (
    <div className="flex items-center justify-center w-full h-[60px] md:h-[158px] bg-[#CCDBF0] px-[20px]">
      <div className="flex items-center gap-2 md:gap-5 lg:gap-8">
        <TPZoomLogo className=" max-w-[80%] aspect-[3/2] object-contain" />
        <TPStripeLogo className=" max-w-[80%] aspect-[3/2] object-contain" />
        <TPMondayLogo className=" max-w-[85%] aspect-[3/2] object-contain" />
        <img src={TPimages.slack} alt="slack logo" />
        <TPDropboxLogo className=" max-w-[85%] aspect-[3/2] object-contain" />
      </div>
    </div>
  );
};

export default CompaniesLogoDisplay;
