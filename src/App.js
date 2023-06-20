import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section className="planets">
          <SolarSystem />
        </section>
        <section className="missions">
          <Missions />
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
