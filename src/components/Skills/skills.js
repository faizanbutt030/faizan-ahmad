import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WEBDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled and motivated React.js Developer. 
        I am proficient in HTML, CSS and JavaScript as <br /> 
        well as have strong foundation in programming. 
        My skills include C++, MySQL and Python.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React.js Development</h2>
                <p>I will later write description here. </p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WEBDesign} alt="WEBDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Machine Learning</h2>
                <p>I will later write description here. </p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Back-End Programming</h2>
                <p>I will later write description here. </p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
