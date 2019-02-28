import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideNavLink extends Component {
  render () {
    const { title, onClick } = this.props;

    return (
      <li className="navdrawer-link inline-block m-0 py-18 px-60 hover:bg-dg-yellow text-white hover:text-black uppercase text-3xl cursor-pointer" onClick={onClick}>
        {title}
      </li>
    )
  }
}

SideNavLink.propTypes = {
  /** Title to display as link */
  title: PropTypes.string.isRequired,
  /** Click handler function */
  onClick: PropTypes.func.isRequired
};

SideNavLink.defaultProps = {
  title: '',
  onClick: () => {}
};

export default SideNavLink;