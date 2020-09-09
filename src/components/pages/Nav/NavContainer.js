// React imports
import React, { useState } from "react";
// Styling
import { Drawer, Button } from "antd";
// Dummy city data
import { cities } from "./cityList";

export default function NavContainer(props) {
  //import antdesign for drawer✅
  //implement drawer for navbar feature✅
  //create dummy data to test✅
  //create search bar form✅
  //select cities
  //create state so button changes from 'Search' to Compare' when more than one is selected

  // ----- State -----
  // Drawer visibility
  const [visible, setVisible] = useState(false);
  // Selected cities
  const [selectedCities, setSelectedCities] = useState([]);

  // Opens drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Closes drawer
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer" //rename!
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <input type="text" placeholder="Enter City.."></input>
        <button>Search</button>
        <br />
        <br />
        <br />
        <br />

        {/* Later implement this to show up once a city is selected 
          Create option to X out and unselect city*/}
        <h4>Selected Cities</h4>
        {/* If selectedCities is empty, display string. Else display state data */}
        {selectedCities.length === 0
          ? "Please select a city"
          : selectedCities.map(item => <p>{item}</p>)}
      </Drawer>
    </>
  );
}
