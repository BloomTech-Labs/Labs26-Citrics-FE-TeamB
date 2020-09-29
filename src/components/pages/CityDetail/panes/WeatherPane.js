import React from "react";
import humidity from "../../../../styles/icons/humidity-96.png";
import summer from "../../../../styles/icons/summer-96.png";
import winter from "../../../../styles/icons/winter-96.png";
import feelsLike from "../../../../styles/icons/feelsLike-96.png";

export default function WeatherPane({ weather, currentWeather }) {
  console.log(weather);
  return (
    <div className="weather-pane-container">
      <div className="first-box">
        <div className="weather-metric-parent">
          <img className="weather-icon" src={summer} alt="Sun icon" />
          <h6>Summer High: {weather.summer_maxtempF_mean}°</h6>
        </div>
        <div className="weather-metric-parent">
          <img className="weather-icon" src={winter} alt="Snowflake icon" />
          <h6>Winter Low: {weather.winter_mintempF_mean}°</h6>
        </div>
        <div className="weather-metric-parent">
          <img
            className="weather-icon"
            src={humidity}
            alt="Three vertical zigzag lines to represent humidity icon"
          />
          <h6>Humidity: {weather.summer_humidity_mean}%</h6>
        </div>
      </div>
      {currentWeather && (
        <div className="second-box">
          <div className="weather-metric-parent">
            <img
              className="weather-icon"
              src={feelsLike}
              alt="Thermometer icon"
            />
            <h6>
              Today's weather: {Math.round(currentWeather.current.feels_like)}°
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}
