import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./project-preview.styles.scss";

const ProjectPreview = ({ match, project }) => (
  <Link to={`${match.path}/${project.id}`} className="project-preview">
    <div className="project-name">{project.title}</div>
    <div className="project-desc">{project.description}</div>
  </Link>
);

export default withRouter(ProjectPreview);
