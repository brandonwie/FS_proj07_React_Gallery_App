import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Svg from "./Svg";

class Search extends Component {
  handleSubmit = e => {
    let userInput = this.query.value;
    e.preventDefault();
    let path = `/${userInput}`;
    // set path same to user input
    this.props.history.push(path);
    this.props.changeSearch(userInput);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          required
          ref={input => (this.query = input)}
        />
        <button type="submit" className="search-button">
          <Svg />
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
