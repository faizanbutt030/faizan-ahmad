import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import Faizan from "../../assets/faizan.pdf"

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Faizan</span>
          <br />
          React.js Developer
        </span>
        <p className="introPara">
          I'm a fresh graduate of Computer Science from UCP, Lahore. I create
          websites using react.js
        </p>
        <a href={Faizan} download="Faizan.pdf">
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" /><big> Hire Me</big>
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
export default Intro;
