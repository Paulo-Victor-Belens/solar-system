import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system"> </div>
        <Title headline="Planetas" />
        <div>
          {planets.map(({ name, image }) => (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
        </div>
      </section>
    );
  }
}
