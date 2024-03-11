import React from "react";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="weather-info-1">
        <ul>
          <li>Timezone</li>
          <li>
            <FormateDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row grid-2-columns">
        <div className="col-6 current-weather ">
          <div className="icon-current-weather">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 weather-info-2">
          <ul>
            <li>
              Humidity:{" "}
              <span className="weather-number">{props.data.humidity}%</span>
            </li>
            <li>
              Wind:{" "}
              <span className="weather-number">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
