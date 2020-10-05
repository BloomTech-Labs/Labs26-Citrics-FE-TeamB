import { Skeleton } from "antd";
import React from "react";
import { HousingPane, JobsPane, PopulationPane, WeatherPane } from "./panes";
export default function RenderCityDetail({ city }) {
  return (
    <div className="city-detail-card">
      <h3 className="one-render-h3">
        {city?.name ? (
          `${city.name}, ${city.state}`
        ) : (
          <Skeleton active title={{ width: "30%" }} paragraph={false} />
        )}
      </h3>
      {/* <PopulationPane population={city.population} />
      <WeatherPane
        weather={city.weather}
        currentWeather={city.currentWeather}
      /> */}
      <HousingPane rent={city.rent} />
      <JobsPane jobs={city.jobs} />
    </div>
  );
}
