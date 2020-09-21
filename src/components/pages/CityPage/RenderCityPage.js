import React from "react";
import { CityDetailPage } from "../CityDetail";
import LoadingComponent from "../../common/LoadingComponent";

export default function RenderCityPage({ city, isLoading }) {
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
