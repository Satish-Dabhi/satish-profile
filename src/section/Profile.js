import React from "react";
import Project from "../component/Project";

const Profile = () => {
  // const projects = {
  //   
  return (
    <section id="Profile">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2 style={{ color: "white", textAlign: "center", marginBottom: '8%' }}>My Projects:</h2>
          <div
            id="Profile-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Project />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

