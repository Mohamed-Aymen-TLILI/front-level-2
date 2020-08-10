import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">Me</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Git",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
