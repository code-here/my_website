import React from 'react';
import { withRouter } from 'react-router-dom';

import './header.styles.scss';

const Header = ({ history }) => (
    <div className="header">
        <div className="title-container">
            <a href="/" style={{ textDecoration: "none", color: 'inherit' }}>
                A Website
            </a>
        </div>
        <div className="options">
            <span onClick={ () => history.push("/projects") }>{`{ Projects }`}</span>
            <span onClick={ () => history.push("/contacts") }>{`{ Contact me }`}</span>
        </div>
    </div>
)

export default withRouter(Header);