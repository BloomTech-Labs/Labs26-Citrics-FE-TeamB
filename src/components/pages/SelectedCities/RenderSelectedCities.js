import React from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";

export default function RenderSelectedCities({
  selectedCities,
  removeFromSelectedCities,
  openComparisonPage,
  openDetailPage
}) {
  return (
    <div className="selected-cities">
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

      <br />
      {/* Dynamic Button that responds to how many cities are selected */}
      <div className="btn-container">
        {selectedCities.length > 1 ? (
          <Button type="primary" onClick={openComparisonPage}>
            Compare
          </Button>
        ) : (
          <Button
            type="primary"
            disabled={selectedCities.length === 0}
            onClick={openDetailPage}
          >
            Details
          </Button>
        )}
      </div>
    </div>
  );
}
