import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoadaed] = useState(false);
  let [forecast, setForecast] = useState(null);

  function HandleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoadaed(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "f65a1aa2260ft5fo473af7b6bb5a8b44";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

    axios.get(apiUrl).then(HandleResponse);

    return null;
  }
}
