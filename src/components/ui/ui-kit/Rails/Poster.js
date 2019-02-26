import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Poster extends Component {
  render () {
    const { imageUrl, title } = this.props;

    return (
      <article className="poster-wrapper w-352 h-246 flex flex-no-wrap flex-col items-center justify-center cursor-pointer relative">
        <div className="poster-image w-full h-198 flex-none" style={{ backgroundImage: `url('${imageUrl}')`}} />

        <header className="poster-header h-48">
          <h1 className="poster-title text-26 text-white leading-1.15 text-left">Poster Title</h1>
        </header>
      </article>
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