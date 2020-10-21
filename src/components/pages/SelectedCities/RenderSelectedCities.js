import React from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import useWidth from "../../../hooks/useWidth";
export default function RenderSelectedCities({
  selectedCities,
  removeFromSelectedCities,
  openComparisonPage,
  openDetailPage
}) {
  let width = useWidth();

  return (
    <div className="selected-cities">
      <h4 className="select-city-title">Selected Cities</h4>
      {/* check whether or not cities have been selected */}
      {selectedCities.length === 0 ? (
        <div>Please select a city</div>
      ) : (
        selectedCities.map(({ name, state, id }) => (
          <div key={id} data-id={id} onClick={removeFromSelectedCities}>
            {`${name}, ${state} `}
            &nbsp; <CloseCircleFilled className="remove-city" />
          </div>
        ))
      )}

      <br />
      {/* Dynamic Button that responds to how many cities are selected */}
      <div className="btn-container">
        {selectedCities.length > 1 ? (
          <Button
            className="search-btn"
            type="primary"
            onClick={() => openComparisonPage(width)}
          >
            Compare
          </Button>
        ) : (
          <Button
            className="search-btn"
            type="primary"
            disabled={selectedCities.length === 0}
            onClick={() => openDetailPage(width)}
          >
            Details
          </Button>
        )}
      </div>
    </div>
  );
}
