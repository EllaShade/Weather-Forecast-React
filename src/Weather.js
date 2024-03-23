import React, { useState } from "react";
import axios from "axios";
import WeatherBackground from "./WeatherBackground";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo.js";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    function getFormattedTimezone(offsetSeconds) {
      const hours = offsetSeconds / 3600;
      const sign = hours > 0 ? "+" : "-";
      const absHours = Math.abs(hours);
      const tzHours = String(Math.floor(absHours)).padStart(2, "0");
      const tzMinutes = String(Math.floor((absHours % 1) * 60)).padStart(
        2,
        "0"
      );
      return `GMT${sign}${tzHours}:${tzMinutes}`;
    }

    const timezoneOffset = response.data.timezone;
    const formattedTimezone = getFormattedTimezone(timezoneOffset);

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      timezone: formattedTimezone,
    });
  }

  function search() {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather weather-background">
        <WeatherBackground currentWeatherIcon={weatherData.icon} />
        <form onSubmit={handleSubmit}>
          <div className="row search-inputs">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
