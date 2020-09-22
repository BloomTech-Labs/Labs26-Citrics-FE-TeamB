import React from "react";
// TODO: Replace these with better icons
import {
  TeamOutlined,
  CloudOutlined,
  HomeOutlined,
  CarOutlined,
  PieChartOutlined,
  LineChartOutlined
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
      {/* Each DetailPane expects an Icon component, 
        graphData to help it render a graph of that info, 
        and a specific type of pane as a child component */}
      <DetailPane
        Icon={TeamOutlined}
        GraphIcon={LineChartOutlined}
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
      <DetailPane Icon={CloudOutlined} GraphIcon={LineChartOutlined}>
        <WeatherPane weather={city.weather} />
      </DetailPane>
      <DetailPane Icon={HomeOutlined} GraphIcon={LineChartOutlined}>
        <HousingPane rent={city.rent} />
      </DetailPane>
      <DetailPane Icon={CarOutlined} GraphIcon={PieChartOutlined}>
        <JobsPane jobs={city.jobs} />
      </DetailPane>
    </div>
  );
}
