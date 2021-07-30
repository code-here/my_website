import LinkContainer from "../../components/link-container/link-container.component";

import { ReactComponent as GithubIcom } from "../../assets/github.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";

import "./contact.styles.scss";

const Contact = () => {
  let links = [
    {
      link: "https://github.com/code-here",
      icon_as_component: <GithubIcom />,
      name: "github",
    },
    {
      link: "#",
      icon_as_component: <EmailIcon />,
      name: "abhinavy14@gmail.com",
    },
  ];
  return (
    <div className="contact">
      <LinkContainer links={links} />
    </div>
  );
};

export default Contact;
