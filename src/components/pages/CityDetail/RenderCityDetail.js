import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GraphContainer from "../../common/GraphContainer";

export default function RenderCityDetail({ city }) {
  // This piece of code will determine whether the selected city will come from a modal or is pushed through route
  const location = useLocation();
  const [citySelect, setCity] = useState(city || location.state);
  useEffect(() => {
    setCity(city || location.state);
  }, [location, city]);

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
