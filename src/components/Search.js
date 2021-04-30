import React, { useRef } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Svg from './Svg';

const Search = props => {
  const userInputRef = useRef();
  const history = useHistory();

  const handleSubmit = e => {
    let userInput = userInputRef.current.value;
    e.preventDefault();
    let path = `/${userInput}`;
    // set path same to user input
    history.push(path);
    props.changeSearch(userInput);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        required
        ref={userInputRef}
      />
      <button type="submit" className="search-button">
        <Svg />
      </button>
    </form>
  );
};

export default withRouter(Search);
