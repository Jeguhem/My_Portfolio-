import React from "react";
import Question from "./question";
import CustomCard from "./MyCard";
import NavBar from "./navBar";

function Contact() {
  const plans = [
    {
      title: "An Individual",
      subtitle: "looking for a freelancer to build your project ",
      text: [
        "say less",
        "smash the button below to send me a message",
        "and i'll be sure to get back to you in due time ",
      ],
      buttonTo: "/question/individual",
      buttonText: "Send a message",
      color: "c4",
    },
    {
      title: "A Company",
      subtitle: "looking to hire ",
      text: [
        "You are in the right place",
        "click the button below to contact me",
      ],
      buttonTo: "/question/company",
      buttonText: "Send a message",
      color: "c4",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="mt-5  c1 rounded-2xl py-8 body">
        <h1 className="text-center font-semibold text-4xl">Contact Me</h1>
        <div className=" m-4 flex items-center justify-center gap-6 flex-wrap sm:gap-6  md:gap-8 lg:gap-12 xl:gap-16 ">
          {plans.map((plan, index) => (
            <CustomCard
              key={index}
              title={plan.title}
              subtitle={plan.price}
              text={plan.text}
              buttonTo={plan.buttonTo}
              buttonText={plan.buttonText}
              color={plan.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
