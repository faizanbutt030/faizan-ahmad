import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
import { useState } from "react";

  const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>  
      </div>
      <button className="desktopMenuBtn" onClick={()=>{  
        document.getElementById("contactPage").scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />
        Contact Me
      </button>
      
      
      
      
      
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link
          activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={120}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(!showMenu)}
        >
          Contact
        </Link>    
      </div>
    </nav>
  );
};

export default Navbar;
