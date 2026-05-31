import React from "react";
import Nav from "./navs/Nav";
import homeImg from "../images/home-image.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flexible-layout">
        <div className="step-out">
          <h1
            className="step1"
            style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}
          >
            STEP OUT
          </h1>
          <h1 className="step2">STEP OUT</h1>
        </div>
        <div className="image-layout">
          <img src={homeImg} alt="Illustration by Blush" className="home-img" />
          <p style={{ fontFamily: "'Karla', sans-serif" }}>
            "Strut with confidence!"
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
