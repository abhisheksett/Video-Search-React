// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  props: {
    handleSearchTermChange?: Function,
    showSearch?: boolean,
    searchTerm?: string
  };

  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          onChange={this.props.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="Search"
        />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to="/search">Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1>
          <Link to="/">
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop () {},
  searchTerm: ''
};

export default Header;
