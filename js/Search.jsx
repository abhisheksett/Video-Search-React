// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

const { string, arrayOf, shape } = React.PropTypes;

class Search extends Component {

  state =  {
    searchTerm: ''
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

Search.propTypes = {
  shows: arrayOf(
    shape({
      title: string,
      description: string
    })
  ).isRequired
}

export default Search;
