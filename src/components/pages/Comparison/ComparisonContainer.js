//Library imports
import React from "react";
import RenderComparison from "./RenderComparison";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function ComparisonContainer({ selectedCities, cityDetails }) {
  const citiesData = selectedCities.map(({ id }) => cityDetails[id]);
  return citiesData.length < 2 ? (
    <Redirect to="/" />
  ) : (
    <div className="comparison-container">
      <RenderComparison citiesData={citiesData} />
    </div>
  );
}
const mapState = ({ cities: { selectedCities, cityDetails } }, props) => ({
  ...props,
  selectedCities,
  cityDetails
});
export default connect(mapState, null)(ComparisonContainer);
