import React from "react";
import { CityDetailPage } from "../CityDetail";

export default function RenderCityPage({ city }) {
  return (
    <div className="city-page">
      <CityDetailPage city={city} />
    </div>
  );
}
