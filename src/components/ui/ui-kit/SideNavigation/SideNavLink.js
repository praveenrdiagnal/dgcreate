import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Focusable } from 'react-key-navigation';

class SideNavLink extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    }
  }

  render () {
    const { title, onClick } = this.props;

    return (
      <Focusable
        onFocus={() => this.setState({active: true})}
        onBlur={() => this.setState({active: false})}
      >
        <li className={`navdrawer-link inline-block m-0 py-18 px-60 hover:bg-dg-yellow text-white hover:text-black uppercase text-3xl cursor-pointer ${this.state.active ? 'active' : ''}`} onClick={onClick}>
          {title}
        </li>
      </Focusable>
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