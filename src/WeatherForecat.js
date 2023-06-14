import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img src={props.icon} alt={props.icon} />
          </div>
          <span className="WeatherForecast-max">19°</span>
          <span className="WeatherForecast-min">13°</span>
        </div>
      </div>
    </div>
  );
}
