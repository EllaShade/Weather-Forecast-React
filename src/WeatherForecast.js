import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  console.log(props);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">FRI</div>
            <div>
              <WeatherIcon code="01n" size={45} />
            </div>{" "}
            <div className="WeatherForecastTemperature">
              <span className="WeatherForecastTemperatureMax">
                {forecastData[0].temp.max}°
              </span>
              / <span className="WeatherForecastTemperatureMin">5°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ad793a6d772939c31783de5822791acf`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#FFFFFF"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
