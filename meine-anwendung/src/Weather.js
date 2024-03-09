import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row search-inputs">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <main>
          <h1>{weatherData.city}</h1>
          <div className="weather-info-1">
            <ul>
              <li>Timezone</li>
              <li>{weatherData.Date}, 20:00</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row grid-2-columns">
            <div className="col-6 icon-current-weather">
              <img src={weatherData.icon} alt={weatherData.description} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6 weather-info-2">
              <ul>
                <li>
                  Humidity:{" "}
                  <span className="weather-number">
                    {weatherData.humidity}%
                  </span>
                </li>
                <li>
                  Wind:{" "}
                  <span className="weather-number">{weatherData.wind}km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "05cd0a2o385623d1bd0t06fa44dfb1d2";
    let city = "Zurich";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
