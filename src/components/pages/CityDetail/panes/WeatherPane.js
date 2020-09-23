import React from "react";

export default function WeatherPane({ weather }) {
  // return <>Weather: {weather.summer_maxtempF_mean}</>;
  return <p>Weather: {weather.summer_maxtempF_mean}</p>;
}
