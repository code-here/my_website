import React from "react";
import { Route, Switch } from "react-router-dom";

import Projects from "../projects/projects.component";
import ProjectPage from "../project-page/project-page.component";

import "./projects-page.styles.scss";

const ProjectsPage = ({ match }) => (
  <div className="projects-page">
    <Switch>
      <Route exact path={match.path} component={Projects} />
      <Route path={`${match.path}/:projectId`} component={ProjectPage} />
    </Switch>
  </div>
);

export default ProjectsPage;
