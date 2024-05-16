import React, { useState, useEffect } from "react";
import CustomLink from "./Links";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="c1 p-3 flex justify-between text-white px-6 pr-10 shadow fixednav  ">
      <h1 className="w font-bold text-2xl">
        <span className="w font-bold text-3xl">J</span>eguhem
      </h1>
      <div className="lg:hidden flex">
        <button className="text-white " type="button" onClick={toggleMenu}>
          <i className={`bi bi-list ${menuOpen ? "bi-x" : ""}`}></i>
        </button>
      </div>

      <div className="hidden lg:flex menu navbar-collapse flex-row items-center justify-end ">
        <ul className="menu py-3 flex flex-col sm:flex-row gap-7 mr-9 pr-5">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/services">Services</CustomLink>
          </li>
          <li>
            <CustomLink to="/achievements">Achievements</CustomLink>
          </li>
          <li>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex text-white  ">
        <ul className="menu py-3 flex flex-col sm:flex-row gap-7 mr-9 pr-5">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/services" smoothScroll>
              Services
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/achievements">Achievements</CustomLink>
          </li>
          <li>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
