import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Poster extends Component {
  render () {
    const { imageUrl } = this.props;

    return (
      <div className="poster-wrapper w-352 h-198 flex flex-no-wrap items-center justify-center cursor-pointer">
        <div className="poster-image w-full h-full" style={{ backgroundImage: `url('${imageUrl}')`}} />
      </div>
    )
  }
}

Poster.propTypes = {
  /** Image to use as hero image */
  imageUrl: PropTypes.string.isRequired,
};

Poster.defaultProps = {
  imageUrl: ''
};

export default Poster;