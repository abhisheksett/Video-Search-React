// @flow

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {

  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    clearStateAndGoToSearch: Function,
    history: RouterHistory
  }

  goToSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input type="text"
            value={this.props.searchTerm}
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <a href="" onClick={()=> this.props.clearStateAndGoToSearch(event, this.props.history)}>or Browse All </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm});
const mapDispatchToProps = (dispatch: Function) => ({
  clearStateAndGoToSearch(event, history) {
    event.preventDefault();
    dispatch(setSearchTerm(''));
    history.push('/search');
  },
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
