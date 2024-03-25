import React, { useEffect } from "react";
import "./aboutStyle.css";
import NavBar from "./navBar";

const setProgressWidth = (className, width) => {
  const progressLine = document.querySelector(`.span.${className}`);
  if (progressLine) {
    progressLine.style.width = width;
  }
};

function About() {
  useEffect(() => {
    setProgressWidth("react", "80%");
    setProgressWidth("typescript", "60%");
    setProgressWidth("html", "90%");
    setProgressWidth("javascript", "70%");
    setProgressWidth("node", "60%");
    setProgressWidth("python", "50%");
  }, []);
  return (
    <div>
      <NavBar />
      <div className="body">
        <h1 className="sub-title">
          My <span>Skills</span>
        </h1>
        <section className="">
          <div className="container1 " id="skill">
            <h1 className="heading">Technical Skills</h1>
            <div className="technical-bars  mb-4 ">
              <div className="bar glow ">
                <i className="bx bxl-react "></i>
                <div className="info">
                  <span>React</span>
                </div>
                <div className="progress-line  ">
                  <span className="span react"></span>
                </div>
              </div>

              <div className="bar">
                <i class="bx bxl-typescript"></i>

                <div className="info">
                  <span>TypeScript</span>
                </div>
                <div className="progress-line ">
                  <span className="span typescript"></span>
                </div>
              </div>
              <div className="bar">
                <i class="bx bxl-html5"></i>

                <div className="info">
                  <span>HTML5</span>
                </div>
                <div className="progress-line">
                  <span className="span html"></span>
                </div>
              </div>
              <div className="bar">
                <i class="bx bxl-javascript"></i>

                <div className="info">
                  <span>Javascript</span>
                </div>
                <div className="progress-line ">
                  <span className="span javascript"></span>
                </div>
              </div>

              <div className="bar">
                <i class="bx bxl-nodejs"></i>

                <div className="info">
                  <span>Node JS</span>
                </div>
                <div className="progress-line ">
                  <span className="span node"></span>
                </div>
              </div>

              <div className="bar">
                <i class="bx bxl-python"></i>
                <div className="info">
                  <span>Python</span>
                </div>
                <div className="progress-line ">
                  <span className="span python"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
