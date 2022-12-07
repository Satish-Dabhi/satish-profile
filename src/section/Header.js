import React from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="home"
      className="top-header"
    >
      {/* <nav id="nav-wrap">
        <ul id="nav">
          <li className="current">
            <Link to="home" spy={true} smooth={true} offset={50} duration={900} >Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={900}>About</Link>
          </li>
          <li>
            <Link to="contactinfo" spy={true} smooth={true} offset={50} duration={900}>Contact</Link>
          </li>
          <li>
            <Link to="profile" spy={true} smooth={true} offset={50} duration={900}>profile</Link>
          </li>
          <li>
            <Link to="resume" spy={true} smooth={true} offset={50} duration={900}>Education</Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={50} duration={900}>Skills</Link>
          </li>
        </ul>

      </nav> */}


      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-wrap">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="nav">
            <li className="current">
              <Link to="home" spy={true} smooth={true} offset={50} duration={900} >Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={900}>About</Link>
            </li>
            <li>
              <Link to="contactinfo" spy={true} smooth={true} offset={50} duration={900}>Contact</Link>
            </li>
            <li>
              <Link to="profile" spy={true} smooth={true} offset={50} duration={900}>profile</Link>
            </li>
            <li>
              <Link to="resume" spy={true} smooth={true} offset={50} duration={900}>Education</Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={50} duration={900}>Skills</Link>
            </li>
          </ul>
        </div>
      </nav>



      <div className="row banner" >
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{process.env.REACT_APP_NAME}</h1>
          </Fade>
          <Fade bottom duration={1800}>
            <h3>{process.env.REACT_APP_TITLE}</h3>
          </Fade>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;

