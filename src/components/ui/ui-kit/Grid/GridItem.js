import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridItem extends Component {
  render () {
    const { imageUrl, title } = this.props;

    return (
      <article className="griditem-wrapper w-full flex flex-no-wrap flex-col items-left justify-center cursor-pointer relative">
        <div className="griditem-image w-full h-234 flex-1" style={{ backgroundImage: `url('${imageUrl}')`}} />

        <header className="griditem-header h-36 flex-none">
          <h1 className="griditem-title text-26 text-white leading-1.15 text-left">{title}</h1>
        </header>
      </article>
    )
  }
}

GridItem.propTypes = {
  /** Image to use as hero image */
  imageUrl: PropTypes.string.isRequired,
};

GridItem.defaultProps = {
  imageUrl: ''
};

export default GridItem;