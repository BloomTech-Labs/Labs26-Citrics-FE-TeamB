import React from "react";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <p>City: {city.name}</p>
      <p> State: {city.state}</p>
      <p>Rent: {city.rental}</p>
      <p>Population: {city.pop}</p>
      <p>Weather: {city.weather}</p>
    </div>
  );
}
