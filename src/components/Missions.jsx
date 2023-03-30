import React, { Component } from 'react';
import Title from './Title';

export default class Missions extends Component {
  render() {
    return (
      <section>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
      </section>
    );
  }
}
