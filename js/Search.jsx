// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

// @TODO: Move this to typed.js to make it available globally


class Search extends Component {

  state =  {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>,
    searchTerm: string
  };

  handleSearchTermChange(event: SyntheticKeyboardEvent & { target: HTMLInputElement}) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="search">
        <Header showSearch handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.props.searchTerm} />
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show} />)
          }
        </div>
      </div>
    );
  }
}

export default Search;
