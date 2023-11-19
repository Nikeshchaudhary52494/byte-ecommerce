import React from "react";
import { Link } from "react-router-dom";

const NavOptions = ({ toggle, setToggle = () => { } }) => {

  // All navbar options
  const navOptions = [{
    to: "/",
    name: "Home"
  },
  {
    to: "products/catogries",
    name: "Categories"
  }, {
    to: "/cart",
    name: "Cart"
  }, {
    to: "/contactUs",
    name: "Contact Us"
  }, {
    to: "/aboutUs",
    name: "About US"
  }];
  return (
    <>
      {
        navOptions.map((navOption) => (
          <Link onClick={() => { setToggle(!toggle) }} to={navOption.to}>
            <li className="hover:ml-1 lg:hover:ml-0 lg:hover:font-normal lg:hover:bg-slate-600 px-2 rounded-full hover:font-bold duration-500">{navOption.name}</li>
          </Link>
        ))
      }
    </>
  );
};

export default NavOptions;
