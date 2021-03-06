import React from "react";
import Icon from "./Icon";

export default function ForecastDisplay(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="forecastDisplay">
      <h6 id="hours-forceast">{hours()}</h6>
      <Icon code={props.data.weather[0].icon} />
      <h6>{temperature()}</h6>
    </div>
  );
}