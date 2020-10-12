import React from "react";
import ComparisonCard from "./ComparisonCard";
import ComparisonGraphs from "./ComparisonGraphs";

export default function RenderComparison({ citiesData }) {
  return (
    <div className="comparison-container">
      <div className="card-container">
        {citiesData.map(city => {
          return (
            // This check for city.name prevents a bug
            // where a card will be created before any data is present
            // and will persist as an empty loading card after data has been loaded
            city.name && (
              <ComparisonCard city={city} key={city.name + city.state} />
            )
          );
        })}
      </div>
      <ComparisonGraphs citiesData={citiesData} />
    </div>
  );
}
