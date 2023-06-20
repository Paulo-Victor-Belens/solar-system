import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section data-testid="mission-card" className="mission-card">
        <div className="mission-name">
          <p data-testid="mission-name">
            {name}
          </p>
        </div>
        <hr />
        <div className="mission-card-informations">
          <div className="div-year-country">
            <p data-testid="mission-year">
              📅
              &nbsp;
              {year}
            </p>
            <p data-testid="mission-country">
              📍
              {country}
            </p>
          </div>
          <p data-testid="mission-destination" id="destination">
            🏳
            &nbsp;
            {destination}
          </p>
        </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
