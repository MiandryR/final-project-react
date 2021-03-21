import "./App.css";
import React from "react";

export default function DateTime() {
    //Date & Hour
let now = new Date();
    
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

let day = days[now.getDay()];


  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
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

let year = now.getFullYear();
let month = months[now.getMonth()];
let date = now.getDate();

return (
  <span>{year} <span id="deco">🌷</span> {day}, {month} {date} <span id="deco">🌷</span> {hour}:{minutes}</span>
  
  );
}