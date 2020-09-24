import React from "react";
import humidity from "../../../../styles/icons/humidity-96.png";
import summer from "../../../../styles/icons/summer-96.png";
import winter from "../../../../styles/icons/winter-96.png";

export default function WeatherPane({ weather, currentWeather }) {
  return (
    <div className="weather-pane-container">
      <h4>Weather</h4>
      <div className="weather-metric-parent">
        <img className="weather-icon" src={summer} alt="Sun icon" />
        <h6>Average High: {weather.summer_maxtempF_mean}°</h6>
      </div>
      <div className="weather-metric-parent">
        <img className="weather-icon" src={winter} alt="Snowflake icon" />
        <h6>Average Low: {weather.winter_mintempF_mean}°</h6>
      </div>
      <div className="weather-metric-parent">
        <img
          className="weather-icon"
          src={humidity}
          alt="Three vertical zigzag lines to represent humidity icon"
        />
        <h6>Humidity: {currentWeather.current.humidity}%</h6>
      </div>
    </div>
  );
}
