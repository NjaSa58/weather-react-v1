import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function HandleResponse(response) {
    console.log(response);
  }

  let apiKey = "f65a1aa2260ft5fo473af7b6bb5a8b44";
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(HandleResponse);

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
