import React from "react";
import Icon from "./Icon";
import DateTime from "./DateTime";
import Conversion from "./Conversion";

export default function WeatherInfo(props) {
  return(
    < ul className="info-list">
      <DateTime date={props.data.date} />
      <hr />
      <h2>{props.data.city}</h2>
      <Conversion celsius={props.data.temperature}/>
      <Icon code={props.data.icon} />
      <li className="description" > {props.data.description}</li >
      <li><strong>Feels like :</strong> {Math.round(props.data.feelslike)}°C</li>
      <li className="humidity"><strong>Humidity :</strong> {props.data.humidity}%</li>
      <li className="wind"><strong>Wind :</strong> {Math.round(props.data.wind)} km/h</li>
    </ul >
  );
}