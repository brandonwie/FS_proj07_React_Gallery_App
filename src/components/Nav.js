import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const navLinks = title => {
    return (
      <li>
        <Link to={`${title}`} onClick={() => props.changeSearch(`${title}`)}>
          {title}
        </Link>
      </li>
    );
  };

  return (
    <nav className="main-nav">
      <ul>
        {navLinks("cats")}
        {navLinks("dogs")}
        {navLinks("love")}
      </ul>
    </nav>
  );
};

export default Nav;
