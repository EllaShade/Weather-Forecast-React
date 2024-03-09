import React from "react";

import "./Weather.css";

export default function Weather() {
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
        <h1>Bern</h1>
        <div className="weather-info-1">
          <ul>
            <li>Timezone</li>
            <li>Friday, 20:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
        <div className="row grid-2-columns">
          <div className="col-6 icon-current-weather">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <span className="temperature"> 7</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6 weather-info-2">
            <ul>
              <li>
                Precipitation:<span className="weather-number">15%</span>
              </li>
              <li>
                Humidity: <span className="weather-number">72%</span>
              </li>
              <li>
                Wind: <span className="weather-number">13km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
