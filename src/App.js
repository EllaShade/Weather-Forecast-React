import React, { useState } from "react";
import Weather from "./Weather.js";
import WeatherBackground from "./WeatherBackground.js";
import imagePath from "./WeatherBackground.js";

import "./App.css";

export default function App() {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <WeatherBackground currentWeatherIcon={currentWeatherIcon} />
      <div className="container">
        <Weather
          defaultCity="Zurich"
          setCurrentWeatherIcon={setCurrentWeatherIcon}
        />
      </div>
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
      </footer>
    </div>
  );
}
