import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/contact";
import Question from "./components/question";

function App() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/question/individual" element={<Question />} />
        <Route path="/question/company" element={<Question />} />
      </Routes>
    </div>
  );
}
export default App;
