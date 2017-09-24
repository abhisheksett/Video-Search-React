import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

const { string, arrayOf, shape } = React.PropTypes;
const Search = React.createClass({
  propTypes: {
    shows: arrayOf(
      shape({
        title: string,
        description: string
      })
    )
  },
  getInitialState() {
    return {
      searchTerm: ''
    };
  },
  handleSearchTermChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  },
  render() {
    return (
      <div className="search">
        <Header showSearch handleSearchTermChange={this.handleSearchTermChange} searchTerm={this.props.searchTerm} />
        <div>
          {this.props.shows
            .filter(show => {
              return (
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
              );
            })
            .map(show => {
              return <ShowCard key={show.imdbID} {...show} />;
            })}
        </div>
      </div>
    );
  }
});

export default Search;
