import React from "react";
import { Link } from "react-router-dom";
import { TPimages } from "../../../../assets";
import { Button } from "../../../../components";

const ConnectWithTheWorld = () => {
  return (
    <div
      className="w-full h-full bg-[#004db3] lg:min-h-screen pt-16 pb-4 px-3"
      style={{ backgroundImage: `url('${TPimages.Pattern}')` }}
    >
      <div className="flex flex-col items-center mb-12">
        <p className="uppercase text-base text-[#FFFFFF] font-medium text-center max-w-[530px]">
          join our community
        </p>
        <h4 className="text-[42px] max-w-[900px] font-black text-[#FFFFFF] text-center leading-[50px] mb-3">
          Are you ready to connect with the future talent of the tech world
        </h4>
        <p className="capitalize text-base text-[#FFFFFF] font-medium text-center max-w-[530px]">
          meet up with other techstars and grow together
        </p>
        <img className="mb-8" src={TPimages.map} alt=""></img>
        <Button>Join Our Community</Button>
      </div>
    </div>
  );
};

export default ConnectWithTheWorld;
