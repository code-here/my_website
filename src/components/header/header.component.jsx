import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./header.styles.scss";

const Header = ({ history }) => (
  <div className="header">
    <div className="title-container">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        A_Website
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/projects">{`impl Projects {}`}</Link>
      <Link className="option" to="/contact">{`impl Contact {}`}</Link>
    </div>
  </div>
);

export default withRouter(Header);
