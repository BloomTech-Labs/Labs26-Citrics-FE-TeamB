import React from "react";
import GraphContainer from "../../common/GraphContainer";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <p>City: {citySelect.name}</p>
      <p> State: {citySelect.state}</p>
      <p>Rent: ${citySelect.rent}</p>
      <p>Population: {citySelect.population}</p>
      <p>Weather: {citySelect.weather}</p>
      <GraphContainer state={citySelect.state} />
    </div>
  );
}
