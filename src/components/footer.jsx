import React from "react";

function MyFooter() {
  return (
    <div className="text-center  bottom-0   bgc ">
      <div>
        <h1>Omotowa Oluwafemi Samuel</h1>
        <h2>+234 907 507 6822 | Oluwafemisamuel2004@gmail</h2>
      </div>
      <div className="flex justify-center ml-11 p-5 gap-10 text-[30px]">
        <i className="bi bi-facebook r shadow-lg hover:drop-shadow-cyan-500/50  active:opacity-30 "></i>
        <i className="bi bi-linkedin text-blue-800"></i>
        <i className="bi bi-instagram bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text"></i>
        <i className="bi bi-github text-black"></i>
        <div className="">
          <i className="bi bi-youtube v bg-white"></i>
        </div>
      </div>
      <hr></hr>
      <br></br>
      <span className="text-gray-300 italic py-6 text-[18px]">
        @copyright oluwafemisamuel2021/2023
      </span>
    </div>
  );
}

export default MyFooter;
