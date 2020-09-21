import React from "react";
import LineGraph from "../../common/Graphs/LineGraph";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <p>City: {city.name}</p>
      <p>State: {city.state}</p>
      <p>Rent: ${city.rent}</p>
      <p>Population: {city.population}</p>
      <p>Weather: {city.weather}</p>
      <LineGraph state={city.state} />
    </div>
  );
}
