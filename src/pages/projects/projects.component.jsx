import React, { useState } from "react";

import projects from "./projects.data";

import "./projects.styles.scss";

const Projects = () => {
    let [radioState, dispatchRadioState] = useState("all");

    return (
        <div className="projects-container">
            <div className="filter-container">
                <h3 className="title">Filter</h3>
                <div className="radio-container">
                    <div>
                        <input
                            type="radio"
                            name="filter"
                            value="all"
                            onClick={(e) => dispatchRadioState(e.target.value)}
                            defaultChecked
                        />{" "}
                        All
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="filter"
                            value="react"
                            onClick={(e) => dispatchRadioState(e.target.value)}
                        />{" "}
                        React
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="filter"
                            value="rust"
                            onClick={(e) => dispatchRadioState(e.target.value)}
                        />{" "}
                        Rust
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="filter"
                            value="web"
                            onClick={(e) => dispatchRadioState(e.target.value)}
                        />{" "}
                        WEB
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="filter"
                            value="cli"
                            onClick={(e) => dispatchRadioState(e.target.value)}
                        />{" "}
                        CLI
                    </div>
                </div>
            </div>
            <div className="project-preview-container">
                <h3 className="title">Projects</h3>
                {projects.map(({ id, ...others }) =>
                    radioState === others.technology ||
                    radioState === others.type ||
                    radioState === "all" ? (
                        <div key={id}>{others.title}</div>
                    ) : (
                        ""
                    ),
                )}
            </div>
        </div>
    );
};

export default Projects;
