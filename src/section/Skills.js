import React from 'react';
import Skill from '../component/Skill';
import { skills } from "../data/info";

const Skills = () => {

  return (
    <section id="skills">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>Here are some of my favorite languages/technologies</p>
          <p>* The bar graphic represents my confidence and ability to quickly find solutions to new problems on that platform</p>
          <div className="bars">
            <ul className="skills"><Skill list={skills} /></ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;