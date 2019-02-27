import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavDrawerLink from './NavDrawerLink';

class NavDrawerLinkList extends Component {
  renderLinks = links => {
    return links.map(link => {
      return <NavDrawerLink key={link.id} title={link.title} url={link.url} onClick={() => console.log(link.url)} />
    })
  }
  render () {
    const { links } = this.props;

    return (
      <ul className="navdrawer-linklist list-reset flex flex-col flex-no-wrap">
        {links ? this.renderLinks(links) : null}
      </ul>
    )
  }
}

NavDrawerLinkList.propTypes = {
  /** Title to display as link */
  links: PropTypes.node.isRequired,
};

NavDrawerLinkList.defaultProps = {
};

export default NavDrawerLinkList;