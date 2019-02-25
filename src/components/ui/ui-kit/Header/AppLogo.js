import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppLogo extends Component {
  render () {
    const { logoText, compact } = this.props;

    if (!compact) {
      return (
        <figure className="app-logo default h-60 w-292 bg-dg-yellow text-black text-2xl flex flex-no-wrap items-center justify-center cursor-pointer" title={logoText} />
      )
    } else {
      return (
        <figure className="app-logo compact h-72 w-72 bg-dg-yellow text-black text-2xl flex flex-no-wrap items-center justify-center cursor-pointer" title={logoText} />
      )
    }
  }
}

AppLogo.propTypes = {
  /** Text to display as logo hover tooltip */
  logoText: PropTypes.string.isRequired,
  /** Default or compact version */
  compact: PropTypes.bool.isRequired
};

AppLogo.defaultProps = {
  logoText: '',
  compact: false
};

export default AppLogo;