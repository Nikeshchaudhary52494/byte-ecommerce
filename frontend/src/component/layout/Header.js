import React, { useState } from "react";
import SignINNavbar from "./SignInNavbar";
import NavOptions from "./NavOptions.js";
import SearchBar from "../layout/SearchBar.js"
import { Link } from "react-router-dom";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  // AiOutlineSearch,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav class="bg-slate-200 dark:bg-slate-800 dark:text-white sticky  top-0 z-10">
        <div class="lg:w-full w-3/4 mx-auto">
          <div class="max-w-5xl p-4 mx-auto flex justify-between items-center ">
            <div class="text-3xl font-bold text-cyan-500 cursor-pointer">
              ECOMMERCE
            </div>
            <div class=" hidden md:block ">
              <SearchBar />
            </div>

            <Link to="/user/signup">
              <div class="flex items-center text-xl  cursor-pointer">
                <AiOutlineUser />
                <span> sign in</span>
                <RiArrowDropDownLine />
                <SignINNavbar />
              </div>

            </Link>

            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              class="text-2xl lg:hidden  cursor-pointer"
            />


            <ul class=" hidden lg:flex gap-5 ">
              <NavOptions />
            </ul>

            {/* SideBar for Small screen */}

            <ul
              class={` lg:hidden flex flex-col gap-7 w-[270px] h-[300px] rounded-[20px] pl-4 pt-10 fixed bg-cyan-500 dark:bg-slate-700 text-white dark:text-slate-300 top-4 right-4 
          ${toggle ? `right-4 top-4` : `right-[-100%] top-[-100%]`}
          `}
            >
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                class="text-2xl fixed right-[50px]"
              />
              <NavOptions toggle={toggle} setToggle={setToggle} />
            </ul>
          </div>
        </div>
        <div class="md:hidden  pb-4 ">
          <SearchBar />
        </div>

      </nav>
    
    </>
  );
};

export default Header;
