import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='row'>
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let units = "metrics";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
