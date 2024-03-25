import React from "react";
import CustomCard from "./MyCard";
import CustomText from "./Text";
import Femipic from "./image/femipic.png";
import SmallCard from "./Smallcard";
import About from "./About";
import { Link } from "react-router-dom";

import Main from "./main";
function MyBody() {
  const plans = [
    {
      title: "Basic",
      price: "$19.99",
      text: [
        "Access to standard utility coins",
        "10 % return on every investment",
      ],
      buttonTo: "./payment/basic",
      buttonText: "Get Basic",
      color: "c4",
    },
    {
      title: "Advanced",
      price: "$29.99",
      text: [
        "free signals",
        "Access to standard utility coins and meme coins",
        "25% return on every investment",
      ],
      buttonTo: "./payment/advanced",
      buttonText: "Get Advanced",
      color: "c4",
    },
    {
      title: "Premium",
      price: "$59.99",
      text: [
        "free signals daily",
        "Access to All coins",
        "75% Return on every Investment",
      ],
      buttonTo: "./payment/premium",
      buttonText: "Get Premium",
      color: "c4",
    },
  ];
  //a passionate web developer with expertise in building modern, user-friendly web applications. Through this platform, I aim to showcase my skills, experience, and projects in the field of web development. Feel free to explore this web application and reach out with questions and offers.
  const texts = [
    {
      heading: "Based in Nigeria, I'm a ",
      body: " An expert in building user-friendly web applications, with proficency in both front-end and back-end development. Feel free to explore this web application ",
      bgcolor: "c0",
      style: " welcome_text",
      roll: ["Software Developer.", "Web Developer.", "Youtuber.", "Marketer."],
      color: "roll",
    },
    {
      heading: "About Me",
      body: "With a strong foundation in HTML, CSS, and JavaScript, along with proficiency in frameworks like Tailwind CSS and MERN stack (MongoDB, Express.js, React.js, Node.js), I have been involved in creating dynamic and responsive web solutions. My background also includes experience in database management using SQL and application development using Python.",
      bgcolor: "",
    },
    {
      heading: "What I Do",
      body: "I specialize in crafting intuitive user interfaces, optimizing website performance, and implementing robust backend functionality. Whether it's designing pixel-perfect layouts, integrating APIs, or developing custom web applications, I'm committed to delivering high-quality solutions that exceed client expectations.",
      bgcolor: "",
    },
    {
      heading: "Let's Connect",
      body: "  Are you looking to bring your web project to life or enhance your online presence? I'm here to help! Feel free to explore my portfolio, check out my projects, and don't hesitate to reach out if you have any questions or would like to discuss potential collaboration opportunities.    ",
      bgcolor: "",
    },
  ];
  const card = [
    {
      icon: "<i class='bx bx-laptop' '></i>",
      name: "Web Design",
      text: "I create eye catching and user friendly UI/UX Designs",
    },
    {
      icon: "<i class='bx bx-code-block' ></i>",
      name: "web Developer",
      text: "I specialize in crafting intuitive user interfaces, optimizing website performance, and implementing robust backend functionality.",
    },
    {
      icon: "<i class='bx bx-laptop' '></i>",
      name: "Web Design",
      text: "I create eye catching and user friendly UI/UX Designs",
    },
    {
      icon: "<i class='bx bx-code-block' ></i>",
      name: "web Developer",
      text: "I specialize in crafting intuitive user interfaces, optimizing website performance, and implementing robust backend functionality.",
    },
  ];
  const indexToShow = 0;
  const selectedText1 = texts[indexToShow];
  return (
    <div className="c1 text-white  body ">
      <div className="flex items-center justify-around p-6 ">
        <div>
          <CustomText
            heading={selectedText1.heading}
            body={selectedText1.body}
            bgcolor={selectedText1.bgcolor}
            style={selectedText1.style}
            // rolls={selectedText1.roll}
            color={selectedText1.color}
          />
        </div>
        <div>
          {/* <Main /> */}
          <div>
            <img
              src={Femipic}
              alt="Femi picture"
              className="text-slate-800 dx"
            ></img>
          </div>
        </div>
      </div>
      <div className="border p-5 service-page" id="services">
        <div className="flex justify-center items-center gap-6">
          <div className="dash h-1 w-8"></div>
          <h1 className="text-center txt">What I Do</h1>
        </div>

        <p className="bold text-center ">Awesome Quality Services</p>
        <div className="grid">
          <SmallCard card={card} />
        </div>
      </div>

      <div className="mb-[120px]">
        <About />
      </div>

      <div class="testimonial wow ">
        <div class="flex justify-center items-center">
          <div class="testimonial-icon">
            <i class="fa fa-quote-left" className="txt"></i>
          </div>
          <div class="owl-carousel testimonials-carousel">
            <div class="testimonial-item">
              <div class="testimonial-img">
                <img src={Femipic} alt="Femi picture" />
              </div>
              <div class="testimonial-text">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  itaque nostrum modi, voluptas repudiandae corporis.
                </p>
                <Link to="/contact">
                  <button className="bg-white  rounded-xl px-5 py-2 shadow-lg hover:shadow-cyan-500/50 active:opacity-30">
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBody;

{
  /* <div className="mt-5 c1 rounded-2xl py-8">
        <h1 className="text-center font-semibold text-4xl">Pricing</h1>

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
      </div> */
}
