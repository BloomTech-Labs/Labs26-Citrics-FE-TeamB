import React from "react";
import GraphContainer from "../../common/GraphContainer";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <h3>
        City: {city.name}, {city.state}
      </h3>
      <p>Population: {city.population}</p>
      <p>Rental Prices: ${city.rent}</p>
      <p>Weather: {city.weather}</p>
      <GraphContainer state={city.state} />
    </div>
  );
}
