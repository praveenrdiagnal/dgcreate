import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render () {
    return (
      <div className="search-bar h-72 w-full flex flex-no-wrap border-b border-dg-yellow relative">
        <div className="search-input-icon absolute h-72 w-72 pin-l pin-t" />

        <input className="search-input-field w-full pl-72 uppercase bg-transparent border-transparent text-4xl text-white outline-none focus:outline-none" placeholder="Search Shows, Movies and Videos" />
      </div>
    )
  }
}

SearchBar.propTypes = {
  /** Text to display as logo hover tooltip */
  logoText: PropTypes.string.isRequired,
  /** Default or compact version */
  compact: PropTypes.bool.isRequired
};

SearchBar.defaultProps = {
  logoText: '',
  compact: false
};

export default SearchBar;