import React from "react";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={hero} alt="hero-img" className="hero-img" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
