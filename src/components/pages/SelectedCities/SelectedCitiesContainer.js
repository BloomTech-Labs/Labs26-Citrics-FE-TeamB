// Library imports
import React from "react";
import { connect } from "react-redux";
import { removeCity } from "../../../state/actions";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function SelectedCitiesContainer({ selectedCities, removeCity, cityDetails }) {
  // Router hook to push to different routes
  let history = useHistory();
  // The action handler is attached to the parent div
  // which stores the id in a data- attribute
  const removeFromSelectedCities = ({ currentTarget: { attributes } }) => {
    // Optionals here ensure we fail gracefully if there is an issue
    const cityId = attributes?.["data-id"]?.nodeValue;
    cityId && removeCity(cityId);
  };
  // Creates a query string containing the IDs of selected cities
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
  // Hide the component if there are no cities to show
  return (
    <>
      {/* TODO: Replace this with Ant Design components */}
      <h4>Selected Cities</h4>
      {selectedCities.length === 0 ? (
        <div>No city selected</div>
      ) : (
        selectedCities.map(({ name, state, id }) => (
          <div key={id} data-id={id} onClick={removeFromSelectedCities}>
            {`${name}, ${state} `}
            &nbsp; <CloseCircleFilled className="remove-city" />
          </div>
        ))
      )}

      {/* Dynamic Button that responds to how many cities are selected */}
      <div className="btn-container">
        {selectedCities.length > 1 ? (
          <Button
            type="primary"
            onClick={() =>
              history.push(`/comparison-page${queryString(selectedCities)}`)
            }
          >
            Compare
          </Button>
        ) : (
          <Button
            type="primary"
            disabled={selectedCities.length === 0}
            onClick={() =>
              history.push(`/city-detail-page/${selectedCities[0].id}`)
            }
          >
            Details
          </Button>
        )}
      </div>
    </>
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
export default connect(mapPropsToState, { removeCity })(
  SelectedCitiesContainer
);
