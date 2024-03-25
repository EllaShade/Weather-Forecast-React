import React, { useState } from "react";
import Weather from "./Weather.js";

import CLEAR_DAYImg from "./images/CLEAR_DAY.jpg";
import CLEAR_NIGHTImg from "./images/CLEAR_NIGHT.jpg";
import CLOUDYImg from "./images/CLOUDY.jpg";
import FOGImg from "./images/FOG.jpg";
import PARTLY_CLOUDY_DAYImg from "./images/PARTLY_CLOUDY_DAY.jpg";
import PARTLY_CLOUDY_NIGHTImg from "./images/PARTLY_CLOUDY_NIGHT.jpg";
import RAINImg from "./images/RAIN.jpg";
import SNOWImg from "./images/SNOW.jpg";

import "./App.css";

const imageMapping = {
  "01d": CLEAR_DAYImg,
  "01n": CLEAR_NIGHTImg,
  "02d": PARTLY_CLOUDY_DAYImg,
  "02n": PARTLY_CLOUDY_NIGHTImg,
  "03d": PARTLY_CLOUDY_DAYImg,
  "03n": PARTLY_CLOUDY_NIGHTImg,
  "04d": CLOUDYImg,
  "04n": CLOUDYImg,
  "09d": RAINImg,
  "09n": RAINImg,
  "10d": RAINImg,
  "10n": RAINImg,
  "11d": RAINImg,
  "11n": RAINImg,
  "13d": SNOWImg,
  "13n": SNOWImg,
  "50d": FOGImg,
  "50n": FOGImg,
};

export default function App() {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState(null);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageMapping[currentWeatherIcon]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
