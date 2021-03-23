import "./App.css";
import React, { useState } from "react";
import ForecastDisplay from "./ForecastDisplay";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="forecast col">
        <ForecastDisplay data={forecast.list[0]} />
        <ForecastDisplay data={forecast.list[1]} />
        <ForecastDisplay data={forecast.list[2]} />
        <ForecastDisplay data={forecast.list[3]} />
        <ForecastDisplay data={forecast.list[4]} />
        <ForecastDisplay data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "2fb16a57cb4b18c7686f92b2ebb6446f";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}