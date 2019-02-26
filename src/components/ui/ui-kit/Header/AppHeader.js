import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppLogo from './AppLogo';
import SearchIcon from './SearchIcon';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchbarOpen: false
    }
  }

  render () {
    return (
      <header className="app-header w-full h-72 w-full bg-transparent flex flex-no-wrap items-center justify-center overflow-hidden">
        <div className="app-logo-wrap flex-none">
          <AppLogo />
        </div>

        <div className="searchbar-wrap flex-1" />

        <div className="searchbar-toggle-wrap flex-none">
          <button className="searchbar-toggle-button outline-none focus:outline-none p-2">
            <SearchIcon />
          </button>
        </div>
      </header>
    )
  }
}

AppHeader.propTypes = {
  /** Text to display as logo hover tooltip */
  logoText: PropTypes.string.isRequired,
  /** Default or compact version */
  compact: PropTypes.bool.isRequired
};

AppHeader.defaultProps = {
  logoText: '',
  compact: false
};

export default AppHeader;