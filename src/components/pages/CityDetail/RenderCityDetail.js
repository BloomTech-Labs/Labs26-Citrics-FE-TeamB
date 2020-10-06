import React from "react";
import { HousingPane, JobsPane, PopulationPane, WeatherPane } from "./panes";
export default function RenderCityDetail({ city }) {
  return (
    <div className="city-detail-card">
      <h3 className="one-render-h3">
        {city.name}, {city.state}
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
