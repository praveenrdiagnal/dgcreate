import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation, withFocusable } from 'react-tv-navigation';

const Poster = ({focused, setFocus, focusPath, src, imageUrl, title}) => {
  focused = (focused) ? 'focused' : 'unfocused'
  return (
    // <div className='poster' onClick={() => { setFocus() }} >
    //   <img src={src}/>
    // </div>
    <article className={`poster-wrapper w-352 h-246 flex flex-no-wrap flex-col items-center justify-center cursor-pointer relative ${focused}`} onClick={() => { setFocus() }} onMouseEnter={() => { setFocus() }}>
      <div className="poster-image w-full h-198 flex-none" style={{ backgroundImage: `url('${imageUrl}')`}} />

      <header className="poster-header h-48">
        <h1 className="poster-title text-26 text-white leading-1.15 text-left">{title}</h1>
      </header>
    </article>
  )
}

const FocusablePoster = withFocusable(Poster)


FocusablePoster.propTypes = {
  /** Image to use as hero image */
  imageUrl: PropTypes.string.isRequired,
};

FocusablePoster.defaultProps = {
  imageUrl: ''
};

export default FocusablePoster;