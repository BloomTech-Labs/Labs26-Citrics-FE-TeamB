import React from "react";
import { CityDetailPage } from "../CityDetail";
import LoadingComponent from "../../common/LoadingComponent";

export default function RenderCityPage({ city, isLoading }) {
  return (
    <div className="city-page" style={{ background: "#0062ad" }}>
      {isLoading ? (
        <LoadingComponent message={"Retrieving City Data... "} />
      ) : (
        <CityDetailPage city={city} />
      )}
    </div>
  );
}
