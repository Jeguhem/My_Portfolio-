import React from "react";

import { Link } from "react-router-dom";

export default function CustomLink({ to, children, smoothScroll }) {
  const handleClick = (e) => {
    if (smoothScroll && to.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(to);
      if (targetElement) {
        const offset = 60; // adjust this value to control the distance from the top of the page
        const yOffset = targetElement.getBoundingClientRect().top - offset;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      to={to}
      className="font-semibold transition-colors link active:opacity-20"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
// customLink.propTypes = {
//   /** The path you want to link to */
//   to: React.PropTypes.string.isRequired,
//   /** The content that will be rendered inside the anchor tag */
//   children: React.PropTypes.node.isRequired,
// };
