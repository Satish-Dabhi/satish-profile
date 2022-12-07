import React from "react";
import Fade from "react-reveal";
import { bio } from "../data/info";

const About = () => {

  return (
    <section id="about">
      <Fade duration={500}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={require('../images/profile.jpg')}
              alt="profic pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About {process.env.REACT_APP_NAME}</h2>
            <p>{bio.aboutBio}</p>
            <h2>Key Qualifications & Responsibilities :
            </h2>
            <ul className="qualifications">
              {bio.qualifications.map((listItem) => {
                return (
                  <li>{listItem}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
