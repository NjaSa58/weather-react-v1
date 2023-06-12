import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li class="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-2">
          <div className="weatherIcon">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />
          </div>
        </div>
        <div className="col-2">
          <div className>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-8">
          <ul className="weatherDescription">
            <li>Feels like:{Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
