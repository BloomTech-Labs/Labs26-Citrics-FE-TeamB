import React from "react";

import RenderCityDetail from "./RenderCityDetail";

export default function CityDetailContainer({ city }) {
  return (
    <div data-testid="city-details">
      <RenderCityDetail city={city} />
    </div>
  );
}
