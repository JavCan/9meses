import React from 'react';
import Gallery from './components/Gallery';
import Landing from './components/Landing';
import Timeline from './components/Timeline'; // Importa el componente Timeline
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Landing />
      <Gallery />
      <Timeline /> {/* Añade el componente Timeline aquí */}
    </div>
  );
}

export default App;
