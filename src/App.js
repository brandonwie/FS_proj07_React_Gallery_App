import React, { Component } from "react";
import key from "./config";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

//components
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import Search from "./components/Search";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      keyword: "cats",
      loading: true,
    };
  }

  performSearch = query => {
    console.log(query, "- search query");
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&tags=${query}&per_page=16&content_type=4&format=json&nojsoncallback=1`
      )
      .then(res => res.data.photos)
      .then(res => {
        this.setState({
          photos: res.photo,
          //! for loading...
          loading: false,
        });
      })
      .catch(err => console.log("Error while fetching and parsing data", err));
  };

  componentDidMount() {
    this.performSearch(this.state.keyword);
  }

  handleChangeSearch = input => {
    this.setState({ keyword: input });
    this.performSearch(input);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            to="/"
            component={Search}
            changeSearch={this.handleChangeSearch}
          />
          <Route
            to="/"
            changeSearch={this.handleChangeSearch}
            render={() => <Nav />}
          />
          {/* press 'REFRESH' button to check loading message */}
          {this.state.loading ? (
            <p>Your Page is Now Loading...</p>
          ) : (
            <Route
              path="/:keyword"
              render={() => (
                <PhotoList
                  data={this.state.photos}
                  input={this.state.keyword}
                />
              )}
            />
          )}
          {/* 404 component */}
          <Route component={PageNotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
