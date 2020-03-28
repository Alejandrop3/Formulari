import React from 'react';
import logo from './logo.svg';
import NeuronaMorada from './prototype/NeuronaMorada.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bien venidos a la primera fase de desarrollo de FΩRMULƛRI!
        </p>
        <img src={NeuronaMorada} className="Neurona-Morada" alt="Neurona"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
