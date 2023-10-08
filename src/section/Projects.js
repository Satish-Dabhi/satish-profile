import React from "react";
import Project from "../component/Project";

const Projects = () => {
   
  return (
    <section id="profile">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2 style={{ color: "white", textAlign: "center", marginBottom: '8%' }}>My Projects:</h2>
          <div
            id="profile-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

