// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  state = {
    searchValue: ''
  }

  handleInputChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleEnter = (event) => {
    if (event.keyCode === 13 && this.state.searchValue) {
      this.props.history.push("/search");
    }
  }

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text"
          placeholder="Search"
          onChange={this.handleInputChange}
          onKeyUp={this.handleEnter}
        />
        <Link to="/search">or Browse All </Link>
      </div>
    );
  }
}

export default Landing;
