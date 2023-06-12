import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li class="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-2">
            <div className="weatherIcon">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="col-2">
            <div className>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-8">
            <ul className="weatherDescription">
              <li>Feels like:{Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f65a1aa2260ft5fo473af7b6bb5a8b44";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
