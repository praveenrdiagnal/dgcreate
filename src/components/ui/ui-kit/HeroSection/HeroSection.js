import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeroSection extends Component {
  render () {
    const { imageUrl } = this.props;

    return (
      <div className="hero-image-wrapper w-full h-480 flex flex-no-wrap items-center justify-center">
        <div className="hero-image w-full h-full" style={{ backgroundImage: `url('${imageUrl}')`}} />
      </div>
    )
  }
}

HeroSection.propTypes = {
  /** Image to use as hero image */
  imageUrl: PropTypes.string.isRequired,
};

HeroSection.defaultProps = {
  imageUrl: ''
};

export default HeroSection;