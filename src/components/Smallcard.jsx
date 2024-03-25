import React from "react";

function SmallCard({ card }) {
  return (
    <div className="service grid grid-cols-2 gap-5">
      {card.map((item, index) => (
        <div key={index} className="service-item  ">
          <div className="service-icon ">
            <i dangerouslySetInnerHTML={{ __html: item.icon }}></i>
          </div>
          <div className=" service-text">
            <h3 className="">{item.name}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmallCard;
