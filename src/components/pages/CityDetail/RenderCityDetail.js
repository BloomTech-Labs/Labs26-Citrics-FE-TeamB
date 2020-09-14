import React from "react";

export default function RenderCityDetail({ city }) {
  return (
    <div>
      <p>{city.city}</p>
      <p>{city.state}</p>
      <p>{city.rental}</p>
      <p>{city.pop}</p>
      <p>{city.weather}</p>
    </div>
  );
}
