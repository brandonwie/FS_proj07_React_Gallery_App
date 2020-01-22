import React, { Component } from "react";
import key from "./config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      userInput: "cats",
      loading: true,
    };
  }

  handleChangeSearch = input => {
    this.setState({
      userInput: input,
    });
    this.performSearch(input);
  };

  performSearch = (query = "cats") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&tags=${query}&per_page=16&content_type=4&format=json&nojsoncallback=1`
      )
      .then(res => res.data.photos)
      .then(res => {
        this.setState({
          photos: res.photo,
          //! Loading Indicator
          loading: false,
        });
      })
      .catch(err => console.log("Error while fetching and parsing data", err));
  };

  componentDidMount() {
    this.performSearch();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search changeSearch={this.handleChangeSearch} />
          <Nav changeSearch={this.handleChangeSearch} />
          <Switch>
            {this.state.loading ? (
              <p>Your Page is Now Loading...</p>
            ) : (
              <Route
                path="/"
                render={() => (
                  <PhotoList
                    data={this.state.photos}
                    input={this.state.userInput}
                  />
                )}
              />
            )}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
