import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = ({ match }) => {
  console.log(match);
  return (
    <Fragment>
      <h1>Mohamed Aymen TLILI</h1>

      <div>
        <a href="https://github.com/Mohamed-Aymen-TLILI" target="_blank">
          Github
        </a>
        <br/>
        <a
          href="https://twitter.com/TliliAymentli"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </Fragment>
  );
};

export default About;
