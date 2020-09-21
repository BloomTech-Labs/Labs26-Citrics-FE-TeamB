import React from "react";
import GraphContainer from "../../common/Graphs/GraphContainer";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <p>City: {city.name}</p>
      <p>State: {city.state}</p>
      <p>Rent: ${city.rent}</p>
      <p>Population: {city.population}</p>
      <p>Weather: {city.weather}</p>
      <GraphContainer state={city.state} />
    </div>
  );
}
