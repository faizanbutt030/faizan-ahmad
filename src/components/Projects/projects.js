import React from "react";
import "./projects.css";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

export const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Portfolio</h2>
      <span className="projectDesc">
      I am a recent graduate from University of Central Punjab (UCP), Lahore, excited to embark on my 
professional journey. With a keen interest in Web Development, Machine Learning, and creative skills 
such as 3D Modeling and Graphic Design, I am eager to learn and grow. My foundational knowledge of 
programming languages and development tools has prepared me for a dynamic career. I am actively 
seeking an entry-level position within a forward-thinking company where I can apply my skills to 
contribute to the company's growth while expanding my own expertise and skillset.
      </span>
      <div className="projectsImgs">
        <img src={Portfolio1} alt="" className="projImg" />
        <img src={Portfolio2} alt="" className="projImg" />
        <img src={Portfolio3} alt="" className="projImg" />
        <img src={Portfolio4} alt="" className="projImg" />
        <img src={Portfolio5} alt="" className="projImg" />
        <img src={Portfolio6} alt="" className="projImg" />
      </div>
    </section>
  );
};
export default Projects;
