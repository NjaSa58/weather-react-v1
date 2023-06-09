import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zagreb" />
        <footer>
          <p>
            This project has been created by Sanja Plazonić, and it is {""}
            <a
              href="https://github.com/NjaSa58/weather-react-v1"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub.
            </a>{" "}
            and{" "}
            <a
              href="https://stunning-manatee-3b74e7.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
