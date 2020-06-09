import React from 'react';
import './App.css';
import {MapContainer} from "./Maps/MapContainer";
import {ChartsContainer} from "./Charts/ChartsContainer";

function App() {
  return (
    <div className='App'>
      <header>
        <h2>Australia - Gold Coast - Ramps</h2>
      </header>
      <div className={'contentWrapper'}>
        <MapContainer/>
        <ChartsContainer/>
      </div>
      <footer>June 2020</footer>
    </div>
  );
}

export default App;
