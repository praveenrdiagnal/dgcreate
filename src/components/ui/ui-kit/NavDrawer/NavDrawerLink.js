import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavDrawerLink extends Component {
  handleOnClick = url => {
    console.log(url);    
  }

  render () {
    const { title, onClick } = this.props;

    return (
      <li className="navdrawer-link inline-block m-0 py-18 px-60 hover:bg-dg-yellow text-white hover:text-black uppercase text-3xl cursor-pointer" onClick={onClick}>
        {title}
      </li>
    )
  }
}

NavDrawerLink.propTypes = {
  /** Title to display as link */
  title: PropTypes.string.isRequired,
  /** Click handler function */
  onClick: PropTypes.func.isRequired
};

NavDrawerLink.defaultProps = {
  title: '',
  onClick: () => {}
};

export default NavDrawerLink;