import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 1.8 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit" id="toC">
          °C {" "}
          <a href="/" onClick={showFahrenheit}>
           | °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit" id="toF">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>{" "}
           °F
        </span>
      </div>
    );
  }
}