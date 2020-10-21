// Library imports
import React from "react";
import { connect } from "react-redux";
import { removeCity, closeDrawer } from "../../../state/actions";
import { useHistory } from "react-router-dom";
import RenderSelectedCities from "./RenderSelectedCities";
import { mobileCutoff } from "../../common/constants";

function SelectedCitiesContainer({ selectedCities, removeCity, closeDrawer }) {
  let history = useHistory();

  // The action handler is attached to the parent div
  // which stores the id in a data- attribute
  const removeFromSelectedCities = ({ currentTarget: { attributes } }) => {
    // Optionals here ensure we fail gracefully if there is an issue
    const cityId = attributes?.["data-id"]?.nodeValue;
    cityId && removeCity(cityId);
  };

  const openDetailPage = width => {
    if (width < mobileCutoff) {
      closeDrawer();
    }
    history.push(`/city-detail-page/${selectedCities[0].id}`);
  };

  const openComparisonPage = width => {
    // Helper function to encode selectedCities into a query string
    const queryString = cities => {
      // Initialize the string
      let str = "?";
      let i;
      // Add every city but the last one to the string followed by an '&'
      for (i = 0; i < cities.length - 1; i++) {
        str += `c${i}=${cities[i].id}&`;
      }
      // Add the last city to the string without the trailing '&'
      str += `c${i}=${cities[i].id}`;
      return str;
    };
    if (width < mobileCutoff) {
      closeDrawer();
    }
    history.push(`/comparison-page${queryString(selectedCities)}`);
  };

  return (
    <RenderSelectedCities
      selectedCities={selectedCities}
      removeFromSelectedCities={removeFromSelectedCities}
      openComparisonPage={openComparisonPage}
      openDetailPage={openDetailPage}
    />
  );
}
const mapPropsToState = (
  { cities: { selectedCities, cityDetails } },
  props
) => ({
  ...props,
  selectedCities,
  cityDetails
});
export default connect(mapPropsToState, { removeCity, closeDrawer })(
  SelectedCitiesContainer
);
