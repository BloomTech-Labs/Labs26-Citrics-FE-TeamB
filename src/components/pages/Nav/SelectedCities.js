import React, { useState } from "react";

export default function SelectedCities(props) {
  const [selectedCities, setSelectedCities] = useState([]);
  return (
    <>
      <h4>Selected Cities</h4>
      {/* If selectedCities is empty, display string. Else display state data */}
      {selectedCities.length === 0
        ? "Please select a city"
        : selectedCities.map(item => <p>{item}</p>)}
    </>
  );
}
