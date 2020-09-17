// Library imports
import React from "react";
import { connect } from "react-redux";
import { removeCity } from "../../../state/actions";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useHistory } from "react-router-dom";


function SelectedCities({ selectedCities, removeCity, cityDetails }) {
  // Router hook to push to different routes
  let history = useHistory();
  // The action handler is attached to the parent div
  // which stores the id in a data- attribute
  const removeFromSelectedCities = ({ currentTarget: { attributes } }) => {
    // Optionals here ensure we fail gracefully if there is an issue
    const cityId = attributes?.["data-id"]?.nodeValue;
    cityId && removeCity(cityId);
  };
  // Hide the component if there are no cities to show
  return selectedCities.length === 0 ? (
    <div />
  ) : (
    <>
      {/* TODO: Replace this with Ant Design components */}
      <h4>Selected Cities</h4>
      {selectedCities.map(({ name, state, id }) => (
        <div key={id} data-id={id} onClick={removeFromSelectedCities}>
          {`${name}, ${state} `}
          &nbsp; <CloseCircleFilled className="remove-city" />
        </div>
      ))}

      {/* Dynamic Button that responds to how many cities are selected */}
      <div className="btn-container">
        {selectedCities.length > 1 ? (
          <Button
            type="primary"
            onClick={() => history.push("/comparison-page")}
          >
            Compare
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() =>
              history.push({
                pathname: "/city-detail-page",
                state: cityDetails[selectedCities[0].id]
              })
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
export default connect(mapPropsToState, { removeCity })(SelectedCities);
