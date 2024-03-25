import React from "react";

function Rotate({ images }) {
  return (
    <div>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Rotate;

{
  /* <img src={ReactLogo} alt="React Logo" className="w-12" />
<img scr={TypeScript} alt="Typescript" className="w-12" />
<img scr={MongoDB} alt="Mongodb" />
<img scr={JavaScript} alt="Javascript" />
<img scr={NodeJS} alt="Nodejs" />
<img scr={Express} alt="Express" />
<img scr={Python} alt="Python" /> */
}
