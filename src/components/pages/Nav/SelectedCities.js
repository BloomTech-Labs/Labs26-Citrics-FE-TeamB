// Library imports
import React from "react";
import { connect } from "react-redux";
import { removeCity } from "../../../state/actions";
import { CloseCircleFilled } from "@ant-design/icons";

function SelectedCities({ selectedCities, removeCity }) {
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
    </>
  );
}
const mapPropsToState = ({ cities: { selectedCities } }, props) => ({
  ...props,
  selectedCities
});
export default connect(mapPropsToState, { removeCity })(SelectedCities);
