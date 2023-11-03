import React from "react";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";

const ConnectWithTheWorld = ({ communityRef }) => {
  return (
    <div
      ref={communityRef}
      className="w-full h-full bg-[#004db3] lg:min-h-screen py-10 md:pt-16 md:pb-4 px-3"
      style={{ backgroundImage: `url('${TPimages.Pattern}')` }}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center mb-0 md:mb-12"
      >
        <p className="uppercase text-[8px] md:text-lg text-[#FFFFFF] font-medium text-center max-w-[530px]">
          join our community
        </p>
        <h4 className="text-[24px] md:text-[56px] max-w-[360px] md:max-w-[1200px] font-black text-[#FFFFFF] text-center leading-[30px] md:leading-[70px] mb-3">
          Are you ready to connect with the future talent of the tech world
        </h4>
        <p className="capitalize text-[8px] md:text-lg text-[#FFFFFF] font-medium text-center max-w-[530px]">
          meet up with other techstars and grow together
        </p>
        <img className="mb-8 object-contain" src={TPimages.map} alt=""></img>
        <Button>Join Our Community</Button>
      </div>
    </div>
  );
};

export default ConnectWithTheWorld;
