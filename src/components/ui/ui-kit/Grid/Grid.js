import React, { Component } from "react";
import PropTypes from "prop-types";
import GridItem from "./GridItem";

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

class Grid extends Component {
  renderGridItems = movies => {
    if (movies) {
      return movies.map(movie => {
        return (
          <GridItem title={movie.title} imageUrl={movie.imageUrl} />
        )
      })
    }
    return null;
  }

  renderGridHeader = title => {
    return (
      <header className="rail-header">
        <h1 className="rail-title text-white uppercase leading-1.38 text-26 tracking-2px mb-8">{title}</h1>
      </header>
    )
  }

  render() {
    const { title } = this.props;

    return (
        <section className="assets-grid-wrapper">
          {title ? this.renderGridHeader(title) : null}

          <div className="assets-grid">
            {this.renderGridItems(movies)}
          </div>
        </section>
    )
  }
}

Grid.propTypes = {
    /** Teams Array */
    teams: PropTypes.array.isRequired,
};

Grid.defaultProps = {
    teams: []
};

export default Grid;