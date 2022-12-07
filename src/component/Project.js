import React from 'react';
import Zmage from "react-zmage";
import { project } from '../data/info';


const Project = () => {

    return (
        project.length > 0 && project.map((project, index) => {
            return (
                <div class="rows">
                    <h1>Steps</h1>
                    <div key="{id++}" class="columns flip-card">
                        <div class="flip-card-inner">
                            <div
                                class="flip-card-front">
                                <h4 style={{ backgroundColor: "black", padding: '10px' }} >{project.name}</h4>
                                <h3 style={{ backgroundColor: "gray" }}>{project.year}</h3>
                                <Zmage style={{
                                    "width": "160px",
                                    "height": "150px",
                                    "border-radius": "inherit",
                                    "opacity": "50%"
                                }} alt="{project.name}" src={require("../images/p" + (index + 1) + ".png")} />
                                <div style={{ width: "100%" }} class="columns">
                                    <h3 style={{ "color": "#bbb", "marginTop": "9%" }}>Technologies:</h3>
                                    <ul>{project.technologies.length > 0 && project.technologies.split(",").map((item) => {
                                        return <li>{item}</li>
                                    })}</ul>
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <h3 style={{ font: "12px" }}>{project.name}</h3>
                                <div style={{ backgroundColor: "black" }} >
                                    <a href="{projects.deployedSite}">Tools:</a>
                                </div>
                                <h3>{project.tools}</h3>
                                <div style={{ backgroundColor: "black" }} >
                                    <a href="{projects.gitHubRepo}" >Project Description:</a>
                                </div>
                                <p >{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })

    )
}

export default Project;