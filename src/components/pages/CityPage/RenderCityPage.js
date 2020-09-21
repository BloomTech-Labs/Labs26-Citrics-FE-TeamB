import React from "react";
import { CityDetailPage } from "../CityDetail";
import LoadingComponent from "../../common/LoadingComponent";

export default function RenderCityPage({ isLoading, city }) {
  return (
    <div className="city-page">
      {!isLoading ? (
        <CityDetailPage city={city} />
      ) : (
        <LoadingComponent message={"Retrieving City Data... "} />
      )}
    </div>
  );
}
