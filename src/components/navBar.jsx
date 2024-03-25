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
      <div>
        <button
          className="text-white lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <i className={`bi bi-list ${menuOpen ? "bi-x" : ""}`}></i>
        </button>
        <ul
          className={`block gap-4 ${menuOpen ? "block" : "hidden"} `}
          style={{ width: "100%", background: "black" }}
        >
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

      <div
        className={`menu navbar-collapse  sm:flex sm:flex-row sm:items-center sm:justify-end ${
          menuOpen ? "block" : "hidden"
        }`}
      >
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

// import React, { useState, useEffect } from "react";
// import CustomLink from "./Links";

// function NavBar() {
//   const toggleMenu = () => {
//     const menu = document.querySelector(".menu");
//     menu.classList.toggle("active");
//   };
//   // const hamburgerIcon = document.querySelector(".hamburger-icon");
//   // hamburgerIcon.addEventListener("click", toggleMenu);
//   return (
//     <>
//       <nav className="c1 p-3 flex justify-between text-white px-6 pr-10 shadow fixednav ">
//         <h1 className="w font-bold text-2xl">
//           <span className="w font-bold text-3xl">J</span>eguhem
//         </h1>

//         <button
//           className="text-white lg:hidden"
//           type="button"
//           onClick={toggleMenu}
//           // aria-expanded={menuOpen ? "true" : "false"}
//           // aria-controls="navbarSupportedContent"
//         ></button>

//         <div
//           className={`menu navbar-collapse  sm:flex sm:flex-row sm:items-center sm:justify-end`}
//         >
//           <ul className="menu py-3 flex flex-col sm:flex-row gap-7 mr-9 pr-5">
//             <li>
//               <CustomLink to="/">Home</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/about">About</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/services">Services</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/achievements">Achievements</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/portfolio">Portfolio</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/blog">Blog</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/contact">Contact</CustomLink>
//             </li>
//           </ul>
//           <i className="bi bi-list"></i>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
