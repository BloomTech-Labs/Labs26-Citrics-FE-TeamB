import React from "react";

import RenderCityDetail from "./RenderCityDetail";

export default function CityDetailContainer({ city, insideModal }) {
  return (
    <div className="city-details" data-testid="city-details">
      <RenderCityDetail city={city} insideModal={insideModal} />
    </div>
  );
}
