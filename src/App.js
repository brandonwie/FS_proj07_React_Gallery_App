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
      keyword: "cats",
      loading: true,
    };
  }

  performSearch = (query = "cats") => {
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
    this.performSearch();
  }

  handleChangeSearch = input => {
    this.setState({ keyword: input });
    this.performSearch(input);
  };

  render() {
    const { keyword, photos, loading } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          {/* Redirect when user refresh */}
          <Search changeSearch={this.handleChangeSearch} />
          <Nav changeSearch={this.handleChangeSearch} />
          {/* if keyword does not match to route path, render 404 page */}
          <Switch>
            <Route
              path={`/${keyword}`}
              render={() =>
                this.state.loading ? (
                  <p>Your Page is Now Loading...</p>
                ) : (
                  <PhotoList
                    data={photos}
                    input={keyword}
                    isLoading={loading}
                  />
                )
              }
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
