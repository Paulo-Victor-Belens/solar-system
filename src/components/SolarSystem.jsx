import React, { Component } from 'react';
import Title from './Title';

export default class SolarSystem extends Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system"> </div>
        <Title headline="Planetas" />
      </section>
    );
  }
}
