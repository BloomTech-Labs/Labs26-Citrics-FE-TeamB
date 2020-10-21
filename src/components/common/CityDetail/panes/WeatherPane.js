import React from "react";
//icons
import weatherIcon from "../../../../styles/icons/weather-96.png";
import humidity from "../../../../styles/icons/humidity-96.png";
import summer from "../../../../styles/icons/summer-96.png";
import winter from "../../../../styles/icons/winter-96.png";
import feelsLike from "../../../../styles/icons/feelsLike-96.png";
import LoadingSkeleton from "../../LoadingSkeleton";

export default function WeatherPane({ weather, currentWeather }) {
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <img
            className="main-weather-icon"
            src={weatherIcon}
            alt="Weather icon featuring sun, storm cloud, and rain"
          />
          <h2>Weather:</h2>
        </div>
        <div className="weather-pane-container">
          {weather ? (
            <>
              {/* This JSX fragment contains everything shown while not loading */}
              <div className="first-box">
                <div className="weather-metric-parent">
                  <img className="weather-icon" src={summer} alt="Sun icon" />
                  <h6>Summer High: {weather.summer_maxtempF_mean}°</h6>
                </div>
                <div className="weather-metric-parent">
                  <img
                    className="weather-icon"
                    src={winter}
                    alt="Snowflake icon"
                  />
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
                      Today's weather: {Math.round(currentWeather.current.temp)}
                      °
                    </h6>
                  </div>
                </div>
              )}
            </>
          ) : (
            <LoadingSkeleton minWidth="400px" />
          )}
        </div>
      </div>
    </div>
  );
}
