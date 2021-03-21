import "./App.css";
import axios from 'axios';
import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState(null);
  const [info, setInfo] = useState(null);

  function displayInfo(response) {
    let iconURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setInfo(
      <ul className="info-list">
        <li className="temperature">{Math.round(response.data.main.temp)}°C</li>
        <img src={iconURL} alt="icon" />
         <li className="description">{response.data.weather[0].main}</li>
        <li>Feels like: {Math.round(response.data.main.feels_like)}°C</li>
              <li className="humidity">Humidity: {response.data.main.humidity}%</li>
              <li className="wind">Wind: {Math.round(response.data.wind.speed)} km/h</li>
            
  
      </ul>

    );
  }

  function handleCity(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2fb16a57cb4b18c7686f92b2ebb6446f&units=metric`;
    axios.get(apiUrl).then(displayInfo);
  }

  function submitCity(event) {
    setCity(event.target.value);  
  }

       
  return (
    <div className="Search">
          <h1 id="city-name">
        For which city would you like to get the weather?
          </h1>
         
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
      {info}
    </div>
  );
}