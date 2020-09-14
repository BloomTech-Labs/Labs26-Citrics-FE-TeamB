import React from "react";

import RenderCityDetail from "./RenderCityDetail";

export default function CityDetailContainer({ city }) {
  return (
    <div>
      <RenderCityDetail city={city} />
    </div>
  );
}
