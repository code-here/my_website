import React, { useContext } from "react";

import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/website.svg";

import Markdown from "../../components/markdown/markdown.component";
import LinkContainer from "../../components/link-container/link-container.component";
import Tags from "../../components/tags/tags.component";

import { ProjectContext } from "../../context/provider/project-provider/project-provider.context";

import "./project-page.styles.scss";

const ProjectPage = ({ match }) => {
  let { selectProject } = useContext(ProjectContext);
  let { title, description, github_link, website_link, tags, readme } =
    selectProject(parseInt(match.params.projectId));
  let links = [
    {
      name: "github",
      link: github_link,
      icon_as_component: <GithubIcon />,
    },
    {
      name: "website",
      link: website_link,
      icon_as_component: <WebsiteIcon />,
    },
  ];

  return (
    <div className="project-page">
      <h1 className="title">{title}</h1>
      <div className="description">
        <p>{description}</p>
        <LinkContainer links={links} />
        <Tags tags={tags} />
      </div>
      <Markdown url={readme} />
      <p style={{ color: "#f92672" }}>
        Note: if images are not loading go to github link
      </p>
    </div>
  );
};

export default ProjectPage;
