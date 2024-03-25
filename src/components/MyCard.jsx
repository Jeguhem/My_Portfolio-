import React, { useEffect, useRef } from "react";
import CustomButton from "./MyButton";

function CustomCard({ title, subtitle, text, buttonTo, buttonText, color }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cardOverlay = cardRef.current.querySelector(".card-overlay");
      if (cardOverlay) {
        const x = e.pageX - cardOverlay.offsetWidth / 2;
        const y = e.pageY - cardOverlay.offsetHeight / 2;
        cardOverlay.style.left = `${x}px`;
        cardOverlay.style.top = `${y}px`;
      }
    };

    const cardContainer = cardRef.current;
    if (cardContainer) {
      cardContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardContainer) {
        cardContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="card-container" ref={cardRef}>
      <div className="card c2  text-white card-size p-7 gap-y-4 rounded-2xl card__bullet  ">
        <h1 className="card-title text-2xl font-bold">{title}</h1>

        <h2 className="card-subtitle text-3xl font-semibold  ">{subtitle}</h2>

        <div className="card-text flex flex-col gap-2 ">
          <ul className="card__bullets">
            {text.map((item, index) => {
              return (
                <li key={index} className="flex">
                  <svg
                    className="inline-block mr-2 h-4 w-4 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <CustomButton to={buttonTo} color={color}>
          {buttonText}
        </CustomButton>
      </div>
      <div className="card-overlay "></div>
    </div>
  );
}

export default CustomCard;

// useEffect(() => {
//   const cardContainers = document.querySelectorAll(".card-container");
//   cardContainers.forEach((container) => {
//     container.addEventListener("mousemove", (e) => {
//       const cardOverlay = querySelector(".card-overlay");
//       const x = e.pageX - container.offsetLeft;
//       const y = e.pageY - container.offsetTop;
//       cardOverlay.style.left = `${x}px`;
//       cardOverlay.style.top = `${y}px`;
//     });
//   });
//   return () => {
//     cardContainers.forEach((container) => {
//       container.removeEventListener("mousemove", handleMouseMove);
//     });
//   };
// }, []);
