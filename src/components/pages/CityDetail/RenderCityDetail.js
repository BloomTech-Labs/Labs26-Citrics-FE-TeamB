import React from "react";
import LineGraph from "../../common/Graphs/LineGraph";
import BarGraph from "../../common/Graphs/BarGraph";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <h3>
        City: {city.name}, {city.state}
      </h3>
      <p>Population: {city.population.data.total_pop}</p>
      <p>Rental Prices: ${city.rent.studio}</p>
      <p>Weather: {city.weather.summer_maxtempF_mean}</p>

      {/* Unemployment Graph */}
      <LineGraph
        state={{
          state: city.state,
          plotX: city.unemployRate.x,
          plotY: city.unemployRate.y,
          graphName: "Unemployment Rate"
        }}
      />
      {/* Population Graph */}
      <BarGraph
        city={{
          state: city.state,
          plotX: JSON.parse(city.population.viz).data[0].x,
          plotY: JSON.parse(city.population.viz).data[0].y,
          graphName: "Population Trend"
        }}
      />
    </div>
  );
}
