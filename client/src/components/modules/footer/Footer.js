import React from "react";
import { Link } from "react-router-dom";

import {
  TPFacebookIcon,
  TPTwitterIcon,
  TPYoutubeIcon,
  TPInstagramIcon,
  TPDiscordIcon,
} from "../../../components/icons";
import { TPFooterLogo } from "../../../components/svg";

const Footer = () => {
  return (
    <div className="w-full px-3 md:px-10 xl:px-32  pt-10 md:pt-28 pb-40 md:pb-60 flex justify-between bg-[#000F24]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-3 w-full mb-20">
          <TPFooterLogo />
          <p className="max-w-[280px] text-lg text-[#FFFFFF]">
            Reach out to us on any of our social media networks
          </p>
          <div className="grid grid-cols-5 max-w-[230px]">
            <TPFacebookIcon />
            <TPTwitterIcon />
            <TPYoutubeIcon />
            <TPInstagramIcon />
            <TPDiscordIcon />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="text-[24px] md:text-[32px] font-semibold text-white">
            Useful Links
          </h4>
          <div className="flex flex-col text-lg lg:text-[24px] text-white space-y-3">
            <Link to="#">Home</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Our Courses</Link>
            <Link to="#">Testimonials</Link>
            <Link to="#">Our Community</Link>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="text-[24px] md:text-[32px] font-semibold text-white">
            Community
          </h4>
          <div className="flex flex-col text-lg lg:text-[24px] text-white space-y-3">
            <Link to="#">Help Centers</Link>
            <Link to="#">Partners</Link>
            <Link to="#">Suggestion</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Newsletter</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[24px] md:text-[32px] font-semibold text-white">
            Subscribe Us
          </h4>
          <div className="flex text-sm max-w-[386px]">
            <input
              placeholder="nft123@gmail.com"
              className="border border-[#054FB3] bg-[#2A2A2B] p-3 w-full rounded-l"
            />
            <button
              type="button"
              className="bg-[#054FB3] text-white text-sm w-[123px] px-1 rounded-r"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
