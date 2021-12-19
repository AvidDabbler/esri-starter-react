import './App.css';
import React, { useEffect } from 'react'
import {mapController} from './controllers/MapController'


function App() {
  useEffect(()=>{
    mapController.initMap();
  }, [])

  return (
    <div className="App">
        <div id='map'></div>
    </div>
  );
}

export default App;
