import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, planetIndex } = this.props;
    return (
      <div
        className="planets-images"
        style={ { transform: `rotateY(calc(${planetIndex + 1}*45deg)) 
        translateZ(750px` } }
      >
        <div className="planets-names">
          <p data-testid="planet-name">{planetName}</p>
        </div>
        <img src={ `${planetImage}` } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetIndex: PropTypes.number.isRequired,
};
