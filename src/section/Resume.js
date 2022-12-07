import React from "react";
import Fade from "react-reveal";
import CommonListItem from "../component/CommonListItem";
import { work, education } from "../data/info";


function Resume() {
  const getRandomColor = () => {
    let color = "#681f30";
    return color;
  }

  return (
    <section id="resume">

      <Fade duration={500}>
        <div className="row education work">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <CommonListItem list={education} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={500}>
        <div className="row work" style={{ marginTop: '40px' }}>
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <CommonListItem list={work} />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Resume;