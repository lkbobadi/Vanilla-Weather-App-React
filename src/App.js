import "./App.css";
import React, { useState } from "react";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import CelsiusFarenheitSet from "./CelsiusFarenheitSet";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("New York");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function getWeather(response) {
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
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
    console.log(apiUrl);
    axios.get(apiUrl).then(getWeather);
  }

  if (loaded) {
    return (
      <div className='container mx-auto'>
        <div className='row g-0 mx-auto'>
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
                  <FormattedDay date={weatherData.date} />
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
                <WeatherIcon code={weatherData.icon} size={80} />
              </div>
              <div className='temperature'>
                <CelsiusFarenheitSet celsius={weatherData.temperature} />
              </div>
            </div>
            <div className='WeatherForecast'>
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            <div className='weather-extra-information  mb-5'>
              <li>Country: {weatherData.country}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
