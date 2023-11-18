import React from 'react';
import logo from 'https://media.licdn.com/dms/image/D5616AQFFmj304c7nbg/profile-displaybackgroundimage-shrink_350_1400/0/1680288828993?e=1705536000&amp;v=beta&amp;t=RdR-FTOSbkiLG7DbLpzVJpjLErpl-qz_OLM7scTqxFY';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
