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
        <PopulationPane city={city} />
      </DetailPane>
      <DetailPane Icon={CloudOutlined}>
        <WeatherPane city={city} />
      </DetailPane>
      <DetailPane Icon={HomeOutlined}>
        <HousingPane city={city} />
      </DetailPane>
      <DetailPane Icon={CarOutlined}>
        <JobsPane city={city} />
      </DetailPane>
    </div>
    // <div>
    //   <h3 className="one-render-h3">
    //     City: {city.name}, {city.state}
    //   </h3>
    //   <p className="one-render-p">
    //     Population: {city.population.data.total_pop}
    //   </p>
    //   <p className="one-render-p">Rental Prices: ${city.rent.studio}</p>
    //   <p className="one-render-p">
    //     Weather: {city.weather.summer_maxtempF_mean}
    //   </p>

    //   {/* Unemployment Graph */}
    //   <Graph
    //     dataSet={{
    //       state: city.state,
    //       plotX: city.unemployRate.x,
    //       plotY: city.unemployRate.y,
    //       graphName: "Unemployment Rate",
    //       type: "line"
    //     }}
    //   />
    //   {/* Population Graph */}
    // <Graph
    // dataSet={{
    //   state: city.state,
    //   plotX: JSON.parse(city.population.viz).data[0].x,
    //   plotY: JSON.parse(city.population.viz).data[0].y,
    //   graphName: "Population Trend",
    //   type: "line"
    // }}
    // />
    // </div>
  );
}
