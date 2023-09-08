import React from "react";
import { Link } from "react-router-dom";

const NavOptions = ({ toggle, setToggle }) => {
  return (
    <>
      <Link onClick={() => setToggle(!toggle)} to="/" >
        <li class="font-bold cursor-pointer">Home</li></Link>
      <Link onClick={() => setToggle(!toggle)} to="products/catogries">
        <li class=" md:hidden cursor-pointer">categories</li></Link>
      <Link onClick={() => setToggle(!toggle)} to="/cart" >
        <li class=" cursor-pointer">cart</li></Link>
      <Link onClick={() => setToggle(!toggle)} to="/contactUs">
        <li class=" cursor-pointer">Contact US</li></Link>
      <Link onClick={() => setToggle(!toggle)} to="/aboutUs">
        <li class=" cursor-pointer">About Us</li></Link>
    </>
  );
};

export default NavOptions;
