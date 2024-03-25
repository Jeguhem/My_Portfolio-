import React, { useState, useEffect } from "react";
import ReactLogo from "./image/react.svg";
import TypeScript from "./image/typescript.svg";
import MongoDB from "./image/logo_mongodb_icon.svg";
import JavaScript from "./image/logo-javascript.svg";
import NodeJS from "./image/logo_nodejs_icon.svg";
import Express from "./image/expressjs-icon.svg";
import Python from "./image/python-4.svg";

const CircularMotionComponent = ({ images }) => {
  const [rotationAngles, setRotationAngles] = useState(
    Array(images.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngles(rotationAngles.map((angle) => (angle + 1) % 360));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-11 h-11 circular-image"
          style={{ transform: `rotate(${rotationAngles[index]}deg)` }}
        />
      ))}
    </div>
  );
};

function Main() {
  const images = [
    { src: ReactLogo, alt: "react" },
    { src: TypeScript, alt: "typescript" },
    { src: MongoDB, alt: "mongodb" },
    { src: JavaScript, alt: "javascript" },
    { src: NodeJS, alt: "nodejs" },
    { src: Express, alt: "express" },
    { src: Python, alt: "python" },
  ];

  return (
    <div>
      <CircularMotionComponent images={images} />
    </div>
  );
}

export default Main;

// import React, { useState, useEffect } from "react";
// import ReactLogo from "./image/react.svg";
// import TypeScript from "./image/typescript.svg";
// import MongoDB from "./image/logo_mongodb_icon.svg";
// import JavaScript from "./image/logo-javascript.svg";
// import NodeJS from "./image/logo_nodejs_icon.svg";
// import Express from "./image/expressjs-icon.svg";
// import Python from "./image/python-4.svg";

// const CircularMotionComponent = ({ images }) => {
//   const [rotationAngle, setRotationAngle] = useState(
//     Array(images.length).fill(0)
//   );
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotationAngle(rotationAngle.map((angle) => (angle + 1) % 360));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className="w-11 h-11 circular-image"
//             style={{ transform: `rotate(${rotationAngle[index]})` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// function Main() {
//   const images = [
//     { src: ReactLogo, alt: "react" },
//     { src: TypeScript, alt: "typescript" },
//     { src: MongoDB, alt: "mongodb" },
//     { src: JavaScript, alt: "javascript" },
//     { src: NodeJS, alt: "nodejs" },
//     { src: Express, alt: "express" },
//     { src: Python, alt: "python" },
//   ];
//   return (
//     <div>
//       <CircularMotionComponent images={images} />
//     </div>
//   );
// }

// export default Main;
