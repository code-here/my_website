import React from "react";
import { Route } from "react-router-dom";

import Projects from "../projects/projects.component";
import ProjectPage from "../project-page/project-page.component";

import "./projects-page.styles.scss";

const ProjectsPage = ({ match }) => (
  <div className="project-page">
    <Route exact path={match.path} component={Projects} />
    <Route path={`${match.path}/:projectId`} component={ProjectPage} />
  </div>
);

export default ProjectsPage;
