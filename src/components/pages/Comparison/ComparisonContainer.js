//Library imports
import React from "react";
import RenderComparison from "./RenderComparison";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";

function ComparisonContainer({
  getCityDetails,
  cityDetails,
  location: { search }
}) {
  const queryParams = new URLSearchParams(search);
  const selectedCities = Array.from(queryParams.values());
  console.log(selectedCities);
  const citiesData = selectedCities.map(({ id }) => cityDetails[Number(id)]);
  console.log(citiesData);
  return citiesData.length < 2 ? (
    <Redirect to="/" />
  ) : (
    <div className="comparison-container">
      <RenderComparison citiesData={citiesData} />
    </div>
  );
}
const mapState = ({ cities: { cityDetails } }, props) => ({
  ...props,
  cityDetails
});
export default connect(mapState, { getCityDetails })(ComparisonContainer);
