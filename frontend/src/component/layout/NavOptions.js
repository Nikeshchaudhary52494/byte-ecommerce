import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavOptions = ({ toggle, setToggle = () => { } }) => {
  const { user } = useSelector((state) => state.user)
  // All navbar options
  let navOptions =
    [{
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
      to: "/contactus",
      name: "Contact Us"
    }, {
      to: "/aboutus",
      name: "About US"
    }];
  if (user.role === "admin") {
    navOptions = [{
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
      to: "/admin/dashbord",
      name: "Dashbord"
    }];
  };

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
