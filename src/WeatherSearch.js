import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import DateTime from "./DateTime";
import "./App.css";

export default function WeatherSearch(props) {
  const [info, setInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function displayInfo(response) {
      setInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      feelslike: response.data.main.feels_like,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

   let search = () => {
    const apiKey = "2fb16a57cb4b18c7686f92b2ebb6446f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayInfo);
  }

  let handleCity = (event) => {
    event.preventDefault();
    search();
  }

  function submitCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  
  if (info.ready) {
    return (
      <div className="Search">
          <form id="location-form" onSubmit={handleCity}>
          <input
            type="text"
            id="city-input"
            placeholder="Search a city..."
            autocomplete="off"
            autofocus="on"
            onChange={submitCity}
          />
          <input id="button" type="submit" value="🌸" />
        </form>
        <WeatherInfo data={info} />
      <div className="forecastTitle">
      <h5>Forecast</h5>
      </div>
        <Forecast city={info.city} />
      </div>
    );
  } else {
    search();
    return "Loading..."
  }
}
