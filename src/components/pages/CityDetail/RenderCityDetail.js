import React from "react";
import LineGraph from "../../common/Graphs/LineGraph";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <h3>
        City: {city.name}, {city.state}
      </h3>
      <p>Population: {city.population}</p>
      <p>Rental Prices: ${city.rent}</p>
      <p>Weather: {city.weather}</p>
      <LineGraph state={city.state} />
    </div>
  );
}
