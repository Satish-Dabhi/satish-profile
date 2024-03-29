import React from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';


const Header = () => {
  return (
    <header id="home"
      className="top-header"
    >
      <nav id="nav-wrap">
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
            <Link to="resume" spy={true} smooth={true} offset={50} duration={900}>Education</Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={50} duration={900}>Skills</Link>
          </li>
          <li>
            <Link to="profile" spy={true} smooth={true} offset={50} duration={900}>projects</Link>
          </li>
        </ul>

      </nav>
      <div className="row banner" >
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{process.env.REACT_APP_NAME}</h1>
          </Fade>
          <Fade bottom duration={1800}>
            <h2>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'MERN Stack Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
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

