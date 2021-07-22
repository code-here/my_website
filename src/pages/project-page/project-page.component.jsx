import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import projects from "../projects/projects.data";

import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/website.svg";

import "./project-page.styles.scss";

const ProjectPage = ({ match }) => {
  let { title, description, github_link, website_link, tags, readme } =
    projects.find((project) => project.id === parseInt(match.params.projectId));

  let [markDown, setMarkDown] = useState("");
  useEffect(() => {
    let getMark = async () => {
      let res = await fetch(readme);
      let mark = await res.text();
      setMarkDown(mark);
    };
    getMark();
  }, [readme]);

  return (
    <div className="project-page">
      <h1 className="title">{title}</h1>
      <div className="description">
        <p>{description}</p>
        <div className="link_container">
          {github_link ? (
            <a href={github_link}>
              <GithubIcon />
              Github
            </a>
          ) : (
            ""
          )}
          {website_link ? (
            <a href={website_link}>
              <WebsiteIcon /> Website
            </a>
          ) : (
            ""
          )}
        </div>
        <p className="tags">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </p>
      </div>
      <ReactMarkdown
        className="markdown"
        remarkPlugins={[gfm]}
        children={markDown}
      ></ReactMarkdown>
    </div>
  );
};

export default ProjectPage;
