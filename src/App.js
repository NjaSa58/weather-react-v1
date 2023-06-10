import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Zagreb" />
      </header>
      <fotter>
        <p>
          This project has been created by Sanja Plazonić, and it is {""}
          <a href="https://github.com/NjaSa58/weather-react-v1" target="_blank">
            open-sourced on GitHub.
          </a>
        </p>
      </fotter>
    </div>
  );
}

export default App;
