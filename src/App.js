import React, { useState, useEffect } from 'react';
import key from './config';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';

//components
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

const App = props => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState(props.location.pathname.slice(1));

  const performSearch = (query = 'cats') => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&tags=${query}&per_page=16&content_type=4&format=json&nojsoncallback=1`
      )
      .then(res => res.data.photos)
      .then(res => {
        console.log(res);
        setPhotos(res.photo);
        setLoading(false);
      })
      .catch(err => console.log('Error while fetching and parsing data', err));
  };

  useEffect(() => {
    performSearch();
  }, []);

  const handleChangeSearch = input => {
    setKeyword(input);
    performSearch(input);
  };

  return (
    <Router>
      <div className="container">
        {/* Redirect when user refresh */}
        <Search changeSearch={handleChangeSearch} />
        <Nav changeSearch={handleChangeSearch} />
        {/* if keyword does not match to route path, render 404 page */}
        <Switch>
          <Route
            path={`/${keyword}`}
            render={() =>
              loading ? (
                <p>Your Page is Now Loading...</p>
              ) : (
                <PhotoList data={photos} input={keyword} />
              )
            }
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
