import "./App.css";
import React from "react";

export default function DateTime(props) {
  //Get DAY
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  //Get DATE
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();


return (
<h4>
    {year}
<span id="deco">🌷</span>  
 {day}, {month} {date}
<span id="deco">🌷</span>  
 {hour}:{minutes}</h4>
  );
}