// React imports
import React, { useState } from "react";
// Styling
import { Drawer, Button } from "antd";
// Dummy city data
import SearchBar from "./SearchBar";
import SelectedCities from "./SelectedCities";

import "./styles.css";

export default function NavContainer(props) {
  // ----- State -----
  // Drawer visibility
  const [visible, setVisible] = useState(false);
  // Selected cities
  const [selectedCities, setSelectedCities] = useState([]);
  // Store search input as string

  // Opens drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Closes drawer
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar">
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="City Search"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <SearchBar />
        <br />
        <br />
        <br />
        <br />

        <SelectedCities />
      </Drawer>
    </div>
  );
}
