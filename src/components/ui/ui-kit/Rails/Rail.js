import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FocusablePoster from './Poster';

const movies = [
  {
    'id' : '1',
    'title' : 'Movie One',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  },
  {
    'id' : '2',
    'title' : 'Movie Two',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  },
  {
    'id' : '3',
    'title' : 'Movie Three',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  },
  {
    'id' : '4',
    'title' : 'Movie Four',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  },
  {
    'id' : '5',
    'title' : 'Movie Five',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  },
  {
    'id' : '6',
    'title' : 'Movie Six',
    'imageUrl' : 'https://placeimg.com/1000/700/people'
  }
];

class Rail extends Component {
  renderPosters = movies => {
    return movies.map((movie, i) => {
      return(
        <li key={movie.id} className="float-left mr-6">
          <FocusablePoster
            imageUrl="https://placeimg.com/1000/700/people"
            title={movie.title}
            style={{ zIndex: 10 * (i + 1)}}
            focusPath={`assetitem-${movie.id}`}
            onEnterPress={() => console.log('Pressed enter on ' + movie.title + '!')}
          />
        </li>
      )
    })
  }

  renderAssets = movies => {
    return (
      <ul className="assets-list list-reset flex flex-no-wrap overflow-y-hidden overflow-x-auto">
        {this.renderPosters(movies)}
      </ul>
    )
  }

  renderRailHeader = title => {
    return (
      <header className="rail-header">
        <h1 className="rail-title text-white uppercase leading-1.38 text-26 tracking-2px mb-8">{title}</h1>
      </header>
    )
  }

  render () {
    const { title, movies } = this.props;

    return (
      <section className="assets-rail w-full">
        {title ? this.renderRailHeader(title) : null}

        {movies && movies.length ? this.renderAssets(movies) : null}
      </section>
    )
  }
}

Rail.propTypes = {
  /** Image to use as hero image */
  imageUrl: PropTypes.string.isRequired,
};

Rail.defaultProps = {
  imageUrl: ''
};

export default Rail;