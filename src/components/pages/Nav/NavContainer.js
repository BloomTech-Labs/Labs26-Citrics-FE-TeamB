// Library imports
import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";
import { Drawer, Button } from "antd";

//Subcomponents
import SearchBar from "./SearchBar";
import SelectedCities from "./SelectedCities";

//Styling
import "./styles.css";

function NavContainer({ toggleDrawer, isOpen }) {
  // Opens drawer
  const drawerWidth = 256;
  const showDrawer = () => {
    toggleDrawer();
  };

  // Closes drawer
  const onClose = () => {
    toggleDrawer();
  };

  return (
    <div className="navbar">
      <Button
        className={`floating-visibility-button${isOpen ? " open" : ""}`}
        type="ghost"
        onClick={showDrawer}
      >
        {isOpen ? "<" : ">"}
      </Button>
      <Drawer
        title="City Search"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={isOpen}
        mask={false}
        width={drawerWidth}
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
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
