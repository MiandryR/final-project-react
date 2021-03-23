import React from "react";
import Icon from "./Icon";
import DateTime from "./DateTime";

export default function WeatherInfo(props) {
  return(
    < ul className="info-list">
      <DateTime date={props.data.date} />
      <hr/>
      <h2>{props.data.icon}</h2>
      <li className="temperature">{Math.round(props.data.temperature)}°C</li>
      <Icon code={props.data.icon} />
      < li className="description" > {props.data.description}</li >
      <li><strong>Feels like :</strong> {Math.round(props.data.feelslike)}°C</li>
      <li className="humidity"><strong>Humidity :</strong> {props.data.humidity}%</li>
      <li className="wind"><strong>Wind :</strong> {Math.round(props.data.wind)} km/h</li>
    </ul >
  );
}