import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideNavLink from './SideNavLink';

class SideNav extends Component {
  renderLinks = links => {
    return links.map(link => {
      return <SideNavLink key={link.id} title={link.title} url={link.url} onClick={() => console.log(link.url)} />
    })
  }

  renderSideNavLinkList = links => {
    return (
      <ul className="navdrawer-linklist list-reset flex flex-col flex-no-wrap">
        {this.renderLinks(links)}
      </ul>
    )
  }

  renderHeader = () => {
    return (
      <header className="drawer-header pl-60 pt-70 pb-60">
        <h1 className="drawer-title uppercase text-dg-yellow text-4xl">Diagnal</h1>
      </header>
    )
  }

  render () {
    const { withHeader, links } = this.props;

    return (
      <section className="nav-drawer flex flex-col flex-no-wrap h-full w-440 bg-dg-navdrawer-bg pb-16">
        {withHeader ? this.renderHeader() : null}

        {links ? this.renderSideNavLinkList(links) : null}
      </section>
    )
  }
}

SideNav.propTypes = {
  /** Should header be displayed or not */
  withHeader: PropTypes.bool,
  /** Links array */
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

SideNav.defaultProps = {
  links: []
};

export default SideNav;