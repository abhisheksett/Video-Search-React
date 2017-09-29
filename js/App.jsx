// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';
// import '../public/normalize.css';
import '../public/style.css';

const App = () =>  (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
            <Route
              path="/details/:id"
              component={ (props: { match: Match }) => {
                const shows = preload.shows.filter(show => props.match.params.id === show.imdbID);
                return <Details {...props} show={shows[0]} />;
              }}
            />
          </Switch>

        </div>
      </Provider>
    </BrowserRouter>
  );

export default App;
