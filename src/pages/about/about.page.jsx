import React from "react";

import "./about.styles.scss";

const About = () => (
    <div className="about">
        <h2>About this website</h2>
        <p>I made this website to showcase my projects. well then, who am i?</p>
        <h3>Who am i ?</h3>
        <p>
            There is nothing much about me. i am a programmer who loves to code
            in javascript and rust. i go by the name Abhinav Yadav. you can see
            some of my work at{" "}
            <a
                href="http://github.com/code-here"
                rel="noreferrer"
                target="_blank"
            >
                Github
            </a>
            .
        </p>
    </div>
);

export default About;
