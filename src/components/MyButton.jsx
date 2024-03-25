import React from "react";
import { Link } from "react-router-dom";

export default function CustomButton({ to, color, children }) {
  return (
    <Link to={to} className="card__bullet flow">
      <button
        className={`text-white border-transparent ${color}  py-2 ps-11 pe-11  absolute bottom-8 flex items-center justify-center rounded-[20px] hover:scale-95 duration-200 active:opacity-20`}
      >
        {children}
      </button>
    </Link>
  );
}
