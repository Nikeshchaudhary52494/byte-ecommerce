import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div class="bg-slate-200 mt-40 dark:bg-slate-800">
      <div class="flex max-w-5xl p-10 mx-auto justify-between items-center dark:text-white md:flex-row flex-col gap-10">
        <div class="items-center text-center md:w-[33.33%] flex flex-col">
          <h4 class="font-bold">DOWNLOAD OUR APP</h4>
          <p>download App for Android And Ios mobile phone</p>
          <BiLogoPlayStore  />
          <FaAppStore />
        </div>
        <div class="text-center md:w-[33.33%]">
          <h1 class="text-5xl font-bold text-cyan-500 m-2">ECOMMERCE</h1>
          <p>High Quality is our first priority</p>
          <p>Copyright 2021 &copy; MeNikeshChaudhary</p>
        </div>
        <div class="items-center flex flex-col md:w-[33.33%]">
          <h4>FollowUs</h4>
          <div class="flex gap-2 m-2">
            <AiOutlineInstagram />
            <AiOutlineFacebook />
            <AiOutlineYoutube />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
