import React from "react";
// TODO: Replace these with better icons
import {
  TeamOutlined,
  CloudOutlined,
  HomeOutlined,
  CarOutlined
} from "@ant-design/icons";
import {
  DetailPane,
  HousingPane,
  JobsPane,
  PopulationPane,
  WeatherPane
} from "./panes";
export default function RenderCityDetail({ city }) {
  return (
    <div className="city-detail-card">
      <h3 className="one-render-h3">
        {city.name}, {city.state}
      </h3>
      <DetailPane
        Icon={TeamOutlined}
        graphData={{
          state: city.state,
          plotX: JSON.parse(city.population.viz).data[0].x,
          plotY: JSON.parse(city.population.viz).data[0].y,
          graphName: "Population Trend",
          type: "line"
        }}
      >
        <PopulationPane population={city.population} />
      </DetailPane>
      <DetailPane Icon={CloudOutlined}>
        <WeatherPane weather={city.weather} />
      </DetailPane>
      <DetailPane Icon={HomeOutlined}>
        <HousingPane rent={city.rent} />
      </DetailPane>
      <DetailPane Icon={CarOutlined}>
        <JobsPane jobs={city.jobs} />
      </DetailPane>
    </div>
  );
}
