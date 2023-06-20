import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <section className="section-card">
        <div data-testid="missions" className="div-mission-title">
          <Title headline="Missões" />
        </div>
        <div className="container-missions-card">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </section>
    );
  }
}
