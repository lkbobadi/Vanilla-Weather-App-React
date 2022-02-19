import "./App.css";
import React, { useState } from "react";
import FormattedWeather from "./FormattedWeather";
import FormattedTime from "./FormattedTime";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function App() {
  const [city, setCity] = useState("New York");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function getWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
    setLoaded(true);
  }
  function submitCity(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(getWeather);
  }

  if (loaded) {
    return (
      <div className='container'>
        <div class='g-0'>
          <div className='weather-app mt-3'>
            <form className='search-weather' onSubmit={submitCity}>
              <input
                text='search'
                id='search'
                placeholder='Search for a city...'
                onChange={updateCity}
              />
              <input type='submit' value='Search' id='submit' />
            </form>
            <div className='row'>
              <ul className='today-extra-info col-1'>
                <li>
                  <FormattedWeather date={weatherData.date} />
                </li>
                <li>{weatherData.description}</li>
                <li>
                  <FormattedTime date={weatherData.date} />
                </li>
              </ul>
            </div>
            <div className='main-information'>
              <h1 className='city'>{city}</h1>
              <div className='icon'>
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className='temperature'>
                {Math.round(weatherData.temperature)}°C
              </div>
              <div className='button-set'>
                <button className='celsius'>C</button>
                <button className='farenheit'>F</button>
              </div>
            </div>
            <div className='weather-extra-information  mb-5'>
              <li>Country: {weatherData.country}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </div>

            <div className='footer'>
              Open-Source by <span>Laura Bobadilla</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    submitCity();
    return "Loading...";
  }
}
