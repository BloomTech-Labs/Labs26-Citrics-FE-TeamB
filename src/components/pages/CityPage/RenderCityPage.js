import React from "react";
import { CityDetailPane } from "../../common/CityDetail";

export default function RenderCityPage({ city }) {
  return (
    <div className="city-page">
      <CityDetailPane city={city} />
    </div>
  );
}
