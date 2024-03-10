import React from "react";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/EllaShade"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ella Graf
            </a>{" "}
            and is on
            <a
              href="https://github.com/EllaShade/Weather-App-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            and hosted on
            <a
              href="https://app.netlify.com/sites/weatherforecastapp-react/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Netlify
            </a>
            .
          </p>
          <p>The time does not work right. But I can´t solve the problem!!</p>
        </footer>
      </div>
    </div>
  );
}
