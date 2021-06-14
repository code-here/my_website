import React from "react";
import projects from "../projects/projects.data";

const ProjectPage = ({ match }) => {
  let { title, description, github_link, website_link, tags } = projects.find(
    (project) => project.id === parseInt(match.params.projectId)
  );
  return (
    <div className="project-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        github:<a href={github_link}>{github_link}</a>
      </p>
      <p>
        website:<a href={website_link}>{website_link}</a>
      </p>
      <p>{tags.map((tag) => `${tag}  `)}</p>
    </div>
  );
};

export default ProjectPage;
