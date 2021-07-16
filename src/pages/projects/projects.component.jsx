import React, { useState } from "react";

import projects from "./projects.data";
import ProjectPreview from "../../components/project-preview/project-preview.component";

import "./projects.styles.scss";

const Projects = ({ history }) => {
  let [radioState, dispatchRadioState] = useState("all");

  const handleClick = (e) => {
    document
      .querySelectorAll(".filter")
      .forEach((item) => item.classList.remove("selected"));
    e.target.classList.add("selected");

    dispatchRadioState(e.target.attributes.value.value);
  };

  return (
    <div className="projects-container">
      <div className="filter-container">
        <h3 className="title">Filter</h3>
        <div className="filter-type-container">
          <div className="filter selected" value="all" onClick={handleClick}>
            {" "}
            All{" "}
          </div>
          <div className="filter" value="react" onClick={handleClick}>
            {" "}
            React
          </div>
          <div className="filter" value="rust" onClick={handleClick}>
            {" "}
            Rust
          </div>
          <div className="filter" value="web" onClick={handleClick}>
            {" "}
            WEB
          </div>
          <div className="filter" value="cli" onClick={handleClick}>
            {" "}
            CLI
          </div>
        </div>
      </div>
      <div className="project-preview-container">
        <h3 className="title">Projects</h3>
        {projects.map((project) =>
          radioState === project.technology ||
          radioState === project.type ||
          radioState === "all" ? (
            <ProjectPreview key={project.id} project={project} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
