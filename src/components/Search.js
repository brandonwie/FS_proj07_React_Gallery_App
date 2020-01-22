import React, { Component } from "react";
import Svg from "./Svg";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeSearch(this.query.value);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form
        className="search-form"
        onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          required
          onChange={this.onSearchChange}
          ref={input => (this.query = input)}
        />
        <button
          type="submit"
          className="search-button">
          <Svg />
        </button>
      </form>
    );
  }
}

export default Search;
