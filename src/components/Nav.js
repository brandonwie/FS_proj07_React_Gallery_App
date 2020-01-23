import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

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
        <Route exact path="/" render={() => <Redirect to="/cats" />} />
        {navLinks("cats")}
        {navLinks("dogs")}
        {navLinks("love")}
      </ul>
    </nav>
  );
};

export default Nav;
