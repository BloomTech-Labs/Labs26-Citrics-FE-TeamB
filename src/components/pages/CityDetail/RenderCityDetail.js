import { Skeleton } from "antd";
import React from "react";
import { HousingPane, JobsPane, PopulationPane, WeatherPane } from "./panes";
export default function RenderCityDetail({ city }) {
  return (
    <div className="city-detail-card">
      {city?.image ? (
        <div
          className="custom-image-details"
          style={{ backgroundImage: `url(${city.image})` }}
        >
          <img
            alt={`Thumbnail for ${city.name}, ${city.state}`}
            src={city.image}
          />
        </div>
      ) : (
        <Skeleton.Image active className="custom-image-details" />
      )}

      <h3 className="one-render-h3">
        {city?.name ? (
          `${city.name}, ${city.state}`
        ) : (
          <Skeleton active title={{ width: "30%" }} paragraph={false} />
        )}
      </h3>
      <div className="pane-container">
        <WeatherPane
          weather={city.weather}
          currentWeather={city.currentWeather}
        />
        <HousingPane rent={city.rent} />
      </div>
      <JobsPane jobs={city.jobs} unemployment={city.unemployRate} />
      <PopulationPane population={city.population} />
    </div>
  );
}
