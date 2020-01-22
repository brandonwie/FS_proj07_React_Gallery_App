import React, { Component } from "react";
import Svg from "./Svg";

class Search extends Component {
  handleSubmit = e => {
    let userInput = this.query.value;
    e.preventDefault();
    this.props.changeSearch(userInput);
    console.log(userInput, "- user input");
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

export default Search;
