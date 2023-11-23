import React, { useEffect, useState } from "react";
import NavOptions from "./NavOptions.js";
import SearchBar from "../layout/SearchBar.js"
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logo from "../images/byte.png"
import { motion } from "framer-motion"
import demoAvatar from "../images/userProfile.avif"
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import UserProfileOptions from "./UserProfileOptions.js";


const Header = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.user)
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    const handleScroll = (event) => {
      if (toggle) {
        event.preventDefault();
      }
    };
    // Add event listener when the component mounts
    document.body.addEventListener("wheel", handleScroll, { passive: false });

    // Remove event listener when the component unmounts
    return () => {
      document.body.removeEventListener("wheel", handleScroll);
    };
  }, [toggle]);
  return (
    <>
      <nav className="bg-slate-200 dark:bg-slate-800 dark:text-white sticky  top-0 z-10">
        <div className="lg:w-full w-3/4 mx-auto">
          <div className="max-w-5xl p-4 mx-auto flex justify-between items-center ">
            <img className="w-24" src={Logo} alt="BYTE" />
            <div className=" hidden md:block ">
              <SearchBar />
            </div>

            {/* signin button */}
            <div className="flex gap-10 items-center">
              {

                isAuthenticated ? (
                  <div>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                      <img onMouseEnter={() => setIsHovered(true)} className='w-full h-full' src={demoAvatar} alt="user profile" />
                    </div>
                    <motion.div
                      initial="hidden"
                      animate={isHovered ? 'visible' : 'hidden'}
                      variants={containerVariants}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {isHovered && <   UserProfileOptions isHovered={isHovered} setIsHovered={setIsHovered} />}
                    </motion.div></div>
                ) : (
                  <Link to="/user/login" state={{ previousLocation: location.pathname }}>
                    <div className="flex items-center text-xl  h-10 cursor-pointer">
                      <AiOutlineUser />
                      <span>Login</span>
                      <RiArrowDropDownLine />
                    </div>
                  </Link>
                )
              }

              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="text-2xl lg:hidden  cursor-pointer"
              />
            </div>

            {/* Navigation bar for Larger screen */}
            <ul className=" hidden lg:flex gap-5 ">
              <NavOptions />
            </ul>

            {/* SideBar(Navigation) for Small screen */}

            <div className={`inset-0 fixed bg-black backdrop-filter bg-opacity-50 backdrop-blur-md ${toggle ? `block` : `hidden`}`}>
              <ul
                className={` lg:hidden flex flex-col gap-7 w-[270px] h-[300px] rounded-[20px] pl-4 pt-10 fixed bg-cyan-500 dark:bg-slate-800 text-white dark:text-slate-300 top-4 right-4 
          ${toggle ? `right-4 top-4` : `right-[-100%] top-[-100%]`}
          `}
              >
                <AiOutlineClose
                  onClick={() => setToggle(!toggle)}
                  className="text-2xl fixed right-[50px]"
                />
                <NavOptions toggle={toggle} setToggle={setToggle} />
              </ul>
            </div>
          </div>
        </div>
        <div className="md:hidden  pb-4 ">
          <SearchBar />
        </div>

      </nav>

    </>
  );
};

export default Header;
