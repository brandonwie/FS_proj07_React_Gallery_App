import React from "react";
import { Link, Redirect } from "react-router-dom";

const Nav = props => {
  const navLinks = title => {
    return (
      <li>
        <Link to={`/${title}`} onClick={() => props.changeSearch(`${title}`)}>
          {title}
        </Link>
      </li>
    );
  };

  return (
    <nav className="main-nav">
      <ul>
        <Redirect to="/cats" />
        {navLinks("cats")}
        {navLinks("dogs")}
        {navLinks("love")}
      </ul>
    </nav>
  );
};

export default Nav;
