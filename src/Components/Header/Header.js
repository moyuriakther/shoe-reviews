import React from "react";
import CustomLink from "./CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="md:flex justify-center menu px-5">
        <CustomLink to="/home">HOME</CustomLink>
        <CustomLink to="/reviews">REVIEWS</CustomLink>
        <CustomLink to="/dashboard">DASHBOARD</CustomLink>
        <CustomLink to="/blogs">BLOGS</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
